import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
/** Stale lazy chunks after HMR often cause an empty Suspense shell until a full reload. */
if (import.meta.hot) {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    window.location.reload();
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

/** Legacy boot node only; LCP shell stays until HeroScroll paints (see heroVideoPreload). */
queueMicrotask(() => {
  document.getElementById("trevyk-boot")?.remove();
});
