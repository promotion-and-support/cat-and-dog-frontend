import { useCallback } from 'react';
import { IUpdateSubscription } from '@server/types/subscription.types';
// import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { OptionProps } from '@components/controls/option/option';
import { app } from '../app/app.provider';

// const showRemoveSuccess = () => modalService.showMessage(MessagesMap.ACCOUNT_DELETED);
const showSuccess = () => modalService.showMessage('Success');
// const showFail = () => modalService.showError('Fail');

export const useSubscription = () => {
  const { subscriptions } = app.subscription.useState(['subscriptions']);

  const remove = useCallback((subscription?: IUpdateSubscription) => {
    app.subscription
      .remove(subscription)
      .then(showSuccess)
      .catch(() => {});
  }, []);

  const update: OptionProps<IUpdateSubscription>['onChange'] = useCallback(
    (v, checked) => {
      if (checked) {
        app.subscription
          .update(v)
          .then(showSuccess)
          .catch(() => {});
      } else {
        remove(v);
      }
    },
    [remove],
  );

  return { update, remove, subscriptions };
};
