/* ---- DECLARATIONS ---- */
var computedStyle = getComputedStyle(document.documentElement);

var viewportWidth;
var viewportHeight;

/* ---- FUNCTIONS ---- */

// Set VW to use in resize conditions
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// Set actual VH for Hero
var setViewportHeight = function () {
	viewportHeight = window.innerHeight || document.documentElement.clientHeight;

	viewportHeight = viewportHeight - document.getElementById("home").clientHeight - document.getElementById("header").clientHeight;	// Taking off the Height of the Headers

	document.getElementById("all-vh").style.setProperty('Height', `${viewportHeight}px`);
}

// Log VW Mode
var logWidthMode = function () {
	if (viewportWidth > parseInt(computedStyle.getPropertyValue('--minSizeDesktop'))) {
		document.getElementById("modeValue").innerHTML=computedStyle.getPropertyValue('--minSizeDesktop')+" and above (INFINITE)";
    } else if (viewportWidth <= parseInt(computedStyle.getPropertyValue('--minSizeDesktop')) && viewportWidth > parseInt(computedStyle.getPropertyValue('--maxSizeLarge'))) {
		document.getElementById("modeValue").innerHTML="between "+computedStyle.getPropertyValue('--maxSizeLarge')+" and "+computedStyle.getPropertyValue('--minSizeDesktop')+" (DESKTOP)";
    } else if (viewportWidth <= parseInt(computedStyle.getPropertyValue('--maxSizeLarge')) && viewportWidth > parseInt(computedStyle.getPropertyValue('--maxSizeTablet'))) {
		document.getElementById("modeValue").innerHTML="between "+computedStyle.getPropertyValue('--maxSizeTablet')+" and "+computedStyle.getPropertyValue('--maxSizeLarge')+" (LARGE)";
    } else if (viewportWidth <= parseInt(computedStyle.getPropertyValue('--maxSizeTablet')) && viewportWidth > parseInt(computedStyle.getPropertyValue('--maxSizePhone'))) {
		document.getElementById("modeValue").innerHTML="between "+computedStyle.getPropertyValue('--maxSizePhone')+" and "+computedStyle.getPropertyValue('--maxSizeTablet')+" (TABLET)";
    }
    else if (viewportWidth < parseInt(computedStyle.getPropertyValue('--maxSizePhone'))){
		document.getElementById("modeValue").innerHTML=computedStyle.getPropertyValue('--maxSizePhone')+" and below (PHONE)";
	}
}

/* ---- CALLS ON LOAD ---- */

window.addEventListener('load', function () {
	document.querySelector(".loader").classList.add("fadeOut");
	setTimeout(() => { document.querySelector(".loader").classList.add("hidden"); }, 1000);
});

askForCookieConsent();
setViewportWidth();
logWidthMode();

/* ---- CALLS ON RESIZE ---- */

window.addEventListener('resize', function () {

	setViewportWidth();
	logWidthMode();

}, false);

/* ---- CALLS ON SCROLL ---- */

window.addEventListener('scroll', function () {

	if($('body').is('.index')){
		setViewportHeight();
	}

	if($('body').is('.error') || $('body').is('.under-construction')){
		setViewportHeight();
	}

}, false);