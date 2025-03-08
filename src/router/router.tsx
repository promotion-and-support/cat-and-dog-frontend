import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { NotFound } from '@views/not.found/not.found';
import { Redirect } from './redirect';
import { SubscriptionView } from '@views/subscription/subscription';
import { About } from '@views/about/about';

export const Router: FC = () => {
  return (
    <>
      <Redirect />
      <Routes>
        <Route path={RelativeRoutesMap.ROOT} element={<SubscriptionView />} />
        <Route path={RelativeRoutesMap.ABOUT} element={<About />} />
        {/* {AccountRouter} */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
