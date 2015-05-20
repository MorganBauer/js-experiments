document.writeln('Hello, World!');

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}

var empty={}
var person = {
    'first-name' : 'john',
    'last-name' : 'clark'
}

var emptystr =
    {
	'' : 'whoa'
    }


var flight = {
    airline : 'oceanic',
    departure : {
	time: "830"
    },
    arrival : {
	time:'930'
    }
}

flight['airline']

flight.airline

flight.arrival.time

// flight.blargh = undefined

// || used for 'default value' type operation
var time = flight.middle || {time:'450'}
var time2= flight.arrival.time || {time:'450'}

// && used for 'nullcheck' type operation
flight.pilot // undefined
// flight.pilot.name // typeerror
flight.pilot && flight.pilot.name // undefined from first return

// updates
flight.airline = 'american'
flight.pilot = 'bob'


if (typeof Object.create !== 'function') {
    Object.create = function (o) {
	var F = function () {};
	F.prototype = o;
	return new F();
    };
}
var another_flight = Object.create(flight);


var third = Object.create(another_flight);
third.pilot = 'jimbob'
third.hasOwnProperty('departure')

third.hasOwnProperty('pilot')



for (name in third)
{
    document.writeln(name + ': ' + third[name]);
}

var MYAPP = {};
MYAPP.blah = 'blah'
