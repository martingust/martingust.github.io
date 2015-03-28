import {Router} from 'aurelia-router';
import bootstrap from 'bootstrap';

export class App {
  static inject() { return [Router]; }
  constructor(router) {
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: './flickr',       nav: true },
        { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' },
        { route: 'big-list',      moduleId: './big-list',     nav: true, title:'Big List' },
        { route: 'phone-list',      moduleId: './phone-list',     nav: true, title:'Contacts' }
      ]);
    });
  }
}
