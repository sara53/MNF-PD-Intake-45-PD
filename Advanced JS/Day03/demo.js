// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
// Person.prototype.display = function () {
// 	console.log(`${this.name} ${this.age}`);
// };

// console.log(Person.prototype.constructor.name);
// var p1 = new Person("ali", 25);
// var p2 = new Person("mona", 20);

// p1.display();
// p2.display();
// Person.prototype.trackName = "Pd";

// p1.__proto__.test = "Hello";

// console.log(p1);
// console.log(p1.__proto__.trackName);
//console.log(p1.__proto__.__proto__.__proto__);
//console.log(p1.__proto__.__proto__ == Object.prototype);
//console.log(p1.__proto__.__proto__ == Object.prototype);

//console.log(Person.prototype.__proto__ == Object.prototype);

// var p2 = new Person("mona", 20);
// var product  = new Object()
// var product = {
// 	name: "book",
// };

// console.log(product.name);
// console.log(product.fly());
// var user = {};
// console.log(user);
// console.log(user.prototype);
// console.log(product.__proto__ == Object.prototype);
// console.log(user.__proto__ == Object.prototype);
// console.log(user.__proto__ == product.__proto__);
//var product = new Object();
//console.log(Object.prototype);
//console.log(product);
// var product = {
// 	test: "Hello", // Static
// 	prototype: {
// 		trackName: "os",
// 	},
// };

// var user = { ...product.prototype };

// console.log(user.trackName);
/**===========================Inheritance=================== */

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.display = function () {
// 	console.log(`${this.name} ${this.age}`);
// };
/**========================================= */

// function User(name, age, password) {
// 	Person.call(this, name, age);
// 	this.password = password;
// }

// User.prototype = Object.create(Person.prototype); // line
// User.prototype.constructor = User;
// User.prototype.generatePassword = function () {
// 	console.log(`${this.password.toUpperCase()} %&$$ ${this.password}`);
// };
//override polymorohism
// User.prototype.display = function () {
// 	console.log(`${this.name} ${this.age} ${this.password}`);
// };

// User.prototype.__proto__.display = function () {
// 	console.log("Hello");
// };
// var myUser = new User("mahmoud", 21, "ma123");

// console.log(myUser);
// var p3 = new Person("ahmed", 20);

// p3.display();
// console.log(myUser);
// myUser.generatePassword();
// myUser.display();

// console.log(Person.prototype);
// console.log(User.prototype);

/**=========================================== */
// Array.prototype.push = function () {
// 	console.log("Hello Pd");
// };

// var product = {
// 	name: "book",
// 	price: 300,
// };

// var result = Object.create(product);

// result.category = "school";

// console.log(result);

// console.log(product);
/**====================Polymorphism==================== */
// Overload
// function calcArea(options) {
// 	if (options.type == "Rectangle") {
// 		return options.w * options.h;
// 	}
// 	if (options.type == "Circle") {
// 		return Math.PI * options.r * options.r;
// 	}
// }
// console.log(calcArea({ type: "Rectangle", w: 10, h: 100 }));
// console.log(calcArea({ type: "Circle", r: 1 }));
// function sum(x, y, z) {
// 	return x + (y || null) + (z || null);
// }
// console.log(sum(3, 4));
// console.log(sum(3, 4, 6));
/**====================Abstraction==================== */
// function Person() {
// 	if (this.constructor == Person) {
// 		throw "Can not take an object from abstract class";
// 	}
// }

// var p1 = new Person()
// Person.prototype.display = function () {
// 	throw "Method not implemented";
// };

// function User(password) {
// 	Person.call(this);
// 	this.password = password;
// }
// User.prototype = Object.create(Person.prototype);
// User.prototype.constructor = User;

// User.prototype.display = function () {
// 	console.log("my Dislay");
// };
// var myUser = new User("wo33");

// myUser.display();
/**====================Encapsulation==================== */
// function Person(name, age) {
// 	var _id = 1;
// 	this.name = name;
// 	this.age = age;
// 	// public --  previllage method
// 	this.getId = function () {
// 		return _id;
// 	};
// 	this.setId = function (value) {
// 		_id = value;
// 	};
// }
// function Person(name, age) {
// 	var _id = 1;
// 	this.name = name;
// 	this.age = age;
// 	Object.defineProperty(this, "idHandler", {
// 		get: function () {
// 			return _id;
// 		},
// 		set: function (value) {
// 			_id = value;
// 		},
// 	});
// }
// var p1 = new Person("ali", 20);
// p1.idHandler = "Welcome new Id"; // set
// console.log(p1.idHandler); // get

// p1.setId = 123;
// p1.getId;//
// console.log(p1.name); // get
// p1.name = "new Name"; // set

// var product = { name: "book", price: 300 };

// Object.defineProperty(product, "test", {
// 	value: "school",
// 	writable: true,
// 	configurable: true,
// 	enumerable: true,
// });

// product.test = "hello"; // override
// console.log(product.test);

// delete product.getId;

// console.log(product);
// // product.name = "pen"; // set

// delete product.test; // delete

// for (var key in product) {
// 	console.log(key);
// }

// console.log(product);
