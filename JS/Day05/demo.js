// alert("Hello");
// window.alert("Test Second alert");
// confirm("fkfk");
// console.log(window);

// var person = { fname: "ali", display: function () {} };

// person.fname; // get

// person.display()// display
/**============ window optional====================== */
// alert() // window
// var myWin;
// function openNewWindow() {
// 	myWin = open("about.html", "", "width=300,height=300");
// 	myWin.focus();
// }
// function closeWindow() {
// 	myWin.close();
// }
// function moveToWindow() {
// 	myWin.moveTo(300, 300);
// }
// function moveByWindow() {
// 	myWin.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWin.resizeTo(500, 500);
// }
// function resizeByWindow() {
// 	myWin.resizeBy(100, 100);
// }
/**============ Window setTimeout====================== */
// function sayHello(trackName, name) {
// 	console.log("Hello " + trackName + " " + name);
// }
// sayHello();// js Engine
//setTimeout(sayHello, 3000, "PD", "Ahmed Mohamed");
/**============ Window setInterval====================== */
// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// // after 5 seconds

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);
/**=====================Simple Timer code====================== */
// var span = document.querySelector("#result");

// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		span.innerHTML = ++i;
// 	}, 1000);
// }

// function stop() {
// 	clearInterval(myInterval);
// }
/**=====================Download code====================== */
// ahmed aboelmagad (bouns)
// var span = document.getElementById("result");
// function startDownload() {
// 	span.style.display = "block";
// 	setTimeout(function () {
// 		span.innerHTML = "<a href='#google'>Link1</a>";
// 	}, 3000);
// }
/**-------------------------- Location ------------------------------- */

// function execute() {
// location.assign("https://www.google.com.eg/");
// location.replace("https://www.google.com.eg/");
// location.reload();
// location.pathname = "/about.html";
// console.log(location.pathname);
//set
//location.href = "https://www.google.com.eg/";
//get
//console.log(location.href);
// }

/**-------------------------- History ------------------------------- */
// function execute() {
// 	// length
// 	// history.forward()
// 	// history.back()
// 	// history.go()
// 	console.log(history);
// }
/**-------------------------- Navigator ------------------------------- */
// function successCB(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }

// // successCB({coords:{latitude:123,longitude:233}})

// function rejectCb() {
// 	console.log("rejection");
// }
// navigator.geolocation.getCurrentPosition(successCB, rejectCb);
/**==================Events (attach function) ======================= */
// var btn = document.getElementById("btn");
// var p = document.getElementById("info");

// function changeContent(e) {
// 	console.log("Event Object", e);
// 	console.log(e.target);
// 	p.innerHTML = "<h1>Hello Pd Track</h1>";
// }

// function changeStyle() {
// 	p.style.backgroundColor = "#586eac";
// 	p.style.color = "#ddd";
// }
// function changeTheme(x) {
// 	console.log(x);
// }

// btn.onclick = changeContent;
// chanageContent("value") -- jsEngine
// btn.onclick = function () {
// 	changeTheme("light");
// };
// btn.onclick = function () {
// 	changeContent();
// 	changeStyle();
// };

// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// changeContent() ===jsEngin
// btn.onclick = changeContent;
// btn.onmouseenter = changeStyle;
// btn.ondblclick = changeContent;
// var p = {
// 	type: "HTMLElement",
// 	onclick: function () {
// 		console.log("Hello P 1");
// 	},
// };

// p.onclick = function () {
// 	console.log("hello p2");
// };
// p.onclick();
/**==================Events (addEventLisenter function) ======================= */
// var btn = document.getElementById("btn");
// var p = document.getElementById("info");

// function changeContent(e) {
// 	console.log(e.target); //{}
// 	p.innerHTML = "<h1>hello PD Track</h1>";
// }
// function changeStyle() {
// 	p.style.backgroundColor = "green";
// }

// btn.addEventListener("click", changeContent);
// btn.addEventListener("click", changeStyle);

// setTimeout(function () {
// 	console.log("Event Removed");
// 	btn.removeEventListener("click", changeStyle);
// 	// btn.setAttribute("disabled", true);
// }, 3000);
/**====================Propagation===================== */

// function first() {
// 	console.log("First");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("Second");
// }
// function third(e) {
// 	e.stopPropagation();
// 	console.log("Third");
// }
/**====================Prevent Default===================== */
// var input = document.getElementById("input1");
// var errorMessage = document.getElementById("result");

// input.addEventListener("focus", function (e) {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function (e) {
// 	input.style.border = "2px solid orange";
// });
// input.addEventListener("input", function (e) {
// 	if (input.value.length >= 3) {
// 		input.style.border = "2px solid green";
// 		errorMessage.style.display = "none";
// 	} else {
// 		input.style.border = "2px solid red";
// 		errorMessage.style.display = "block";
// 	}
// });
// input.addEventListener("change", function (e) {
// 	console.log("hello");
// });

function login(e) {
	e.preventDefault();
	console.log(input.value);
}
