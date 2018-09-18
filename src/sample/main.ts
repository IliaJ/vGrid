import { BasicConfiguration } from '@aurelia/jit';
import { vgridClasses } from 'aurelia-v-grid';
import { Aurelia } from '@aurelia/runtime';
import { App } from './app';

// how does vNext register a plugin ?

window['au'] = new Aurelia()
  .register(BasicConfiguration, ...vgridClasses)
  .app({ host: document.querySelector('app'), component: new App() })
  .start();
