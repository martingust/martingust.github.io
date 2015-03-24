System.register(["aurelia-metadata", "aurelia-binding", "./custom-element", "./attached-behavior", "./template-controller", "./view-strategy", "./util"], function (_export) {
  var Metadata, ResourceType, ValueConverter, CustomElement, AttachedBehavior, TemplateController, ViewStrategy, hyphenate, _createClass, _classCallCheck, ResourceModule, ResourceDescription, ModuleAnalyzer;

  return {
    setters: [function (_aureliaMetadata) {
      Metadata = _aureliaMetadata.Metadata;
      ResourceType = _aureliaMetadata.ResourceType;
    }, function (_aureliaBinding) {
      ValueConverter = _aureliaBinding.ValueConverter;
    }, function (_customElement) {
      CustomElement = _customElement.CustomElement;
    }, function (_attachedBehavior) {
      AttachedBehavior = _attachedBehavior.AttachedBehavior;
    }, function (_templateController) {
      TemplateController = _templateController.TemplateController;
    }, function (_viewStrategy) {
      ViewStrategy = _viewStrategy.ViewStrategy;
    }, function (_util) {
      hyphenate = _util.hyphenate;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ResourceModule = (function () {
        function ResourceModule() {
          _classCallCheck(this, ResourceModule);

          this.id = "";
          this.moduleInstance = null;
          this.mainResource = null;
          this.resources = null;
          this.viewStrategy = null;
          this.isAnalyzed = false;
        }

        _createClass(ResourceModule, {
          analyze: {
            value: function analyze(container) {
              var current = this.mainResource,
                  resources = this.resources,
                  i,
                  ii,
                  metadata;

              if (this.isAnalyzed) {
                return;
              }

              this.isAnalyzed = true;

              if (current) {
                metadata = current.metadata;

                if ("analyze" in metadata && !metadata.isAnalyzed) {
                  metadata.isAnalyzed = true;
                  metadata.analyze(container, current.value);
                }
              }

              for (i = 0, ii = resources.length; i < ii; ++i) {
                current = resources[i];
                metadata = current.metadata;

                if ("analyze" in metadata && !metadata.isAnalyzed) {
                  metadata.isAnalyzed = true;
                  metadata.analyze(container, current.value);
                }
              }
            }
          },
          register: {
            value: function register(registry, name) {
              var i,
                  ii,
                  resources = this.resources;

              if (this.mainResource) {
                this.mainResource.metadata.register(registry, name);
                name = null;
              }

              for (i = 0, ii = resources.length; i < ii; ++i) {
                resources[i].metadata.register(registry, name);
                name = null;
              }
            }
          },
          load: {
            value: function load(container) {
              var current = this.mainResource,
                  resources = this.resources,
                  i,
                  ii,
                  metadata,
                  loads;

              if (this.isLoaded) {
                return Promise.resolve();
              }

              this.isLoaded = true;
              loads = [];

              if (current) {
                metadata = current.metadata;

                if ("load" in metadata && !metadata.isLoaded) {
                  metadata.isLoaded = true;
                  loads.push(metadata.load(container, current.value));
                }
              }

              for (i = 0, ii = resources.length; i < ii; ++i) {
                current = resources[i];
                metadata = current.metadata;

                if ("load" in metadata && !metadata.isLoaded) {
                  metadata.isLoaded = true;
                  loads.push(metadata.load(container, current.value));
                }
              }

              return Promise.all(loads);
            }
          }
        });

        return ResourceModule;
      })();

      ResourceDescription = function ResourceDescription(key, exportedValue, allMetadata, resourceTypeMeta) {
        _classCallCheck(this, ResourceDescription);

        if (!resourceTypeMeta) {
          if (!allMetadata) {
            allMetadata = Metadata.on(exportedValue);
          }

          resourceTypeMeta = allMetadata.first(ResourceType);

          if (!resourceTypeMeta) {
            resourceTypeMeta = new CustomElement(hyphenate(key));
            allMetadata.add(resourceTypeMeta);
          }
        }

        if (!resourceTypeMeta.name) {
          resourceTypeMeta.name = hyphenate(key);
        }

        this.metadata = resourceTypeMeta;
        this.value = exportedValue;
      };

      ModuleAnalyzer = _export("ModuleAnalyzer", (function () {
        function ModuleAnalyzer() {
          _classCallCheck(this, ModuleAnalyzer);

          this.cache = {};
        }

        _createClass(ModuleAnalyzer, {
          getAnalysis: {
            value: function getAnalysis(moduleId) {
              return this.cache[moduleId];
            }
          },
          analyze: {
            value: function analyze(moduleId, moduleInstance, viewModelMember) {
              var mainResource,
                  fallbackValue,
                  fallbackKey,
                  fallbackMetadata,
                  resourceTypeMeta,
                  key,
                  allMetadata,
                  exportedValue,
                  resources = [],
                  conventional,
                  viewStrategy,
                  resourceModule;

              resourceModule = this.cache[moduleId];
              if (resourceModule) {
                return resourceModule;
              }

              resourceModule = new ResourceModule();
              this.cache[moduleId] = resourceModule;

              if (typeof moduleInstance === "function") {
                moduleInstance = { "default": moduleInstance };
              }

              if (viewModelMember) {
                mainResource = new ResourceDescription(viewModelMember, moduleInstance[viewModelMember]);
              }

              for (key in moduleInstance) {
                exportedValue = moduleInstance[key];

                if (key === viewModelMember || typeof exportedValue !== "function") {
                  continue;
                }

                allMetadata = Metadata.on(exportedValue);
                resourceTypeMeta = allMetadata.first(ResourceType);

                if (resourceTypeMeta) {
                  if (!mainResource && resourceTypeMeta instanceof CustomElement) {
                    mainResource = new ResourceDescription(key, exportedValue, allMetadata, resourceTypeMeta);
                  } else {
                    resources.push(new ResourceDescription(key, exportedValue, allMetadata, resourceTypeMeta));
                  }
                } else if (exportedValue instanceof ViewStrategy) {
                  viewStrategy = exportedValue;
                } else {
                  if (conventional = CustomElement.convention(key)) {
                    if (!mainResource) {
                      mainResource = new ResourceDescription(key, exportedValue, allMetadata, conventional);
                    } else {
                      resources.push(new ResourceDescription(key, exportedValue, allMetadata, conventional));
                    }

                    allMetadata.add(conventional);
                  } else if (conventional = AttachedBehavior.convention(key)) {
                    resources.push(new ResourceDescription(key, exportedValue, allMetadata, conventional));
                    allMetadata.add(conventional);
                  } else if (conventional = TemplateController.convention(key)) {
                    resources.push(new ResourceDescription(key, exportedValue, allMetadata, conventional));
                    allMetadata.add(conventional);
                  } else if (conventional = ValueConverter.convention(key)) {
                    resources.push(new ResourceDescription(key, exportedValue, allMetadata, conventional));
                    allMetadata.add(conventional);
                  } else if (!fallbackValue) {
                    fallbackValue = exportedValue;
                    fallbackKey = key;
                    fallbackMetadata = allMetadata;
                  }
                }
              }

              if (!mainResource && fallbackValue) {
                mainResource = new ResourceDescription(fallbackKey, fallbackValue, fallbackMetadata);
              }

              resourceModule.id = moduleId;
              resourceModule.moduleInstance = moduleInstance;
              resourceModule.mainResource = mainResource;
              resourceModule.resources = resources;
              resourceModule.viewStrategy = viewStrategy;

              return resourceModule;
            }
          }
        });

        return ModuleAnalyzer;
      })());
    }
  };
});