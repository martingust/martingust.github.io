import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(router) {
    this.p = {
      selectableValues: [1, 2, 3]
    };
    this.selectableValues = [1, 2, 3];
    this.router = router;
    this.router.configure(config => {
      config.title = 'Aurelia';
      config.map([
        { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome' },
        { route: 'flickr',        moduleId: './flickr',       nav: true },
        { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router' },
        { route: 'phone-list',  moduleId: './phone-list', nav: true, title:'Phone List' }
      ]);
    });
  }
}
