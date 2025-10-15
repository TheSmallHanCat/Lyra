import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Startup from './Startup.tsx';
import '../index.css';
import '../i18n/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Startup />
  </StrictMode>,
);