// var tbody = document.getElementsByTagName("tbody")[0];
// function getUserById(userId) {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("Get", "https://jsonplaceholder.typicode.com/users/" + userId);
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		// request completed
// 		if (xhr.readyState == 4) {
// 			// response
// 			if (xhr.status == 200) {
// 				var user = JSON.parse(xhr.response);
// 				tbody.innerHTML = `
// 					<tr>
// 						<td>${user.id}</td>
// 						<td>${user.name}</td>
// 						<td>${user.email}</td>
// 					</tr>
// 				`;
// 			}
// 		}
// 	};
// }
/**------------------------------------ */
// document.cookie = "username=ali";
// document.cookie = "email=ali@gmail.com";

// var expireDate = new Date();

// expireDate.setDate(expireDate.getDate() + 3);

// function saveCookie(key, value) {
// 	document.cookie = `${key}=${value};expires=${expireDate}`;
// }
// function getAllCookies() {
// 	return document.cookie;
// }

// function deleteCookie(key) {
// 	var expireDate = new Date();
// 	expireDate.setDate(expireDate.getDate() - 1);
// 	document.cookie = `${key}=pet;expires=${expireDate}`;
// }

// saveCookie("colors", JSON.stringify(["red", "green", "blue"]));
// saveCookie("user", JSON.stringify({ name: "ahmed", age: 25 }));

// deleteCookie("email");

// saveCookie("username", "PD");
// saveCookie("address", "alex");
// document.cookie = `username=ali;expires=${expireDate}`;
// document.cookie = `email=ali@gmail.com;expires=${expireDate}`;
// document.cookie = `email=pd@gmail.com;expires=${expireDate}`;

// try {
// 	console.log("First");
// 	console.loggg("Second");
// 	console.log("Third");
// } catch (error) {
// 	console.log(error);
// 	document.writeln("<h1>connection Error , please try Again ..</h1>");
// }
// document.writeln("<h1>Welcome At ITI</h1>");

// function sum(x, y) {
// 	if (arguments.length < 2) {
// 		throw "pass at least two value";
// 	}
// 	return x + y;
// }

// console.log(sum(2, 5));
