System.register(["aurelia-metadata", "./behavior-instance", "./behaviors", "./util"], function (_export) {
  var ResourceType, BehaviorInstance, configureBehavior, hyphenate, _createClass, _inherits, _classCallCheck, TemplateController;

  return {
    setters: [function (_aureliaMetadata) {
      ResourceType = _aureliaMetadata.ResourceType;
    }, function (_behaviorInstance) {
      BehaviorInstance = _behaviorInstance.BehaviorInstance;
    }, function (_behaviors) {
      configureBehavior = _behaviors.configureBehavior;
    }, function (_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TemplateController = _export("TemplateController", (function (_ResourceType) {
        function TemplateController(attribute) {
          _classCallCheck(this, TemplateController);

          this.name = attribute;
          this.properties = [];
          this.attributes = {};
          this.liftsContent = true;
        }

        _inherits(TemplateController, _ResourceType);

        _createClass(TemplateController, {
          analyze: {
            value: function analyze(container, target) {
              configureBehavior(container, this, target);
            }
          },
          load: {
            value: function load(container, target) {
              return Promise.resolve(this);
            }
          },
          register: {
            value: function register(registry, name) {
              registry.registerAttribute(name || this.name, this, this.name);
            }
          },
          compile: {
            value: function compile(compiler, resources, node, instruction, parentNode) {
              if (!instruction.viewFactory) {
                var template = document.createElement("template"),
                    fragment = document.createDocumentFragment();

                node.removeAttribute(instruction.originalAttrName);

                if (node.parentNode) {
                  node.parentNode.replaceChild(template, node);
                } else if (window.ShadowDOMPolyfill) {
                  //HACK: IE template element and shadow dom polyfills not quite right...
                  ShadowDOMPolyfill.unwrap(parentNode).replaceChild(ShadowDOMPolyfill.unwrap(template), ShadowDOMPolyfill.unwrap(node));
                } else {
                  //HACK: same as above
                  parentNode.replaceChild(template, node);
                }

                fragment.appendChild(node);

                instruction.viewFactory = compiler.compile(fragment, resources);
                node = template;
              }

              instruction.suppressBind = true;

              return node;
            }
          },
          create: {
            value: function create(container, instruction, element) {
              var executionContext = instruction.executionContext || container.get(this.target),
                  behaviorInstance = new BehaviorInstance(this, executionContext, instruction);

              element.primaryBehavior = behaviorInstance;

              if (!(this.apiName in element)) {
                element[this.apiName] = behaviorInstance.executionContext;
              }

              return behaviorInstance;
            }
          }
        }, {
          convention: {
            value: function convention(name) {
              if (name.endsWith("TemplateController")) {
                return new TemplateController(hyphenate(name.substring(0, name.length - 18)));
              }
            }
          }
        });

        return TemplateController;
      })(ResourceType));
    }
  };
});