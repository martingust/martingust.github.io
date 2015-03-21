System.register(["aurelia-router", "bootstrap"], function (_export) {
  var Router, bootstrap, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome" }, { route: "flickr", moduleId: "flickr", nav: true }, { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" }, { route: "big-list", moduleId: "big-list", nav: true, title: "Big List" }]);
          });
        }

        _createClass(App, null, {
          inject: {
            value: function inject() {
              return [Router];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsaUNBRUgsR0FBRzs7OztBQUhSLFlBQU0sa0JBQU4sTUFBTTs7QUFDUCxlQUFTOzs7Ozs7Ozs7QUFFSCxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRTtnQ0FGVCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzlCLGtCQUFNLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN6QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFDLFNBQVMsQ0FBQyxFQUFHLFFBQVEsRUFBRSxTQUFTLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsU0FBUyxFQUFFLEVBQ2hGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBUyxRQUFRLEVBQUUsUUFBUSxFQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFDL0QsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFHLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsY0FBYyxFQUFFLEVBQ3JGLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBTyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLFVBQVUsRUFBRSxDQUM5RSxDQUFDLENBQUM7V0FDSixDQUFDLENBQUM7U0FDSjs7cUJBYlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFOzs7O2VBRHpCLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCBib290c3RyYXAgZnJvbSAnYm9vdHN0cmFwJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHN0YXRpYyBpbmplY3QoKSB7IHJldHVybiBbUm91dGVyXTsgfVxuICBjb25zdHJ1Y3Rvcihyb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLnJvdXRlci5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICB7IHJvdXRlOiBbJycsJ3dlbGNvbWUnXSwgIG1vZHVsZUlkOiAnd2VsY29tZScsICAgICAgbmF2OiB0cnVlLCB0aXRsZTonV2VsY29tZScgfSxcbiAgICAgICAgeyByb3V0ZTogJ2ZsaWNrcicsICAgICAgICBtb2R1bGVJZDogJ2ZsaWNrcicsICAgICAgIG5hdjogdHJ1ZSB9LFxuICAgICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgIG1vZHVsZUlkOiAnY2hpbGQtcm91dGVyJywgbmF2OiB0cnVlLCB0aXRsZTonQ2hpbGQgUm91dGVyJyB9LFxuICAgICAgICB7IHJvdXRlOiAnYmlnLWxpc3QnLCAgICAgIG1vZHVsZUlkOiAnYmlnLWxpc3QnLCBuYXY6IHRydWUsIHRpdGxlOidCaWcgTGlzdCcgfVxuICAgICAgXSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==