import 'regenerator-runtime';
import '../styles/style.scss';
import './views/templates/navbar.js';
import App from './views/app';

const app = new App ({
  content: document.querySelector ('#main-content'),
});
window.addEventListener ('hashchange', () => {
  app.renderPage ();
});

window.addEventListener ('load', () => {
  app.renderPage ();
});
