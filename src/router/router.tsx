import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
// import { Main } from '@views/main/main';
// import { About } from '@views/about/about';
import { NotFound } from '@views/not.found/not.found';
// import { Redirect } from './redirect';
import { AccountRouter } from './routes/account.router';
import { AppOld } from '@views/app-old/app.old';

export const Router: FC = () => {
  // useEvents();
  return (
    <>
      {/* <Redirect /> */}
      <Routes>
        <Route path={RelativeRoutesMap.ROOT} element={<AppOld />} />
        <Route path={RelativeRoutesMap.ABOUT} element={<div />} />
        {AccountRouter}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
