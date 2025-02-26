import * as T from '@server/types/types';
import { IAppBase } from '@client/app.base';
import { Store } from '@lib/store/store';
import { INIT_DATA } from '@constants/constants';

interface AccountState {
  user: T.IUserResponse;
}

export class Account extends Store<AccountState> {
  private tg: WebApp;

  constructor(private app: IAppBase) {
    super({ user: null }, undefined, 'INIT');

    const { initData } = Telegram.WebApp;
    if (initData) {
      this.tg = Telegram.WebApp;
    } else {
      this.tg = { initData: INIT_DATA } as WebApp;
    }
  }

  async init() {
    await this.login();
  }

  async signupTg() {
    const { initData } = this.tg;
    const user = await this.app.api.account.signup_tg({ initData });
    if (user) {
      this.setState({ user });
    }
    return user;
  }

  async login() {
    const { initData } = this.tg;
    const user = await this.app.api.account.login_tg({ initData });
    if (user) {
      this.setState({ user });
    }
    return user;
  }

  async logoutOrRemove(type: 'logout' | 'remove') {
    const success = await this.app.api.account[type]();
    if (success) {
      this.setState({ user: null });
    }
    return success;
  }
}
