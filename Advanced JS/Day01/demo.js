// var fname = "ali";

// function getName() {
// 	console.log("Hello");
// 	console.log(fname);
// }

// window.getName(); // window

// var person = {
// 	fname: "ahmed",
// 	age: "ali",
// 	display: function () {
// 		console.log("Test");
// 	},
// };

// person.display(); // person

/**======================================== */

// var trackName = "OS";
// function sayHello() {
// 	console.log(this.trackName);
// }

// var person = {
// 	fname: "ali",
// 	trackName: "Pd",
// 	display: function () {
// 		sayHello.call(this);
// 		this.sayHello();
// 	},
// };
// person.display();

// var person2 = {
// 	fname: "mahmoud",
// 	trackName: "Front",
// 	display: sayHello,
// };

// person2.display(); //
/*
var person = {
	fname: "ali",
	display:sayHello
};
*/

// this -- window

// var product = {
// 	test: "test product",
// };
// var test = "hello";
// function greet() {
// 	console.log(this.test);
// 	console.log("PD track");
// }

// greet(); // window
// console.log("================");
// greet.call(product);

// var person1 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	display: function (x, y) {
// 		console.log(`x: ${x} ${this.fname} ${this.lname} y: ${y}`);
// 	},
// };
// var person2 = {
// 	fname: "mona",
// 	lname: "sayed",
// };

// var result = person1.display.bind(person2);

// result(":)", ":(");

// person1.display.apply(person1, [":_", "Hello y"]);
// person1.display.apply(person2);
// person1.display.call(person1, ":)", "Done");
// person1.display.call(person2);
/**================================= */

// var fname = "ali";
// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.fname);
// 			}.bind(this),
// 			2000
// 		);
// 	},
// };

// person.display();
/**================================= */
// // that pattern
// var fname = "ali";
// var person = {
// 	fname: "ahmed",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// ali -- 1
// ahmed --
/**=================Closure================ */
// function greet() {
// 	var trackName = "PD";
// 	var test = "Hello";
// 	return function () {
// 		console.log("Hello ", trackName);
// 	};
// }

// var result = greet();
// console.log(trackName);
// result();
// hello undefined
// hello pd
/**---------------------------------------- */

// function getArr() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(function () {
// 			console.log(i);
// 		});
// 	}
// 	return arr;
// }

// var result = getArr();
// result[0](); //0
// result[1](); //1
// result[2](); //2
/**---------------------------------------- */

// var product1 = {
// 	id: 1,
// 	name: "Book",
// 	price: 200,
// 	quantity: 20,
// 	category: "school",
// };
// var product2 = {
// 	id: 2,
// 	name: "Pen",
// };
// var product3 = {
// 	id: 3,
// 	price: 900,
// };

// document.writeln(`<h1>${product1.name}</h1>`);
// document.writeln(`<p>${product1.price}</p>`);
// document.writeln(`<p>${product1.category}</p> <hr/>`);
// document.writeln(`<h1>${product2.name}</h1>`);
// document.writeln(`<p>${product2.price}</p>`);
// document.writeln(`<p>${product2.category}</p> </hr>`);
// factory Pattern
// function product(_id, _name, _price) {
// 	return {
// 		id: _id || "",
// 		name: _name || "",
// 		price: _price || "",
// 		discount: function (rate) {
// 			return this.price * (rate || 0.1);
// 		},
// 	};
// }

// var p1 = product(1, "Book", 200);
// console.log(p1.discount(0.5));
// function constructor
// function Product(name, price) {
// 	this.name = name;
// 	this.price = price;
// }

// console.log(Product.prototype); //

// var p1 = new Product("Book", 200);
// var p2 = new Product("Pen", 300);
// p1.discount();
// p2.discount();

/**
 *  create for an empty object
 *  -- this == {}
 * -- return this object
 *
 *
 */
