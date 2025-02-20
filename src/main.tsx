import { createRoot } from 'react-dom/client';
import { AppBaseProvider } from './components/app/app.base.provider';
import { App } from './components/app/app';

createRoot(document.getElementById('root')!).render(
  <AppBaseProvider>
    <App />
  </AppBaseProvider>
);
