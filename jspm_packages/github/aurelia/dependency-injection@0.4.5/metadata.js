System.register([], function (_export) {
  var _inherits, _createClass, _classCallCheck, Registration, Transient, Singleton, Resolver, Lazy, All, Optional, Parent;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      /**
      * An abstract annotation used to allow functions/classes to indicate how they should be registered with the container.
      *
      * @class Registration
      * @constructor
      */
      Registration = _export("Registration", (function () {
        function Registration() {
          _classCallCheck(this, Registration);
        }

        _createClass(Registration, {
          register: {
            /**
            * Called by the container to allow custom registration logic for the annotated function/class.
            *
            * @method register
            * @param {Container} container The container to register with.
            * @param {Object} key The key to register as.
            * @param {Object} fn The function to register (target of the annotation).
            */

            value: function register(container, key, fn) {
              throw new Error("A custom Registration must implement register(container, key, fn).");
            }
          }
        });

        return Registration;
      })());

      /**
      * An annotation used to allow functions/classes to indicate that they should be registered as transients with the container.
      *
      * @class Transient
      * @constructor
      * @extends Registration
      * @param {Object} [key] The key to register as.
      */
      Transient = _export("Transient", (function (_Registration) {
        function Transient(key) {
          _classCallCheck(this, Transient);

          this.key = key;
        }

        _inherits(Transient, _Registration);

        _createClass(Transient, {
          register: {

            /**
            * Called by the container to register the annotated function/class as transient.
            *
            * @method register
            * @param {Container} container The container to register with.
            * @param {Object} key The key to register as.
            * @param {Object} fn The function to register (target of the annotation).
            */

            value: function register(container, key, fn) {
              container.registerTransient(this.key || key, fn);
            }
          }
        });

        return Transient;
      })(Registration));

      /**
      * An annotation used to allow functions/classes to indicate that they should be registered as singletons with the container.
      *
      * @class Singleton
      * @constructor
      * @extends Registration
      * @param {Object} [key] The key to register as.
      */
      Singleton = _export("Singleton", (function (_Registration2) {
        function Singleton(keyOrRegisterInRoot) {
          var registerInRoot = arguments[1] === undefined ? false : arguments[1];

          _classCallCheck(this, Singleton);

          if (typeof keyOrRegisterInRoot === "boolean") {
            this.registerInRoot = keyOrRegisterInRoot;
          } else {
            this.key = keyOrRegisterInRoot;
            this.registerInRoot = registerInRoot;
          }
        }

        _inherits(Singleton, _Registration2);

        _createClass(Singleton, {
          register: {

            /**
            * Called by the container to register the annotated function/class as a singleton.
            *
            * @method register
            * @param {Container} container The container to register with.
            * @param {Object} key The key to register as.
            * @param {Object} fn The function to register (target of the annotation).
            */

            value: function register(container, key, fn) {
              var destination = this.registerInRoot ? container.root : container;
              destination.registerSingleton(this.key || key, fn);
            }
          }
        });

        return Singleton;
      })(Registration));

      /**
      * An abstract annotation used to allow functions/classes to specify custom dependency resolution logic.
      *
      * @class Resolver
      * @constructor
      */
      Resolver = _export("Resolver", (function () {
        function Resolver() {
          _classCallCheck(this, Resolver);
        }

        _createClass(Resolver, {
          get: {
            /**
            * Called by the container to allow custom resolution of dependencies for a function/class.
            *
            * @method get
            * @param {Container} container The container to resolve from.
            * @return {Object} Returns the resolved object.
            */

            value: function get(container) {
              throw new Error("A custom Resolver must implement get(container) and return the resolved instance(s).");
            }
          }
        });

        return Resolver;
      })());

      /**
      * An annotation used to allow functions/classes to specify lazy resolution logic.
      *
      * @class Lazy
      * @constructor
      * @extends Resolver
      * @param {Object} key The key to lazily resolve.
      */
      Lazy = _export("Lazy", (function (_Resolver) {
        function Lazy(key) {
          _classCallCheck(this, Lazy);

          this.key = key;
        }

        _inherits(Lazy, _Resolver);

        _createClass(Lazy, {
          get: {

            /**
            * Called by the container to lazily resolve the dependency into a lazy locator function.
            *
            * @method get
            * @param {Container} container The container to resolve from.
            * @return {Function} Returns a function which can be invoked at a later time to obtain the actual dependency.
            */

            value: function get(container) {
              var _this = this;

              return function () {
                return container.get(_this.key);
              };
            }
          }
        }, {
          of: {

            /**
            * Creates a Lazy Resolver for the supplied key.
            *
            * @method of
            * @static
            * @param {Object} key The key to lazily resolve.
            * @return {Lazy} Returns an insance of Lazy for the key.
            */

            value: function of(key) {
              return new Lazy(key);
            }
          }
        });

        return Lazy;
      })(Resolver));

      /**
      * An annotation used to allow functions/classes to specify resolution of all matches to a key.
      *
      * @class All
      * @constructor
      * @extends Resolver
      * @param {Object} key The key to lazily resolve all matches for.
      */
      All = _export("All", (function (_Resolver2) {
        function All(key) {
          _classCallCheck(this, All);

          this.key = key;
        }

        _inherits(All, _Resolver2);

        _createClass(All, {
          get: {

            /**
            * Called by the container to resolve all matching dependencies as an array of instances.
            *
            * @method get
            * @param {Container} container The container to resolve from.
            * @return {Object[]} Returns an array of all matching instances.
            */

            value: function get(container) {
              return container.getAll(this.key);
            }
          }
        }, {
          of: {

            /**
            * Creates an All Resolver for the supplied key.
            *
            * @method of
            * @static
            * @param {Object} key The key to resolve all instances for.
            * @return {All} Returns an insance of All for the key.
            */

            value: function of(key) {
              return new All(key);
            }
          }
        });

        return All;
      })(Resolver));

      /**
      * An annotation used to allow functions/classes to specify an optional dependency, which will be resolved only if already registred with the container.
      *
      * @class Optional
      * @constructor
      * @extends Resolver
      * @param {Object} key The key to optionally resolve for.
      * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
      */
      Optional = _export("Optional", (function (_Resolver3) {
        function Optional(key) {
          var checkParent = arguments[1] === undefined ? false : arguments[1];

          _classCallCheck(this, Optional);

          this.key = key;
          this.checkParent = checkParent;
        }

        _inherits(Optional, _Resolver3);

        _createClass(Optional, {
          get: {

            /**
            * Called by the container to provide optional resolution of the key.
            *
            * @method get
            * @param {Container} container The container to resolve from.
            * @return {Object} Returns the instance if found; otherwise null.
            */

            value: function get(container) {
              if (container.hasHandler(this.key, this.checkParent)) {
                return container.get(this.key);
              }

              return null;
            }
          }
        }, {
          of: {

            /**
            * Creates an Optional Resolver for the supplied key.
            *
            * @method of
            * @static
            * @param {Object} key The key to optionally resolve for.
            * @param {Boolean} [checkParent=false] Indicates whether or not the parent container hierarchy should be checked.
            * @return {Optional} Returns an insance of Optional for the key.
            */

            value: function of(key) {
              var checkParent = arguments[1] === undefined ? false : arguments[1];

              return new Optional(key, checkParent);
            }
          }
        });

        return Optional;
      })(Resolver));

      /**
      * An annotation used to inject the dependency from the parent container instead of the current one.
      *
      * @class Parent
      * @constructor
      * @extends Resolver
      * @param {Object} key The key to resolve from the parent container.
      */
      Parent = _export("Parent", (function (_Resolver4) {
        function Parent(key) {
          _classCallCheck(this, Parent);

          this.key = key;
        }

        _inherits(Parent, _Resolver4);

        _createClass(Parent, {
          get: {

            /**
            * Called by the container to load the dependency from the parent container
            *
            * @method get
            * @param {Container} container The container to resolve the parent from.
            * @return {Function} Returns the matching instance from the parent container
            */

            value: function get(container) {
              return container.parent ? container.parent.get(this.key) : null;
            }
          }
        }, {
          of: {

            /**
            * Creates a Parent Resolver for the supplied key.
            *
            * @method of
            * @static
            * @param {Object} key The key to resolve.
            * @return {Parent} Returns an insance of Parent for the key.
            */

            value: function of(key) {
              return new Parent(key);
            }
          }
        });

        return Parent;
      })(Resolver));
    }
  };
});