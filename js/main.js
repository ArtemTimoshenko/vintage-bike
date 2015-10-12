(function(){
	var menuToggle = document.getElementsByClassTagName("ba-menu-toggle");
	var body = document.getElementsByTagName("body")[0];

	menuToggle[0].onclick = function(){
		body.classlist.toggle("ba-menu-open");
	};
})();
