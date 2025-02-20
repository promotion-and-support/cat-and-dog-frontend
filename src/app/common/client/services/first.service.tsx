import { Store } from '@lib/store/store';
import { delay } from '@lib/utils';
import { IAppBase } from '../app.base';

interface IFirstState {
  value: string;
}

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
    const url = new URL('./api/health', api);
    const response = await fetch(url.href);
    const data = await response.json() as Record<string, string>;
    this.setState({ value: JSON.stringify(data) });
  }
}
