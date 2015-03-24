System.register(["aurelia-metadata", "aurelia-path"], function (_export) {
  var Metadata, Origin, relativeToFile, _inherits, _createClass, _classCallCheck, ViewStrategy, UseView, ConventionalView, NoView;

  return {
    setters: [function (_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      Origin = _aureliaMetadata.Origin;
    }, function (_aureliaPath) {
      relativeToFile = _aureliaPath.relativeToFile;
    }],
    execute: function () {
      "use strict";

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ViewStrategy = _export("ViewStrategy", (function () {
        function ViewStrategy() {
          _classCallCheck(this, ViewStrategy);
        }

        _createClass(ViewStrategy, {
          makeRelativeTo: {
            value: function makeRelativeTo(baseUrl) {}
          },
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              throw new Error("A ViewStrategy must implement loadViewFactory(viewEngine, options).");
            }
          }
        }, {
          normalize: {
            value: function normalize(value) {
              if (typeof value === "string") {
                value = new UseView(value);
              }

              if (value && !(value instanceof ViewStrategy)) {
                throw new Error("The view must be a string or an instance of ViewStrategy.");
              }

              return value;
            }
          },
          getDefault: {
            value: function getDefault(target) {
              var strategy, annotation;

              if (typeof target !== "function") {
                target = target.constructor;
              }

              annotation = Origin.get(target);
              strategy = Metadata.on(target).first(ViewStrategy);

              if (!strategy) {
                if (!annotation) {
                  throw new Error("Cannot determinte default view strategy for object.", target);
                }

                strategy = new ConventionalView(annotation.moduleId);
              } else if (annotation) {
                strategy.moduleId = annotation.moduleId;
              }

              return strategy;
            }
          }
        });

        return ViewStrategy;
      })());
      UseView = _export("UseView", (function (_ViewStrategy) {
        function UseView(path) {
          _classCallCheck(this, UseView);

          this.path = path;
        }

        _inherits(UseView, _ViewStrategy);

        _createClass(UseView, {
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              if (!this.absolutePath && this.moduleId) {
                this.absolutePath = relativeToFile(this.path, this.moduleId);
              }

              return viewEngine.loadViewFactory(this.absolutePath || this.path, options, this.moduleId);
            }
          },
          makeRelativeTo: {
            value: function makeRelativeTo(file) {
              this.absolutePath = relativeToFile(this.path, file);
            }
          }
        });

        return UseView;
      })(ViewStrategy));
      ConventionalView = _export("ConventionalView", (function (_ViewStrategy2) {
        function ConventionalView(moduleId) {
          _classCallCheck(this, ConventionalView);

          this.moduleId = moduleId;
          this.viewUrl = ConventionalView.convertModuleIdToViewUrl(moduleId);
        }

        _inherits(ConventionalView, _ViewStrategy2);

        _createClass(ConventionalView, {
          loadViewFactory: {
            value: function loadViewFactory(viewEngine, options) {
              return viewEngine.loadViewFactory(this.viewUrl, options, this.moduleId);
            }
          }
        }, {
          convertModuleIdToViewUrl: {
            value: function convertModuleIdToViewUrl(moduleId) {
              return moduleId + ".html";
            }
          }
        });

        return ConventionalView;
      })(ViewStrategy));
      NoView = _export("NoView", (function (_ViewStrategy3) {
        function NoView() {
          _classCallCheck(this, NoView);

          if (_ViewStrategy3 != null) {
            _ViewStrategy3.apply(this, arguments);
          }
        }

        _inherits(NoView, _ViewStrategy3);

        _createClass(NoView, {
          loadViewFactory: {
            value: function loadViewFactory() {
              return Promise.resolve(null);
            }
          }
        });

        return NoView;
      })(ViewStrategy));
    }
  };
});