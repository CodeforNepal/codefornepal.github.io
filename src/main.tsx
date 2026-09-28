import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './App';

// Global styles. Order matters and mirrors the original Next.js layout / Jekyll <head>:
//   1. Font Awesome 5 icon font (was /assets/css/all.min.css)
//   2. agency.scss  = custom theme + vendored Bootstrap 4.5.2 (was /assets/css/agency.css)
//   3. head-global.css = the inline <style> block from head.html (must come AFTER agency)
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/agency.scss';
import '@/styles/head-global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
