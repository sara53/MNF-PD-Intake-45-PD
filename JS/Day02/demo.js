// // fun params
// function statement (declaration)
// function add(x, y) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log(x + y);
// }

// add("mona", "ahmed");
// add(true, true);

// add("mona", 10);
// add(3, 4);
// // add();
// // add(3);
// add(1, 2, 3, 4, 6);

// // arguments
// add(3, 4);
// console.log("---------------");
// add(5, 6);
// console.log("--------------");
// add(10, 11);

// function sayHello() {
// 	console.log("Hello PD");
// }

// sayHello("mona");
// default Values
// function add(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log(x + y);
// }

// add(7, 2);

// function add(x, y) {
// 	return x + y;
// }

// console.log(add(3, 4));

// var result = add(3, 4);
// console.log(result);

// Number(); // built in

// function add(x, y) {
// 	console.log(x + y);
// }

// var result = add(3, 4);
// console.log(result);
// function expression
// var result = function add(x, y) {
// 	var z = x + y;
// 	console.log(z);
// };

// console.log(typeof result);
// console.log(fname);
// var fname = "mona";
// console.log(fname);

// var fname;
// console.log(fname);
// fname = "mona";
// console.log(fname);

// add(3, 4);//
// function add(x, y) {
// 	console.log(x + y);
// }

// console.log(sum);
// var sum = function (x, y) {
// 	console.log(x + y);
// };

// (function (x) {
// 	var fname = "ali";
// 	console.log(fname);
// })();

// (function () {
// 	var fname = "AHMed";
// 	console.log(fname);
// })();
/**================================ */
// var fname = "mona";

// function dotnetTrack(supName) {
// 	console.log("Hello Dotnet track");
// 	console.log("Your supervisor is : " + supName);
// }

// var mearnTrack = function (supName) {
// 	console.log("hello mearn track");
// 	console.log("Your supervisor is : " + supName);
// };
// function greet(myFun, name) {
// 	myFun(name);
// 	console.log("Welcome at ITI");
// }

// greet(dotnetTrack, "ahmed ali");
// console.log("-------------");
// greet(mearnTrack, "mona alaa");
// console.log("===============");
// greet(function () {
// 	console.log("Hello PD Track");
// });

// function handelOperation(x) {
// 	console.log(x * x);
// }

// function sum(x, y) {
// 	return x + y;
// }

// handelOperation(sum(3, 4));
/**======================================== */
// function greet(myFun1, myFun2) {
// 	myFun1(function () {
// 		console.log("inner function");
// 	});
// 	console.log("---------------");
// 	myFun2(function () {
// 		console.log("Second inner function");
// 	});
// 	console.log("Welcome at ITI");
// }

// greet(
// 	function (x) {
// 		x();
// 		console.log("Hello");
// 	},
// 	function (y) {
// 		y();
// 		console.log("Welcome");
// 	}
// );
/**===================== String ===============
 * length
 * --------------------------------------------
 * == toUpperCase
 * == toLowerCase
 * == concat
 * == char ==> index --> Char
 * == indexOf ==> Char --> index
 * == lastIndexOf ==> Char --> index
 * == startsWith
 * == endsWith
 * == includes
 * == trim
 * == trimStart
 * == trimEnd
 * == slice VS substring (search) VS Splice
 * == split
 *
 * =============================================== */

// var str = "hello";

// console.log(str[10]);
// var str = "at ITI";

// var result = `hello ${str}

// ${str}

//             :)
//     `;

// console.log(result);

// console.log(fname.length);
// for (var i = 0; i < fname.length; i++) {
// 	console.log(fname[i]);
// }
// console.log(fname[0]); //get
// console.log(fname[1]); //get
// console.log(fname[2]); //get

// var arr = [
// 	function () {
// 		console.log("hello");
// 	},
// 	"ali",
// 	123,
// 	"hoda",
// 	true,
// 	[1, 2, 4],
// ];

// arr[0]();
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
/**============================Array ==================
 *length
 -------------------------------------------------
    == push --> add an element at the end of the array
    == unshift --> add an element at the front of the array
    == pop
    == shift
 *  == concat
 *  == Splice (search)
 *
 *
 * ========================= */
// var arr = [20, 10, 4, 3, 2, 7];
// var arr = ["mona", "ola", "hoda"];

// var result = arr.join(``);
// console.log(result);
// arr.sort(/** callback function */);
// arr.reverse();
// var result = arr.concat(["pd", "OS"]);
// arr.unshift("hello");
// arr.unshift("123");
// console.log(arr);
// console.log(result);
