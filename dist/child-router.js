System.register(["aurelia-router"], function (_export) {
  var Router, _createClass, _classCallCheck, ChildRouter;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ChildRouter = _export("ChildRouter", (function () {
        function ChildRouter(router) {
          _classCallCheck(this, ChildRouter);

          this.heading = "Child Router";
          this.router = router;
          router.configure(function (config) {
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }]);
          });
        }

        _createClass(ChildRouter, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return ChildRouter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoaWxkLXJvdXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxpQ0FFRCxXQUFXOzs7O0FBRmhCLFlBQU0sa0JBQU4sTUFBTTs7Ozs7Ozs7O0FBRUQsaUJBQVc7QUFFWCxpQkFGQSxXQUFXLENBRVYsTUFBTSxFQUFDO2dDQUZSLFdBQVc7O0FBR3BCLGNBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0FBQzlCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGdCQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQ1QsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUMsU0FBUyxDQUFDLEVBQUcsUUFBUSxFQUFFLFNBQVMsRUFBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxTQUFTLEVBQUUsRUFDaEYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFTLFFBQVEsRUFBRSxRQUFRLEVBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUMvRCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUcsUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxjQUFjLEVBQUUsQ0FDdEYsQ0FBQyxDQUFDO1dBQ0osQ0FBQyxDQUFDO1NBQ0o7O3FCQVpVLFdBQVc7QUFDZixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7OztlQUR6QixXQUFXIiwiZmlsZSI6ImNoaWxkLXJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBDaGlsZFJvdXRlcntcbiAgc3RhdGljIGluamVjdCgpIHsgcmV0dXJuIFtSb3V0ZXJdOyB9XG4gIGNvbnN0cnVjdG9yKHJvdXRlcil7XG4gICAgdGhpcy5oZWFkaW5nID0gJ0NoaWxkIFJvdXRlcic7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgcm91dGVyLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgICAgY29uZmlnLm1hcChbXG4gICAgICAgIHsgcm91dGU6IFsnJywnd2VsY29tZSddLCAgbW9kdWxlSWQ6ICd3ZWxjb21lJywgICAgICBuYXY6IHRydWUsIHRpdGxlOidXZWxjb21lJyB9LFxuICAgICAgICB7IHJvdXRlOiAnZmxpY2tyJywgICAgICAgIG1vZHVsZUlkOiAnZmxpY2tyJywgICAgICAgbmF2OiB0cnVlIH0sXG4gICAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCAgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCBuYXY6IHRydWUsIHRpdGxlOidDaGlsZCBSb3V0ZXInIH1cbiAgICAgIF0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=