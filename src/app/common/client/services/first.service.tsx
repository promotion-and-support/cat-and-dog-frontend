import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from '../app.base';

interface IFirstState {
  value: string;
}

const ENDPOINT = {
  health: './api/health',
  signupTg: './api/account/signupTg',
};

export class FirstService extends Store<IFirstState> {
  constructor(initialState: IFirstState, protected app: IAppBase) {
    super(initialState, undefined, 'INIT');
  }

  async init() {
    await delay(3000);
    this.setState({ status: 'READY' });
  }
  
  async firstMethod() {
    const api = (import.meta.env.VITE_API_URL || window.location.origin) as string;
    const url = new URL(ENDPOINT.signupTg, api);
    const { initData } = Telegram.WebApp;
    const response = await fetch(url.href, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ initData }),
    });
    const data = await response.json() as Record<string, string>;
    this.setState({ value: JSON.stringify(data) });
  }
}
