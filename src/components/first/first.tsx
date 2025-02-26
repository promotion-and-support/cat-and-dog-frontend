import { MessagesMap } from '@constants/messages';
import { modalService } from '@services/modal.service';
import { appBase } from '../app/app.base.provider';
import { useStyles } from './first.styles';

const showRemoveSuccess = () => modalService.showMessage(MessagesMap.ACCOUNT_DELETED);
const showSuccess = () => modalService.showMessage('Success');
const showFail = () => modalService.showError('Fail');

export const FirstComponent = () => {
  const { root, info: clsInfo } = useStyles();
  const { user } = appBase.account.useState(['user']);

  const health = () => {
    appBase.api
      .health()
      .then((data) => modalService.showMessage(data))
      .catch(() => {});
  };

  const create = () => {
    appBase.account
      .signupTg()
      .then((data) => {
        if (data) showSuccess();
        else showFail();
      })
      .catch(() => {});
  };

  const login = () => {
    appBase.account
      .login()
      .then((data) => {
        if (data) showSuccess();
        else showFail();
      })
      .catch(() => {});
  };

  const logout = () => {
    appBase.account
      .logoutOrRemove('logout')
      .then((data) => {
        if (data) showSuccess();
        else showFail();
      })
      .catch(() => {});
  };

  const remove = () => {
    appBase.account
      .logoutOrRemove('remove')
      .then((data) => {
        if (data) showRemoveSuccess();
        else showFail();
      })
      .catch(() => {});
  };

  const info = user && JSON.stringify(user, null, ' ');

  return (
    <>
      <div className={root}>
        <button onClick={health}>Check API</button>
        <button onClick={create}>Create account</button>
        <button onClick={login}>Log in</button>
        <button onClick={logout}>Log out</button>
        <button onClick={remove}>Remove account</button>
      </div>
      <div className={clsInfo}>
        <pre>{info}</pre>
      </div>
    </>
  );
};
