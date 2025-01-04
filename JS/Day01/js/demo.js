/**
 * Primitive Datatype
 *  == string
 *  == number
 *  == boolean
 *  == undefined
 *  == null
 * --------------------------------
 * -- Reference Datatype
 *  -- Object
 *
 */

// var fname = "ali"; // string
// var num = 123; //number
// var flag = true; // boolean

// var num2 = 123.23; // number -- float double

// console.log(typeof fname);
// console.log(typeof num);
// console.log(typeof num2);
// console.log(typeof flag);
// standard -- camelCase

// first
// firstSecond
// firstSecondThird
// var firstName = "sara";
/**Var
 * -- Reassign
 *  -- accept diferent datatypes
 *  -- redeclare
 */
// var fname;
// console.log(typeof fname);
// fname = "ahmed"; //
// fname = 10;
// console.log(typeof fname);
// var fname = "ali"; // string
// console.log(fname); //
// var fname = 10;
// console.log(fname);
// fname = "ahmed"; // reassign
// fname = 10;
// fname = true;
// fname = [];
// fname = console.log(fname);
// var fname = undefined;

// console.log(fname);
// console.log(typeof fname);
// js Engine -- V8
// var fname = 10;

// console.log(fname);
// console.log(fname.toString());
// console.log(fname);

// console.log(typeof fname); //
// var fname = String(100);

// console.log(typeof fname);
// var num = 10;

// var num = Number("mona");

// console.log(num); //NaN -- Not a Number
// console.log(typeof num);

/**-----------Falsy Values
 * --- false
 * --- 0
 * ---- ""
 * ---- NaN
 * ---- undefined
 * ---- null
 *----------------truthy values-------------
 * --------- */
// var flag = Boolean("NaN");

// console.log(flag);
/***
 * [+] ==> Number + Number --> add
 *     ==> string + string --> concat
 *
 * coercion -- js automatically convert from datatype to anther datatype
 *
 * ------------------------------------
 */

// var x = "mona"; // string -- NaN
// var y = 20; // number

// console.log(x - y);
// mona
// NaN
// undefined

/** Comparsion Operator
 *  [==] --> (value)
 *  [===] --> (value & datatype)
 */
// var x = "true"; // NaN -- Number

// var y = true; // 1 -- Number

// console.log(x == y); // true

// var x = "20";
// var y = 10;
// console.log(x + y);
/**  Logical Operator
 *
 * and
 * true && true --> true
 * true && false --> false
 * false && true --> false
 * false && false --> false
 * -------------------------------
 * true || true --> true
 * true || false --> true
 * false || true --> true
 * false || false --> false
 * ----------------------------------
 * false --> true
 * true --> false
 */
// var color = "red";

// if (undefined ) {
// 	// block
// } else {
// 	//elseBlock
// }
/** ----
 * "mona" && "ali"  ==>
 *  true &&
 *
 * 0 && "hoda" ==> 0
 *
 * "" && undefined
 * ----------------------------
 * "mona" || "hoda"
 * undefined || 0
 *
 * undefined || 6
 *  5 || undefined
 */

// if(){}
/**-------------------------- */
// if ( condition ) {
//     // true
// } else if(){
//     //else
// }
// for (var i = 0; i < 5; i++) {
// 	console.log(i);
// }

// var i = 0;
// while ( i < 5 )
// {
//     console.log( i );
//     i++
// }

// if (true) {
// 	// line1
// } else {
// 	// line2
// }

// 5 > 2 ? console.log("Hello") : console.log("Welcome");

// var num1 = Number(prompt("Enter Your num1", 10));
// var num2 = Number(prompt("Enter Your num2", 10));
// console.log(num1 + num2);
// parseInt("10mona") ===>10
// Number("10mona") ==> NaN

// var i = 3;

//  document.writeln("Hello<br/>");
// document.writeln("welcome");
// document.writeln("<h" + i + ">Hello PD</h" + i + ">");

// var fname = "ola";

// document.writeln("<h1>" + fname + "</h1>");

// var i = 5;

// document.writeln("Hello");
// document.writeln("<h" + i + ">Alaa</h" + i + ">");

// alert("you deleted this item");
// var result = confirm("Are you sure you want to delete this item");
// result ? alert("Item Deleted") : document.writeln("Operation cancelled");

// document.writeln("<h1 class='test'>hello</h1>");
// document.writeln("<h1 style='color:green'>hello</h1>");
// document.writeln("<img src='./1.jpg'/>");
