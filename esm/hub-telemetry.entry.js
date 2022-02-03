import { r as registerInstance, h as h$1, H as Host } from './index-9fca3863.js';
import { c as createCommonjsModule$1, a as commonjsGlobal, g as getAugmentedNamespace, b as getDefaultExportFromCjs, d as commonjsRequire } from './_commonjsHelpers-10467d11.js';

var dlv_umd = createCommonjsModule$1(function (module, exports) {
!function(t,n){module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t};}();
//# sourceMappingURL=dlv.umd.js.map
});

var c$1="undefined"!=typeof window;function a$3(t){return "function"==typeof t}function l$2(t){return "string"==typeof t}function y$2(t){return void 0===t}function s$2(t){return "boolean"==typeof t}function g(t){return "[object Array]"===Object.prototype.toString.call(t)}function b$1(t){if("object"!=typeof t||null===t)return !1;for(var n=t;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(t)===n}

function n$1(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function o$1(){if(c$1){var r=navigator,t=r.languages;return r.userLanguage||(t&&t.length?t[0]:r.language)}}function a$2(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}}function s$1(r){return function(e){for(var r,t=Object.create(null),o=/([^&=]+)=?([^&]*)/g;r=o.exec(e);){var a=n$1(r[1]),i=n$1(r[2]);"[]"===a.substring(a.length-2)?(t[a=a.substring(0,a.length-2)]||(t[a]=[])).push(i):t[a]=""===i||i;}for(var u in t){var c=u.split("[");c.length>1&&(m(t,c.map(function(e){return e.replace(/[?[\]\\ ]/g,"")}),t[u]),delete t[u]);}return t}(function(r){if(r){var t=r.match(/\?(.*)/);return t&&t[1]?t[1].split("#")[0]:""}return c$1&&window.location.search.substring(1)}(r))}function m(e,r,t){for(var n=r.length-1,o=0;o<n;++o){var a=r[o];if("__proto__"===a||"constructor"===a)break;a in e||(e[a]={}),e=e[a];}e[r[n]]=t;}function y$1(){for(var e="",r=0,t=4294967295*Math.random()|0;r++<36;){var n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[r-1],o=15&t;e+="-"==n||"4"==n?n:("x"==n?o:3&o|8).toString(16),t=r%8==0?4294967295*Math.random()|0:t>>4;}return e}

var l$1="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||void 0,e="undefined";function o(e){return l$1[e]}function f(e,o){return l$1[e]=o,o}function n(l){f(l);}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator$1(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator$1;

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty$1 = _defineProperty$2;

function ownKeys$2(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$2(source, true).forEach(function (key) {
        defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$2(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var objectSpread2$1 = _objectSpread2$2;

var FUNC = 'function';
var UNDEF = 'undefined';
var REDUCER = 'reducer';
var base = '@@redux/';
var ACTION_INIT = base + 'INIT';
var ACTION_TEST = base + Math.random().toString(36);

var $$observable =
/* #__PURE__ */
function () {
  return (typeof Symbol === "undefined" ? "undefined" : _typeof_1(Symbol)) === FUNC && Symbol.observable || '@@observable';
}();
/*
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


var msg = ' != ' + FUNC;
function createStore(reducer, preloadedState, enhancer) {
  if (_typeof_1(preloadedState) === FUNC && _typeof_1(enhancer) === UNDEF) {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (_typeof_1(enhancer) !== UNDEF) {
    if (_typeof_1(enhancer) !== FUNC) {
      throw new Error('enhancer' + msg);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (_typeof_1(reducer) !== FUNC) {
    throw new Error(REDUCER + msg);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /*
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    return currentState;
  }
  /*
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (_typeof_1(listener) !== FUNC) {
      throw new Error('Listener' + msg);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    /* // add default info to actions... 
    console.log('dispatch before', _action)
    const action = {
      ..._action,
      ...{
        action: {
          ..._action.action,
          ...{ customInfo: 'yoooo'} 
        }
      }
    }
    console.log('dispatch after', action)
    /** */
    if (!b$1(action)) {
      throw new Error('Act != obj');
    }

    if (_typeof_1(action.type) === UNDEF) {
      throw new Error('ActType ' + UNDEF);
    }

    if (isDispatching) {
      throw new Error('Dispatch in ' + REDUCER);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (_typeof_1(nextReducer) !== FUNC) {
      throw new Error('next ' + REDUCER + msg);
    }

    currentReducer = nextReducer;
    dispatch({
      type: ACTION_INIT
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var outerSubscribe = subscribe;
    return defineProperty$1({
      /*
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (_typeof_1(observer) !== 'object') {
          throw new TypeError('Observer != obj');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, $$observable, function () {
      return this;
    });
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ACTION_INIT
  });
  return defineProperty$1({
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, $$observable, observable);
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && actionType.toString() || '?';
  return 'action ' + actionName + REDUCER + ' ' + key + ' returns ' + UNDEF;
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ACTION_INIT
    });

    if (_typeof_1(initialState) === UNDEF || _typeof_1(reducer(undefined, {
      type: ACTION_TEST
    })) === UNDEF) {
      throw new Error(REDUCER + ' ' + key + ' ' + UNDEF);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (_typeof_1(reducers[key]) === FUNC) {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (_typeof_1(nextStateForKey) === UNDEF) {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, toConsumableArray(chain))(store.dispatch);
      return objectSpread2$1(objectSpread2$1({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

var LIBRARY_NAME = 'analytics';
var ID = 'userId';
var ANONID = 'anonymousId';
var ERROR_URL = 'https://lytics.dev/errors/';
var PREFIX = '__';

/**
 * Anonymous visitor Id localstorage key
 * @typedef {String} ANON_ID
 */

var ANON_ID = PREFIX + 'anon_id'; // __anon_id

/**
 * Visitor Id localstorage key
 * @typedef {String} USER_ID
 */

var USER_ID = PREFIX + 'user_id'; // __user_id

/**
 * Visitor traits localstorage key
 * @typedef {String} USER_TRAITS
 */

var USER_TRAITS = PREFIX + 'user_traits'; // __user_traits

var constants = /*#__PURE__*/Object.freeze({
  ANON_ID: ANON_ID,
  USER_ID: USER_ID,
  USER_TRAITS: USER_TRAITS
});

var coreEvents = [
/**
 * `bootstrap` - Fires when analytics library starts up.
 * This is the first event fired. '.on/once' listeners are not allowed on bootstrap
 * Plugins can attach logic to this event
 */
'bootstrap',
/**
 * `params` - Fires when analytics parses URL parameters
 */
'params',
/**
 * `campaign` - Fires if params contain "utm" parameters
 */
'campaign',
/**
 * `initializeStart` - Fires before 'initialize', allows for plugins to cancel loading of other plugins
 */
'initializeStart',
/**
 * `initialize` - Fires when analytics loads plugins
 */
'initialize',
/**
 * `initializeEnd` - Fires after initialize, allows for plugins to run logic after initialization methods run
 */
'initializeEnd',
/**
 * `ready` - Fires when all analytic providers are fully loaded. This waits for 'initialize' and 'loaded' to return true
 */
'ready',
/**
 * `resetStart` - Fires if analytic.reset() is called.
 * Use this event to cancel reset based on a specific condition
 */
'resetStart',
/**
 * `reset` - Fires if analytic.reset() is called.
 * Use this event to run custom cleanup logic (if needed)
 */
'reset',
/**
 * `resetEnd` - Fires after analytic.reset() is called.
 * Use this event to run a callback after user data is reset
 */
'resetEnd',
/******************
 * Page Events
 ******************/

/**
 * `pageStart` - Fires before 'page' events fire.
 *  This allows for dynamic page view cancellation based on current state of user or options passed in.
 */
'pageStart',
/**
 * `page` - Core analytics hook for page views.
 *  If your plugin or integration tracks page views, this is the event to fire on.
 */
'page',
/**
 * `pageEnd` - Fires after all registered 'page' methods fire.
 */
'pageEnd',
/**
 * `pageAborted` - Fires if 'page' call is cancelled by a plugin
 */
'pageAborted',
/****************
 * Track Events
 ***************/

/**
 * `trackStart` - Called before the 'track' events fires.
 *  This allows for dynamic page view cancellation based on current state of user or options passed in.
 */
'trackStart',
/**
 * `track` - Core analytics hook for event tracking.
 *  If your plugin or integration tracks custom events, this is the event to fire on.
 */
'track',
/**
 * `trackEnd` - Fires after all registered 'track' events fire from plugins.
 */
'trackEnd',
/**
 * `trackAborted` - Fires if 'track' call is cancelled by a plugin
 */
'trackAborted',
/******************
 * Identify Events
 ******************/

/**
 * `identifyStart` - Called before the 'identify' events fires.
 * This allows for dynamic page view cancellation based on current state of user or options passed in.
 */
'identifyStart',
/**
 * `identify` - Core analytics hook for user identification.
 *  If your plugin or integration identifies users or user traits, this is the event to fire on.
 */
'identify',
/**
 * `identifyEnd` - Fires after all registered 'identify' events fire from plugins.
 */
'identifyEnd',
/**
 * `identifyAborted` - Fires if 'track' call is cancelled by a plugin
 */
'identifyAborted',
/**
 * `userIdChanged` - Fires when a user id is updated
 */
'userIdChanged',
/******************
 * Plugin Events
 ******************/

/**
 * `registerPlugins` - Fires when analytics is registering plugins
 */
'registerPlugins',
/**
 * `enablePlugin` - Fires when 'analytics.plugins.enable()' is called
 */
'enablePlugin',
/**
 * `disablePlugin` - Fires when 'analytics.plugins.disable()' is called
 */
'disablePlugin',
/*
 * `loadPlugin` - Fires when 'analytics.loadPlugin()' is called
 */
// 'loadPlugin',

/******************
 * Browser activity events
 ******************/

/**
 * `online` - Fires when browser network goes online.
 * This fires only when coming back online from an offline state.
 */
'online',
/**
 * `offline` - Fires when browser network goes offline.
 */
'offline',
/******************
 * Storage events
 ******************/

/**
 * `setItemStart` - Fires when analytics.storage.setItem is initialized.
 * This event gives plugins the ability to intercept keys & values and alter them before they are persisted.
 */
'setItemStart',
/**
 * `setItem` - Fires when analytics.storage.setItem is called.
 * This event gives plugins the ability to intercept keys & values and alter them before they are persisted.
 */
'setItem',
/**
 * `setItemEnd` - Fires when setItem storage is complete.
 */
'setItemEnd',
/**
 * `setItemAborted` - Fires when setItem storage is cancelled by a plugin.
 */
'setItemAborted',
/**
 * `removeItemStart` - Fires when analytics.storage.removeItem is initialized.
 * This event gives plugins the ability to intercept removeItem calls and abort / alter them.
 */
'removeItemStart',
/**
 * `removeItem` - Fires when analytics.storage.removeItem is called.
 * This event gives plugins the ability to intercept removeItem calls and abort / alter them.
 */
'removeItem',
/**
 * `removeItemEnd` - Fires when removeItem storage is complete.
 */
'removeItemEnd',
/**
 * `removeItemAborted` - Fires when removeItem storage is cancelled by a plugin.
 */
'removeItemAborted'];
/* Keys on a plugin that are not considered events */

var nonEvents = ['name', 'EVENTS', 'config', 'loaded'];
var pluginEvents = {
  registerPluginType: function registerPluginType(name) {
    return "registerPlugin:".concat(name);
  },
  pluginReadyType: function pluginReadyType(name) {
    return "ready:".concat(name);
  }
};
var EVENTS = coreEvents.reduce(function (acc, curr) {
  acc[curr] = curr;
  return acc;
}, pluginEvents);
function isReservedAction(type) {
  return coreEvents.includes(type);
}

var utmRegex = /^utm_/;
var propRegex = /^an_prop_/;
var traitRegex = /^an_trait_/; // Middleware runs during EVENTS.initialize

function initializeMiddleware(instance) {
  var setItem = instance.storage.setItem;
  return function (store) {
    return function (next) {
      return function (action) {
        /* Handle bootstrap event */
        if (action.type === EVENTS.bootstrap) {
          var params = action.params,
              user = action.user,
              persistedUser = action.persistedUser,
              initialUser = action.initialUser;
          var isKnownId = persistedUser.userId === user.userId;
          /* 1. Set anonymous ID */

          if (persistedUser.anonymousId !== user.anonymousId) {
            setItem(ANON_ID, user.anonymousId);
          }
          /* 2. Set userId */


          if (!isKnownId) {
            setItem(USER_ID, user.userId);
          }
          /* 3. Set traits if they are different */


          if (initialUser.traits) {
            setItem(USER_TRAITS, objectSpread2$1(objectSpread2$1({}, isKnownId && persistedUser.traits ? persistedUser.traits : {}), initialUser.traits));
            /* TODO multi user setup
            setItem(`${USER_TRAITS}.${user.userId}`, {
              ...(isKnownId) ? existingTraits : {},
              ...initialUser.traits
            })
            */
          }
          /* 4. Parse url params */


          var paramsArray = Object.keys(action.params);

          if (paramsArray.length) {
            var an_uid = params.an_uid,
                an_event = params.an_event;
            var groupedParams = paramsArray.reduce(function (acc, key) {
              // match utm params & dclid (display) & gclid (cpc)
              if (key.match(utmRegex) || key.match(/^(d|g)clid/)) {
                var cleanName = key.replace(utmRegex, '');
                var keyName = cleanName === 'campaign' ? 'name' : cleanName;
                acc.campaign[keyName] = params[key];
              }

              if (key.match(propRegex)) {
                acc.props[key.replace(propRegex, '')] = params[key];
              }

              if (key.match(traitRegex)) {
                acc.traits[key.replace(traitRegex, '')] = params[key];
              }

              return acc;
            }, {
              campaign: {},
              props: {},
              traits: {}
            });
            store.dispatch(objectSpread2$1(objectSpread2$1({
              type: EVENTS.params,
              raw: params
            }, groupedParams), an_uid ? {
              userId: an_uid
            } : {}));
            /* If userId set, call identify */

            if (an_uid) {
              // timeout to debounce and make sure integration is registered. Todo refactor
              setTimeout(function () {
                return instance.identify(an_uid, groupedParams.traits);
              }, 0);
            }
            /* If tracking event set, call track */


            if (an_event) {
              // timeout to debounce and make sure integration is registered. Todo refactor
              setTimeout(function () {
                return instance.track(an_event, groupedParams.props);
              }, 0);
            } // if url has utm params


            if (Object.keys(groupedParams.campaign).length) {
              store.dispatch({
                type: EVENTS.campaign,
                campaign: groupedParams.campaign
              });
            }
          }
        }

        return next(action);
      };
    };
  };
}

/* user reducer */

function userReducer(storage) {
  return function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (action.type === EVENTS.setItemEnd) {
      // Set anonymousId if changed by storage.setItem
      if (action.key === ANON_ID) {
        return objectSpread2$1(objectSpread2$1({}, state), {
          anonymousId: action.value
        });
      } // Set userId if changed by storage.setItem


      if (action.key === USER_ID) {
        return objectSpread2$1(objectSpread2$1({}, state), {
          userId: action.value
        });
      }
    }

    switch (action.type) {
      case EVENTS.identify:
        return Object.assign({}, state, {
          userId: action.userId,
          traits: objectSpread2$1(objectSpread2$1({}, state.traits), action.traits)
        });

      case EVENTS.reset:
        // Side effect to fix race condition in Node. TODO refactor
        // This is from default storage.removeItem: (key) => globalContext[key] = undefined
        [USER_ID, ANON_ID, USER_TRAITS].forEach(function (key) {
          // sync storage, not instance.storage
          storage.removeItem(key);
        });
        return Object.assign({}, state, {
          userId: null,
          // TODO reset anon id automatically?
          anonymousId: null,
          traits: {}
        });

      default:
        return state;
    }
  };
}
function getPersistedUserData(storage) {
  return {
    userId: storage.getItem(USER_ID),
    anonymousId: storage.getItem(ANON_ID),
    traits: storage.getItem(USER_TRAITS)
  };
}
var tempKey = function tempKey(key) {
  return PREFIX + 'TEMP' + PREFIX + key;
};
function getUserPropFunc(storage) {
  return function getUserProp(key, instance, payload) {
    /* 1. Try current state */
    var currentId = instance.getState('user')[key];

    if (currentId) {
      /*
      console.log(`from state ${key}`, currentId)
      /** */
      return currentId;
    }
    /* 2. Try event payload */


    if (payload && b$1(payload) && payload[key]) {
      /*
      console.log(`from payload ${key}`, payload[key])
      /** */
      return payload[key];
    }
    /* 3. Try persisted data */


    var persistedInfo = getPersistedUserData(storage)[key];

    if (persistedInfo) {
      /*
      console.log(`from persistedInfo ${key}`, persistedInfo)
      /** */
      return persistedInfo;
    }
    /* 4. Else, try to get in memory placeholder. TODO watch this for future issues */


    return o(tempKey(key)) || null;
  };
}

function identifyMiddleware(instance) {
  var _instance$storage = instance.storage,
      setItem = _instance$storage.setItem,
      removeItem = _instance$storage.removeItem,
      getItem = _instance$storage.getItem;
  return function (store) {
    return function (next) {
      return function (action) {
        var userId = action.userId,
            traits = action.traits,
            options = action.options;
        /* Reset user id and traits */

        if (action.type === EVENTS.reset) {
          // Remove stored data
          [USER_ID, USER_TRAITS, ANON_ID].forEach(function (key) {
            // Fires async removeItem dispatch
            removeItem(key);
          });
          [ID, ANONID, 'traits'].forEach(function (key) {
            // Remove from global context
            n(tempKey(key));
          });
        }

        if (action.type === EVENTS.identify) {
          /* If no anon id. Set it! */
          if (!getItem(ANON_ID)) {
            setItem(ANON_ID, y$1());
          }

          var currentId = getItem(USER_ID);
          var currentTraits = getItem(USER_TRAITS) || {};

          if (currentId && currentId !== userId) {
            store.dispatch({
              type: EVENTS.userIdChanged,
              old: {
                userId: currentId,
                traits: currentTraits
              },
              "new": {
                userId: userId,
                traits: traits
              },
              options: options
            });
          }
          /* Save user id */


          if (userId) {
            setItem(USER_ID, userId);
          }
          /* Save user traits */


          if (traits) {
            setItem(USER_TRAITS, objectSpread2$1(objectSpread2$1({}, currentTraits), traits));
          }
        }

        return next(action);
      };
    };
  };
}

var stack = {};

function runCallback(id, payload) {
  if (stack[id] && a$3(stack[id])) {
    // console.log(`run ${id}`)
    stack[id](payload);
    delete stack[id];
  }
}

function waitForReady(data, predicate, timeout) {
  return new Promise(function (resolve, reject) {
    if (predicate()) {
      return resolve(data);
    } // Timeout. Add to queue


    if (timeout < 1) {
      return reject(objectSpread2$1(objectSpread2$1({}, data), {}, {
        queue: true
      })); // eslint-disable-line
    } // Else recursive retry


    return pause(10).then(function (_) {
      return waitForReady(data, predicate, timeout - 10).then(resolve, reject);
    });
  });
}

function pause(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

function processQueue(store, getPlugins, instance) {
  var pluginMethods = getPlugins();

  var _store$getState = store.getState(),
      plugins = _store$getState.plugins,
      context = _store$getState.context,
      queue = _store$getState.queue,
      user = _store$getState.user;

  var isOnline = !context.offline;
  /* If network connection found and there is items in queue, process them all */

  if (isOnline && queue && queue.actions && queue.actions.length) {
    var pipeline = queue.actions.reduce(function (acc, item, index) {
      var isLoaded = plugins[item.plugin].loaded;

      if (isLoaded) {
        acc.process.push(item);
        acc.processIndex.push(index);
      } else {
        acc.requeue.push(item);
        acc.requeueIndex.push(index);
      }

      return acc;
    }, {
      processIndex: [],
      process: [],
      requeue: [],
      requeueIndex: []
    });

    if (pipeline.processIndex && pipeline.processIndex.length) {
      pipeline.processIndex.forEach(function (i) {
        var processAction = queue.actions[i]; // console.log('RePROCESS THIS>', processAction)
        // Call methods directly right now

        var currentPlugin = processAction.plugin;
        var currentMethod = processAction.payload.type;
        var method = pluginMethods[currentPlugin][currentMethod];

        if (method && a$3(method)) {
          /* enrich queued payload with userId / anon id if missing */

          /* TODO hoist enrich into where action queued? */
          // console.log('before', processAction.payload)
          var enrichedPayload = enrich(processAction.payload, user); // console.log('user.userId', user.userId)
          // console.log('user.anonymousId', user.anonymousId)
          // console.log('after enrich', enrichedPayload)

          method({
            payload: enrichedPayload,
            config: plugins[currentPlugin].config,
            instance: instance
          });
          /* Then redispatch for .on listeners / other middleware */

          var pluginEvent = "".concat(currentMethod, ":").concat(currentPlugin);
          store.dispatch(objectSpread2$1(objectSpread2$1({}, enrichedPayload), {}, {
            type: pluginEvent,

            /* Internal data for analytics engine */
            _: {
              called: pluginEvent,
              from: 'queueDrain'
            }
          }));
        }
      });
      /* Removed processed actions */

      var reQueueActions = queue.actions.filter(function (value, index) {
        // note !~ === return pipeline.processIndex.indexOf(index) === -1
        return !~pipeline.processIndex.indexOf(index);
      });
      /* Set queue actions. TODO refactor to non mutatable or move out of redux */

      queue.actions = reQueueActions;
    }
  }
}
/* Heartbeat retries queued events */

function heartBeat(store, getPlugins, instance) {
  // 3e3 === 3000 ms
  return setInterval(function () {
    return processQueue(store, getPlugins, instance);
  }, 3e3);
} // Assign userId && anonymousId values if present in payload but null

function enrich() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var user = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return [ID, ANONID].reduce(function (acc, key) {
    if (payload.hasOwnProperty(key) && user[key] && user[key] !== payload[key]) {
      // console.log(`${key} stale update with ${user[key]}`)
      acc[key] = user[key];
    }

    return acc;
  }, payload);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function fitlerDisabledPlugins(allPlugins) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return Object.keys(allPlugins).filter(function (name) {
    var fromCallOptions = options.plugins || {}; // If enabled/disabled by options. Override settings

    if (s$2(fromCallOptions[name])) {
      return fromCallOptions[name];
    } // If all: false disable everything unless true explicitly set


    if (fromCallOptions.all === false) {
      return false;
    } // else use state.plugin settings


    if (settings[name] && settings[name].enabled === false) {
      return false;
    }

    return true;
  }).map(function (name) {
    return allPlugins[name];
  });
}

var endsWithStartRegex = /Start$/;
var bootstrapRegex = /^bootstrap/;
var readyRegex = /^ready/;
function runPlugins (_x, _x2, _x3, _x4, _x5) {
  return _ref.apply(this, arguments);
}
/**
 * Async reduce over matched plugin methods
 * Fires plugin functions
 */

function _ref() {
  _ref = asyncToGenerator(
  /*#__PURE__*/
  regenerator.mark(function _callee(action, getPlugins, instance, store, eventsInfo) {
    var pluginObject, originalType, updatedType, state, activePlugins, allActivePluginKeys, allMatches, actionBefore, actionDuring, afterName, actionAfter;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pluginObject = a$3(getPlugins) ? getPlugins() : getPlugins;
            originalType = action.type;
            updatedType = originalType.replace(endsWithStartRegex, '');
            /* If action already dispatched exit early. This makes it so plugin methods are not fired twice. */

            if (!(action._ && action._.called)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", action);

          case 5:
            state = instance.getState();
            /* Remove plugins that are disabled by options or by settings */

            activePlugins = fitlerDisabledPlugins(pluginObject, state.plugins, action.options);
            /* If analytics.plugin.enable calls do special behavior */

            if (originalType === EVENTS.initializeStart && action.fromEnable) {
              // Return list of all enabled plugins that have NOT been initialized yet
              activePlugins = Object.keys(state.plugins).filter(function (name) {
                var info = state.plugins[name];
                return action.plugins.includes(name) && !info.initialized;
              }).map(function (name) {
                return pluginObject[name];
              });
            } // console.log(`engine activePlugins ${action.type}`, activePlugins)


            allActivePluginKeys = activePlugins.map(function (p) {
              return p.name;
            }); // console.log('allActivePluginKeys', allActivePluginKeys)

            allMatches = getAllMatchingCalls(originalType, activePlugins); // console.log('allMatches', allMatches)

            /* @TODO cache matches and purge on enable/disable/add plugin */

            /**
             * Process all 'actionBefore' hooks
             * Example:
             *  This is processes 'pageStart' methods from plugins and update the event to send through the chain
             */

            _context.next = 12;
            return processEvent({
              action: action,
              data: {
                exact: allMatches.before,
                namespaced: allMatches.beforeNS
              },
              state: state,
              allPlugins: pluginObject,
              allMatches: allMatches,
              instance: instance,
              store: store,
              EVENTS: eventsInfo
            });

          case 12:
            actionBefore = _context.sent;

            if (!shouldAbortAll(actionBefore, allActivePluginKeys.length)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", actionBefore);

          case 15:
            if (!(originalType === updatedType)) {
              _context.next = 19;
              break;
            }

            /* If type the same don't double process */
            actionDuring = actionBefore;
            _context.next = 22;
            break;

          case 19:
            _context.next = 21;
            return processEvent({
              action: objectSpread2$1(objectSpread2$1({}, actionBefore), {}, {
                type: updatedType
              }),
              data: {
                exact: allMatches.during,
                namespaced: allMatches.duringNS
              },
              state: state,
              allPlugins: pluginObject,
              allMatches: allMatches,
              instance: instance,
              store: store,
              EVENTS: eventsInfo
            });

          case 21:
            actionDuring = _context.sent;

          case 22:
            if (!originalType.match(endsWithStartRegex)) {
              _context.next = 28;
              break;
            }

            afterName = "".concat(updatedType, "End");
            _context.next = 26;
            return processEvent({
              action: objectSpread2$1(objectSpread2$1({}, actionDuring), {}, {
                type: afterName
              }),
              data: {
                exact: allMatches.after,
                namespaced: allMatches.afterNS
              },
              state: state,
              allPlugins: pluginObject,
              allMatches: allMatches,
              instance: instance,
              store: store,
              EVENTS: eventsInfo
            });

          case 26:
            actionAfter = _context.sent;

            // console.log('____ actionAfter', actionAfter)

            /* Fire callback if supplied */
            if (actionAfter.meta && actionAfter.meta.hasCallback) {
              /*
              console.log('End of engine action has callback')
              console.log(actionAfter.meta)
              console.log('stack', stack)
              /** */
              // @TODO figure out exact args calls and .on will get
              runCallback(actionAfter.meta.rid, {
                payload: actionAfter
              });
            }

          case 28:
            return _context.abrupt("return", actionBefore);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

function processEvent(_x6) {
  return _processEvent.apply(this, arguments);
}

function _processEvent() {
  _processEvent = asyncToGenerator(
  /*#__PURE__*/
  regenerator.mark(function _callee5(_ref2) {
    var data, action, instance, state, allPlugins, allMatches, store, EVENTS$$1, plugins, context, method, isStartEvent, abortable, makeArgs, queueData, payloads, resolvedAction, endAction;
    return regenerator.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            data = _ref2.data, action = _ref2.action, instance = _ref2.instance, state = _ref2.state, allPlugins = _ref2.allPlugins, allMatches = _ref2.allMatches, store = _ref2.store, EVENTS$$1 = _ref2.EVENTS;
            plugins = state.plugins, context = state.context;
            method = action.type;
            isStartEvent = method.match(endsWithStartRegex); // console.log(`data ${method}`, data)
            // console.log(`data allMatches ${method}`, allMatches)

            abortable = data.exact.map(function (x) {
              return x.pluginName;
            });
            /* If abort is called from xyzStart */

            if (isStartEvent) {
              abortable = allMatches.during.map(function (x) {
                return x.pluginName;
              });
            }
            /* make args for functions to concume */


            makeArgs = argumentFactory(instance, abortable); // console.log('makeArgs', makeArgs)

            /* Check if plugin loaded, if not mark action for queue */

            queueData = data.exact.reduce(function (acc, thing) {
              var pluginName = thing.pluginName,
                  methodName = thing.methodName;
              var addToQueue = false; // Queue actions if plugin not loaded except for initialize and reset

              if (!methodName.match(/^initialize/) && !methodName.match(/^reset/)) {
                addToQueue = !plugins[pluginName].loaded;
              }
              /* If offline and its a core method. Add to queue */


              if (context.offline && methodName.match(/^(page|track|identify)/)) {
                addToQueue = true;
              }

              acc["".concat(pluginName)] = addToQueue;
              return acc;
            }, {});
            /* generate plugin specific payloads */

            _context5.next = 10;
            return data.exact.reduce(
            /*#__PURE__*/
            function () {
              var _ref6 = asyncToGenerator(
              /*#__PURE__*/
              regenerator.mark(function _callee3(scoped, curr, i) {
                var pluginName, curScope, scopedPayload;
                return regenerator.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        pluginName = curr.pluginName;
                        _context3.next = 3;
                        return scoped;

                      case 3:
                        curScope = _context3.sent;

                        if (!(data.namespaced && data.namespaced[pluginName])) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 7;
                        return data.namespaced[pluginName].reduce(
                        /*#__PURE__*/
                        function () {
                          var _ref7 = asyncToGenerator(
                          /*#__PURE__*/
                          regenerator.mark(function _callee2(acc, p, count) {
                            var curScopeData, genAbort, val, returnValue;
                            return regenerator.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    genAbort = function _ref8(currentAct, pname, otherPlug) {
                                      return function (reason, plugins) {
                                        var callsite = otherPlug || pname; // console.log(`__abort msg: ${reason}`)
                                        // console.log(`__abort ${pname}`)
                                        // console.log(`__abort xxx: ${plugins}`)
                                        // console.log(`__abort otherPlug`, otherPlug)

                                        return objectSpread2$1(objectSpread2$1({}, currentAct), {}, {
                                          abort: {
                                            reason: reason,
                                            plugins: plugins || [pname],
                                            caller: method,
                                            from: callsite
                                          }
                                        });
                                      };
                                    };

                                    _context2.next = 3;
                                    return acc;

                                  case 3:
                                    curScopeData = _context2.sent;

                                    if (!(!p.method || !a$3(p.method))) {
                                      _context2.next = 6;
                                      break;
                                    }

                                    return _context2.abrupt("return", curScopeData);

                                  case 6:
                                    /* Make sure plugins don’t call themselves */
                                    validateMethod(p.methodName, p.pluginName);
                                    _context2.next = 9;
                                    return p.method({
                                      payload: curScopeData,
                                      instance: instance,
                                      abort: genAbort(curScopeData, pluginName, p.pluginName),
                                      config: getConfig(p.pluginName, plugins, allPlugins),
                                      plugins: plugins
                                    });

                                  case 9:
                                    val = _context2.sent;
                                    returnValue = b$1(val) ? val : {};
                                    return _context2.abrupt("return", Promise.resolve(objectSpread2$1(objectSpread2$1({}, curScopeData), returnValue)));

                                  case 12:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));

                          return function (_x10, _x11, _x12) {
                            return _ref7.apply(this, arguments);
                          };
                        }(), Promise.resolve(action));

                      case 7:
                        scopedPayload = _context3.sent;

                        /* Set scoped payload */
                        curScope[pluginName] = scopedPayload;
                        _context3.next = 12;
                        break;

                      case 11:
                        /* Set payload as default action */
                        curScope[pluginName] = action;

                      case 12:
                        return _context3.abrupt("return", Promise.resolve(curScope));

                      case 13:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x7, _x8, _x9) {
                return _ref6.apply(this, arguments);
              };
            }(), Promise.resolve({}));

          case 10:
            payloads = _context5.sent;
            _context5.next = 13;
            return data.exact.reduce(
            /*#__PURE__*/
            function () {
              var _ref9 = asyncToGenerator(
              /*#__PURE__*/
              regenerator.mark(function _callee4(promise, curr, i) {
                var lastLoop, pluginName, currentPlugin, currentActionValue, payloadValue, funcArgs, val, returnValue, merged, scopedPayload, nameSpaceEvent, actionDepth, updatedPayload;
                return regenerator.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        lastLoop = data.exact.length === i + 1;
                        pluginName = curr.pluginName;
                        currentPlugin = allPlugins[pluginName];
                        _context4.next = 5;
                        return promise;

                      case 5:
                        currentActionValue = _context4.sent;
                        payloadValue = payloads[pluginName] ? payloads[pluginName] : {};
                        /* If eventStart, allow for value merging */

                        if (isStartEvent) {
                          payloadValue = currentActionValue;
                        }

                        if (!shouldAbort(payloadValue, pluginName)) {
                          _context4.next = 11;
                          break;
                        }

                        // console.log(`> Abort from payload specific "${pluginName}" abort value`, payloadValue)
                        abortDispatch({
                          data: payloadValue,
                          method: method,
                          instance: instance,
                          pluginName: pluginName,
                          store: store
                        });
                        return _context4.abrupt("return", Promise.resolve(currentActionValue));

                      case 11:
                        if (!shouldAbort(currentActionValue, pluginName)) {
                          _context4.next = 14;
                          break;
                        }

                        // console.log(`> Abort from ${method} abort value`, currentActionValue)
                        if (lastLoop) {
                          abortDispatch({
                            data: currentActionValue,
                            method: method,
                            instance: instance,
                            // pluginName,
                            store: store
                          });
                        }

                        return _context4.abrupt("return", Promise.resolve(currentActionValue));

                      case 14:
                        if (!(queueData.hasOwnProperty(pluginName) && queueData[pluginName] === true)) {
                          _context4.next = 17;
                          break;
                        }

                        // console.log('Queue this instead', pluginName)
                        store.dispatch({
                          type: "queue",
                          plugin: pluginName,
                          payload: payloadValue,

                          /* Internal data for analytics engine */
                          _: {
                            called: "queue",
                            from: 'queueMechanism' // for debugging

                          }
                        });
                        return _context4.abrupt("return", Promise.resolve(currentActionValue));

                      case 17:
                        /*
                        const checkForLoaded = () => {
                          const p = instance.getState('plugins')
                          return p[currentPlugin.name].loaded
                        }
                        // const p = instance.getState('plugins')
                        console.log(`loaded "${currentPlugin.name}" > ${method}:`, p[currentPlugin.name].loaded)
                        // await waitForReady(currentPlugin, checkForLoaded, 10000).then((d) => {
                        //   console.log(`Loaded ${method}`, currentPlugin.name)
                        // }).catch((e) => {
                        //   console.log(`Error ${method} ${currentPlugin.name}`, e)
                        //   // TODO dispatch failure
                        // })
                        */
                        // @TODO figure out if we want queuing semantics
                        funcArgs = makeArgs(payloads[pluginName], allPlugins[pluginName]); // console.log(`funcArgs ${method} ${pluginName}`, funcArgs)

                        /* Run the plugin function */

                        _context4.next = 20;
                        return currentPlugin[method]({
                          // currentPlugin: pluginName,
                          abort: funcArgs.abort,
                          // Send in original action value or scope payload
                          payload: payloadValue,
                          instance: instance,
                          config: getConfig(pluginName, plugins, allPlugins),
                          plugins: plugins
                        });

                      case 20:
                        val = _context4.sent;
                        returnValue = b$1(val) ? val : {};
                        merged = objectSpread2$1(objectSpread2$1({}, currentActionValue), returnValue);
                        scopedPayload = payloads[pluginName]; // || currentActionValue

                        if (shouldAbort(scopedPayload, pluginName)) {
                          // console.log(`>> HANDLE abort ${method} ${pluginName}`)
                          abortDispatch({
                            data: scopedPayload,
                            method: method,
                            instance: instance,
                            pluginName: pluginName,
                            store: store
                          });
                        } else {
                          nameSpaceEvent = "".concat(method, ":").concat(pluginName);
                          actionDepth = (nameSpaceEvent.match(/:/g) || []).length;

                          if (actionDepth < 2 && !method.match(bootstrapRegex) && !method.match(readyRegex)) {
                            updatedPayload = isStartEvent ? merged : payloadValue; // Dispatched for `.on('xyz') listeners.

                            instance.dispatch(objectSpread2$1(objectSpread2$1({}, updatedPayload), {}, {
                              type: nameSpaceEvent,
                              _: {
                                called: nameSpaceEvent,
                                from: 'submethod'
                              }
                            }));
                          }
                        } // console.log('merged', merged)


                        return _context4.abrupt("return", Promise.resolve(merged));

                      case 26:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x13, _x14, _x15) {
                return _ref9.apply(this, arguments);
              };
            }(), Promise.resolve(action));

          case 13:
            resolvedAction = _context5.sent;

            if (!(!method.match(endsWithStartRegex) && !method.match(/^registerPlugin/) && // !method.match(/^disablePlugin/) &&
            // !method.match(/^enablePlugin/) &&
            !method.match(readyRegex) && !method.match(bootstrapRegex) && !method.match(/^params/) && !method.match(/^userIdChanged/))) {
              _context5.next = 21;
              break;
            }

            if (EVENTS$$1.plugins.includes(method)) ; // console.log(`Dont dispatch for ${method}`, resolvedAction)
            // return resolvedAction

            /*
              Verify this original action setup.
              It's intended to keep actions from double dispatching themselves
            */


            if (!(resolvedAction._ && resolvedAction._.originalAction === method)) {
              _context5.next = 18;
              break;
            }

            return _context5.abrupt("return", resolvedAction);

          case 18:
            endAction = objectSpread2$1(objectSpread2$1({}, resolvedAction), {
              _: {
                originalAction: resolvedAction.type,
                called: resolvedAction.type,
                from: 'engineEnd'
              }
            });
            /* If all plugins are aborted, dispatch xAborted */

            if (shouldAbortAll(resolvedAction, data.exact.length) && !method.match(/End$/)) {
              endAction = objectSpread2$1(objectSpread2$1({}, endAction), {
                type: resolvedAction.type + 'Aborted'
              });
            }

            store.dispatch(endAction);

          case 21:
            return _context5.abrupt("return", resolvedAction);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _processEvent.apply(this, arguments);
}

function abortDispatch(_ref3) {
  var data = _ref3.data,
      method = _ref3.method,
      pluginName = _ref3.pluginName,
      store = _ref3.store;
  var postFix = pluginName ? ':' + pluginName : '';
  var abortEvent = method + 'Aborted' + postFix;
  store.dispatch(objectSpread2$1(objectSpread2$1({}, data), {}, {
    type: abortEvent,
    _: {
      called: abortEvent,
      from: 'abort'
    }
  }));
}

function getConfig(name, pluginState, allPlugins) {
  var pluginData = pluginState[name] || allPlugins[name];

  if (pluginData && pluginData.config) {
    return pluginData.config;
  }

  return {};
}

function getPluginFunctions(methodName, plugins) {
  return plugins.reduce(function (arr, plugin) {
    return !plugin[methodName] ? arr : arr.concat({
      methodName: methodName,
      pluginName: plugin.name,
      method: plugin[methodName]
    });
  }, []);
}

function formatMethod(type) {
  return type.replace(endsWithStartRegex, '');
}
/**
 * Return array of event names
 * @param  {String} eventType - original event type
 * @param  {String} namespace - optional namespace postfix
 * @return {array} - type, method, end
 */


function getEventNames(eventType, namespace) {
  var method = formatMethod(eventType);
  var postFix = namespace ? ":".concat(namespace) : ''; // `typeStart:pluginName`

  var type = "".concat(eventType).concat(postFix); // `type:pluginName`

  var methodName = "".concat(method).concat(postFix); // `typeEnd:pluginName`

  var end = "".concat(method, "End").concat(postFix);
  return [type, methodName, end];
}
/* Collect all calls for a given event in the system */


function getAllMatchingCalls(eventType, activePlugins, allPlugins) {
  var eventNames = getEventNames(eventType); // console.log('eventNames', eventNames)
  // 'eventStart', 'event', & `eventEnd`

  var core = eventNames.map(function (word) {
    return getPluginFunctions(word, activePlugins);
  }); // Gather nameSpaced Events

  return activePlugins.reduce(function (acc, plugin) {
    var name = plugin.name;
    var nameSpacedEvents = getEventNames(eventType, name); // console.log('eventNames namespaced', nameSpacedEvents)

    var _nameSpacedEvents$map = nameSpacedEvents.map(function (word) {
      return getPluginFunctions(word, activePlugins);
    }),
        _nameSpacedEvents$map2 = slicedToArray(_nameSpacedEvents$map, 3),
        beforeFuncs = _nameSpacedEvents$map2[0],
        duringFuncs = _nameSpacedEvents$map2[1],
        afterFuncs = _nameSpacedEvents$map2[2];

    if (beforeFuncs.length) {
      acc.beforeNS[name] = beforeFuncs;
    }

    if (duringFuncs.length) {
      acc.duringNS[name] = duringFuncs;
    }

    if (afterFuncs.length) {
      acc.afterNS[name] = afterFuncs;
    }

    return acc;
  }, {
    before: core[0],
    beforeNS: {},
    during: core[1],
    duringNS: {},
    after: core[2],
    afterNS: {}
  });
}

function shouldAbort(_ref4, pluginName) {
  var abort = _ref4.abort;
  if (!abort) return false;
  if (abort === true) return true;
  return includes(abort, pluginName) || abort && includes(abort.plugins, pluginName);
}

function shouldAbortAll(_ref5, pluginsCount) {
  var abort = _ref5.abort;
  if (!abort) return false;
  if (abort === true || l$2(abort)) return true;
  var plugins = abort.plugins;
  return isArray$1(abort) && abort.length === pluginsCount || isArray$1(plugins) && plugins.length === pluginsCount;
}

function isArray$1(arr) {
  return Array.isArray(arr);
}

function includes(arr, name) {
  if (!arr || !isArray$1(arr)) return false;
  return arr.includes(name);
}
/**
 * Generate arguments to pass to plugin methods
 * @param  {Object} instance - analytics instance
 * @param  {array} abortablePlugins - plugins that can be cancelled by caller
 * @return {*} function to inject plugin params
 */


function argumentFactory(instance, abortablePlugins) {
  // console.log('abortablePlugins', abortablePlugins)
  return function (action, plugin, otherPlugin) {
    var config = plugin.config,
        name = plugin.name;
    var method = "".concat(name, ".").concat(action.type);

    if (otherPlugin) {
      method = otherPlugin.event;
    }

    var abortF = action.type.match(endsWithStartRegex) ? abortFunction(name, method, abortablePlugins, otherPlugin, action) : notAbortableError(action, method);
    return {
      /* self: plugin, for future maybe */
      // clone objects to avoid reassign
      payload: formatPayload(action),
      instance: instance,
      config: config || {},
      abort: abortF
    };
  };
}

function abortFunction(pluginName, method, abortablePlugins, otherPlugin, action) {
  return function (reason, plugins) {
    var caller = otherPlugin ? otherPlugin.name : pluginName;
    var pluginsToAbort = plugins && isArray$1(plugins) ? plugins : abortablePlugins;

    if (otherPlugin) {
      pluginsToAbort = plugins && isArray$1(plugins) ? plugins : [pluginName];

      if (!pluginsToAbort.includes(pluginName) || pluginsToAbort.length !== 1) {
        throw new Error("Method ".concat(method, " can only abort ").concat(pluginName, " plugin. ").concat(JSON.stringify(pluginsToAbort), " input valid"));
      }
    }

    return objectSpread2$1(objectSpread2$1({}, action), {}, {
      // 🔥 todo verify this merge is ok
      abort: {
        reason: reason,
        plugins: pluginsToAbort,
        caller: method,
        _: caller
      }
    });
  };
}

function notAbortableError(action, method) {
  return function () {
    throw new Error(action.type + ' action not cancellable. Remove abort in ' + method);
  };
}
/**
 * Verify plugin is not calling itself with whatever:myPluginName self refs
 */


function validateMethod(actionName, pluginName) {
  var text = getNameSpacedAction(actionName);
  var methodCallMatchesPluginNamespace = text && text.name === pluginName;

  if (methodCallMatchesPluginNamespace) {
    var sub = getNameSpacedAction(text.method);
    var subText = sub ? 'or ' + sub.method : '';
    throw new Error([pluginName + ' plugin is calling method ' + actionName, 'Plugins cant call self', "Use ".concat(text.method, " ").concat(subText, " in ").concat(pluginName, " plugin insteadof ").concat(actionName)].join('\n'));
  }
}

function getNameSpacedAction(event) {
  var split = event.match(/(.*):(.*)/);

  if (!split) {
    return false;
  }

  return {
    method: split[1],
    name: split[2]
  };
}

function formatPayload(action) {
  return Object.keys(action).reduce(function (acc, key) {
    // redact type from { payload }
    if (key === 'type') {
      return acc;
    }

    if (b$1(action[key])) {
      acc[key] = Object.assign({}, action[key]);
    } else {
      acc[key] = action[key];
    }

    return acc;
  }, {});
}
/*
function getMatchingMethods(eventType, activePlugins) {
  const exact = getPluginFunctions(eventType, activePlugins)
  // console.log('exact', exact)
  // Gather nameSpaced Events
  return activePlugins.reduce((acc, plugin) => {
    const { name } = plugin
    const clean = getPluginFunctions(`${eventType}:${name}`, activePlugins)
    if (clean.length) {
      acc.namespaced[name] = clean
    }
    return acc
  }, {
    exact: exact,
    namespaced: {}
  })
}
*/

function pluginMiddleware(instance, getPlugins, systemEvents) {
  var isReady = {};
  return function (store) {
    return function (next) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = asyncToGenerator(
          /*#__PURE__*/
          regenerator.mark(function _callee(action) {
            var type, abort, plugins, updatedAction, allPlugins, pluginsArray, allRegisteredPlugins, completed, failed, disabled, waitForPluginsToLoad, updated;
            return regenerator.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    type = action.type, abort = action.abort, plugins = action.plugins;
                    updatedAction = action;

                    if (!abort) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", next(action));

                  case 4:
                    /* Analytics.plugins.enable called, we need to init the plugins */
                    if (type === EVENTS.enablePlugin) {
                      store.dispatch({
                        type: EVENTS.initializeStart,
                        plugins: plugins,
                        disabled: [],
                        fromEnable: true,
                        meta: action.meta
                      });
                    }

                    if (type === EVENTS.disablePlugin) {
                      // If cached callback, resolve promise/run callback. debounced to fix race condition
                      setTimeout(function () {
                        return runCallback(action.meta.rid, {
                          payload: action
                        });
                      }, 0);
                    }
                    /* @TODO implement
                    if (type === EVENTS.loadPlugin) {
                      // Rerun initialize calls in plugins
                      const allPlugins = getPlugins()
                      const pluginsToLoad = Object.keys(allPlugins).filter((name) => {
                        return plugins.includes(name)
                      }).reduce((acc, curr) => {
                        acc[curr] = allPlugins[curr]
                        return acc
                      }, {})
                      const initializeAction = {
                        type: EVENTS.initializeStart,
                        plugins: plugins
                      }
                      const updated = await runPlugins(initializeAction, pluginsToLoad, instance, store, systemEvents)
                      return next(updated)
                    }
                    */
                    //  || type.match(/^initializeAbort:/)


                    if (type === EVENTS.initializeEnd) {
                      allPlugins = getPlugins();
                      pluginsArray = Object.keys(allPlugins);
                      allRegisteredPlugins = pluginsArray.filter(function (name) {
                        return plugins.includes(name);
                      }).map(function (name) {
                        return allPlugins[name];
                      });
                      completed = [];
                      failed = [];
                      disabled = action.disabled; // console.log('allRegisteredPlugins', allRegisteredPlugins)

                      waitForPluginsToLoad = allRegisteredPlugins.map(function (plugin) {
                        var loaded = plugin.loaded,
                            name = plugin.name;
                        /* Plugins will abort trying to load after 10 seconds. 1e4 === 10000 MS */

                        return waitForReady(plugin, loaded, 1e4).then(function (d) {
                          if (!isReady[name]) {
                            // only dispatch namespaced rdy once
                            store.dispatch({
                              type: EVENTS.pluginReadyType(name),
                              // `ready:${name}`
                              name: name,
                              events: Object.keys(plugin).filter(function (name) {
                                return !nonEvents.includes(name);
                              })
                            });
                            isReady[name] = true;
                          }

                          completed = completed.concat(name);
                          return plugin; // It's loaded! run the command
                        })["catch"](function (e) {
                          // Timeout Add to queue
                          // console.log('Error generic waitForReady. Push this to queue', e)
                          if (e instanceof Error) {
                            throw new Error(e);
                          }

                          failed = failed.concat(e.name); // Failed to fire, add to queue

                          return e;
                        });
                      });
                      Promise.all(waitForPluginsToLoad).then(function (calls) {
                        // setTimeout to ensure runs after 'page'
                        var payload = {
                          plugins: completed,
                          failed: failed,
                          disabled: disabled
                        };
                        setTimeout(function () {
                          if (pluginsArray.length === waitForPluginsToLoad.length + disabled.length) {
                            store.dispatch(objectSpread2$1(objectSpread2$1({}, {
                              type: EVENTS.ready
                            }), payload));
                          }
                        }, 0);
                      });
                    }
                    /* New plugin system */


                    if (!(type !== EVENTS.bootstrap)) {
                      _context.next = 13;
                      break;
                    }

                    if (/^ready:([^:]*)$/.test(type)) {
                      // Immediately flush queue
                      setTimeout(function () {
                        return processQueue(store, getPlugins, instance);
                      }, 0);
                    }

                    _context.next = 11;
                    return runPlugins(action, getPlugins, instance, store, systemEvents);

                  case 11:
                    updated = _context.sent;
                    return _context.abrupt("return", next(updated));

                  case 13:
                    return _context.abrupt("return", next(updatedAction));

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };
  };
}

function storageMiddleware(storage) {
  return function (store) {
    return function (next) {
      return function (action) {
        var type = action.type,
            key = action.key,
            value = action.value,
            options = action.options;

        if (type === EVENTS.setItem || type === EVENTS.removeItem) {
          if (action.abort) {
            return next(action);
          } // Run storage set or remove


          if (type === EVENTS.setItem) {
            storage.setItem(key, value, options);
          } else {
            storage.removeItem(key, options);
          }
        }

        return next(action);
      };
    };
  };
}
/*
  Todo: emit events for keys we care about
  window.addEventListener('storage', (event) => console.log(event));
*/

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

/* Class to fix dynamic middlewares from conflicting with each other
if more than one analytic instance is active */

var DynamicMiddleware = function DynamicMiddleware() {
  var _this = this;

  classCallCheck(this, DynamicMiddleware);

  defineProperty$1(this, "before", []);

  defineProperty$1(this, "after", []);

  defineProperty$1(this, "addMiddleware", function (middlewares, position) {
    _this[position] = _this[position].concat(middlewares);
  });

  defineProperty$1(this, "removeMiddleware", function (middleware, position) {
    var index = _this[position].findIndex(function (d) {
      return d === middleware;
    });

    if (index === -1) return;
    _this[position] = [].concat(toConsumableArray(_this[position].slice(0, index)), toConsumableArray(_this[position].slice(index + 1)));
  });

  defineProperty$1(this, "dynamicMiddlewares", function (position) {
    return function (store) {
      return function (next) {
        return function (action) {
          var middlewareAPI = {
            getState: store.getState,
            dispatch: function dispatch(act) {
              return store.dispatch(act);
            }
          };

          var chain = _this[position].map(function (middleware) {
            return middleware(middlewareAPI);
          });

          return compose.apply(void 0, toConsumableArray(chain))(next)(action);
        };
      };
    };
  });
};

function createReducer(getPlugins) {
  return function plugins() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments.length > 1 ? arguments[1] : undefined;
    var newState = {};

    if (action.type === 'initialize:aborted') {
      return state;
    }

    if (/^registerPlugin:([^:]*)$/.test(action.type)) {
      var name = getNameFromEventType(action.type, 'registerPlugin');
      var plugin = getPlugins()[name];

      if (!plugin || !name) {
        return state;
      }

      var isEnabled = action.enabled;
      newState[name] = {
        enabled: isEnabled,

        /* if no initialization method. Set initialized true */
        initialized: isEnabled ? Boolean(!plugin.initialize) : false,

        /* If plugin enabled === false, set loaded to false, else check plugin.loaded function */
        loaded: isEnabled ? Boolean(plugin.loaded()) : false,
        config: plugin.config || {}
      };
      return objectSpread2$1(objectSpread2$1({}, state), newState);
    }

    if (/^initialize:([^:]*)$/.test(action.type)) {
      var _name = getNameFromEventType(action.type, EVENTS.initialize);

      var _plugin = getPlugins()[_name];

      if (!_plugin || !_name) {
        return state;
      }

      newState[_name] = objectSpread2$1(objectSpread2$1({}, state[_name]), {
        initialized: true,

        /* check plugin.loaded function */
        loaded: Boolean(_plugin.loaded())
      });
      return objectSpread2$1(objectSpread2$1({}, state), newState);
    }

    if (/^ready:([^:]*)$/.test(action.type)) {
      // const name = getNameFromEventType(action.type, 'ready')
      newState[action.name] = objectSpread2$1(objectSpread2$1({}, state[action.name]), {
        loaded: true
      });
      return objectSpread2$1(objectSpread2$1({}, state), newState);
    }

    switch (action.type) {
      /* case EVENTS.pluginFailed:
        // console.log('PLUGIN_FAILED', action.name)
        newState[action.name] = {
          ...state[action.name],
          ...{ loaded: false }
        }
        return { ...state, ...newState }
      */

      /* When analytics.plugins.disable called */
      case EVENTS.disablePlugin:
        return objectSpread2$1(objectSpread2$1({}, state), togglePluginStatus(action.plugins, false, state));

      /* When analytics.plugins.enable called */

      case EVENTS.enablePlugin:
        return objectSpread2$1(objectSpread2$1({}, state), togglePluginStatus(action.plugins, true, state));

      default:
        return state;
    }
  };
}

function getNameFromEventType(type, baseName) {
  return type.substring(baseName.length + 1, type.length);
}

function togglePluginStatus(plugins, status, currentState) {
  return plugins.reduce(function (acc, pluginKey) {
    acc[pluginKey] = objectSpread2$1(objectSpread2$1({}, currentState[pluginKey]), {
      enabled: status
    });
    return acc;
  }, currentState);
}

function serialize(obj) {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (err) {}

  return obj;
}

var initialState = {
  last: {},
  history: [] // track reducer

};
function trackReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      event = action.event,
      properties = action.properties,
      options = action.options,
      meta = action.meta;

  switch (type) {
    case EVENTS.track:
      var trackEvent = serialize(objectSpread2$1(objectSpread2$1({
        event: event,
        properties: properties
      }, Object.keys(options).length && {
        options: options
      }), {}, {
        meta: meta
      }));
      return objectSpread2$1(objectSpread2$1({}, state), {
        last: trackEvent,
        // Todo prevent LARGE arrays https://bit.ly/2MnBwPT
        history: state.history.concat(trackEvent)
      });

    default:
      return state;
  }
}

/*
TODO figure out if this should live in state...
Queue could be in mermory as well.
But also needs to be persisted to storage
*/

var initialState$1 = {
  actions: []
};
function queueReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case 'queue':
      var actionChain;
      /* prioritize identify in event queue */

      if (payload && payload.type && payload.type === EVENTS.identify) {
        actionChain = [action].concat(state.actions);
      } else {
        actionChain = state.actions.concat(action);
      }

      return objectSpread2$1(objectSpread2$1({}, state), {}, {
        actions: actionChain
      });

    case 'dequeue':
      return [];
    // todo push events to history

    default:
      return state;
  }
}

var hashRegex = /#.*$/;

function canonicalUrl() {
  if (!c$1) return;
  var tags = document.getElementsByTagName('link');

  for (var i = 0, tag; tag = tags[i]; i++) {
    if (tag.getAttribute('rel') === 'canonical') {
      return tag.getAttribute('href');
    }
  }
}

function urlPath(url) {
  var regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g;
  var matches = regex.exec(url);
  var pathMatch = matches && matches[3] ? matches[3].split('?')[0].replace(hashRegex, '') : '';
  return '/' + pathMatch;
}
/**
 * Return the canonical URL and rmove the hash.
 * @param  {string} search - search param
 * @return {string} return current canonical URL
 */


function currentUrl(search) {
  var canonical = canonicalUrl();
  if (!canonical) return window.location.href.replace(hashRegex, '');
  return canonical.match(/\?/) ? canonical : canonical + search;
}
/**
 * Page data for overides
 * @typedef {object} PageData
 * @property {string} [title] - Page title
 * @property {string} [url] - Page url
 * @property {string} [path] - Page path
 * @property {string} [search] - Page search
 * @property {string} [width] - Page width
 * @property {string} [height] - Page height
*/

/**
 * Get information about current page
 * @typedef {Function} getPageData
 * @param  {PageData} [pageData = {}] - Page data overides
 * @return {PageData} resolved page data
 */


var getPageData = function getPageData() {
  var pageData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!c$1) return pageData;
  var _document = document,
      title = _document.title,
      referrer = _document.referrer;
  var _window = window,
      location = _window.location,
      innerWidth = _window.innerWidth,
      innerHeight = _window.innerHeight;
  var hash = location.hash,
      search = location.search;
  var url = currentUrl(search);
  var page = {
    title: title,
    url: url,
    path: urlPath(url),
    hash: hash,
    search: search,
    width: innerWidth,
    height: innerHeight
  };

  if (referrer && referrer !== '') {
    page.referrer = referrer;
  }

  return objectSpread2$1(objectSpread2$1({}, page), pageData);
};
var initialState$2 = {
  last: {},
  history: [] // page reducer

};
function page() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$2;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var properties = action.properties,
      options = action.options,
      meta = action.meta;

  switch (action.type) {
    case EVENTS.page:
      var viewData = serialize(objectSpread2$1({
        properties: properties,
        meta: meta
      }, Object.keys(options).length && {
        options: options
      }));
      return objectSpread2$1(objectSpread2$1({}, state), {
        last: viewData,
        // Todo prevent LARGE arrays https://bit.ly/2MnBwPT
        history: state.history.concat(viewData)
      });

    default:
      return state;
  }
}

// TODO fix os. os getting stripped out for node build

function getBrowserOS() {
  if (!c$1) return false;
  var os = navigator.appVersion; // ~os bitwise operator to check if in navigator

  if (~os.indexOf('Win')) return 'Windows';
  if (~os.indexOf('Mac')) return 'MacOS';
  if (~os.indexOf('X11')) return 'UNIX';
  if (~os.indexOf('Linux')) return 'Linux'; // default

  return 'Unknown OS';
}

var osName;
var referrer;
var locale;
var timeZone;

{
  osName = getBrowserOS();
  referrer = c$1 ? document.referrer : null;
  locale = o$1();
  timeZone = a$2();
}

var initialState$3 = {
  initialized: false,
  sessionId: y$1(),
  app: null,
  version: null,
  debug: false,
  offline: c$1 ? !navigator.onLine : false,
  // use node network is-online
  os: {
    name: osName
  },
  userAgent: c$1 ? navigator.userAgent : 'node',
  // https://github.com/bestiejs/platform.js
  library: {
    name: LIBRARY_NAME,
    // TODO fix version number. npm run publish:patch has wrong version
    version: "0.10.17"
  },
  timezone: timeZone,
  locale: locale,
  campaign: {},
  referrer: referrer // context reducer

};
function context() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$3;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var initialized = state.initialized;
  var type = action.type,
      campaign = action.campaign;

  switch (type) {
    case EVENTS.campaign:
      return objectSpread2$1(objectSpread2$1({}, state), {
        campaign: campaign
      });

    case EVENTS.offline:
      return objectSpread2$1(objectSpread2$1({}, state), {
        offline: true
      });

    case EVENTS.online:
      return objectSpread2$1(objectSpread2$1({}, state), {
        offline: false
      });

    default:
      if (!initialized) {
        return objectSpread2$1(objectSpread2$1(objectSpread2$1({}, initialState$3), state), {
          initialized: true
        });
      }

      return state;
  }
}
var excludeItems = ['plugins', 'reducers', 'storage']; // Pull plugins and reducers off intital config

function makeContext(config) {
  return Object.keys(config).reduce(function (acc, current) {
    if (excludeItems.includes(current)) {
      return acc;
    }

    acc[current] = config[current];
    return acc;
  }, {});
}

function listen(events, func, toAdd) {
  if (!c$1) return;
  var fn = window[(toAdd ? 'add' : 'remove') + 'EventListener'];
  events.split(' ').forEach(function (ev) {
    fn(ev, func);
  });
}

function check() {
  return Promise.resolve(!navigator.onLine);
}
function watch(cb) {
  var fn = function fn(_) {
    return check().then(cb);
  };

  var listener = listen.bind(null, 'online offline', fn);
  listener(true); // return unsubscribe function

  return function (_) {
    return listener(false);
  };
}

function Debug() {
  // initialize global history
  var globalVariable = PREFIX + LIBRARY_NAME + PREFIX; // Global key is window.__analytics__

  f(globalVariable, []); // Return debugger

  return function (createStore$$1) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore$$1(reducer, preloadedState, enhancer);
      var origDispatch = store.dispatch;

      var dispatch = function dispatch(action) {
        var a = action.action || action;
        l$1[globalVariable].push(a);
        return origDispatch(action);
      };

      return Object.assign(store, {
        dispatch: dispatch
      });
    };
  };
}
function composeWithDebug(config) {
  return function () {
    return compose(compose.apply(null, arguments), Debug());
  };
}

function ensureArray(singleOrArray) {
  if (!singleOrArray) return [];
  if (g(singleOrArray)) return singleOrArray;
  return [singleOrArray];
}

/**
 * Grab first function found from arguments
 * @param {array} [argArray] - arguments array to find first function
 * @returns {Function|undefined}
 */

function getCallbackFromArgs(argArray) {
  var args = argArray || Array.prototype.slice.call(arguments);
  var cb;

  for (var i = 0; i < args.length; i++) {
    if (a$3(args[i])) {
      cb = args[i];
      break;
    }
  }

  return cb;
}

function timeStamp() {
  return new Date().getTime();
}

function deferredPromiseResolver(resolver, callback) {
  return function (data) {
    if (callback) callback(data);
    resolver(data);
  };
}

function generateMeta() {
  var meta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var resolve = arguments.length > 1 ? arguments[1] : undefined;
  var possibleCallbacks = arguments.length > 2 ? arguments[2] : undefined;
  var rid = y$1();

  if (resolve) {
    // stack[`${rid}-info`] = meta
    stack[rid] = deferredPromiseResolver(resolve, getCallbackFromArgs(possibleCallbacks));
  }

  return objectSpread2$1(objectSpread2$1({}, meta), {}, {
    rid: rid,
    ts: timeStamp()
  }, !resolve ? {} : {
    hasCallback: true
  });
}

/**
 * Analytics library configuration
 *
 * After the library is initialized with config, the core API is exposed & ready for use in the application.
 *
 * @param {object} config - analytics core config
 * @param {string} [config.app] - Name of site / app
 * @param {string} [config.version] - Version of your app
 * @param {boolean} [config.debug] - Should analytics run in debug mode
 * @param {Array.<AnalyticsPlugin>}  [config.plugins] - Array of analytics plugins
 * @return {AnalyticsInstance} Analytics Instance
 * @example
 *
 * import Analytics from 'analytics'
 * import pluginABC from 'analytics-plugin-abc'
 * import pluginXYZ from 'analytics-plugin-xyz'
 *
 * // initialize analytics
 * const analytics = Analytics({
 *   app: 'my-awesome-app',
 *   plugins: [
 *     pluginABC,
 *     pluginXYZ
 *   ]
 * })
 *
 */

function analytics() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var customReducers = config.reducers || {};
  var initialUser = config.initialUser || {}; // @TODO add custom value reolvers for userId and anonId
  // const resolvers = config.resolvers || {}

  /* Parse plugins array */

  var parsedOptions = (config.plugins || []).reduce(function (acc, plugin) {
    if (a$3(plugin)) {
      /* Custom redux middleware */
      acc.middlewares = acc.middlewares.concat(plugin);
      return acc;
    } // Legacy plugin with name


    if (plugin.NAMESPACE) plugin.name = plugin.NAMESPACE;

    if (!plugin.name) {
      /* Plugins must supply a "name" property. See error url for more details */
      throw new Error(ERROR_URL + '1');
    } // if plugin exposes EVENTS capture available events


    var definedEvents = plugin.EVENTS ? Object.keys(plugin.EVENTS).map(function (k) {
      return plugin.EVENTS[k];
    }) : [];
    var enabledFromMerge = !(plugin.enabled === false);
    var enabledFromPluginConfig = !(plugin.config && plugin.config.enabled === false); // top level { enabled: false } takes presidence over { config: enabled: false }

    acc.pluginEnabled[plugin.name] = enabledFromMerge && enabledFromPluginConfig;
    delete plugin.enabled;

    if (plugin.methods) {
      acc.methods[plugin.name] = Object.keys(plugin.methods).reduce(function (a, c) {
        // enrich methods with analytics instance
        a[c] = appendArguments(plugin.methods[c]);
        return a;
      }, {}); // Remove additional methods from plugins

      delete plugin.methods;
    } // Convert available methods into events


    var methodsToEvents = Object.keys(plugin); // Combine events

    var allEvents = methodsToEvents.concat(definedEvents); // Dedupe events list

    var allEventsUnique = new Set(acc.events.concat(allEvents));
    acc.events = Array.from(allEventsUnique);
    acc.pluginsArray = acc.pluginsArray.concat(plugin);

    if (acc.plugins[plugin.name]) {
      throw new Error(plugin.name + 'AlreadyLoaded');
    }

    acc.plugins[plugin.name] = plugin;

    if (!acc.plugins[plugin.name].loaded) {
      // set default loaded func
      acc.plugins[plugin.name].loaded = function () {
        return true;
      };
    }

    return acc;
  }, {
    plugins: {},
    pluginEnabled: {},
    methods: {},
    pluginsArray: [],
    middlewares: [],
    events: []
  });
  /* Storage by default is set to global & is not persisted */

  var storage = config.storage ? config.storage : {
    getItem: o,
    setItem: f,
    removeItem: n
  };
  var getUserProp = getUserPropFunc(storage); // mutable intregrations object for dynamic loading

  var customPlugins = parsedOptions.plugins;
  /* Grab all registered events from plugins loaded */

  var allPluginEvents = parsedOptions.events.filter(function (name) {
    return !nonEvents.includes(name);
  }).sort();
  var uniqueEvents = new Set(allPluginEvents.concat(coreEvents).filter(function (name) {
    return !nonEvents.includes(name);
  }));
  var allSystemEvents = Array.from(uniqueEvents).sort();
  /* plugin methods(functions) must be kept out of state. thus they live here */

  var getPlugins = function getPlugins() {
    return customPlugins;
  };

  var _ref = new DynamicMiddleware(),
      addMiddleware = _ref.addMiddleware,
      removeMiddleware = _ref.removeMiddleware,
      dynamicMiddlewares = _ref.dynamicMiddlewares;

  var nonAbortable = function nonAbortable() {
    // throw new Error(`${ERROR_URL}3`)
    throw new Error('Abort disabled inListener');
  }; // Parse URL parameters


  var params = s$1(); // Initialize visitor information

  var persistedUser = getPersistedUserData(storage);

  var visitorInfo = objectSpread2$1(objectSpread2$1(objectSpread2$1(objectSpread2$1({}, persistedUser), initialUser), !params.an_uid ? {} : {
    userId: params.an_uid
  }), !params.an_aid ? {} : {
    anonymousId: params.an_aid
  }); // If no anon id set, create one


  if (!visitorInfo.anonymousId) {
    visitorInfo.anonymousId = y$1();
  }
  /**
   * Async Management methods for plugins. 
   * 
   * This is also where [custom methods](https://bit.ly/329vFXy) are loaded into the instance.
   * @typedef {Object} Plugins
   * @property {EnablePlugin} enable - Set storage value
   * @property {DisablePlugin} disable - Remove storage value
   * @example
   *
   * // Enable a plugin by namespace
   * analytics.plugins.enable('keenio')
   *
   * // Disable a plugin by namespace
   * analytics.plugins.disable('google-analytics')
   */


  var plugins = objectSpread2$1({
    /**
     * Enable analytics plugin
     * @typedef {Function} EnablePlugin
     * @param  {string|string[]} plugins - name of plugins(s) to disable
     * @param  {Function} [callback] - callback after enable runs
     * @returns {Promise}
     * @example
     *
     * analytics.plugins.enable('google-analytics').then(() => {
     *   console.log('do stuff')
     * })
     *
     * // Enable multiple plugins at once
     * analytics.plugins.enable(['google-analytics', 'segment']).then(() => {
     *   console.log('do stuff')
     * })
     */
    enable: function enable(plugins, callback) {
      return new Promise(function (resolve) {
        store.dispatch({
          type: EVENTS.enablePlugin,
          plugins: ensureArray(plugins),
          _: {
            originalAction: EVENTS.enablePlugin
          }
        }, resolve, [callback]);
      });
    },

    /**
     * Disable analytics plugin
     * @typedef {Function} DisablePlugin
     * @param  {string|string[]} plugins - name of integration(s) to disable
     * @param  {Function} callback - callback after disable runs
     * @returns {Promise}
     * @example
     *
     * analytics.plugins.disable('google').then(() => {
     *   console.log('do stuff')
     * })
     *
     * analytics.plugins.disable(['google', 'segment']).then(() => {
     *   console.log('do stuff')
     * })
     */
    disable: function disable(plugins, callback) {
      return new Promise(function (resolve) {
        store.dispatch({
          type: EVENTS.disablePlugin,
          plugins: ensureArray(plugins),
          _: {
            originalAction: EVENTS.disablePlugin
          }
        }, resolve, [callback]);
      });
    }
  }, parsedOptions.methods);
  /**
   * Analytic instance returned from initialization
   * @typedef {Object} AnalyticsInstance
   * @property {Identify} identify - Identify a user
   * @property {Track} track - Track an analytics event
   * @property {Page} page - Trigger page view
   * @property {User} user - Get user data
   * @property {Reset} reset - Clear information about user & reset analytics
   * @property {Ready} ready - Fire callback on analytics ready event
   * @property {On} on - Fire callback on analytics lifecycle events.
   * @property {Once} once - Fire callback on analytics lifecycle events once.
   * @property {GetState} getState - Get data about user, activity, or context.
   * @property {Storage} storage - storage methods
   * @property {Plugins} plugins - plugin methods
   */


  var instance = {
    /**
    * Identify a user. This will trigger `identify` calls in any installed plugins and will set user data in localStorage
    * @typedef {Function} Identify
    * @param  {String}   userId  - Unique ID of user
    * @param  {Object}   [traits]  - Object of user traits
    * @param  {Object}   [options] - Options to pass to identify call
    * @param  {Function} [callback] - Callback function after identify completes
    * @returns {Promise}
    * @api public
    *
    * @example
    *
    * // Basic user id identify
    * analytics.identify('xyz-123')
    *
    * // Identify with additional traits
    * analytics.identify('xyz-123', {
    *   name: 'steve',
    *   company: 'hello-clicky'
    * })
    *
    * // Fire callback with 2nd or 3rd argument
    * analytics.identify('xyz-123', () => {
    *   console.log('do this after identify')
    * })
    *
    * // Disable sending user data to specific analytic tools
    * analytics.identify('xyz-123', {}, {
    *   plugins: {
    *     // disable sending this identify call to segment
    *     segment: false
    *   }
    * })
    *
    * // Send user data to only to specific analytic tools
    * analytics.identify('xyz-123', {}, {
    *   plugins: {
    *     // disable this specific identify in all plugins except customerio
    *     all: false,
    *     customerio: true
    *   }
    * })
    */
    identify: function () {
      var _identify = asyncToGenerator(
      /*#__PURE__*/
      regenerator.mark(function _callee(userId, traits, options, callback) {
        var id, data, opts, user, resolvedId;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = l$2(userId) ? userId : null;
                data = b$1(userId) ? userId : traits;
                opts = options || {};
                user = instance.user();
                /* sets temporary in memory id. Not to be relied on */

                f(tempKey(ID), id);
                resolvedId = id || data.userId || getUserProp(ID, instance, data);
                return _context.abrupt("return", new Promise(function (resolve) {
                  store.dispatch(objectSpread2$1({
                    type: EVENTS.identifyStart,
                    userId: resolvedId,
                    traits: data || {},
                    options: opts,
                    anonymousId: user.anonymousId
                  }, user.id && user.id !== id && {
                    previousId: user.id
                  }), resolve, [traits, options, callback]);
                }));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function identify(_x, _x2, _x3, _x4) {
        return _identify.apply(this, arguments);
      }

      return identify;
    }(),

    /**
     * Track an analytics event. This will trigger `track` calls in any installed plugins
     * @typedef {Function} Track
     * @param  {String}   eventName - Event name
     * @param  {Object}   [payload]   - Event payload
     * @param  {Object}   [options]   - Event options
     * @param  {Function} [callback]  - Callback to fire after tracking completes
     * @returns {Promise}
     * @api public
     *
     * @example
     *
     * // Basic event tracking
     * analytics.track('buttonClicked')
     *
     * // Event tracking with payload
     * analytics.track('itemPurchased', {
     *   price: 11,
     *   sku: '1234'
     * })
     *
     * // Fire callback with 2nd or 3rd argument
     * analytics.track('newsletterSubscribed', () => {
     *   console.log('do this after track')
     * })
     *
     * // Disable sending this event to specific analytic tools
     * analytics.track('cartAbandoned', {
     *   items: ['xyz', 'abc']
     * }, {
     *   plugins: {
     *     // disable track event for segment
     *     segment: false
     *   }
     * })
     *
     * // Send event to only to specific analytic tools
     * analytics.track('customerIoOnlyEventExample', {
     *   price: 11,
     *   sku: '1234'
     * }, {
     *   plugins: {
     *     // disable this specific track call all plugins except customerio
     *     all: false,
     *     customerio: true
     *   }
     * })
     */
    track: function () {
      var _track = asyncToGenerator(
      /*#__PURE__*/
      regenerator.mark(function _callee2(eventName, payload, options, callback) {
        var name, data, opts;
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = b$1(eventName) ? eventName.event : eventName;

                if (!(!name || !l$2(name))) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('EventMissing');

              case 3:
                data = b$1(eventName) ? eventName : payload || {};
                opts = b$1(options) ? options : {};
                return _context2.abrupt("return", new Promise(function (resolve) {
                  store.dispatch({
                    type: EVENTS.trackStart,
                    event: name,
                    properties: data,
                    options: opts,
                    userId: getUserProp(ID, instance, payload),
                    anonymousId: getUserProp(ANONID, instance, payload)
                  }, resolve, [payload, options, callback]);
                }));

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function track(_x5, _x6, _x7, _x8) {
        return _track.apply(this, arguments);
      }

      return track;
    }(),

    /**
     * Trigger page view. This will trigger `page` calls in any installed plugins
     * @typedef {Function} Page
     * @param  {PageData} [data] - Page data overrides.
     * @param  {Object}   [options] - Page tracking options
     * @param  {Function} [callback] - Callback to fire after page view call completes
     * @returns {Promise}
     * @api public
     *
     * @example
     *
     * // Basic page tracking
     * analytics.page()
     *
     * // Page tracking with page data overrides
     * analytics.page({
     *   url: 'https://google.com'
     * })
     *
     * // Fire callback with 1st, 2nd or 3rd argument
     * analytics.page(() => {
     *   console.log('do this after page')
     * })
     *
     * // Disable sending this pageview to specific analytic tools
     * analytics.page({}, {
     *   plugins: {
     *     // disable page tracking event for segment
     *     segment: false
     *   }
     * })
     *
     * // Send pageview to only to specific analytic tools
     * analytics.page({}, {
     *   plugins: {
     *     // disable this specific page in all plugins except customerio
     *     all: false,
     *     customerio: true
     *   }
     * })
     */
    page: function () {
      var _page = asyncToGenerator(
      /*#__PURE__*/
      regenerator.mark(function _callee3(data, options, callback) {
        var d, opts;
        return regenerator.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                d = b$1(data) ? data : {};
                opts = b$1(options) ? options : {};
                /*
                // @TODO add custom value reolvers for userId and anonId
                if (resolvers.getUserId) {
                  const asyncUserId = await resolvers.getUserId()
                  console.log('x', x)
                }
                */

                return _context3.abrupt("return", new Promise(function (resolve) {
                  store.dispatch({
                    type: EVENTS.pageStart,
                    properties: getPageData(d),
                    options: opts,
                    userId: getUserProp(ID, instance, d),
                    anonymousId: getUserProp(ANONID, instance, d)
                  }, resolve, [data, options, callback]);
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function page$$1(_x9, _x10, _x11) {
        return _page.apply(this, arguments);
      }

      return page$$1;
    }(),

    /**
     * Get user data
     * @typedef {Function} User
     * @param {string} [key] - dot.prop.path of user data. Example: 'traits.company.name'
     * @returns {string|object} value of user data or null
     *
     * @example
     *
     * // Get all user data
     * const userData = analytics.user()
     *
     * // Get user id
     * const userId = analytics.user('userId')
     *
     * // Get user company name
     * const companyName = analytics.user('traits.company.name')
     */
    user: function user(key) {
      if (key === ID || key === 'id') {
        return getUserProp(ID, instance);
      }

      if (key === ANONID || key === 'anonId') {
        return getUserProp(ANONID, instance);
      }

      var user = instance.getState('user');
      if (!key) return user;
      return dlv_umd(user, key);
    },

    /**
     * Clear all information about the visitor & reset analytic state.
     * @typedef {Function} Reset
     * @param {Function} [callback] - Handler to run after reset
     * @returns {Promise}
     * @example
     *
     * // Reset current visitor
     * analytics.reset()
     */
    reset: function reset(callback) {
      return new Promise(function (resolve) {
        store.dispatch({
          type: EVENTS.resetStart
        }, resolve, callback);
      });
    },

    /**
     * Fire callback on analytics ready event
     * @typedef {Function} Ready
     * @param  {Function} callback - function to trigger when all providers have loaded
     * @returns {DetachListeners} - Function to detach listener
     *
     * @example
     *
     * analytics.ready((payload) => {
     *   console.log('all plugins have loaded or were skipped', payload);
     * })
     */
    ready: function ready(callback) {
      return instance.on(EVENTS.ready, callback);
    },

    /**
     * Attach an event handler function for analytics lifecycle events.
     * @typedef {Function} On
     * @param  {String}   name - Name of event to listen to
     * @param  {Function} callback - function to fire on event
     * @return {DetachListeners} - Function to detach listener
     *
     * @example
     *
     * // Fire function when 'track' calls happen
     * analytics.on('track', ({ payload }) => {
     *   console.log('track call just happened. Do stuff')
     * })
     *
     * // Remove listener before it is called
     * const removeListener = analytics.on('track', ({ payload }) => {
     *   console.log('This will never get called')
     * })
     *
     * // cleanup .on listener
     * removeListener()
     */
    on: function on(name, callback) {
      if (!name || !a$3(callback)) {
        return false;
      }

      if (name === EVENTS.bootstrap) {
        throw new Error('.on disabled for ' + name);
      }

      var startRegex = /Start$|Start:/;

      if (name === '*') {
        var beforeHandler = function beforeHandler(store) {
          return function (next) {
            return function (action) {
              if (action.type.match(startRegex)) {
                callback({
                  // eslint-disable-line
                  payload: action,
                  instance: instance,
                  plugins: customPlugins
                });
              }

              return next(action);
            };
          };
        };

        var afterHandler = function afterHandler(store) {
          return function (next) {
            return function (action) {
              if (!action.type.match(startRegex)) {
                callback({
                  // eslint-disable-line
                  payload: action,
                  instance: instance,
                  plugins: customPlugins
                });
              }

              return next(action);
            };
          };
        };

        addMiddleware(beforeHandler, before);
        addMiddleware(afterHandler, after);
        /**
         * Detach listeners
         * @typedef {Function} DetachListeners
         */

        return function () {
          removeMiddleware(beforeHandler, before);
          removeMiddleware(afterHandler, after);
        };
      }

      var position = name.match(startRegex) ? before : after; // eslint-disable-line

      var handler = function handler(store) {
        return function (next) {
          return function (action) {
            // Subscribe to EVERYTHING
            if (action.type === name) {
              callback({
                // eslint-disable-line
                payload: action,
                instance: instance,
                plugins: customPlugins,
                abort: nonAbortable
              });
            }
            /* For future matching of event subpaths `track:*` etc
            } else if (name.match(/\*$/)) {
              const match = (name === '*') ? '.' : name
              const regex = new RegExp(`${match}`, 'g')
            } */


            return next(action);
          };
        };
      };

      addMiddleware(handler, position);
      return function () {
        return removeMiddleware(handler, position);
      };
    },

    /**
     * Attach a handler function to an event and only trigger it only once.
     * @typedef {Function} Once
     * @param  {String} name - Name of event to listen to
     * @param  {Function} callback - function to fire on event
     * @return {DetachListeners} - Function to detach listener
     *
     * @example
     *
     * // Fire function only once 'track'
     * analytics.once('track', ({ payload }) => {
     *   console.log('This will only triggered once when analytics.track() fires')
     * })
     *
     * // Remove listener before it is called
     * const listener = analytics.once('track', ({ payload }) => {
     *   console.log('This will never get called b/c listener() is called')
     * })
     *
     * // cleanup .once listener before it fires
     * listener()
     */
    once: function once(name, callback) {
      if (!name || !a$3(callback)) {
        return false;
      }

      if (name === EVENTS.bootstrap) {
        throw new Error('.once disabled for ' + name);
      }

      var detachListener = instance.on(name, function (_ref2) {
        var payload = _ref2.payload;
        callback({
          // eslint-disable-line
          payload: payload,
          instance: instance,
          plugins: customPlugins,
          abort: nonAbortable
        }); // detach listener after its called once

        detachListener();
      });
      return detachListener;
    },

    /**
     * Get data about user, activity, or context. Access sub-keys of state with `dot.prop` syntax.
     * @typedef {Function} GetState
     * @param  {string} [key] - dot.prop.path value of state
     * @return {any}
     *
     * @example
     *
     * // Get the current state of analytics
     * analytics.getState()
     *
     * // Get a subpath of state
     * analytics.getState('context.offline')
     */
    getState: function getState(key) {
      var state = store.getState();
      if (key) return dlv_umd(state, key);
      return Object.assign({}, state);
    },

    /*
     * Emit events for other plugins or middleware to react to.
     * @param  {Object} action - event to dispatch
     */
    dispatch: function dispatch(action) {
      var actionData = l$2(action) ? {
        type: action
      } : action;

      if (isReservedAction(actionData.type)) {
        throw new Error('reserved action ' + actionData.type);
      }

      var _private = action._ || {}; // Dispatch actionStart
      // const autoPrefixType = `${actionData.type.replace(/Start$/, '')}Start`


      var dispatchData = objectSpread2$1(objectSpread2$1({}, actionData), {}, {
        _: objectSpread2$1({
          originalAction: actionData.type
        }, _private) // type: `${autoPrefixType}`

      });

      store.dispatch(dispatchData);
    },
    // Do not use. Will be removed. Here for Backwards compatiblity.
    // Moved to analytics.plugins.enable
    enablePlugin: plugins.enable,
    /// Do not use. Will be removed. Here for Backwards compatiblity.
    /// Moved to analytics.plugins.disable
    disablePlugin: plugins.disable,
    // Do not use. Will be removed. Here for Backwards compatiblity.
    // New plugins api
    plugins: plugins,

    /**
     * Storage utilities for persisting data.
     * These methods will allow you to save data in localStorage, cookies, or to the window.
     * @typedef {Object} Storage
     * @property {GetItem} getItem - Get value from storage
     * @property {SetItem} setItem - Set storage value
     * @property {RemoveItem} removeItem - Remove storage value
     *
     * @example
     *
     * // Pull storage off analytics instance
     * const { storage } = analytics
     *
     * // Get value
     * storage.getItem('storage_key')
     *
     * // Set value
     * storage.setItem('storage_key', 'value')
     *
     * // Remove value
     * storage.removeItem('storage_key')
     */
    storage: {
      /**
       * Get value from storage
       * @typedef {Function} GetItem
       * @param {String} key - storage key
       * @param {Object} [options] - storage options
       * @return {Any}
       *
       * @example
       *
       * analytics.storage.getItem('storage_key')
       */
      getItem: storage.getItem,

      /**
       * Set storage value
       * @typedef {Function} SetItem
       * @param {String} key - storage key
       * @param {any} value - storage value
       * @param {Object} [options] - storage options
       *
       * @example
       *
       * analytics.storage.setItem('storage_key', 'value')
       */
      setItem: function setItem(key, value, options) {
        store.dispatch({
          type: EVENTS.setItemStart,
          key: key,
          value: value,
          options: options
        });
      },

      /**
       * Remove storage value
       * @typedef {Function} RemoveItem
       * @param {String} key - storage key
       * @param {Object} [options] - storage options
       *
       * @example
       *
       * analytics.storage.removeItem('storage_key')
       */
      removeItem: function removeItem(key, options) {
        store.dispatch({
          type: EVENTS.removeItemStart,
          key: key,
          options: options
        });
      }
    },

    /*
     * Set the anonymous ID of the visitor
     * @param {String} anonymousId - anonymous Id to set
     * @param {Object} [options] - storage options
     *
     * @example
     *
     * // Set anonymous ID
     * analytics.setAnonymousId('1234567')
     */
    setAnonymousId: function setAnonymousId(anonymousId, options) {
      /* sets temporary in memory id. Not to be relied on */
      // set(tempKey(ANONID), anonymousId)
      instance.storage.setItem(ANON_ID, anonymousId, options);
    },

    /*
     * Events exposed by core analytics library and all loaded plugins
     * @type {Array}
     */
    events: {
      all: allSystemEvents,
      core: coreEvents,
      plugins: allPluginEvents // byType: (type) => {} @Todo grab logic from engine and give inspectable events

    }
  };

  var enrichMiddleware = function enrichMiddleware(storeAPI) {
    return function (next) {
      return function (action) {
        if (!action.meta) {
          action.meta = generateMeta();
        }

        return next(action);
      };
    };
  };

  var middlewares = parsedOptions.middlewares.concat([enrichMiddleware,
  /* Core analytics middleware */
  dynamicMiddlewares(before), // Before dynamic middleware <-- fixed pageStart .on listener

  /* Plugin engine */
  pluginMiddleware(instance, getPlugins, {
    all: allSystemEvents,
    plugins: allPluginEvents
  }), storageMiddleware(storage), initializeMiddleware(instance), identifyMiddleware(instance),
  /* after dynamic middleware */
  dynamicMiddlewares(after)]);
  /* Initial analytics state keys */

  var coreReducers = {
    context: context,
    user: userReducer(storage),
    page: page,
    track: trackReducer,
    plugins: createReducer(getPlugins),
    queue: queueReducer
  };
  var composeEnhancers = compose;
  var composeWithGlobalDebug = compose;

  if (c$1 && config.debug) {
    var devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if (devTools) {
      composeEnhancers = devTools({
        trace: true,
        traceLimit: 25
      });
    }

    composeWithGlobalDebug = function composeWithGlobalDebug() {
      if (arguments.length === 0) return Debug();
      if (b$1(_typeof_1(arguments[0]))) return composeWithDebug();
      return composeWithDebug().apply(null, arguments);
    };
  }

  var initialConfig = makeContext(config);
  var intialPluginState = parsedOptions.pluginsArray.reduce(function (acc, plugin) {
    var name = plugin.name,
        config = plugin.config,
        loaded = plugin.loaded;
    var isEnabled = parsedOptions.pluginEnabled[name];
    acc[name] = {
      enabled: isEnabled,
      // If plugin enabled & has no initialize method, set initialized to true, else false
      initialized: isEnabled ? Boolean(!plugin.initialize) : false,
      loaded: Boolean(loaded()),
      config: config || {}
    };
    return acc;
  }, {});
  var initialState = {
    context: initialConfig,
    user: visitorInfo,
    plugins: intialPluginState // Todo allow for more userland defined initial state?

    /* Create analytics store! */

  };
  var store = createStore( // register reducers
  combineReducers(objectSpread2$1(objectSpread2$1({}, coreReducers), customReducers)), // set user defined initial state
  initialState, // register middleware & plugins used
  composeWithGlobalDebug(composeEnhancers(applyMiddleware.apply(void 0, toConsumableArray(middlewares)))));
  /* Supe up dispatch with callback promise resolver. Happens in enrichMeta */

  function enhanceDispatch(fn) {
    return function (event, resolver, callbacks) {
      // console.log('original event', event)
      var meta = generateMeta(event.meta, resolver, ensureArray(callbacks)); // if (resolver) console.log('dispatch resolver', resolver)
      // if (callbacks) console.log('dispatch callbacks', callbacks)

      var newEvent = objectSpread2$1(objectSpread2$1({}, event), {
        meta: meta
      }); // console.log('newEvent', newEvent)


      return fn.apply(null, [newEvent]);
    };
  } // Automatically apply meta to dispatch calls


  store.dispatch = enhanceDispatch(store.dispatch);
  /* Synchronously call bootstrap & register Plugin methods */

  var pluginKeys = Object.keys(customPlugins);
  /* Bootstrap analytic plugins */

  store.dispatch({
    type: EVENTS.bootstrap,
    plugins: pluginKeys,
    config: initialConfig,
    params: params,
    user: visitorInfo,
    initialUser: initialUser,
    persistedUser: persistedUser
  });
  var enabledPlugins = pluginKeys.filter(function (name) {
    return parsedOptions.pluginEnabled[name];
  });
  var disabledPlugins = pluginKeys.filter(function (name) {
    return !parsedOptions.pluginEnabled[name];
  });
  /* Register analytic plugins */

  store.dispatch({
    type: EVENTS.registerPlugins,
    plugins: pluginKeys,
    enabled: parsedOptions.pluginEnabled
  });
  /* dispatch register for individual plugins */

  parsedOptions.pluginsArray.map(function (plugin, i) {
    var bootstrap = plugin.bootstrap,
        config = plugin.config,
        name = plugin.name;

    if (bootstrap && a$3(bootstrap)) {
      bootstrap({
        instance: instance,
        config: config,
        payload: plugin
      });
    }
    /* Register plugins */


    store.dispatch({
      type: EVENTS.registerPluginType(name),
      name: name,
      enabled: parsedOptions.pluginEnabled[name],
      plugin: plugin
    });
    /* All plugins registered initialize, is last loop */

    if (parsedOptions.pluginsArray.length === i + 1) {
      store.dispatch({
        type: EVENTS.initializeStart,
        plugins: enabledPlugins,
        disabled: disabledPlugins
      });
    }
  });

  {
    /* Watch for network events */
    watch(function (offline) {
      store.dispatch({
        type: offline ? EVENTS.offline : EVENTS.online
      });
    });
    /* Tick heartbeat for queued events */

    heartBeat(store, getPlugins, instance);
  }

  function appendArguments(fn) {
    return function () {
      /* Get original args */
      var args = Array.prototype.slice.call(arguments);
      /* Create clone of args */

      var newArgs = new Array(fn.length);

      for (var i = 0; i < args.length; i++) {
        newArgs[i] = args[i];
      }
      /* Append new arg to end */


      newArgs[newArgs.length] = instance; // Set instance on extended methods

      return fn.apply({
        instance: instance
      }, newArgs);
    };
  }
  /* Return analytics instance */


  return instance;
} // Duplicated strings


var before = 'before';
var after = 'after';

var i=a$1(),r=p,c=p;function u(e){return i?p(e,"",-1):n(e)}function a$1(){if(typeof i!==e)return i;try{p("__x","__x"),i=-1!==document.cookie.indexOf("__x"),u("__x");}catch(e){i=!1;}return i}function p(t,r,c,u,a,p){if(typeof window!==e){var d=arguments.length>1;return i||(d?f(t,r):o(t)),d?document.cookie=t+"="+encodeURIComponent(r)+(c?"; expires="+new Date(+new Date+1e3*c).toUTCString()+(u?"; path="+u:"")+(a?"; domain="+a:"")+(p?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+t+"=")[1]||"").split(";")[0])}}

var a=l();function l(){if(typeof a!==e)return a;a=!0;try{typeof localStorage!==e&&typeof JSON!==e||(a=!1),localStorage.setItem(e,e),localStorage.removeItem(e);}catch(t){a=!1;}return a}

function s(o){var t=o;try{if("true"===(t=JSON.parse(o)))return !0;if("false"===t)return !1;if(b$1(t))return t;parseFloat(t)===t&&(t=parseFloat(t));}catch(o){}if(null!==t&&""!==t)return t}var k=l(),y=a$1();function b(t,r$1){if(t){var e=C(r$1),l=!F(e),i=d(e)?s(localStorage.getItem(t)):void 0;if(l&&!y$2(i))return i;var c=h(e)?s(r(t)):void 0;if(l&&c)return c;var n=o(t);return l?n:{localStorage:i,cookie:c,global:n}}}function I(r$1,e,i){if(r$1&&!y$2(e)){var c$1={},n=C(i),g=JSON.stringify(e),f$1=!F(n);return d(n)&&(c$1.localStorage={location:"localStorage",current:e,previous:s(localStorage.getItem(r$1))},localStorage.setItem(r$1,g),f$1)?c$1.localStorage:h(n)&&(c$1.cookie={location:"cookie",current:e,previous:s(r(r$1))},c(r$1,g),f$1)?c$1.cookie:(c$1.global={location:"global",current:e,previous:o(r$1)},f(r$1,e),f$1?c$1.global:c$1)}}function x(o,t){if(o){var e=C(t),a=b(o,"*"),l={};return !y$2(a.localStorage)&&d(e)&&(localStorage.removeItem(o),l.localStorage=a.localStorage),!y$2(a.cookie)&&h(e)&&(u(o),l.cookie=a.cookie),!y$2(a.global)&&J(e,"global")&&(n(o),l.global=a.global),l}}function C(o){return o?l$2(o)?o:o.storage:"any"}function d(o){return k&&J(o,"localStorage")}function h(o){return y&&J(o,"cookie")}function F(o){return "*"===o||"all"===o}function J(o,t){return "any"===o||o===t||F(o)}var N={setItem:I,getItem:b,removeItem:x};

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty$1;

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(source, true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var objectSpread2 = _objectSpread2$1;

function analyticsLib() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultSettings = {
    storage: N
  };
  return analytics(objectSpread2(objectSpread2({}, defaultSettings), opts));
}

const analytics_browser_es = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': analyticsLib,
  init: analyticsLib,
  Analytics: analyticsLib,
  EVENTS: EVENTS,
  CONSTANTS: constants
});

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

/**
 * @return {string}
 */
function uuid() {
  var u = '',
      m = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
      i = 0,
      rb = Math.random() * 0xffffffff | 0;

  while (i++ < 36) {
    var c = m[i - 1],
        r = rb & 0xf,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    u += c == '-' || c == '4' ? c : v.toString(16);
    rb = i % 8 == 0 ? Math.random() * 0xffffffff | 0 : rb >> 4;
  }

  return u;
}

var aws4fetch_umd = createCommonjsModule$1(function (module, exports) {
(function (global, factory) {
  factory(exports) ;
}(commonjsGlobal, (function (exports) {
  /**
   * @license MIT <https://opensource.org/licenses/MIT>
   * @copyright Michael Hart 2018
   */
  const encoder = new TextEncoder();
  const HOST_SERVICES = {
    appstream2: 'appstream',
    cloudhsmv2: 'cloudhsm',
    email: 'ses',
    marketplace: 'aws-marketplace',
    mobile: 'AWSMobileHubService',
    pinpoint: 'mobiletargeting',
    queue: 'sqs',
    'git-codecommit': 'codecommit',
    'mturk-requester-sandbox': 'mturk-requester',
    'personalize-runtime': 'personalize',
  };
  const UNSIGNABLE_HEADERS = [
    'authorization',
    'content-type',
    'content-length',
    'user-agent',
    'presigned-expires',
    'expect',
    'x-amzn-trace-id',
    'range',
    'connection',
  ];
  class AwsClient {
    constructor({ accessKeyId, secretAccessKey, sessionToken, service, region, cache, retries, initRetryMs }) {
      if (accessKeyId == null) throw new TypeError('accessKeyId is a required option')
      if (secretAccessKey == null) throw new TypeError('secretAccessKey is a required option')
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.sessionToken = sessionToken;
      this.service = service;
      this.region = region;
      this.cache = cache || new Map();
      this.retries = retries != null ? retries : 10;
      this.initRetryMs = initRetryMs || 50;
    }
    async sign(input, init) {
      if (input instanceof Request) {
        const { method, url, headers, body } = input;
        init = Object.assign({ method, url, headers }, init);
        if (init.body == null && headers.has('Content-Type')) {
          init.body = body != null && headers.has('X-Amz-Content-Sha256') ? body : await input.clone().arrayBuffer();
        }
        input = url;
      }
      const signer = new AwsV4Signer(Object.assign({ url: input }, init, this, init && init.aws));
      const signed = Object.assign({}, init, await signer.sign());
      delete signed.aws;
      return new Request(signed.url.toString(), signed)
    }
    async fetch(input, init) {
      for (let i = 0; i <= this.retries; i++) {
        const fetched = fetch(await this.sign(input, init));
        if (i === this.retries) {
          return fetched
        }
        const res = await fetched;
        if (res.status < 500 && res.status !== 429) {
          return res
        }
        await new Promise(resolve => setTimeout(resolve, Math.random() * this.initRetryMs * Math.pow(2, i)));
      }
      throw new Error('An unknown error occurred, ensure retries is not negative')
    }
  }
  class AwsV4Signer {
    constructor({ method, url, headers, body, accessKeyId, secretAccessKey, sessionToken, service, region, cache, datetime, signQuery, appendSessionToken, allHeaders, singleEncode }) {
      if (url == null) throw new TypeError('url is a required option')
      if (accessKeyId == null) throw new TypeError('accessKeyId is a required option')
      if (secretAccessKey == null) throw new TypeError('secretAccessKey is a required option')
      this.method = method || (body ? 'POST' : 'GET');
      this.url = new URL(url);
      this.headers = new Headers(headers || {});
      this.body = body;
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.sessionToken = sessionToken;
      let guessedService, guessedRegion;
      if (!service || !region) {
  [guessedService, guessedRegion] = guessServiceRegion(this.url, this.headers);
      }
      this.service = service || guessedService || '';
      this.region = region || guessedRegion || 'us-east-1';
      this.cache = cache || new Map();
      this.datetime = datetime || new Date().toISOString().replace(/[:-]|\.\d{3}/g, '');
      this.signQuery = signQuery;
      this.appendSessionToken = appendSessionToken || this.service === 'iotdevicegateway';
      this.headers.delete('Host');
      const params = this.signQuery ? this.url.searchParams : this.headers;
      if (this.service === 's3' && !this.headers.has('X-Amz-Content-Sha256')) {
        this.headers.set('X-Amz-Content-Sha256', 'UNSIGNED-PAYLOAD');
      }
      params.set('X-Amz-Date', this.datetime);
      if (this.sessionToken && !this.appendSessionToken) {
        params.set('X-Amz-Security-Token', this.sessionToken);
      }
      this.signableHeaders = ['host', ...this.headers.keys()]
        .filter(header => allHeaders || !UNSIGNABLE_HEADERS.includes(header))
        .sort();
      this.signedHeaders = this.signableHeaders.join(';');
      this.canonicalHeaders = this.signableHeaders
        .map(header => header + ':' + (header === 'host' ? this.url.host : (this.headers.get(header) || '').replace(/\s+/g, ' ')))
        .join('\n');
      this.credentialString = [this.datetime.slice(0, 8), this.region, this.service, 'aws4_request'].join('/');
      if (this.signQuery) {
        if (this.service === 's3' && !params.has('X-Amz-Expires')) {
          params.set('X-Amz-Expires', '86400');
        }
        params.set('X-Amz-Algorithm', 'AWS4-HMAC-SHA256');
        params.set('X-Amz-Credential', this.accessKeyId + '/' + this.credentialString);
        params.set('X-Amz-SignedHeaders', this.signedHeaders);
      }
      if (this.service === 's3') {
        try {
          this.encodedPath = decodeURIComponent(this.url.pathname.replace(/\+/g, ' '));
        } catch (e) {
          this.encodedPath = this.url.pathname;
        }
      } else {
        this.encodedPath = this.url.pathname.replace(/\/+/g, '/');
      }
      if (!singleEncode) {
        this.encodedPath = encodeURIComponent(this.encodedPath).replace(/%2F/g, '/');
      }
      this.encodedPath = encodeRfc3986(this.encodedPath);
      const seenKeys = new Set();
      this.encodedSearch = [...this.url.searchParams]
        .filter(([k]) => {
          if (!k) return false
          if (this.service === 's3') {
            if (seenKeys.has(k)) return false
            seenKeys.add(k);
          }
          return true
        })
        .map(pair => pair.map(p => encodeRfc3986(encodeURIComponent(p))))
        .sort(([k1, v1], [k2, v2]) => k1 < k2 ? -1 : k1 > k2 ? 1 : v1 < v2 ? -1 : v1 > v2 ? 1 : 0)
        .map(pair => pair.join('='))
        .join('&');
    }
    async sign() {
      if (this.signQuery) {
        this.url.searchParams.set('X-Amz-Signature', await this.signature());
        if (this.sessionToken && this.appendSessionToken) {
          this.url.searchParams.set('X-Amz-Security-Token', this.sessionToken);
        }
      } else {
        this.headers.set('Authorization', await this.authHeader());
      }
      return {
        method: this.method,
        url: this.url,
        headers: this.headers,
        body: this.body,
      }
    }
    async authHeader() {
      return [
        'AWS4-HMAC-SHA256 Credential=' + this.accessKeyId + '/' + this.credentialString,
        'SignedHeaders=' + this.signedHeaders,
        'Signature=' + (await this.signature()),
      ].join(', ')
    }
    async signature() {
      const date = this.datetime.slice(0, 8);
      const cacheKey = [this.secretAccessKey, date, this.region, this.service].join();
      let kCredentials = this.cache.get(cacheKey);
      if (!kCredentials) {
        const kDate = await hmac('AWS4' + this.secretAccessKey, date);
        const kRegion = await hmac(kDate, this.region);
        const kService = await hmac(kRegion, this.service);
        kCredentials = await hmac(kService, 'aws4_request');
        this.cache.set(cacheKey, kCredentials);
      }
      return buf2hex(await hmac(kCredentials, await this.stringToSign()))
    }
    async stringToSign() {
      return [
        'AWS4-HMAC-SHA256',
        this.datetime,
        this.credentialString,
        buf2hex(await hash(await this.canonicalString())),
      ].join('\n')
    }
    async canonicalString() {
      return [
        this.method.toUpperCase(),
        this.encodedPath,
        this.encodedSearch,
        this.canonicalHeaders + '\n',
        this.signedHeaders,
        await this.hexBodyHash(),
      ].join('\n')
    }
    async hexBodyHash() {
      let hashHeader = this.headers.get('X-Amz-Content-Sha256');
      if (hashHeader == null) {
        if (this.body && typeof this.body !== 'string' && !('byteLength' in this.body)) {
          throw new Error('body must be a string, ArrayBuffer or ArrayBufferView, unless you include the X-Amz-Content-Sha256 header')
        }
        hashHeader = buf2hex(await hash(this.body || ''));
      }
      return hashHeader
    }
  }
  async function hmac(key, string) {
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      typeof key === 'string' ? encoder.encode(key) : key,
      { name: 'HMAC', hash: { name: 'SHA-256' } },
      false,
      ['sign'],
    );
    return crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(string))
  }
  async function hash(content) {
    return crypto.subtle.digest('SHA-256', typeof content === 'string' ? encoder.encode(content) : content)
  }
  function buf2hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('0' + x.toString(16)).slice(-2)).join('')
  }
  function encodeRfc3986(urlEncodedStr) {
    return urlEncodedStr.replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())
  }
  function guessServiceRegion(url, headers) {
    const { hostname, pathname } = url;
    const match = hostname.replace('dualstack.', '').match(/([^.]+)\.(?:([^.]*)\.)?amazonaws\.com(?:\.cn)?$/);
    let [service, region] = (match || ['', '']).slice(1, 3);
    if (region === 'us-gov') {
      region = 'us-gov-west-1';
    } else if (region === 's3' || region === 's3-accelerate') {
      region = 'us-east-1';
      service = 's3';
    } else if (service === 'iot') {
      if (hostname.startsWith('iot.')) {
        service = 'execute-api';
      } else if (hostname.startsWith('data.jobs.iot.')) {
        service = 'iot-jobs-data';
      } else {
        service = pathname === '/mqtt' ? 'iotdevicegateway' : 'iotdata';
      }
    } else if (service === 'autoscaling') {
      const targetPrefix = (headers.get('X-Amz-Target') || '').split('.')[0];
      if (targetPrefix === 'AnyScaleFrontendService') {
        service = 'application-autoscaling';
      } else if (targetPrefix === 'AnyScaleScalingPlannerFrontendService') {
        service = 'autoscaling-plans';
      }
    } else if (region == null && service.startsWith('s3-')) {
      region = service.slice(3).replace(/^fips-|^external-1/, '');
      service = 's3';
    } else if (service.endsWith('-fips')) {
      service = service.slice(0, -5);
    } else if (region && /-\d$/.test(service) && !/-\d$/.test(region)) {
  [service, region] = [region, service];
    }
    return [HOST_SERVICES[service] || service, region]
  }

  exports.AwsClient = AwsClient;
  exports.AwsV4Signer = AwsV4Signer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
});

var isServer = typeof window === 'undefined';
var HIDDEN = 'hidden';
/**
 * Fire a callback on tab visibility changes
 * @param  {function} callback - function to run on visibility change
 * @return {function} detach onTabChange listener
 */

function onTabChange(callback) {
  if (isServer) return false;
  var prop = getHiddenProp();
  var event = "".concat(prop.replace(/[H|h]idden/, ''), "visibilitychange");

  var handler = function handler() {
    return callback(Boolean(document[prop]));
  };

  document.addEventListener(event, handler);
  return function () {
    return document.removeEventListener(event, handler);
  };
}

function getHiddenProp() {
  var prefixes = ['webkit', 'moz', 'ms', 'o']; // if 'hidden' is natively supported just return it

  if (isServer || HIDDEN in document) return HIDDEN; // otherwise loop over all the known prefixes until we find one

  return prefixes.reduce(function (acc, curr) {
    var prop = curr + 'Hidden';
    if (!acc && prop in document) return prop;
    return acc;
  }, null);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function browserClientInfo() {
  if (typeof window === 'undefined') {
    return {};
  }

  if (!window.navigator) {
    return {};
  }

  var _window$navigator = window.navigator,
      platform = _window$navigator.platform,
      product = _window$navigator.product,
      vendor = _window$navigator.vendor,
      userAgent = _window$navigator.userAgent;
  var type = browserType(userAgent);
  return {
    platform: platform,
    make: product || vendor,
    model: type.type,
    version: type.version,
    appVersion: [type.type, type.version].join('/'),
    language: getLanguage(),
    timezone: browserTimezone()
  };
}

function getLanguage() {
  var _window$navigator2 = window.navigator,
      language = _window$navigator2.language,
      browserLanguage = _window$navigator2.browserLanguage,
      languages = _window$navigator2.languages;
  return (language || browserLanguage || (languages || ['en_US'])[0]).toLowerCase().replace('-', '_');
}

function browserTimezone() {
  var tzMatch = /\(([A-Za-z\s].*)\)/.exec(new Date().toString());
  return tzMatch ? tzMatch[1] || '' : '';
}

function browserType(userAgent) {
  var operaMatch = /.+(Opera[\s[A-Z]*|OPR[\sA-Z]*)\/([0-9\.]+).*/i.exec(userAgent);

  if (operaMatch) {
    return {
      type: operaMatch[1],
      version: operaMatch[2]
    };
  }

  var ieMatch = /.+(Trident|Edge)\/([0-9\.]+).*/i.exec(userAgent);

  if (ieMatch) {
    return {
      type: ieMatch[1],
      version: ieMatch[2]
    };
  }

  var cfMatch = /.+(Chrome|Firefox|FxiOS)\/([0-9\.]+).*/i.exec(userAgent);

  if (cfMatch) {
    return {
      type: cfMatch[1],
      version: cfMatch[2]
    };
  }

  var sMatch = /.+(Safari)\/([0-9\.]+).*/i.exec(userAgent);

  if (sMatch) {
    return {
      type: sMatch[1],
      version: sMatch[2]
    };
  }

  var awkMatch = /.+(AppleWebKit)\/([0-9\.]+).*/i.exec(userAgent);

  if (awkMatch) {
    return {
      type: awkMatch[1],
      version: awkMatch[2]
    };
  }

  var anyMatch = /.*([A-Z]+)\/([0-9\.]+).*/i.exec(userAgent);

  if (anyMatch) {
    return {
      type: anyMatch[1],
      version: anyMatch[2]
    };
  }

  return {
    type: '',
    version: ''
  };
}

function getEventName(key, eventMap) {
  return eventMap[key] || key;
}

var ALLOWED_CHANNELS = ['PUSH', 'GCM', 'APNS', 'APNS_SANDBOX', 'APNS_VOIP', 'APNS_VOIP_SANDBOX', 'ADM', 'SMS', 'VOICE', 'EMAIL', 'BAIDU', 'CUSTOM'];
var CHANNEL_TYPES = ALLOWED_CHANNELS.reduce(function (acc, curr) {
  acc[curr] = curr;
  return acc;
}, {});

/* The endpoint began a new session. */
var SESSION_START = '_session.start';
/* The endpoint ended a session. */

var SESSION_STOP = '_session.stop';
/* The endpoint paused a session. Paused sessions can be resumed so that you can continue to collect metrics without starting an entirely new session. */

var SESSION_PAUSE = '_session.pause';
/* The endpoint resumed a session. */

var SESSION_RESUME = '_session.resume';
/* The endpoint logged in to your app. */

var AUTH_SIGN_IN = '_userauth.sign_in';
/* A new endpoint completed the registration process in your app. */

var AUTH_SIGN_UP = '_userauth.sign_up';
/* The endpoint attempted to sign in to your app, but wasn't able to complete the process. */

var AUTH_FAIL = '_userauth.auth_fail';
/* The endpoint made a purchase in your app. */

var ECOM_PURCHASE = '_monetization.purchase';
/* The pageview event */

var PAGE_VIEW = 'pageView';

var events = /*#__PURE__*/Object.freeze({
  SESSION_START: SESSION_START,
  SESSION_STOP: SESSION_STOP,
  SESSION_PAUSE: SESSION_PAUSE,
  SESSION_RESUME: SESSION_RESUME,
  AUTH_SIGN_IN: AUTH_SIGN_IN,
  AUTH_SIGN_UP: AUTH_SIGN_UP,
  AUTH_FAIL: AUTH_FAIL,
  ECOM_PURCHASE: ECOM_PURCHASE,
  PAGE_VIEW: PAGE_VIEW
});
var SESSION_KEY = '__session_id';
var ENDPOINT_KEY = '__endpoint';
var RETRYABLE_CODES = [429, 500];
var ACCEPTED_CODES = [202];
var BAD_REQUEST_CODE = 400;
var clientInfo = browserClientInfo(); // TODO localize queue

var EVENTS_QUEUE = [];

function noOp() {
  return {};
}

var EMAIL_REGEX = /.+\@.+\..+/;

function isEmail(string) {
  return EMAIL_REGEX.test(string);
}
function initialize() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var configuration = _objectSpread2({
    getContext: config.getContext || noOp,
    enrichEventAttributes: config.enrichEventAttributes || noOp,
    enrichEventMetrics: config.enrichEventMetrics || noOp,
    credentials: config.credentials || {},
    getEndpointId: config.getEndpointId
  }, config); // Create function that sends to pinpoint


  var sentDataToPinpoint = createSendEvents(configuration); // Create instance of record

  var recordEvent = makeRecordFunction(_objectSpread2({
    sentDataToPinpoint: sentDataToPinpoint
  }, configuration));
  /*
  const updateEndpoint = async function (endpoint = {}) {
  	return sentDataToPinpoint(endpoint)
  }
  */
  // Run initialize endpoint merge

  mergeEndpointData({}, configuration.getContext(), config.getUserId); // Flush remaining events on page close

  var detachWindowUnloadListener = onWindowUnload(recordEvent); // Function to detach listeners

  return {
    updateEndpoint: sentDataToPinpoint,
    recordEvent: recordEvent,
    disable: function disable() {
      detachWindowUnloadListener();
    }
  };
}

function onWindowUnload(recordFunc) {
  if (typeof window === 'undefined') {
    return noOp;
  }

  var stopSessionHandler = stopSessionFactory(recordFunc); // Attach listener

  window.addEventListener('beforeunload', stopSessionHandler);
  return function () {
    return window.removeEventListener('beforeunload', stopSessionHandler);
  };
}

function stopSessionFactory(recordFunc) {
  // Flush remaining events
  return function () {
    console.log('Fire stop session');
    recordFunc('_session.stop', false);
  };
}

function getSessionID() {
  if (typeof window.sessionStorage === 'undefined') {
    return null;
  } // Get stored session.


  var sessionID = window.sessionStorage.getItem(SESSION_KEY);

  if (sessionID) {
    return sessionID;
  } // Create and set a UUID.


  var newSessionID = uuid();
  window.sessionStorage.setItem(SESSION_KEY, newSessionID);
  return newSessionID;
}

function getEndpoint() {
  try {
    return JSON.parse(localStorage.getItem(ENDPOINT_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function setEndpoint(endpoint) {
  localStorage.setItem(ENDPOINT_KEY, JSON.stringify(endpoint));
}

function makeRecordFunction() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var timer;
  var sentDataToPinpoint = config.sentDataToPinpoint,
      appPackageName = config.appPackageName,
      appTitle = config.appTitle,
      appVersionCode = config.appVersionCode,
      debug = config.debug;
  return (
    /*#__PURE__*/
    function () {
      var _recordEvent = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_type) {
        var data,
            endpoint,
            queue,
            type,
            contextInfo,
            pageSession,
            subSessionId,
            subSessionStart,
            elapsed,
            time,
            userDefinedAttributes,
            defaultEventAttributes,
            extraAttributes,
            eventAttributes,
            elapsedSessionTime,
            userDefinedMetrics,
            defaultMetrics,
            extraMetrics,
            eventMetrics,
            preparedData,
            eventId,
            timeStamp,
            Event,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                endpoint = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                queue = _args.length > 3 && _args[3] !== undefined ? _args[3] : true;
                // Event name mapping
                type = getEventName(_type, config.eventMapping);

                if (typeof data === 'boolean') {
                  queue = data;
                  data = {};
                }

                if (typeof endpoint === 'boolean') {
                  queue = endpoint;
                  endpoint = {};
                }

                contextInfo = config.getContext(); // console.log('contextInfo', contextInfo)

                pageSession = contextInfo.pageSession, subSessionId = contextInfo.subSessionId, subSessionStart = contextInfo.subSessionStart, elapsed = contextInfo.elapsed; // Merge endpoint data.

                if (!(Object.entries(endpoint).length || _type === PAGE_VIEW)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 11;
                return mergeEndpointData(endpoint, contextInfo, config.getUserId);

              case 11:
                endpoint = _context.sent;

              case 12:
                time = new Date();
                userDefinedAttributes = data.attributes || {};
                defaultEventAttributes = {
                  date: time.toISOString(),
                  session: getSessionID(),
                  pageSession: pageSession,
                  hash: window.location.hash,
                  path: window.location.pathname,
                  referrer: document.referrer,
                  search: window.location.search,
                  title: document.title,
                  host: window.location.hostname,
                  url: window.location.origin + window.location.pathname
                };
                _context.next = 17;
                return config.enrichEventAttributes();

              case 17:
                extraAttributes = _context.sent;

                /* Format attributes */
                eventAttributes = _objectSpread2({}, defaultEventAttributes, {}, extraAttributes, {}, userDefinedAttributes);
                /* Format metrics */

                elapsedSessionTime = elapsed + (time.getTime() - subSessionStart);
                userDefinedMetrics = data.metrics || {};
                defaultMetrics = {
                  /* Time of session */
                  sessionTime: elapsedSessionTime,

                  /* Date metrics */
                  hour: time.getHours(),
                  day: time.getDay() + 1,
                  month: time.getMonth() + 1,
                  year: time.getFullYear()
                };
                _context.next = 24;
                return config.enrichEventMetrics();

              case 24:
                extraMetrics = _context.sent;
                eventMetrics = _objectSpread2({}, defaultMetrics, {}, extraMetrics, {}, userDefinedMetrics);
                _context.next = 28;
                return prepareAttributes(eventAttributes);

              case 28:
                _context.t0 = _context.sent;
                _context.next = 31;
                return prepareMetrics(eventMetrics);

              case 31:
                _context.t1 = _context.sent;
                preparedData = {
                  attributes: _context.t0,
                  metrics: _context.t1
                };
                eventId = uuid();
                timeStamp = new Date().toISOString();

                if (debug) {
                  console.log("".concat(eventId, ":").concat(type));
                  console.log('eventAttributes', preparedData.attributes);
                  console.log('eventMetrics', preparedData.metrics);
                } // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Pinpoint.html#putEvents-property


                Event = _defineProperty({}, eventId, {
                  EventType: type,
                  Timestamp: timeStamp,
                  AppPackageName: appPackageName,
                  AppTitle: appTitle,
                  AppVersionCode: appVersionCode,

                  /* Event attributes */
                  Attributes: preparedData.attributes,

                  /* Event metrics */
                  Metrics: preparedData.metrics,
                  Session: {
                    /* SessionId is required */
                    Id: subSessionId,

                    /* StartTimestamp is required */
                    StartTimestamp: new Date(subSessionStart).toISOString()
                  }
                });

                if (_type === SESSION_STOP) {
                  Event[eventId].Session.Duration = Date.now() - subSessionStart;
                  Event[eventId].Session.StopTimestamp = timeStamp;
                } // Store sent events to queue


                EVENTS_QUEUE.push(Event); // If config setting to send every event as it happens

                {
                  _context.next = 41;
                  break;
                }

              case 41:
                if (queue) {
                  _context.next = 43;
                  break;
                }

                return _context.abrupt("return", sentDataToPinpoint());

              case 43:
                if (timer) {
                  clearTimeout(timer);
                } // Flush new events after 3 seconds.


                timer = setTimeout(sentDataToPinpoint, 3000);

              case 45:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function recordEvent(_x) {
        return _recordEvent.apply(this, arguments);
      }

      return recordEvent;
    }()
  );
}

function createSendEvents() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getEndpointId = config.getEndpointId,
      debug = config.debug;
  return (
    /*#__PURE__*/
    function () {
      var _sentDataToPinpoint = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var endpoint,
            endpointData,
            endpointId,
            contextInfo,
            channelType,
            Events,
            Endpoint,
            eventsRequest,
            _args2 = arguments;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                endpoint = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};

                if (!(!EVENTS_QUEUE.length && !Object.keys(endpoint).length)) {
                  _context2.next = 4;
                  break;
                }

                if (debug) console.log('No events, return early');
                return _context2.abrupt("return");

              case 4:
                // console.log('aws', aws)
                endpointData = endpoint; // Events are associated with an endpoint.

                _context2.next = 7;
                return getEndpointId();

              case 7:
                endpointId = _context2.sent;

                if (debug) {
                  console.log('resolved endpointId', endpointId);
                }

                if (endpointId) {
                  _context2.next = 12;
                  break;
                }

                console.error('No User ID found. Call Auth()');
                return _context2.abrupt("return");

              case 12:
                if (!Object.entries(endpoint).length) {
                  _context2.next = 19;
                  break;
                }

                contextInfo = config.getContext();
                _context2.next = 16;
                return mergeEndpointData(endpoint, contextInfo, config.getUserId);

              case 16:
                endpointData = _context2.sent;
                _context2.next = 20;
                break;

              case 19:
                endpointData = getEndpoint() || {};

              case 20:
                if (debug) {
                  console.log('endpointData', endpointData);
                }

                channelType = endpointData.ChannelType; // If email is set, set email channel

                if (endpointData.Address && isEmail(endpointData.Address)) {
                  channelType = CHANNEL_TYPES.EMAIL;
                }

                if (!channelType && endpointData.Address) {
                  if (clientInfo.platform === 'android') {
                    channelType = channelType || CHANNEL_TYPES.GCM;
                  } else {
                    channelType = channelType || CHANNEL_TYPES.APNS;
                  }
                }

                if (debug) {
                  console.log('CHANNEL_TYPE', channelType);
                } // Reduce events to an object keyed by event ID.


                Events = EVENTS_QUEUE.reduce(function (acc, event) {
                  return _objectSpread2({}, event, {}, acc);
                }, {});
                /*
                console.log('────────sentDataToPinpoint───────────')
                console.log(Events)
                console.log('───────End sentDataToPinpoint────────')
                /**/
                // Build endpoint data.

                Endpoint = endpointData;
                Endpoint.RequestId = uuid();
                Endpoint.ChannelType = channelType;

                if (Endpoint.Address) {
                  // https://docs.aws.amazon.com/pinpoint/latest/apireference/apps-application-id-endpoints.html#apps-application-id-endpoints-properties
                  // Default OptOut is ALL
                  // OptOut: 'NONE',
                  Endpoint.OptOut = endpointData.OptOut || 'NONE';
                } // const endpointId = endpointId.replace(`${COGNITO_REGION}:`, '' )
                // Build events request object.


                eventsRequest = {
                  BatchItem: _defineProperty({}, endpointId, {
                    Endpoint: Endpoint,
                    Events: Events
                  })
                };
                _context2.prev = 31;
                _context2.next = 34;
                return callAWS(eventsRequest, config);

              case 34:
                _context2.next = 40;
                break;

              case 37:
                _context2.prev = 37;
                _context2.t0 = _context2["catch"](31);
                console.log('callPinPoint err', _context2.t0);

              case 40:
                // console.log('Before', EVENTS_QUEUE)

                /* Purge queue */
                EVENTS_QUEUE = []; // console.log('After', EVENTS_QUEUE)

                return _context2.abrupt("return", endpointData);

              case 42:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[31, 37]]);
      }));

      function sentDataToPinpoint() {
        return _sentDataToPinpoint.apply(this, arguments);
      }

      return sentDataToPinpoint;
    }()
  );
}

function callAWS(_x2, _x3) {
  return _callAWS.apply(this, arguments);
}

function _callAWS() {
  _callAWS = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(eventsRequest, config) {
    var pinpointRegion, pinpointAppId, lambdaArn, lambdaRegion, credentials, getCredentials, debug, creds, aws, lambda_region, pinpoint_region, fips, LAMBDA_FN, PINPOINT_URL, endpointUrl, data, responses;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pinpointRegion = config.pinpointRegion, pinpointAppId = config.pinpointAppId, lambdaArn = config.lambdaArn, lambdaRegion = config.lambdaRegion, credentials = config.credentials, getCredentials = config.getCredentials, debug = config.debug;
            creds = credentials;
            /* Use custom creds function */

            if (!(!Object.keys(creds).length && getCredentials)) {
              _context3.next = 12;
              break;
            }

            _context3.prev = 3;
            _context3.next = 6;
            return getCredentials();

          case 6:
            creds = _context3.sent;
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](3);
            throw new Error(_context3.t0);

          case 12:
            // console.log('credentials', creds)
            aws = new aws4fetch_umd.AwsClient({
              // Support amplify and raw client auth params
              accessKeyId: creds.accessKeyId || creds.AccessKeyId,
              secretAccessKey: creds.secretAccessKey || creds.SecretKey,
              sessionToken: creds.sessionToken || creds.SessionToken,
              retries: 5
            });
            lambda_region = lambdaRegion || pinpointRegion;
            pinpoint_region = pinpointRegion || lambdaRegion;
            fips = config.fips === true ? '-fips' : '';
            LAMBDA_FN = "https://lambda.".concat(lambda_region, ".amazonaws.com/2015-03-31/functions/").concat(lambdaArn, "/invocations");
            PINPOINT_URL = "https://pinpoint".concat(fips, ".").concat(pinpoint_region, ".amazonaws.com/v1/apps/").concat(pinpointAppId, "/events");
            endpointUrl = lambdaArn ? LAMBDA_FN : PINPOINT_URL;
            _context3.next = 21;
            return aws.fetch(endpointUrl, {
              body: JSON.stringify(eventsRequest)
            }).then(function (d) {
              return d.json();
            });

          case 21:
            data = _context3.sent;

            // console.log('pinpoint response', data)

            /* swallow errors? probably bad idea
            let data = {}
            try {
            	data = await aws.fetch(endpointUrl, {
            		body: JSON.stringify(eventsRequest),
            	}).then((d) => d.json())
            } catch (err) {
            	if (debug) {
            		console.log('Pinpoint error', err)
            	}
            }*/
            if (data && data.Results) {
              // Process api responses
              responses = Object.keys(data.Results).map(function (eventId) {
                return data.Results[eventId];
              });
              responses.forEach(function (resp) {
                var EndpointItemResponse = resp.EndpointItemResponse || {};
                var EventsItemResponse = resp.EventsItemResponse || {};

                if (Object.keys(EndpointItemResponse).length) {
                  if (debug) console.log('EndpointItemResponse', EndpointItemResponse);

                  if (ACCEPTED_CODES.includes(EndpointItemResponse.StatusCode)) ; else if (RETRYABLE_CODES.includes(EndpointItemResponse.StatusCode)) ; else {
                    // Try to handle error
                    handleEndpointUpdateBadRequest(EndpointItemResponse, Endpoint);
                  }
                }

                var events = Object.keys(EventsItemResponse);

                if (events.length) {
                  if (debug) console.log('EventsResponse', EventsItemResponse);
                  events.forEach(function (eventId) {// console.log(`[req "${Endpoint.RequestId}"] Event id ${eventId}`, EventsItemResponse[eventId])
                  });
                }
              });
            }

            return _context3.abrupt("return", data);

          case 24:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 9]]);
  }));
  return _callAWS.apply(this, arguments);
}

function handleEndpointUpdateBadRequest(error, endpoint) {
  var StatusCode = error.StatusCode,
      Message = error.Message; // console.log('message', Message)

  if (StatusCode === BAD_REQUEST_CODE) {
    // 400
    if (Message.startsWith('Missing ChannelType')) {
      throw new Error('Missing ChannelType');
    }

    if (Message.startsWith('Exceeded maximum endpoint per user count')) {
      throw new Error('Exceeded maximum endpoint per user count');
    }
  }
}
/* TODO wire up beacon
function sendBeaconRequest() {
	const eventParams = this._generateBatchItemContext(params);

	const { region } = this._config;
	const { ApplicationId, EventsRequest } = eventParams;

	const accessInfo = {
		secret_key: this._config.credentials.secretAccessKey,
		access_key: this._config.credentials.accessKeyId,
		session_token: this._config.credentials.sessionToken,
	};

	const url = `https://pinpoint.${region}.amazonaws.com/v1/apps/${ApplicationId}/events/legacy`;
	const body = JSON.stringify(EventsRequest);
	const method = 'POST';

	const request = {
		url,
		body,
		method,
	};

	const serviceInfo = { region, service: MOBILE_SERVICE_NAME };

	const requestUrl = Signer.signUrl(
		request,
		accessInfo,
		serviceInfo,
		null
	);

	const success = navigator.sendBeacon(requestUrl, body);

	if (success) {
		return console.log('sendBeacon success');
	}
	return console.log('sendBeacon failure');
}
*/


function mergeEndpointData() {
  return _mergeEndpointData.apply(this, arguments);
}
/**
 * Array merge function for deepmerge.
 *
 * @param {Array} destinationArray
 * @param {Array} sourceArray
 */


function _mergeEndpointData() {
  _mergeEndpointData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4() {
    var endpoint,
        context,
        getUserId,
        persistedEndpoint,
        pageSession,
        defaultEndpointConfig,
        demographicByClientInfo,
        EndpointData,
        foundId,
        _foundId,
        sessionKey,
        pageKey,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            endpoint = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {};
            context = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            getUserId = _args4.length > 2 ? _args4[2] : undefined;
            persistedEndpoint = getEndpoint();
            pageSession = context.pageSession;
            defaultEndpointConfig = {};
            demographicByClientInfo = {
              AppVersion: clientInfo.appVersion,
              Make: clientInfo.make,
              Model: clientInfo.model,
              ModelVersion: clientInfo.version,
              Platform: clientInfo.platform,
              Locale: clientInfo.language
            };
            EndpointData = {
              Attributes: {},
              Demographic: _objectSpread2({
                AppVersion: clientInfo.appVersion || ''
              }, demographicByClientInfo, {}, defaultEndpointConfig.demographic),
              Location: {},
              Metrics: {}
              /* Add device attributes to endpoint */

            };

            if (clientInfo.device && clientInfo.device.vendor) {
              EndpointData.Attributes.DeviceMake = [clientInfo.device.vendor];
            }

            if (clientInfo.device && clientInfo.device.model) {
              EndpointData.Attributes.DeviceModel = [clientInfo.device.model];
            }

            if (clientInfo.device && clientInfo.device.type) {
              EndpointData.Attributes.DeviceType = [clientInfo.device.type];
            }
            /* Add demographic data to endpoint */


            if (clientInfo.engine && clientInfo.engine.name) {
              EndpointData.Demographic.Make = clientInfo.engine.name;
            }

            if (clientInfo.browser && clientInfo.browser.name) {
              EndpointData.Demographic.Model = clientInfo.browser.name;
            }

            if (clientInfo.browser && clientInfo.browser.version) {
              EndpointData.Demographic.ModelVersion = clientInfo.browser.version;
            }

            if (clientInfo.os && clientInfo.os.name) {
              EndpointData.Demographic.Platform = clientInfo.os.name;
            }

            if (clientInfo.os && clientInfo.os.version) {
              EndpointData.Demographic.PlatformVersion = clientInfo.os.version;
            }
            /*
            if (endpoint.channelType && clientInfo.os.version) {
              EndpointData.ChannelType = endpoint.channelType
            }
            */
            // Merge new endpoint data with defaults.


            endpoint = cjs.all([EndpointData, persistedEndpoint, endpoint], {
              // TODO maybe change array merge
              arrayMerge: overwriteMerge
            }); // Sync user ID if it's changed

            if (!(endpoint.User && endpoint.User.UserId)) {
              _context4.next = 22;
              break;
            }

            _context4.next = 20;
            return getUserId();

          case 20:
            foundId = _context4.sent;

            if (endpoint.User.UserId !== foundId) {
              endpoint.User.UserId = foundId;
            }

          case 22:
            if (!(!endpoint.User || !endpoint.User.UserId)) {
              _context4.next = 27;
              break;
            }

            _context4.next = 25;
            return getUserId();

          case 25:
            _foundId = _context4.sent;

            if (_foundId) {
              if (!endpoint.User) endpoint.User = {};
              endpoint.User.UserId = _foundId;
            }

          case 27:
            if (!(endpoint.User && endpoint.User.UserAttributes)) {
              _context4.next = 31;
              break;
            }

            _context4.next = 30;
            return prepareAttributes(endpoint.User.UserAttributes, true);

          case 30:
            endpoint.User.UserAttributes = _context4.sent;

          case 31:
            _context4.next = 33;
            return prepareAttributes(endpoint.Attributes, true);

          case 33:
            endpoint.Attributes = _context4.sent;
            _context4.next = 36;
            return prepareMetrics(endpoint.Metrics);

          case 36:
            endpoint.Metrics = _context4.sent;
            // console.log('endpoint.Metrics', endpoint.Metrics)
            sessionKey = 'sessions';

            if (context.sessionKey) {
              sessionKey = context.sessionKey();
            }

            pageKey = 'pageViews';

            if (context.pageViewKey) {
              pageKey = context.pageViewKey();
            } // Add session and page view counts to endpoint.


            if (!endpoint.Attributes.lastSession) {
              endpoint.Attributes.lastSession = [getSessionID()];
              endpoint.Attributes.lastPageSession = [pageSession];
              endpoint.Metrics[sessionKey] = 1.0;
              endpoint.Metrics[pageKey] = 1.0;
            } else {
              // Increment sessions.
              if (endpoint.Attributes.lastSession[0] !== getSessionID()) {
                endpoint.Attributes.lastSession = [getSessionID()];
                endpoint.Metrics[sessionKey] += 1.0;
              } // Increment pageViews.
              // console.log('[pageViews] lastPageSession', endpoint.Attributes.lastPageSession[0])
              // console.log('[pageViews] pageSession', pageSession)


              if (endpoint.Attributes.lastPageSession[0] !== pageSession) {
                endpoint.Attributes.lastPageSession = [pageSession];
                endpoint.Metrics[pageKey] += 1.0; // console.log('[pageViews] Its different increment page views. New Count', endpoint.Metrics[pageKey])
              }
            } // Store the endpoint data.


            setEndpoint(endpoint);
            return _context4.abrupt("return", endpoint);

          case 44:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _mergeEndpointData.apply(this, arguments);
}

function overwriteMerge(_destinationArray, sourceArray) {
  return sourceArray;
}
/**
 * Resolves an attribute or metric value and sanitize it.
 *
 * @param {mixed} value
 * @param {Function} sanitizeCallback
 */


function prepareData(_x4, _x5) {
  return _prepareData.apply(this, arguments);
}
/**
 * Ensure value is a string or array of strings.
 *
 * @param {mixed} value
 */


function _prepareData() {
  _prepareData = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(value, sanitizeCallback) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(typeof value === 'function')) {
              _context5.next = 4;
              break;
            }

            _context5.next = 3;
            return value();

          case 3:
            value = _context5.sent;

          case 4:
            return _context5.abrupt("return", sanitizeCallback(value));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _prepareData.apply(this, arguments);
}

function sanitizeAttribute(value) {
  return Array.isArray(value) ? value.map(function (val) {
    return val.toString();
  }) : value.toString();
}
/**
 * Ensure value is a single float.
 *
 * @param {mixed} value
 */


function sanitizeMetric(value) {
  return parseFloat(Number(Array.isArray(value) ? value[0] : value));
}
/**
 * Prepares an object for inclusion in endpoint data or event data.
 *
 * @param {Object} attributes
 * @param {Boolean} asArray If true ensure an array of strings is returned for each property
 */


function prepareAttributes(_x6) {
  return _prepareAttributes.apply(this, arguments);
}
/**
 * Prepares an object for inclusion in endpoint data or event data.
 *
 * @param {Object} metrics
 */

function _prepareAttributes() {
  _prepareAttributes = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(attributes) {
    var asArray,
        sanitized,
        name,
        value,
        _args6 = arguments;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            asArray = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : false;
            sanitized = {};
            _context6.t0 = regeneratorRuntime.keys(attributes);

          case 3:
            if ((_context6.t1 = _context6.t0()).done) {
              _context6.next = 17;
              break;
            }

            name = _context6.t1.value;
            value = Array.isArray(attributes[name]) ? attributes[name] : [attributes[name]];

            if (!asArray) {
              _context6.next = 12;
              break;
            }

            _context6.next = 9;
            return prepareData(value, sanitizeAttribute);

          case 9:
            sanitized[name] = _context6.sent;
            _context6.next = 15;
            break;

          case 12:
            _context6.next = 14;
            return prepareData(value[0], sanitizeAttribute);

          case 14:
            sanitized[name] = _context6.sent;

          case 15:
            _context6.next = 3;
            break;

          case 17:
            return _context6.abrupt("return", sanitized);

          case 18:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _prepareAttributes.apply(this, arguments);
}

function prepareMetrics(_x7) {
  return _prepareMetrics.apply(this, arguments);
}
/* usage
updateEndpoint({
  "Address": 'test@gmail.com',
  "Attributes": { "lol": ['thing'], baz: 'bar' },
  "Demographic": {
    "AppVersion": string,
    "Locale": string,
    "Make": string,
    "Model": string,
    "ModelVersion": string,
    "Platform": string,
    "PlatformVersion": string,
    "Timezone": string
  },
  "Location": {
    "City": string,
    "Country": string,
    "Latitude": number,
    "Longitude": number,
    "PostalCode": string,
    "Region": string
  },
  "Metrics": { "key": 1 },
  "OptOut": 'NONE',
  "User": {
    "UserAttributes": { "key": 'baz', 'waht': ['chill'] },
    "UserId": 'user-123'
  }
})

updateEndpoint({
  "Address": 'jimbo@gmail.com',
  "Attributes": { "lol": ['thing'], baz: 'bar' },
  "Metrics": { "key": 1 },
  "OptOut": 'NONE',
  "User": {
    "UserAttributes": { "key": 'baz', 'waht': ['chill'] },
    "UserId": 'user-xyz'
  }
})
*/

function _prepareMetrics() {
  _prepareMetrics = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(metrics) {
    var sanitized, name;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sanitized = {};
            _context7.t0 = regeneratorRuntime.keys(metrics);

          case 2:
            if ((_context7.t1 = _context7.t0()).done) {
              _context7.next = 9;
              break;
            }

            name = _context7.t1.value;
            _context7.next = 6;
            return prepareData(metrics[name], sanitizeMetric);

          case 6:
            sanitized[name] = _context7.sent;
            _context7.next = 2;
            break;

          case 9:
            return _context7.abrupt("return", sanitized);

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _prepareMetrics.apply(this, arguments);
}

var config = {
  /* Disable anonymous MTU */
  disableAnonymousTraffic: false,
  // Pinpoint service region
  pinpointRegion: 'us-east-1',
  // Custom event mapping
  eventMapping: {}
  /**
   * AWS Pinpoint analytics integration
   * @link https://docs.aws.amazon.com/pinpoint/latest/developerguide/
   * @param {object} pluginConfig - Plugin settings
   * @param {string} pluginConfig.pinpointAppId - AWS Pinpoint app Id for client side tracking
   * @param {function} pluginConfig.getCredentials - Async function to get AWS Cognito creds 
   * @param {string} [pluginConfig.pinpointRegion] - AWS Pinpoint region. Defaults to us-east-1
   * @param {string} [pluginConfig.appTitle] - The title of the app that's recording the event.
   * @param {string} [pluginConfig.appPackageName] - The name of the app package, such as com.example.my_app.
   * @param {string} [pluginConfig.appVersionCode] - The version number of the app, such as 3.2.0
   * @param {string} [pluginConfig.fips] - Use the AWS FIPS service endpoint for Pinpoint
   * @param {boolean} [pluginConfig.disableAnonymousTraffic] -  Disable anonymous events from firing
   * @return {object} Analytics plugin
   * @example
   *
   * awsPinpointPlugin({
   *   pinpointAppId: '938bebb1ae954e123133213160f2b3be4',
   *   getCredentials: () => Auth.currentCredentials(),
   * })
   */

};

function awsPinpointPlugin() {
  var pluginConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var eventMap = pluginConfig.eventMapping || {};
  var recordEvent;
  var updateEndpoint;
  var elapsedSessionTime = 0;
  /* Page-session (on route changes) */

  var pageSession = uuid();
  /* Sub-session (visibility changes) */

  var subSessionId = uuid();
  var subSessionStart = Date.now(); // let scrollDepthMax = 0
  // let scrollDepthNow = 0

  return {
    name: 'aws-pinpoint',
    config: _objectSpread2({}, config, {}, pluginConfig),
    bootstrap: function bootstrap(pluginApi) {
      var config = pluginApi.config,
          instance = pluginApi.instance;
      /* Load aws-pinpoint script after userId exists */

      if (config.disableAnonymousTraffic && !instance.user('userId')) {
        instance.once('identifyStart', function (_ref) {
          var plugins = _ref.plugins;
          var self = plugins['aws-pinpoint'];

          if (!self.loaded()) {
            instance.loadPlugin('aws-pinpoint');
          }
        });
      }
    },
    initialize: function initialize$$1(_ref2) {
      var config = _ref2.config,
          instance = _ref2.instance;
      var disableAnonymousTraffic = config.disableAnonymousTraffic;
      /* Disable pinpoint if user is not yet identified. */

      var state = instance.getState();
      var userID = (state.user || {}).userId;
      var context = state.context || {};
      var app = context.app,
          version = context.version;

      if (!userID && disableAnonymousTraffic) {
        return false;
      }
      /* Initialize pinpoint client */


      var pinpointClient = initialize(_objectSpread2({}, config, {
        // The title of the app that's recording the event.
        appTitle: config.appTitle || app,
        // The package name of the app that's recording the event.
        appPackageName: config.appPackageName || app,
        // The version number of the app that's recording the event.
        appVersionCode: config.appVersionCode || version,
        // Get pinpoint endpoint ID
        getEndpointId: function getEndpointId() {
          return instance.user('anonymousId');
        },
        getUserId: function getUserId() {
          return instance.user('userId');
        },
        getContext: function getContext() {
          return {
            elapsed: elapsedSessionTime,
            pageSession: pageSession,
            subSessionId: subSessionId,
            subSessionStart: subSessionStart,
            sessionKey: config.sessionKey,
            pageViewKey: config.pageViewKey // scrollDepth: scrollDepthNow,
            // scrollDepthMax

          };
        },
        enrichEventAttributes: function enrichEventAttributes() {
          return {};
        },
        // Pass scroll into with all events
        enrichEventMetrics: function enrichEventMetrics() {
          return {};
          /*
          return {
            // scrollDepth: scrollDepthNow,
            // scrollDepthMax
          }
          */
        },
        // Custom event mapping
        eventMapping: eventMap
      }));

      recordEvent = pinpointClient.recordEvent;
      updateEndpoint = pinpointClient.updateEndpoint;
      /* Start session */

      recordEvent(SESSION_START);
      /* Scroll tracking
      function pageScrolled(data) {
        const { trigger, direction, scrollMax, scrollMin, range } = data
        // Set current scroll values 
        scrollDepthNow = trigger
        scrollDepthMax = scrollMax
        // Record page scroll event 
        recordEvent('pageScrolled')
      }
       const detachScrollListener = onScrollChange({
        // 25: pageScrolled,
        50: pageScrolled,
        75: pageScrolled,
        90: pageScrolled
      })
      */

      onTabChange(function (isHidden) {
        // console.log('isHidden', isHidden)
        if (isHidden) {
          // On hide increment elapsed time.
          elapsedSessionTime += Date.now() - subSessionStart; // Fire session stop event.

          recordEvent(SESSION_STOP, false);
        } else {
          // Reset subSessions.
          subSessionId = uuid();
          subSessionStart = Date.now(); // Fire session start event.

          recordEvent(SESSION_START);
        }
      });
    },
    page: function page(_ref3) {

      if (!recordEvent) {
        console.log('Pinpoint not loaded');
        return;
      } // Fire page view and update pageSession Id


      var queuePageView = true;
      recordEvent(PAGE_VIEW, queuePageView).then(function () {
        pageSession = uuid();
      });
    },
    reset: function reset(_ref4) {
      storage.removeItem(ENDPOINT_KEY);
    },
    track: function track(_ref5) {
      var payload = _ref5.payload,
          config = _ref5.config;

      if (!recordEvent) {
        console.log('Pinpoint not loaded');
        return;
      }

      if (config.disableAnonymousTraffic && !payload.userId) {
        return;
      }

      var data = formatEventData(payload.properties);
      recordEvent(payload.event, data);
    },
    identify: function identify(_ref6) {
      var payload = _ref6.payload;
      var userId = payload.userId,
          traits = payload.traits;

      if (!updateEndpoint) {
        console.log('Pinpoint not loaded');
        return;
      }

      var userInfo = {};

      if (userId) {
        userInfo.UserId = userId;
      }

      if (traits && Object.keys(traits).length) {
        userInfo.UserAttributes = traits;
      } // Update endpoint in AWS pinpoint


      updateEndpoint(_objectSpread2({}, traits.email ? {
        Address: traits.email,
        ChannelType: CHANNEL_TYPES.EMAIL
      } : {}, {}, !Object.keys(userInfo).length ? {} : {
        User: userInfo
      }));
      /* example
      updateEndpoint({
        "Address": 'jimbo@gmail.com',
        "Attributes": { "lol": ['thing'], baz: 'bar' },
        "Metrics": { "key": 1 },
        "OptOut": 'NONE',
        "User": {
          "UserAttributes": { "key": 'baz', 'waht': ['chill'] },
          "UserId": 'user-xyz'
        }
      })
      */
    },
    loaded: function loaded() {
      return !!recordEvent;
    }
  };
}

function formatEventData(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    var value = obj[key];

    if (typeof value === 'number') {
      acc.metrics[key] = value;
    }

    if (typeof value === 'string') {
      acc.attributes[key] = value;
    }

    return acc;
  }, {
    attributes: {},
    metrics: {}
  });
}

/* This module will shake out unused code + work in browser and node 🎉 */

var index = awsPinpointPlugin;

const analyticsPluginAwsPinpoint_browser_es = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': index,
  PINPOINT_EVENTS: events
});

const require$$0 = /*@__PURE__*/getAugmentedNamespace(analytics_browser_es);

const require$$1 = /*@__PURE__*/getAugmentedNamespace(analyticsPluginAwsPinpoint_browser_es);

var telemetry = createCommonjsModule$1(function (module, exports) {
(function (global, factory) {
	module.exports = factory(require$$0, require$$1) ;
}(commonjsGlobal, (function (Analytics,awsPinpointPlugin) {
Analytics = 'default' in Analytics ? Analytics['default'] : Analytics;
awsPinpointPlugin = 'default' in awsPinpointPlugin ? awsPinpointPlugin['default'] : awsPinpointPlugin;

var Storage = {
  storage: {},
  memory: true,
  get: function get(key) {
    var stored = void 0;
    try {
      stored = window.localStorage && window.localStorage.getItem(key) || this.storage[key];
    } catch (e) {
      stored = this.storage[key];
    }
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return undefined;
      }
    } else {
      return undefined;
    }
  },
  set: function set(key, value) {
    // handle Safari private mode (setItem is not allowed)
    value = JSON.stringify(value);
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      if (!this.memory) {
        console.error('setting local storage failed, falling back to in-memory storage');
        this.memory = true;
      }
      this.storage[key] = value;
    }
  },
  delete: function _delete(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      if (!this.memory) {
        console.error('setting local storage failed, falling back to in-memory storage');
        this.memory = true;
      }
      delete this.storage[key];
    }
  }
};

var COGNITO_KEY = 'TELEMETRY_COGNITO_CREDENTIALS';

function getCredentials(IdentityPoolId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var fipsSubdomainSuffix = options.fips === true ? '-fips' : '';
  var COGNITO_URL = 'https://cognito-identity' + fipsSubdomainSuffix + '.us-east-1.amazonaws.com/';
  var cached = Storage.get(COGNITO_KEY);
  if (cached && Date.now() / 1000 < cached.Expiration) return Promise.resolve(cached);

  var fetchOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-amz-json-1.1',
      'X-Amz-Target': 'AWSCognitoIdentityService.GetId'
    },
    body: JSON.stringify({ IdentityPoolId: IdentityPoolId })
  };

  return fetch(COGNITO_URL, fetchOptions).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(function (response) {
    var IdentityId = response.IdentityId;

    var options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-amz-json-1.1',
        'X-Amz-Target': 'AWSCognitoIdentityService.GetCredentialsForIdentity'
      },
      body: JSON.stringify({ IdentityId: IdentityId })
    };
    return fetch(COGNITO_URL, options);
  }).then(function (response) {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  }).then(function (_ref) {
    var Credentials = _ref.Credentials;

    Storage.set(COGNITO_KEY, Credentials);
    return Credentials;
  });
}

function formatTelemetryAttributes(_ref) {
  var telemetryData = _ref.telemetryData,
      _ref$dimensionLookup = _ref.dimensionLookup,
      dimensionLookup = _ref$dimensionLookup === undefined ? {} : _ref$dimensionLookup,
      _ref$excludeKeys = _ref.excludeKeys,
      excludeKeys = _ref$excludeKeys === undefined ? [] : _ref$excludeKeys;

  return Object.keys(telemetryData).filter(function (key) {
    return !excludeKeys.includes(key);
  }).map(function (key) {
    if (dimensionLookup[key]) {
      return {
        key: getCustomDimensionKey(dimensionLookup, key),
        value: telemetryData[key] };
    }

    return {
      key: key,
      value: getValue(telemetryData, key)
    };
  }).reduce(function (acc, _ref2) {
    var key = _ref2.key,
        value = _ref2.value;

    acc[key] = value;
    return acc;
  }, {});
}

function getValue(data, key) {
  if (key === 'json') {
    return data[key] ? JSON.stringify(data[key]) : 'null';
  }

  return data[key] === undefined ? 'null' : data[key].toString();
}

function getCustomDimensionKey(lookup, key) {
  return 'dimension' + lookup[key];
}

var METRICS = ['size', 'duration', 'position', 'number', 'count'];

function formatTelemetryMetrtics(telemetryData) {
  var metricLookup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(telemetryData).filter(function (key) {
    return metricLookup[key] || METRICS.includes(key);
  }).map(function (key) {
    if (metricLookup[key]) {
      return {
        key: getCustomMetricKey(metricLookup, key),
        value: telemetryData[key]
      };
    }

    return {
      key: key,
      value: telemetryData[key]
    };
  }).reduce(function (acc, _ref) {
    var key = _ref.key,
        value = _ref.value;

    acc[key] = value;
    return acc;
  }, {});
}

function getCustomMetricKey(lookup, key) {
  return 'metric' + lookup[key];
}

var asyncToGenerator = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var interopRequireWildcard = function (obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
};



























var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function createEventLog(_ref) {
  var _ref$event = _ref.event,
      event = _ref$event === undefined ? {} : _ref$event,
      _ref$dimensionLookup = _ref.dimensionLookup,
      dimensionLookup = _ref$dimensionLookup === undefined ? {} : _ref$dimensionLookup,
      _ref$metricLookup = _ref.metricLookup,
      metricLookup = _ref$metricLookup === undefined ? {} : _ref$metricLookup;
  var _event$eventType = event.eventType,
      eventType = _event$eventType === undefined ? 'other' : _event$eventType;

  var metrics = formatTelemetryMetrtics(event, metricLookup);
  var eventAttributes = formatTelemetryAttributes({
    telemetryData: _extends({ eventType: eventType }, event),
    dimensionLookup: dimensionLookup,
    excludeKeys: ['workflow'].concat(toConsumableArray(Object.keys(metrics)), toConsumableArray(Object.keys(metricLookup)))
  });

  return _extends({
    name: eventType,
    referrer: document.referrer,
    hostname: window.location.hostname,
    path: window.location.pathname
  }, eventAttributes, metrics);
}

function createPageViewLog(_ref) {
  var page = _ref.page,
      _ref$previousPage = _ref.previousPage,
      previousPage = _ref$previousPage === undefined ? {} : _ref$previousPage,
      _ref$options = _ref.options,
      options = _ref$options === undefined ? {} : _ref$options,
      _ref$dimensionLookup = _ref.dimensionLookup,
      dimensionLookup = _ref$dimensionLookup === undefined ? {} : _ref$dimensionLookup,
      _ref$metricLookup = _ref.metricLookup,
      metricLookup = _ref$metricLookup === undefined ? {} : _ref$metricLookup;

  var metrics = formatTelemetryMetrtics(options, metricLookup);
  var attributes = formatTelemetryAttributes({
    telemetryData: options,
    dimensionLookup: dimensionLookup,
    excludeKeys: ['workflow'].concat(toConsumableArray(Object.keys(metrics)), toConsumableArray(Object.keys(metricLookup)))
  });

  var _ref2 = document || {},
      referrer = _ref2.referrer,
      title = _ref2.title;

  var _ref3 = window && window.location ? window.location : {},
      hostname = _ref3.hostname,
      pathname = _ref3.pathname;

  return _extends({
    name: 'pageView',
    referrer: referrer,
    hostname: hostname,
    path: page || pathname,
    pageUrl: page || pathname,
    pageName: title,
    previousPageUrl: previousPage.pageUrl,
    previousPageName: previousPage.pageName
  }, attributes, metrics);
}

var Amazon = function () {
  function Amazon(options) {
    classCallCheck(this, Amazon);
    var _options$app = options.app,
        app = _options$app === undefined ? {} : _options$app,
        fips = options.fips,
        userPoolID = options.userPoolID;

    this.analytics = Analytics({
      app: app.name,
      plugins: [awsPinpointPlugin({
        fips: fips,
        pinpointAppId: app.id,
        getCredentials: function getCredentials$$1() {
          return getCredentials(userPoolID, { fips: fips });
        }
      })]
    });

    this.name = 'amazon';
    _extends(this, options);
  }

  createClass(Amazon, [{
    key: 'logPageView',
    value: function logPageView(page, options) {
      var telemetryPayload = createPageViewLog({
        page: page,
        previousPage: this.previousPage,
        options: options,
        dimensionLookup: this.dimensions,
        metricLookup: this.metrics
      });
      this.previousPage = telemetryPayload.attributes;
      this.analytics.track('pageView', telemetryPayload);
    }
  }, {
    key: 'logEvent',
    value: function logEvent() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var telemetryPayload = createEventLog({
        event: event,
        dimensionLookup: this.dimensions,
        metricLookup: this.metrics
      });
      var name = telemetryPayload.name;

      this.analytics.track(name, telemetryPayload);
    }
  }]);
  return Amazon;
}();

function mapMetricsAndDimensions(_ref) {
  var _ref$customTelemetryD = _ref.customTelemetryData,
      customTelemetryData = _ref$customTelemetryD === undefined ? {} : _ref$customTelemetryD,
      _ref$dimensionLookup = _ref.dimensionLookup,
      dimensionLookup = _ref$dimensionLookup === undefined ? {} : _ref$dimensionLookup,
      _ref$metricLookup = _ref.metricLookup,
      metricLookup = _ref$metricLookup === undefined ? {} : _ref$metricLookup;

  return Object.keys(customTelemetryData).map(function (key) {
    if (dimensionLookup[key]) {
      return {
        key: getCustomDimensionKey$1(dimensionLookup, key),
        value: customTelemetryData[key] };
    }
    if (metricLookup[key]) {
      return {
        key: getCustomMetricKey$1(metricLookup, key),
        value: customTelemetryData[key]
      };
    }
  }).filter(function (val) {
    return val;
  }).reduce(function (acc, _ref2) {
    var key = _ref2.key,
        value = _ref2.value;

    acc[key] = value;
    return acc;
  }, {});
}

function getCustomDimensionKey$1(lookup, key) {
  return "dimension" + lookup[key];
}

function getCustomMetricKey$1(lookup, key) {
  return "metric" + lookup[key];
}

// This module performs dynamic importing in Telemetry.js which allows for test stubbing
var dynamicImport = (function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(moduleSpecifier) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve("" + moduleSpecifier).then(function (s) {
              return interopRequireWildcard(commonjsRequire());
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function dynamicImport(_x) {
    return _ref.apply(this, arguments);
  }

  return dynamicImport;
})();

var MODULE_SPECIFIER = 'universal-analytics';

var Google = function () {
  function Google() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    classCallCheck(this, Google);

    this.name = 'google';
    _extends(this, options);
  }

  createClass(Google, [{
    key: 'logPageView',
    value: function logPageView(page, options) {
      var pageviewObj = buildPageViewObject(page, options, this.dimensions, this.metrics);
      getBrowserTrackingFunctions(function (browserTrackers) {
        browserTrackers.forEach(function (browserTracker) {
          browserTracker.send(pageviewObj);
        });
      });
    }
  }, {
    key: 'logEvent',
    value: function logEvent(event) {
      var eventObject = buildEventObject(event, this.dimensions, this.metrics);

      // If server-side, execute universal analytics and exit
      if (this.serverTracker) {
        return this.serverTracker.event(eventObject).send();
      }

      getBrowserTrackingFunctions(function (browserTrackers) {
        browserTrackers.forEach(function (browserTracker) {
          browserTracker.send(eventObject);
        });
      });
    }
  }], [{
    key: 'load',
    value: function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var ua;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ua = void 0;

                if (!(typeof window === 'undefined')) {
                  _context.next = 12;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return dynamicImport(MODULE_SPECIFIER);

              case 5:
                ua = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](2);
                throw new Error('Failed to import ' + MODULE_SPECIFIER + '. ' + _context.t0.message);

              case 11:
                options.serverTracker = getServerSideTrackingFunction(ua.default, options.trackingId);

              case 12:
                return _context.abrupt('return', new Google(options));

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function load(_x2) {
        return _ref.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return Google;
}();

function getServerSideTrackingFunction(fn, trackingId) {
  if (typeof trackingId === 'undefined') {
    throw new TypeError('Google Analytics Tracking ID not provided');
  }
  return fn(trackingId);
}

function getBrowserTrackingFunctions(callback) {
  if (window.ga) {
    window.ga(function () {
      callback(window.ga.getAll());
    });
  } else {
    console.log(new Error('Google Analytics trackers not available'));
  }
}
function buildPageViewObject(page, options) {
  var dimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var metrics = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var standardTelemetry = {
    hitType: 'pageview',
    page: page || window.location.pathname
  };

  var mappedCustomTelemetryData = mapMetricsAndDimensions({
    customTelemetryData: options,
    dimensionLookup: dimensions,
    metricLookup: metrics
  });

  return _extends({}, standardTelemetry, mappedCustomTelemetryData);
}

function buildEventObject(event) {
  var dimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var metrics = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var standardTelemetryData = {
    hitType: 'event',
    eventCategory: event.category || 'none',
    eventAction: event.action,
    eventLabel: event.label
  };

  var mappedCustomTelemetryData = mapMetricsAndDimensions({
    customTelemetryData: event,
    dimensionLookup: dimensions,
    metricLookup: metrics });
  return _extends({}, standardTelemetryData, mappedCustomTelemetryData);
}

/*
(c) 2009-2013 by Jeff Mott. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions, and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions, and the following disclaimer in the documentation or other materials provided with the distribution.
Neither the name CryptoJS nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS," AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var CryptoJS = function (h, s) {
  var f = {},
      g = f.lib = {},
      q = function q() {},
      m = g.Base = { extend: function extend(a) {
      q.prototype = this;var c = new q();a && c.mixIn(a);c.hasOwnProperty('init') || (c.init = function () {
        c.$super.init.apply(this, arguments);
      });c.init.prototype = c;c.$super = this;return c;
    }, create: function create() {
      var a = this.extend();a.init.apply(a, arguments);return a;
    }, init: function init() {}, mixIn: function mixIn(a) {
      for (var c in a) {
        a.hasOwnProperty(c) && (this[c] = a[c]);
      }a.hasOwnProperty('toString') && (this.toString = a.toString);
    }, clone: function clone() {
      return this.init.prototype.extend(this);
    } },
      r = g.WordArray = m.extend({ init: function init(a, c) {
      a = this.words = a || [];this.sigBytes = c != s ? c : 4 * a.length;
    }, toString: function toString(a) {
      return (a || k).stringify(this);
    }, concat: function concat(a) {
      var c = this.words,
          d = a.words,
          b = this.sigBytes;a = a.sigBytes;this.clamp();if (b % 4) for (var e = 0; e < a; e++) {
        c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
      } else if (d.length > 65535) for (e = 0; e < a; e += 4) {
        c[b + e >>> 2] = d[e >>> 2];
      } else c.push.apply(c, d);this.sigBytes += a;return this;
    }, clamp: function clamp() {
      var a = this.words,
          c = this.sigBytes;a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);a.length = h.ceil(c / 4);
    }, clone: function clone() {
      var a = m.clone.call(this);a.words = this.words.slice(0);return a;
    }, random: function random(a) {
      for (var c = [], d = 0; d < a; d += 4) {
        c.push(4294967296 * h.random() | 0);
      }return new r.init(c, a);
    } }),
      l = f.enc = {},
      k = l.Hex = { stringify: function stringify(a) {
      var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
        var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;d.push((e >>> 4).toString(16));d.push((e & 15).toString(16));
      }return d.join('');
    }, parse: function parse(a) {
      for (var c = a.length, d = [], b = 0; b < c; b += 2) {
        d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);
      }return new r.init(d, c / 2);
    } },
      n = l.Latin1 = { stringify: function stringify(a) {
      var c = a.words;a = a.sigBytes;for (var d = [], b = 0; b < a; b++) {
        d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
      }return d.join('');
    }, parse: function parse(a) {
      for (var c = a.length, d = [], b = 0; b < c; b++) {
        d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
      }return new r.init(d, c);
    } },
      j = l.Utf8 = { stringify: function stringify(a) {
      try {
        return decodeURIComponent(escape(n.stringify(a)));
      } catch (c) {
        throw Error('Malformed UTF-8 data');
      }
    }, parse: function parse(a) {
      return n.parse(unescape(encodeURIComponent(a)));
    } },
      u = g.BufferedBlockAlgorithm = m.extend({ reset: function reset() {
      this._data = new r.init();this._nDataBytes = 0;
    }, _append: function _append(a) {
      typeof a === 'string' && (a = j.parse(a));this._data.concat(a);this._nDataBytes += a.sigBytes;
    }, _process: function _process(a) {
      var c = this._data,
          d = c.words,
          b = c.sigBytes,
          e = this.blockSize,
          f = b / (4 * e),
          f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);a = f * e;b = h.min(4 * a, b);if (a) {
        for (var g = 0; g < a; g += e) {
          this._doProcessBlock(d, g);
        }g = d.splice(0, a);c.sigBytes -= b;
      }return new r.init(g, b);
    }, clone: function clone() {
      var a = m.clone.call(this);
      a._data = this._data.clone();return a;
    }, _minBufferSize: 0 });g.Hasher = u.extend({ cfg: m.extend(), init: function init(a) {
      this.cfg = this.cfg.extend(a);this.reset();
    }, reset: function reset() {
      u.reset.call(this);this._doReset();
    }, update: function update(a) {
      this._append(a);this._process();return this;
    }, finalize: function finalize(a) {
      a && this._append(a);return this._doFinalize();
    }, blockSize: 16, _createHelper: function _createHelper(a) {
      return function (c, d) {
        return new a.init(d).finalize(c);
      };
    }, _createHmacHelper: function _createHmacHelper(a) {
      return function (c, d) {
        return new t.HMAC.init(a, d).finalize(c);
      };
    } });var t = f.algo = {};return f;
}(Math);
(function (h) {
  for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function l(a) {
    return 4294967296 * (a - (a | 0)) | 0;
  }, k = 2, n = 0; n < 64;) {
    var j;a: {
      j = k;for (var u = h.sqrt(j), t = 2; t <= u; t++) {
        if (!(j % t)) {
          j = !1;break a;
        }
      }j = !0;
    }j && (n < 8 && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);k++;
  }var a = [],
      f = f.SHA256 = q.extend({ _doReset: function _doReset() {
      this._hash = new g.init(m.slice(0));
    }, _doProcessBlock: function _doProcessBlock(c, d) {
      for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; p < 64; p++) {
        if (p < 16) {
          a[p] = c[d + p] | 0;
        } else {
          var k = a[p - 15],
              l = a[p - 2];a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
        }k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);q = n;n = m;m = h;h = j + k | 0;j = g;g = f;f = e;e = k + l | 0;
      }b[0] = b[0] + e | 0;b[1] = b[1] + f | 0;b[2] = b[2] + g | 0;b[3] = b[3] + j | 0;b[4] = b[4] + h | 0;b[5] = b[5] + m | 0;b[6] = b[6] + n | 0;b[7] = b[7] + q | 0;
    }, _doFinalize: function _doFinalize() {
      var a = this._data,
          d = a.words,
          b = 8 * this._nDataBytes,
          e = 8 * a.sigBytes;
      d[e >>> 5] |= 128 << 24 - e % 32;d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);d[(e + 64 >>> 9 << 4) + 15] = b;a.sigBytes = 4 * d.length;this._process();return this._hash;
    }, clone: function clone() {
      var a = q.clone.call(this);a._hash = this._hash.clone();return a;
    } });s.SHA256 = q._createHelper(f);s.HmacSHA256 = q._createHmacHelper(f);
})(Math);
(function () {
  var h = CryptoJS,
      s = h.enc.Utf8;h.algo.HMAC = h.lib.Base.extend({ init: function init(f, g) {
      f = this._hasher = new f.init();typeof g === 'string' && (g = s.parse(g));var h = f.blockSize,
          m = 4 * h;g.sigBytes > m && (g = f.finalize(g));g.clamp();for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) {
        k[j] ^= 1549556828, n[j] ^= 909522486;
      }r.sigBytes = l.sigBytes = m;this.reset();
    }, reset: function reset() {
      var f = this._hasher;f.reset();f.update(this._iKey);
    }, update: function update(f) {
      this._hasher.update(f);return this;
    }, finalize: function finalize(f) {
      var g = this._hasher;f = g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f));
    } });
})();

var anonymize = function (user) {
  if (!user) return undefined;
  return CryptoJS.SHA256(user).toString(CryptoJS.enc.Hex);
};

var internalOrgs = ['esri.com', 'esriuk.com', 'esri.de', 'esri.ca', 'esrifrance.fr', 'esri.nl', 'esri-portugal.pt', 'esribulgaria.com', 'esri.fi', 'esri.kr', 'esrimalaysia.com.my', 'esri.es', 'esriaustralia.com.au', 'esri-southafrica.com', 'esri.cl', 'esrichina.com.cn', 'esri.co', 'esriturkey.com.tr', 'geodata.no', 'esriitalia.it', 'esri.pl'];

/*
 * Determines whether or not the telemetry library should be enabled based on passed in options
 */
var telemetryEnabled = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var portal = options.portal || {};

  if (options.disabled) {
    // Tracking is manually disabled
    return false;
  }

  if (hasDoNotTrackEnabled()) {
    // user's browser has turned off tracking
    return false;
  }

  if (typeof portal.eueiEnabled !== 'undefined' && portal.eueiEnabled === false) {
    // Portal does not allow tracking
    return false;
  }

  if (portal.eueiEnabled && portal.user && portal.user.orgId === portal.id) {
    // Portal allows tracking; except when user is anonymous or doesn't belong to portal's org
    return true;
  }

  if (portal.user && !portal.user.orgId && portal.ipCntryCode === 'US') {
    // Public user in the United States on a portal that allows tracking
    return true;
  }

  if (!portal.user && portal.ipCntryCode === 'US') {
    // Anonymous user in the United States on a portal that allows tracking
    return true;
  }

  if (Object.keys(portal).length > 0) {
    // Initialized with a Portal object but does not meet tracking conditions
    return false;
  }

  // Default condition not initialized with a Portal-Self object
  return true;
};

function hasDoNotTrackEnabled() {
  return (typeof navigator !== 'undefined' && navigator.doNotTrack) === '1' || typeof window !== 'undefined' && window.doNotTrack === '1';
}

var Telemetry = function () {
  function Telemetry(options) {
    classCallCheck(this, Telemetry);

    // Make sure failure to init this library cannot have side-effects
    try {
      this.trackers = [];
      this.workflows = {};
      this.test = options.test;
      this.debug = options.debug;

      this.disabled = !telemetryEnabled(options);
      if (this.disabled) console.log('Telemetry Disabled');

      if (options.portal && options.portal.user) {
        var subscriptionInfo = options.portal.subscriptionInfo || {};
        this.setUser(options.portal.user, subscriptionInfo.type);
      } else if (options.user) {
        this.setUser(options.user);
      }

      if (typeof window !== 'undefined' && !this.disabled) {
        this._initializeBrowserTrackers(options);
      }
    } catch (e) {
      console.error('Telemetry Disabled');
      console.error(e);
      this.disabled = true;
    }
  }

  // This method is used to implement telemetry.js in node


  createClass(Telemetry, [{
    key: '_initializeBrowserTrackers',
    value: function _initializeBrowserTrackers(options) {
      if (options.amazon) {
        var amazon = new Amazon(options.amazon);
        this.trackers.push(amazon);
      }

      if (options.google) {
        var google = new Google(options.google);
        this.trackers.push(google);
      }
      if (!this.trackers.length) console.error(new Error('No trackers configured'));
    }
  }, {
    key: 'setUser',
    value: function setUser() {
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var orgType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Public';

      user = typeof user === 'string' ? { username: user } : user;
      this.user = user;
      this.user.accountType = orgType;
      var internalDomain = void 0;
      if (user.email && user.email.split) {
        var domain = user.email.split('@')[1];
        internalDomain = internalOrgs.filter(function (org) {
          return domain === org;
        }).length > 0;
      }

      if (internalDomain || ['In House', 'Demo and Marketing'].indexOf(orgType) > -1) {
        this.user.internalUser = true;
      }
    }
  }, {
    key: 'logPageView',
    value: function logPageView(page) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var attributes = this.preProcess(options);
      if (this.debug) console.log('Tracking page view', JSON.stringify(attributes));
      if (this.test && !this.disabled) return attributes;
      var trackers = this.trackers.filter(function (_ref) {
        var disabled = _ref.disabled;
        return !disabled;
      });

      if (!trackers.length || this.disabled) {
        if (!this.disabled) console.error(new Error('Page view was not logged because no trackers are configured.'));
        return false;
      }

      var promises = trackers.map(function (tracker) {
        return tracker.logPageView(page, attributes);
      });

      Promise.all(promises).then();
      return true;
    }
  }, {
    key: 'logEvent',
    value: function logEvent() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var event = this.preProcess(options);

      if (this.debug) console.log('Tracking event', JSON.stringify(event));
      if (this.test) return event;
      var trackers = this.trackers.filter(function (_ref2) {
        var disabled = _ref2.disabled;
        return !disabled;
      });

      if (!trackers.length || this.disabled) {
        if (!this.disabled) console.error(new Error('Event was not logged because no trackers are configured.'));
        return false;
      }

      var promises = trackers.map(function (tracker) {
        return tracker.logEvent(event);
      });

      Promise.all(promises).then();
      return true;
    }
  }, {
    key: 'logError',
    value: function logError() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var event = _extends({ eventType: 'error' }, options);
      this.logEvent(event);
    }
  }, {
    key: 'startWorkflow',
    value: function startWorkflow(name) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var workflow = {
        name: name,
        start: Date.now(),
        steps: [],
        workflowId: Math.floor((1 + Math.random()) * 0x100000000000).toString(16)
      };
      this._saveWorkflow(workflow);
      var workflowObj = _extends({ name: name, step: 'start' }, attributes);
      this._logWorkflow(workflowObj);
      return workflow;
    }
  }, {
    key: 'stepWorkflow',
    value: function stepWorkflow(name, step) {
      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var details = typeof options === 'string' ? attributes : attributes.details;
      var workflowObj = _extends({ name: name, step: step, details: details }, attributes);
      this._logWorkflow(workflowObj);
    }
  }, {
    key: 'endWorkflow',
    value: function endWorkflow(name) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var workflowObj = _extends({ name: name, step: 'finish' }, attributes);
      this._logWorkflow(workflowObj);
    }
  }, {
    key: 'cancelWorkflow',
    value: function cancelWorkflow(name) {
      var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var workflowObj = _extends({ name: name, step: 'cancel' }, attributes);
      this._logWorkflow(workflowObj);
    }
  }, {
    key: 'getWorkflow',
    value: function getWorkflow(name) {
      var workflow = Storage.get('TELEMETRY-WORKFLOW:' + name);
      // do not let old workflows be returned
      if (workflow) {
        var workflowAge = Date.now() - workflow.start;
        var timeout = 30 * 60 * 1000;
        if (workflowAge < timeout) {
          return workflow;
        } else {
          this._deleteWorkflow(workflow);
        }
      }
    }
  }, {
    key: '_saveWorkflow',
    value: function _saveWorkflow(workflow) {
      Storage.set('TELEMETRY-WORKFLOW:' + workflow.name, workflow);
    }
  }, {
    key: '_deleteWorkflow',
    value: function _deleteWorkflow(workflow) {
      Storage.delete('TELEMETRY-WORKFLOW:' + workflow.name);
    }
  }, {
    key: '_logWorkflow',
    value: function _logWorkflow() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      /*
      const workflow = {
        name: 'add layer to map',
        step: 'start',
        details: 'some details about the step'
      }
      */
      options = this.preProcess(options);
      var workflow = this.getWorkflow(options.name);
      if (!workflow) {
        this.startWorkflow(options.name);
        workflow = this.getWorkflow(options.name);
      }
      workflow.steps.push(options.step);
      workflow.duration = (Date.now() - workflow.start) / 1000;

      if (['cancel', 'finish'].indexOf(options.step) > -1) {
        this._deleteWorkflow(workflow);
      } else {
        this._saveWorkflow(workflow);
      }

      var track = _extends(options, {
        eventType: 'workflow',
        category: options.name,
        action: options.step,
        label: options.details,
        duration: workflow.duration,
        workflowId: workflow.workflowId
      });

      this.logEvent(track);
    }
  }, {
    key: 'preProcess',
    value: function preProcess() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var userOptions = {};
      if (this.user) {
        userOptions = {
          user: anonymize(this.user.username),
          org: anonymize(this.user.orgId),
          lastLogin: this.user.lastLogin,
          userSince: this.user.created,
          internalUser: this.user.internalUser || false,
          accountType: this.user.accountType
        };
      }

      return _extends({}, options, userOptions);
    }
  }, {
    key: 'disableTracker',
    value: function disableTracker(trackerName) {
      var tracker = this.trackers.find(function (_ref3) {
        var name = _ref3.name;
        return name === trackerName;
      });
      if (tracker) {
        tracker.disabled = true;
      }
    }
  }, {
    key: 'enableTracker',
    value: function enableTracker(trackerName) {
      var tracker = this.trackers.find(function (_ref4) {
        var name = _ref4.name;
        return name === trackerName;
      });
      if (tracker) {
        tracker.disabled = false;
      }
    }
  }], [{
    key: 'load',
    value: function () {
      var _ref5 = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var telemetry, googleTracker;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                telemetry = new Telemetry(options);

                if (!(typeof window === 'undefined' && options.google)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return Google.load(options.google);

              case 4:
                googleTracker = _context.sent;

                telemetry.trackers.push(googleTracker);

              case 6:
                return _context.abrupt('return', telemetry);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function load(_x12) {
        return _ref5.apply(this, arguments);
      }

      return load;
    }()
  }]);
  return Telemetry;
}();

return Telemetry;

})));
//# sourceMappingURL=telemetry.js.map
});

const Telemetry = /*@__PURE__*/getDefaultExportFromCjs(telemetry);

const hubTelemetryCss = ":host{display:block}";

let HubTelemetry = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.google = 'UA-47337822-17';
  }
  // TODO: investigate using `npm install --save-dev @types/google.analytics`
  // via https://stackoverflow.com/questions/45758852/angular-4-using-google-analytics
  initializeGoogleAnalytics(googleConfig) {
    // @ts-ignore google specific code
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore google specific code
    function gtag() { dataLayer.push(arguments); }
    // @ts-ignore google specific code
    gtag('js', new Date());
    // @ts-ignore google specific code  
    gtag('config', googleConfig);
  }
  componentDidLoad() {
    this.initializeGoogleAnalytics(this.google);
    this.telemetry = new Telemetry({
      google: {
        dimensions: {
          datasetId: 6,
          attribute: 7,
          serviceQuery: 8,
          searchQuery: 9,
          objectId: 10,
          facetValue: 11
        }
      }
    });
    // TODO log telemetry depending on configured providers
    this.telemetry.logEvent({ category: 'hub-component', action: 'hub-telemetry:loaded', label: this.google });
  }
  // use utils/telemetry-utils#sendTelemetry
  handleEvent(event) {
    // {category: 'hub-telemetry-event', action: 'hub-telemetry-event', label: 'hub-telemetry-event'}
    this.telemetry.logEvent(event.detail);
  }
  render() {
    return (h$1(Host, null, h$1("slot", null)));
  }
};
HubTelemetry.style = hubTelemetryCss;

export { HubTelemetry as hub_telemetry };
