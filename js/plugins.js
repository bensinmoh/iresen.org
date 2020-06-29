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