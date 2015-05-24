document.writeln('Hello, World!');


// shortcut to adding methods to things
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}
 


var double = function (x)
{
    return x+x;
}

var fib = function (x)
{
    if(0 === x)
    {
	return 0;
    }
    if(1 === x)
    {
	return 1;
    }
    if(2 === x)
    {
	return 1;
    }
    return fib(x-1) + fib(x-2)
}

function add (x,y)
{
    return x + y;
}

function Quo (string) {
    this.status = string;
}

Quo.prototype.get_status = function () {
    return this.status;
}

new Quo('confusing');


String.method('trim',function () {
    return this.replace(/^\s+|\s+$/g, '');
});



// add conditionally
Function.prototype.method = function (name, func) {
    if (!this.prototype[name])
    {
	this.prototype[name] = func;
	return this;
    }
}

var myObj = (function () {
    var value = 0;

    return {
	increment: function (inc) {
	    value += typeof inc === 'number ' ? inc: 1;
	},
	getValue: function () {
	    return value;
	}
    };
}()); // this calls the function that was returned
