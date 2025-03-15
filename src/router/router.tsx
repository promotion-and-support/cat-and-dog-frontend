import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RelativeRoutesMap } from '@constants/router.constants';
import { NotFound } from '@views/not.found/not.found';
import { SubscriptionView } from '@views/subscription/subscription';
import { About } from '@views/about/about';
import { Contacts } from '@views/contacts/contacts';
import { Help } from '@views/help/help';

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={RelativeRoutesMap.ROOT} element={<SubscriptionView />} />
      <Route path={RelativeRoutesMap.ABOUT} element={<About />} />
      <Route path={RelativeRoutesMap.CONTACTS} element={<Contacts />} />
      <Route path={RelativeRoutesMap.HELP} element={<Help />} />
      {/* {AccountRouter} */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
