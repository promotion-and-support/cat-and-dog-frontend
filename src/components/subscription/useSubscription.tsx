import { useCallback } from 'react';
import { IUpdateSubscription } from '@server/types/subscription.types';
// import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { OptionProps } from '@components/controls/option/option';
import { app } from '../app/app.provider';

// const showRemoveSuccess = () => modalService.showMessage(MessagesMap.ACCOUNT_DELETED);
const showSuccess = () => modalService.showMessage('Success');
// const showFail = () => modalService.showError('Fail');

export const OPTIONS: { title: string; value: IUpdateSubscription }[] = [
  { title: 'Choose option 1', value: { type: 'ON_UPDATE' } },
  { title: 'Choose option 2', value: { type: 'ONE_WEEK' } },
  { title: 'Choose option 3', value: { type: 'TWO_WEEK' } },
  { title: 'Choose option 4', value: { type: 'ONE_MONTH' } },
];

export const useSubscription = () => {
  const { subscription } = app.subscription.useState(['subscription']);
  const type = subscription?.type;

  const update: OptionProps<IUpdateSubscription>['onChange'] = useCallback((v, checked) => {
    if (!checked) {
      return;
    }
    app.subscription
      .update(v)
      .then(showSuccess)
      .catch(() => {});
  }, []);

  const remove = useCallback(() => {
    app.subscription
      .remove()
      .then(showSuccess)
      .catch(() => {});
  }, []);

  return { update, remove, type };
};
