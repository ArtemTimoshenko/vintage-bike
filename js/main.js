(function(){
	var menuToggle = document.getElementsByClassName("ba-menu-toggle");

	var body = document.getElementsByTagName("body")[0];

	console.log(body);
	console.log(menuToggle);

	menuToggle[0].onclick = function (){
		body.classList.toggle("ba-menu-open");
	};
})();
