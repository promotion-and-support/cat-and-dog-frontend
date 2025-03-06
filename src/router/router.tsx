import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { NotFound } from '@views/not.found/not.found';
import { Redirect } from './redirect';
import { AccountRouter } from './routes/account.router';
import { SubscriptionView } from '@views/subscription/subscription';

export const Router: FC = () => {
  return (
    <>
      <Redirect />
      <Routes>
        <Route path={RelativeRoutesMap.ROOT} element={<SubscriptionView />} />
        <Route path={RelativeRoutesMap.ABOUT} element={<div />} />
        {AccountRouter}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
