function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(namedFunction){
    return function namedFunction(){

    };
}

function returnsAnAnonymousFunction(anonymousFunction){
    return function(){

    };
}