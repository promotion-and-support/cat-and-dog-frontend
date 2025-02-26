import { Store } from '@lib/store/store';
import { getApi, IClientApi } from '@server/client.api';
import { getConnection as getHttpConnection } from './connection/http';
import { getConnection as getWsConnection } from './connection/ws';
import { HttpResponseError } from './connection/errors';
import { API_URL } from '@constants/constants';
import { Account } from './services/account.service';

export interface IAppBase {
  api: IClientApi;
  account: Account;
}

export class AppBase extends Store implements IAppBase {
  private baseUrl = API_URL;
  api: IClientApi;
  account: Account = new Account(this);

  constructor() {
    super({}, undefined, 'INIT');
  }

  async init() {
    try {
      const connection = getHttpConnection(this.baseUrl, this.onConnectionError.bind(this));
      this.api = getApi(connection);
      await this.api.health();
    } catch (e: any) {
      try {
        if (!e || (e as HttpResponseError).statusCode !== 503) throw new HttpResponseError(503);
        const baseUrl = this.baseUrl.replace('http', 'ws');
        const connection = getWsConnection(
          baseUrl,
          () => {}, // this.handleConnect.bind(this),
          () => {}, // this.setMessage.bind(this),
          this.onConnectionError.bind(this),
        );
        this.api = getApi(connection);
        await this.api.health();
      } catch (e: any) {
        this.setError(e);
        this.events.emit('connectionError', e);
        return;
      }
    }

    try {
      await this.account.init();
      this.setState({ status: 'READY' });
    } catch (e: any) {
      this.setError(e);
      this.events.emit('connectionError', e);
    }
  }

  onConnectionError(e: unknown) {
    if (this.status === 'INIT') {
      return;
    }
    this.events.emit('connectionError', e);
  }
}
