//scope

var b ="Accessible";

function bb(){
    var b = "hello";
    console.log(b);
}

//Root Scope (window)

var fun = 5;

function funFuction(){
    //Child scope
    var fun = "hello";
    console.log(fun);
}

function funerFuction(){
    //Child scope
    var fun = "byee";
    console.log(fun);
}

function funestFuction(){
    //Child scope
    var fun = "ah";
    console.log(fun);
}
console.log(fun)