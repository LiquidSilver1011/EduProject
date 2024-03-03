// The active locale
const locale = "ar";
// We can have as many locales here as we want,
// and use any locales we want. We have English
// and Arabic as locales here as examples.
const translations = {
  // English translations
  "en": {
    "app-title": "Hi",
    "lead": " user",
    "asdf": "hey"
  },
  // Arabic translations
  "ar": {
    "app-title": "تطبيقي المطبق",
    "lead": "أهلاً بك في مكاني الصغير على النت.",
  },
};
// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}