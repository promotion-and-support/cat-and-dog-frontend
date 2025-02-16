/* eslint-disable max-lines */
/* eslint-disable max-len */
import * as P from './types/types';
import * as Q from './types/client.api.types';

export type IClientApi = ReturnType<typeof getApi>;

export const getApi = (
  fetch: <T>(pathname: string, options?: Record<string, any>) => Promise<T>
) => ({
  'health': () => fetch<string>('/health'),

  'echo': (options: P.IEchoData) =>
    fetch<P.IEchoData>('/echo', options),

  'account': {
    'confirm': (options: P.ITokenParams) =>
      fetch<P.IUserResponse>('/account/confirm', options),

    'login': (options: P.ILoginParams) =>
      fetch<P.IUserResponse>('/account/login', options),

    'logout': () => fetch<boolean>('/account/logout'),

    'overmail': (options: P.IEnterParams) =>
      fetch<boolean>('/account/overmail', options),

    'overtg': (options: Q.TAccountOvertg) =>
      fetch<P.IUserResponse>('/account/overtg', options),

    'remove': () => fetch<boolean>('/account/remove'),

    'restore': (options: P.ITokenParams) =>
      fetch<P.IUserResponse>('/account/restore', options),

    'signup': (options: P.ISignupParams) =>
      fetch<P.IUserResponse>('/account/signup', options),

    'signupTg': (options: Q.TAccountSignupTg) =>
      fetch<P.IUserResponse>('/account/signupTg', options),

    'messenger': {
      'get': {
        'name': () => fetch<string>('/account/messenger/get/name'),

      },
      'link': {
        'get': () => fetch<Q.TAccountMessengerLinkGetResponse>('/account/messenger/link/get'),

        'connect': (options: P.IMessengerLinkConnectParams) =>
          fetch<boolean>('/account/messenger/link/connect', options),

      },
    },
  },
  'admin': {
    'net': {
      'get': (options: P.INetEnterParams) =>
        fetch<Q.TAdminNetGetResponse>('/admin/net/get', options),

    },
  },
  'chat': {
    'connect': {
      'nets': () => fetch<P.IChatConnectAll>('/chat/connect/nets'),

      'user': () => fetch<boolean>('/chat/connect/user'),

    },
    'sendMessage': (options: P.IChatSendMessage) =>
      fetch<boolean>('/chat/sendMessage', options),

    'getMessages': (options: P.IChatGetMessages) =>
      fetch<P.IChatGetMessagesResponse>('/chat/getMessages', options),

    'removeConnection': () => fetch<boolean>('/chat/removeConnection'),

  },
  'events': {
    'read': (options: Q.TEventsRead) =>
      fetch<P.IEvents>('/events/read', options),

    'confirm': (options: Q.TEventsConfirm) =>
      fetch<boolean>('/events/confirm', options),

  },
  'member': {
    'disconnectNotVote': (options: Q.TMemberDisconnectNotVote) =>
      fetch<boolean>('/member/disconnectNotVote', options),

    'disconnectUnactive': (options: Q.TMemberDisconnectUnactive) =>
      fetch<boolean>('/member/disconnectUnactive', options),

    'data': {
      'dislike': {
        'set': (options: P.IMemberConfirmParams) =>
          fetch<boolean>('/member/data/dislike/set', options),

        'unSet': (options: P.IMemberConfirmParams) =>
          fetch<boolean>('/member/data/dislike/unSet', options),

      },
      'vote': {
        'set': (options: P.IMemberConfirmParams) =>
          fetch<Q.TMemberDataVoteSetResponse>('/member/data/vote/set', options),

        'unSet': (options: P.IMemberConfirmParams) =>
          fetch<boolean>('/member/data/vote/unSet', options),

      },
    },
    'invite': {
      'cancel': (options: P.IMemberConfirmParams) =>
        fetch<boolean>('/member/invite/cancel', options),

      'confirm': (options: P.IMemberConfirmParams) =>
        fetch<boolean>('/member/invite/confirm', options),

      'create': (options: P.IMemberInviteParams) =>
        fetch<Q.TMemberInviteCreateResponse>('/member/invite/create', options),

      'refuse': (options: P.IMemberConfirmParams) =>
        fetch<boolean>('/member/invite/refuse', options),

    },
  },
  'net': {
    'connectByToken': (options: P.ITokenParams) =>
      fetch<P.INetConnectByToken>('/net/connectByToken', options),

    'create': (options: P.INetCreateParams) =>
      fetch<P.INetResponse>('/net/create', options),

    'enter': (options: P.INetEnterParams) =>
      fetch<P.INetResponse>('/net/enter', options),

    'getCircle': (options: P.INetReadParams) =>
      fetch<P.INetViewResponse>('/net/getCircle', options),

    'getTree': (options: P.INetReadParams) =>
      fetch<P.INetViewResponse>('/net/getTree', options),

    'leave': (options: P.INetReadParams) =>
      fetch<boolean>('/net/leave', options),

    'update': (options: P.INetUpdateParams) =>
      fetch<P.INetResponse>('/net/update', options),

    'wait': {
      'create': (options: P.IWaitCreateParams) =>
        fetch<P.INetConnectByToken>('/net/wait/create', options),

      'remove': (options: P.INetEnterParams) =>
        fetch<boolean>('/net/wait/remove', options),

      'get': (options: P.INetReadParams) =>
        fetch<P.INetWaitingResponse>('/net/wait/get', options),

    },
    'board': {
      'clear': (options: Q.TNetBoardClear) =>
        fetch<boolean>('/net/board/clear', options),

      'read': (options: P.INetReadParams) =>
        fetch<P.INetBoardReadResponse>('/net/board/read', options),

      'remove': (options: P.IBoardRemoveParams) =>
        fetch<boolean>('/net/board/remove', options),

      'save': (options: P.IBoardSaveParams) =>
        fetch<boolean>('/net/board/save', options),

    },
  },
  'scripts': {
    'script.js': () => fetch<Q.TScriptsScriptjsResponse>('/scripts/script.js'),

  },
  'test': {
    'data': () => fetch<Q.TTestDataResponse>('/test/data'),

  },
  'user': {
    'read': () => fetch<P.IUserResponse>('/user/read'),

    'update': (options: P.IUserUpdateParams) =>
      fetch<P.IUserResponse>('/user/update', options),

    'net': {
      'getData': (options: P.INetEnterParams) =>
        fetch<P.IUserNetDataResponse>('/user/net/getData', options),

    },
    'nets': {
      'get': {
        'all': () => fetch<P.INetsResponse>('/user/nets/get/all'),

        'wait': () => fetch<P.IWaitNets>('/user/nets/get/wait'),

      },
    },
  },
});
