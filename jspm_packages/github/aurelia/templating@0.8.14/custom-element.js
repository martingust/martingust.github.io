System.register(["aurelia-metadata", "./behavior-instance", "./behaviors", "./content-selector", "./view-engine", "./view-strategy", "./util"], function (_export) {
  var Metadata, Origin, ResourceType, BehaviorInstance, configureBehavior, ContentSelector, ViewEngine, ViewStrategy, hyphenate, _createClass, _inherits, _classCallCheck, defaultInstruction, contentSelectorFactoryOptions, hasShadowDOM, valuePropertyName, UseShadowDOM, SkipContentProcessing, CustomElement;

  return {
    setters: [function (_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      Origin = _aureliaMetadata.Origin;
      ResourceType = _aureliaMetadata.ResourceType;
    }, function (_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function (_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function (_contentSelector) {
      ContentSelector = _contentSelector.ContentSelector;
    }, function (_viewEngine) {
      ViewEngine = _viewEngine.ViewEngine;
    }, function (_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
    }, function (_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaultInstruction = { suppressBind: false };
      contentSelectorFactoryOptions = { suppressBind: true };
      hasShadowDOM = !!HTMLElement.prototype.createShadowRoot;
      valuePropertyName = "value";
      UseShadowDOM = _export("UseShadowDOM", function UseShadowDOM() {
        _classCallCheck(this, UseShadowDOM);
      });
      SkipContentProcessing = _export("SkipContentProcessing", function SkipContentProcessing() {
        _classCallCheck(this, SkipContentProcessing);
      });
      CustomElement = _export("CustomElement", (function (_ResourceType) {
        function CustomElement(tagName) {
          _classCallCheck(this, CustomElement);

          this.name = tagName;
          this.properties = [];
          this.attributes = {};
        }

        _inherits(CustomElement, _ResourceType);

        _createClass(CustomElement, {
          analyze: {
            value: function analyze(container, target) {
              var meta = Metadata.on(target);
              configureBehavior(container, this, target, valuePropertyName);

              this.configured = true;
              this.targetShadowDOM = meta.has(UseShadowDOM);
              this.skipContentProcessing = meta.has(SkipContentProcessing);
              this.usesShadowDOM = this.targetShadowDOM && hasShadowDOM;
            }
          },
          load: {
            value: function load(container, target, viewStrategy) {
              var _this = this;

              var options;

              viewStrategy = viewStrategy || ViewStrategy.getDefault(target);
              options = {
                targetShadowDOM: this.targetShadowDOM,
                beforeCompile: target.beforeCompile
              };

              if (!viewStrategy.moduleId) {
                viewStrategy.moduleId = Origin.get(target).moduleId;
              }

              return viewStrategy.loadViewFactory(container.get(ViewEngine), options).then(function (viewFactory) {
                _this.viewFactory = viewFactory;
                return _this;
              });
            }
          },
          register: {
            value: function register(registry, name) {
              registry.registerElement(name || this.name, this);
            }
          },
          compile: {
            value: function compile(compiler, resources, node, instruction) {
              if (!this.usesShadowDOM && !this.skipContentProcessing && node.hasChildNodes()) {
                var fragment = document.createDocumentFragment(),
                    currentChild = node.firstChild,
                    nextSibling;

                while (currentChild) {
                  nextSibling = currentChild.nextSibling;
                  fragment.appendChild(currentChild);
                  currentChild = nextSibling;
                }

                instruction.contentFactory = compiler.compile(fragment, resources);
              }

              instruction.suppressBind = true;

              return node;
            }
          },
          create: {
            value: function create(container) {
              var instruction = arguments[1] === undefined ? defaultInstruction : arguments[1];
              var element = arguments[2] === undefined ? null : arguments[2];

              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this, executionContext, instruction),
                  host;

              if (this.viewFactory) {
                behaviorInstance.view = this.viewFactory.create(container, behaviorInstance.executionContext, instruction);
              }

              if (element) {
                element.primaryBehavior = behaviorInstance;

                if (!(this.apiName in element)) {
                  element[this.apiName] = behaviorInstance.executionContext;
                }

                if (behaviorInstance.view) {
                  if (this.usesShadowDOM) {
                    host = element.createShadowRoot();
                  } else {
                    host = element;

                    if (instruction.contentFactory) {
                      var contentView = instruction.contentFactory.create(container, null, contentSelectorFactoryOptions);

                      ContentSelector.applySelectors(contentView, behaviorInstance.view.contentSelectors, function (contentSelector, group) {
                        return contentSelector.add(group);
                      });

                      behaviorInstance.contentView = contentView;
                    }
                  }

                  if (this.childExpression) {
                    behaviorInstance.view.addBinding(this.childExpression.createBinding(host, behaviorInstance.executionContext));
                  }

                  behaviorInstance.view.appendNodesTo(host);
                }
              } else if (behaviorInstance.view) {
                behaviorInstance.view.owner = behaviorInstance;
              }

              return behaviorInstance;
            }
          }
        }, {
          convention: {
            value: function convention(name) {
              if (name.endsWith("CustomElement")) {
                return new CustomElement(hyphenate(name.substring(0, name.length - 13)));
              }
            }
          }
        });

        return CustomElement;
      })(ResourceType));
    }
  };
});