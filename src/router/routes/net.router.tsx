import { Route } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Net } from '@views/net/net';
import { NetIdIndex } from '@views/net/net.id/net.id.index';
import { NetId } from '@views/net/net.id/net.id';
import { WaitNets } from '@views/net/wait/wait';
import { WaitCreate } from '@views/net/wait/wait.create';
import { TreeRouter } from './tree.router';

const { NET } = RelativeRoutesMap;
const { NET_ID } = NET;

export const NetRouter = (
  <Route path={NET.INDEX}>
    <Route path="" element={<Net />} />
    {/* <Route path={NET.INVITE} element={<NetInvite />} /> */}
    <Route path={RelativeRoutesMap.NET.WAIT.INDEX}>
      <Route path="" element={<WaitNets />} />
      <Route path={RelativeRoutesMap.NET.WAIT.CREATE} element={<WaitCreate />} />
    </Route>
    <Route path={NET_ID.INDEX} element={<NetIdIndex />}>
      <Route path="" element={<NetId />} />
      {TreeRouter}
    </Route>
  </Route>
);
