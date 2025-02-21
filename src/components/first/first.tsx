import { appBase } from '../app/app.base.provider';
import { useStyles } from './first.styles';

export const FirstComponent = () => {
  const { root, info: clsInfo } = useStyles();
  const s = appBase.firstService.useState(['data', 'error']);

  const health = () => {
    appBase.firstService.health().catch(() => {});
  };

  const create = () => {
    appBase.firstService.create().catch(() => {});
  };

  const login = () => {
    appBase.firstService.login().catch(() => {});
  };

  const logout = () => {
    appBase.firstService.logout().catch(() => {});
  };

  const remove = () => {
    appBase.firstService.remove().catch(() => {});
  };

  const info = JSON.stringify((s.error?.cause as Error)?.message || s.data, null, ' ');
  return (
    <>
      <div className={root}>
        <div>Hello, World!</div>
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
