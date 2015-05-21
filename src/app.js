import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia - Virtual Repeat';
    config.map([
      { route: ['', 'phone-list'],  moduleId: './phone-list',     nav: true, title:'Contacts' },
      { route: 'virtual-scroll',  moduleId: './virtual-scroll',     nav: true, title:'Virtual Scroll' }
    ]);

    this.router = router;
  }
}
