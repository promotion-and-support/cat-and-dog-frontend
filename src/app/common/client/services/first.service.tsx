import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from '../app.base';

const { DEV, VITE_INIT_DATA } = import.meta.env
const INIT_DATA = DEV ? VITE_INIT_DATA as string: '';
const API_URL = (import.meta.env.VITE_API_URL || window.location.origin) as string;

interface IFirstState {
  data: Record<string, string> | string;
}

const ENDPOINT = {
  health: './api/health',
  signup_tg: './api/account/signup_tg',
  login: './api/account/login_tg',
  logout: './api/account/logout',
  remove: './api/account/remove',
};

export class FirstService extends Store<IFirstState> {
  constructor(initialState: IFirstState, protected app: IAppBase) {
    super(initialState, undefined, 'INIT');
  }

  async init() {
    await delay(1000);
    this.setState({ status: 'READY' });
  }
  
  async health() {
    this.error = null;
    const url = new URL(ENDPOINT.health, API_URL);
    try {
      const response = await fetch(url.href);
      const data = await response.text();
      this.setState({ data });
    } catch (e) {
      this.setError(e);
    }
  }

  async create() {
    this.error = null;
    const url = new URL(ENDPOINT.signup_tg, API_URL);
    const { initData } = Telegram.WebApp;
    try {
      const response = await fetch(url.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ initData: initData || INIT_DATA }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json() as Record<string, string>;
      this.setState({ data });
    } catch (e) {
      this.setError(e);
    }
  }

  async login() {
    this.error = null;
    const url = new URL(ENDPOINT.login, API_URL);
    const { initData } = Telegram.WebApp;
    try {
      const response = await fetch(url.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ initData: initData || INIT_DATA }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json() as Record<string, string>;
      this.setState({ data });
    } catch (e) {
      this.setError(e);
    }
  }

  async logout() {
    this.error = null;
    const url = new URL(ENDPOINT.logout, API_URL);
    try {
      const response = await fetch(url.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: '{}',
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.text();
      this.setState({ data });
    } catch (e) {
      this.setError(e);
    }
  }

  async remove() {
    this.error = null;
    const url = new URL(ENDPOINT.remove, API_URL);
    try {
      const response = await fetch(url.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: '{}',
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.text();
      this.setState({ data });
    } catch (e) {
      this.setError(e);
    }
  }
}
