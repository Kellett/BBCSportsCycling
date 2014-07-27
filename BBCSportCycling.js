// ==UserScript==
// @name BBC Sport Cycling
// @description Adds cycling to the navigation bar
// @include http://www.bbc.co.uk/sport/*
// ==/UserScript==


document.addEventListener("DOMContentLoaded",function (e){
	var cyclingLink = "<li class=\" primary-nav__item   \"> <a href=\"/sport/cycling\" class=\"primary-nav__link\"><span class=\"primary-nav__link-text\">Cycling</span></a> </li>";

	var navbar;
	if (navbar = document.getElementsByClassName("primary-nav__items")) {
		if (document.URL.indexOf("bbc.co.uk/sport/0/cycling/") != -1 ) {
			//Style different if the selected section
			cyclingLink = cyclingLink.replace(" primary-nav__item   ", " primary-nav__item  primary-nav__item--active  primary-nav__item--full-highlight    ");
		}
		navbar[0].innerHTML = navbar[0].innerHTML.replace("Home</span></a> </li>  ", "Home</a></li>  " + cyclingLink);
	}
},false);
