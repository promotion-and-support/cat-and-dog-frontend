import { useCallback } from 'react';
import { MessagesMap } from '@constants/messages';
import { RoutesMap } from '@constants/router.constants';
import { modalService } from '@services/modal.service';
import { app } from '@app/app.provider';
import { useNetWaiting } from '@hooks/useNetWaiting';
import { useNavigateTo } from '@hooks/useNavigateTo';
import { makeTgUrl } from '@utils/format.utils';

const pathToInvite = RoutesMap.NET.INVITE;
const showSuccess = () => modalService.showMessage(MessagesMap.MEMBER_INVITE_CREATE);
const showFail = () => modalService.showError(MessagesMap.MEMBER_INVITE_CREATE_FAIL);

export const useWaitingList = () => {
  const { userNet: net, bot } = app.getState();
  const waiting = useNetWaiting();
  const navigate = useNavigateTo();

  const handleClick = useCallback(
    (userId: number) => {
      app.net
        .createInviteWaiting(userId)
        .then(async (token) => {
          if (!token) return showFail();
          const url = makeTgUrl(pathToInvite, token, bot);
          await navigator.clipboard.writeText(url);
          showSuccess();
          const { tree } = app.net.state;
          const member = tree.find((m) => m.token === token);
          if (member) {
            navigate.toNet(net!).treeMember(member?.node_id);
          } else {
            navigate.toNet(net!).id();
          }
        })
        .catch(() => showFail());
    },
    [bot, navigate, net],
  );

  return { waiting, handleClick };
};
