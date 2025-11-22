import { Route } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { Net } from '@views/net/net';
import { NetIdIndex } from '@views/net/net.id/net.id.index';
import { NetId } from '@views/net/net.id/net.id';

const { NET } = RelativeRoutesMap;
const { NET_ID } = NET;

export const NetRouter = (
  <Route path={NET.INDEX}>
    <Route path="" element={<Net />} />
    {/* <Route path={NET.INVITE} element={<NetInvite />} /> */}
    <Route path={NET_ID.INDEX} element={<NetIdIndex />}>
      <Route path="" element={<NetId />} />
    </Route>
  </Route>
);
