Function.prototype.callPolyfill = function (context, ...args) {
  const uniqueSymbol = Symbol();
  context[uniqueSymbol] = this;
  const result = context[uniqueSymbol](...args);
  delete context[uniqueSymbol];

  return result;
};
