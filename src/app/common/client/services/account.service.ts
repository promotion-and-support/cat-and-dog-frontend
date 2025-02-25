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
    const { WebApp: webApp } = Telegram;
    this.tg = webApp.initData ? webApp : ({ initData: INIT_DATA } as WebApp);
  }

  async init() {
    if (this.tg) {
      this.$state.user = await this.app.api.account.login_tg(this.tg);
    } else {
      this.$state.user = await this.app.api.user.read();
    }
    this.setState(this.$state);
  }

  async logoutOrRemove(type: 'logout' | 'remove') {
    try {
      const success = await this.app.api.account[type]();
      success && this.setState({ user: null });
      return success;
    } catch (e: any) {
      this.setError(e);
    }
  }

  async signupTg() {
    try {
      const user = await this.app.api.account.signup_tg(this.tg);
      user && this.setState({ user: null });
      return user;
    } catch (e: any) {
      this.setError(e);
    }
  }
}
