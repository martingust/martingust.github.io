System.register(["aurelia-dependency-injection", "aurelia-templating"], function (_export) {
  var Container, Behavior, CompositionEngine, ViewSlot, ViewResources, _createClass, _classCallCheck, Compose;

  function processInstruction(composer, instruction) {
    composer.compositionEngine.compose(Object.assign(instruction, {
      executionContext: composer.executionContext,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentBehavior: composer.current
    })).then(function (next) {
      composer.current = next;
    });
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewResources = _aureliaTemplating.ViewResources;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Compose = _export("Compose", (function () {
        function Compose(container, compositionEngine, viewSlot, viewResources) {
          _classCallCheck(this, Compose);

          this.container = container;
          this.compositionEngine = compositionEngine;
          this.viewSlot = viewSlot;
          this.viewResources = viewResources;
        }

        _createClass(Compose, {
          bind: {
            value: function bind(executionContext) {
              this.executionContext = executionContext;
              processInstruction(this, { view: this.view, viewModel: this.viewModel, model: this.model });
            }
          },
          modelChanged: {
            value: function modelChanged(newValue, oldValue) {
              if (this.viewModel && typeof this.viewModel.activate === "function") {
                this.viewModel.activate(newValue);
              }
            }
          },
          viewChanged: {
            value: function viewChanged(newValue, oldValue) {
              processInstruction(this, { view: newValue, viewModel: this.viewModel, model: this.model });
            }
          },
          viewModelChanged: {
            value: function viewModelChanged(newValue, oldValue) {
              processInstruction(this, { viewModel: newValue, view: this.view, model: this.model });
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("compose").withProperty("model").withProperty("view").withProperty("viewModel").noView();
            }
          },
          inject: {
            value: function inject() {
              return [Container, CompositionEngine, ViewSlot, ViewResources];
            }
          }
        });

        return Compose;
      })());
    }
  };
});