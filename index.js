function receivesAFunction(callbackFunction) {
    callbackFunction();
  }

function returnsANamedFunction() {
    return function namedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function (){};
}