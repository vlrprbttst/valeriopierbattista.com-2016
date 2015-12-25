$('#bars').click(function() {
	$('#bars').toggleClass('fa-bars fa-remove');
	$('nav').toggleClass('mobile-menu-visible');
});

function navHeight() {

	var heights = window.innerHeight;
	var outerHeights = $(".this-sidebar .sub-container-sidebar").outerHeight(true) + $("footer .sub-container-sidebar").outerHeight(true);
	$('nav.nav ul').css('height', (heights - outerHeights) + "px");

};

navHeight();
$(window).resize(navHeight);

function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

(function() {
	var InfoCookieCont = jQuery('#info_cookie');
	var InfoCookieDiv = jQuery(".ok-cookie");
	InfoCookieDiv.click(function() {
		createCookie('infoCookie', 'true', 365)
		InfoCookieCont.removeClass("cookie-visible").addClass("cookie-hidden");
	});

	var InfoCookie = readCookie("infoCookie");
	if (!InfoCookie) {
		InfoCookieCont.removeClass("cookie-hidden").addClass("cookie-visible");
	}
})();

function mobileMenu() {

	var wWidth = $(window).width();
	var myElement = document.querySelector(".this-sidebar");
	var headroom = new Headroom(myElement, {
		"offset" : 200,
		"tolerance" : 5
	});

	if (wWidth <= 1024) {

		headroom.init();

	} else {
		headroom.destroy();
	}

};

mobileMenu();
$(window).resize(mobileMenu);

