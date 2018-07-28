 function myFirstApp(name,age) {


 	alert("Привет, меня зовут " + name + ", мне " + age + " лет и эта моя первая программа");

 	function showSkills() {
 		let skills = ['html', 'css', 'bootstrap', 'js', 'sass'];
 		console.log(skills);

 		for (let i = 0; i < skills.length; i++) {
 			// Я владею html <br>
 			document.write("Я владею " + skills[i] + "<br>");
 		}
 	}

 	showSkills();

 	function checkAge() {
 		if (age > 18) {
 			document.write("У тебя хорошие шансы стать веб-разработчиком!" + "<br>");
 		}
 		else {
 			document.write("У тебя отличные шансы стать веб-разработчиком!" + "<br>");
 		}
 	}

 	checkAge();

 	function calcPow(number) {
 		document.write(number * number);
 	}
 	calcPow(prompt("Введите число", ""));
 }

 myFirstApp("Samad","20");