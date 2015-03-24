System.register([], function (_export) {
  var _createClass, _classCallCheck, View;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      //NOTE: Adding a fragment to the document causes the nodes to be removed from the fragment.
      //NOTE: Adding to the fragment, causes the nodes to be removed from the document.

      View = _export("View", (function () {
        function View(fragment, behaviors, bindings, children, systemControlled, contentSelectors) {
          _classCallCheck(this, View);

          this.fragment = fragment;
          this.behaviors = behaviors;
          this.bindings = bindings;
          this.children = children;
          this.systemControlled = systemControlled;
          this.contentSelectors = contentSelectors;
          this.firstChild = fragment.firstChild;
          this.lastChild = fragment.lastChild;
          this.isBound = false;
          this.isAttached = false;
        }

        _createClass(View, {
          created: {
            value: function created(executionContext) {
              var i,
                  ii,
                  behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].created(executionContext);
              }
            }
          },
          bind: {
            value: function bind(executionContext, systemUpdate) {
              var context, behaviors, bindings, children, i, ii;

              if (systemUpdate && !this.systemControlled) {
                context = this.executionContext || executionContext;
              } else {
                context = executionContext || this.executionContext;
              }

              if (this.isBound) {
                if (this.executionContext === context) {
                  return;
                }

                this.unbind();
              }

              this.isBound = true;
              this.executionContext = context;

              if (this.owner) {
                this.owner.bind(context);
              }

              bindings = this.bindings;
              for (i = 0, ii = bindings.length; i < ii; ++i) {
                bindings[i].bind(context);
              }

              behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].bind(context);
              }

              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].bind(context, true);
              }
            }
          },
          addBinding: {
            value: function addBinding(binding) {
              this.bindings.push(binding);

              if (this.isBound) {
                binding.bind(this.executionContext);
              }
            }
          },
          unbind: {
            value: function unbind() {
              var behaviors, bindings, children, i, ii;

              if (this.isBound) {
                this.isBound = false;

                if (this.owner) {
                  this.owner.unbind();
                }

                bindings = this.bindings;
                for (i = 0, ii = bindings.length; i < ii; ++i) {
                  bindings[i].unbind();
                }

                behaviors = this.behaviors;
                for (i = 0, ii = behaviors.length; i < ii; ++i) {
                  behaviors[i].unbind();
                }

                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].unbind();
                }
              }
            }
          },
          insertNodesBefore: {
            value: function insertNodesBefore(refNode) {
              var parent = refNode.parentNode;
              parent.insertBefore(this.fragment, refNode);
            }
          },
          appendNodesTo: {
            value: function appendNodesTo(parent) {
              parent.appendChild(this.fragment);
            }
          },
          removeNodes: {
            value: function removeNodes() {
              var start = this.firstChild,
                  end = this.lastChild,
                  fragment = this.fragment,
                  next;

              var current = start,
                  loop = true,
                  nodes = [];

              while (loop) {
                if (current === end) {
                  loop = false;
                }

                next = current.nextSibling;
                this.fragment.appendChild(current);
                current = next;
              }
            }
          },
          attached: {
            value: function attached() {
              var behaviors, children, i, ii;

              if (this.isAttached) {
                return;
              }

              this.isAttached = true;

              if (this.owner) {
                this.owner.attached();
              }

              behaviors = this.behaviors;
              for (i = 0, ii = behaviors.length; i < ii; ++i) {
                behaviors[i].attached();
              }

              children = this.children;
              for (i = 0, ii = children.length; i < ii; ++i) {
                children[i].attached();
              }
            }
          },
          detached: {
            value: function detached() {
              var behaviors, children, i, ii;

              if (this.isAttached) {
                this.isAttached = false;

                if (this.owner) {
                  this.owner.detached();
                }

                behaviors = this.behaviors;
                for (i = 0, ii = behaviors.length; i < ii; ++i) {
                  behaviors[i].detached();
                }

                children = this.children;
                for (i = 0, ii = children.length; i < ii; ++i) {
                  children[i].detached();
                }
              }
            }
          }
        });

        return View;
      })());
    }
  };
});