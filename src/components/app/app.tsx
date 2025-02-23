import { FC } from 'react';
import { HashRouter } from 'react-router-dom';
// import { useApp } from '@hooks/useApp';
// import { useTelegram } from '@hooks/useTelegram';
import { ErrorBoundary } from '@components/error/error.boundary';
import { Theme } from '@styles/theme';
import { NavigateProvider } from '@contexts/navigate/navigate';
import { Layout } from '@components/layout/layout';
import { AppOld } from './app.old';
// import { ErrorCatch } from '@components/error/error.catch';
// import { ModalSet } from '@components/modal/modal.set';
// import { Loading } from '@components/loading/loading';
// import { Content } from '@components/content/content';
// import { Router } from '@router/router';

export const App: FC = () => {
  // useApp();
  // useTelegram();
  // return (
  //               <ModalSet />
  //               <Loading />
  //               <ErrorCatch />
  //               <Content>
  //                 <Router />
  //               </Content>
  // );
  return (
    <ErrorBoundary level="app">
      <Theme>
        <ErrorBoundary level="router">
          <HashRouter>
            <NavigateProvider>
              <Layout>
                <AppOld />
              </Layout>
            </NavigateProvider>
          </HashRouter>
        </ErrorBoundary>
      </Theme>
    </ErrorBoundary>
  );
};
