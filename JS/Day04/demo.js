// var element = document.getElementById("parent");

// console.log(element.firstChild);

// console.log(document.links);

// var ali = document.getElementById("parent");

// var elements = document.querySelector("#err");
// console.log(elements);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

// function showData() {
// 	console.log("Hello PD");
// }

// var input = document.getElementById("input1");
// var span = document.getElementsByClassName("output")[0];

// console.log(span);
// function execute() {
// 	span.innerHTML = input.value;
// 	// input.value = "Hello";
// 	// console.log(input.value); //get
// }
// var element = document.getElementsByClassName("info")[0];

// function changeText() {
// 	// override
// 	element.innerHTML = "<h1>Hello PD</h1>";
// 	// element.innerHTML = "hello Pd";
// 	// get
// 	// console.log(element.innerText);
// }
/**================================ */
// var inputs = document.getElementsByName("choose");
// function showAnswer() {
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (inputs[i].checked) {
// 			console.log(inputs[i].value);
// 		}
// 	}
// }
// var input1 = document.getElementById("input1");
// var span = document.getElementsByClassName("output")[0];

// function test() {
// 	span.innerHTML = input1.value;
// }

/** Change Style
 * == Style
 * == className
 * == classList
 *      -- add
 *      -- remove
 *      -- toggle
 *     -- setAttribute
 *
 *
 */
var p = document.getElementsByTagName("p")[0];

function changeStyle() {
	// console.log((p.classList[0] = "newClass"));
	// p.classList.add("jsClass");
	// console.log(p.classList);
}
// function changeStyle() {
// 	p.className += " jsClass";
// 	// console.log(p.className); //get
// }
// function changeStyle() {
// 	p.style.cssText = `
//             background-color:red;
//             padding:2rem

//     `;
// }
// function changeStyle() {
// 	p.style.backgroundColor = "#81a2a4";
// 	p.style.color = "#ddd";
// 	p.style.padding = "2rem";
// }

// function x() {
// 	console.log("hello");
// }
// console.log( x ) // undefined
// x()//Error
// var x = function (){}
// fun(fun(){})

// (function () {})();

// var link1 = document.getElementById("link1");
// var img = document.images[0];
// function execute() {
// 	// if (link1.hasAttribute("class")) {
// 	// 	link1.removeAttribute("class");
// 	// } else {
// 	// 	link1.setAttribute("class", "jsClass");
// 	// }
// 	// link1.setAttribute("class", "testData");
// 	// img.setAttribute("src", "./3.jpg");
// 	// console.log(link1.getAttribute("class"));
// 	// console.log(img.getAttribute("src"));
// 	// console.log(img.getAttribute("alt"));
// }

// <p>Text</p>
// var parent = document.getElementById("parent");
// var myElement = document.getElementById("output");

// var p = document.createElement("p");
// var span = document.createElement("span");

// span.innerHTML = "Hello Span";
// var text = document.createTextNode("Hello PD");
// var result = p.append("Hello direct Text");
// // console.log(result);

// // var result = p.appendChild(span);

// myElement.insertAdjacentElement(); //Search
// function execute() {
// 	myElement.remove();
// myElement.before(p);
// myElement.after(p);
// parent.append(p, span);
// parent.appendChild(p);
// }
/**
 * append accept Node Type || String
 * append can accept more than one element
 * return undefined
 * -------------------------------------
 * appendChild
 * accept only one Child
 * -- Node type
 *--- Child
 *
 */
// var span = document.createElement("span");
// var result = span.append(
// 	"Welcome Sara ",
// 	(document.createElement("p").innerHTML = "Hello")
// );

// console.log(result);
// console.log(span);
