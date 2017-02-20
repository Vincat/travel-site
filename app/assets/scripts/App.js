var $ = require('jquery');
var Person = require('./modules/Person');

class Adult extends Person {
	payTaxes() {
		console.log(this.name + "now owes $0 in taxes.");
	}
}

alert("Testing ABC");

var john = new Person("John Doe", "Blue");
john.greet();

var jane = new Adult("Jane Smith", "Green");
jane.greet();
jane.payTaxes();

$("h1").remove();