// Cookies Consent
function askForCookieConsent() {

if (localStorage.getItem('cookieConsentIRESEN') == "false") {
  document.querySelector('.cookie-consent').classList.remove("hidden");

  document.querySelector('.cookie-consent button').onclick = function(setCC) {
    setCC.preventDefault();
    document.querySelector('.cookie-consent').classList.add("fadeOut");
    localStorage.setItem('cookieConsentIRESEN', "true");
  };

  document.querySelector('.cookie-dismiss').onclick = function() {
    document.querySelector('.cookie-consent').classList.add("fadeOut");
    localStorage.setItem('cookieConsentIRESEN', "false");
  };

}

};

// Slick Sliders

$(document).ready(function(){
  $('.recent-news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [{
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeLarge')),
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeTablet')),
      settings: {
        slidesToShow: 1
      }
    }]
  })
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});