System.register(['aurelia-framework', 'aurelia-router'], function (_export) {
  var inject, Router, _classCallCheck, ChildRouter;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      ChildRouter = (function () {
        function ChildRouter(router) {
          _classCallCheck(this, _ChildRouter);

          this.heading = 'Child Router';

          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ['', 'welcome'], moduleId: './welcome', nav: true, title: 'Welcome' }, { route: 'flickr', moduleId: './flickr', nav: true }, { route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }]);
          });
        }

        var _ChildRouter = ChildRouter;
        ChildRouter = inject(Router)(ChildRouter) || ChildRouter;
        return ChildRouter;
      })();

      _export('ChildRouter', ChildRouter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3VDQUlhLFdBQVc7Ozs7aUNBSmhCLE1BQU07OzhCQUNOLE1BQU07Ozs7Ozs7QUFHRCxpQkFBVztBQUdYLGlCQUhBLFdBQVcsQ0FHVixNQUFNLEVBQUM7OztlQUZuQixPQUFPLEdBQUcsY0FBYzs7QUFHdEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxTQUFTLENBQUMsRUFBRyxRQUFRLEVBQUUsV0FBVyxFQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFNBQVMsRUFBRSxFQUNsRixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQVMsUUFBUSxFQUFFLFVBQVUsRUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQ2pFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLENBQ3hGLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztTQUNKOzsyQkFaVSxXQUFXO0FBQVgsbUJBQVcsR0FEdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNGLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoiY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=