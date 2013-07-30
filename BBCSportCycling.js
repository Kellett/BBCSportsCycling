// ==UserScript==
// @name BBC Sport Cycling
// @description Adds cycling to the navigation bar
// @include http://www.bbc.co.uk/sport/*
// ==/UserScript==


document.addEventListener("DOMContentLoaded",function (e){
	var cyclingLink = "<li><a class=\"\" href=\"http://www.bbc.co.uk/sport/0/cycling/\">Cycling</a></li>  ";
	
	var navbar;
	if (navbar = document.getElementById("primary-nav-bar")) {
		if (document.URL.indexOf("bbc.co.uk/sport/0/cycling/") != -1 ) {
			//Style different if the selected section
			cyclingLink = cyclingLink.replace("<li>", "<li class=\"selected\">");
		}
		navbar.innerHTML = navbar.innerHTML.replace("Home</a></li>  ", "Home</a></li>  " + cyclingLink);
	}
},false);


