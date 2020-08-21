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

$(document).ready(function(){ // Recent Projects
  $('.slider-recent-projects').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [{
      breakpoint: parseInt(computedStyle.getPropertyValue('--minSizeDesktop')),
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeLarge')),
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeTablet')),
      settings: {
        slidesToShow: 2,
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizePhone')),
      settings: {
        slidesToShow: 1,
      }
    }]
  })
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});

$(document).ready(function(){ // Team
  $('.slider-team').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [{
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeLarge')),
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeTablet')),
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizePhone')),
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  })
  .on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });
});

$(document).ready(function(){ // Alliances
  $('.slider-alliances-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeLarge')),
      settings: {
        slidesToShow: 5
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizeTablet')),
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: parseInt(computedStyle.getPropertyValue('--maxSizePhone')),
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

$(document).ready(function(){ // News
  $('.slider-recent-news').slick({
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