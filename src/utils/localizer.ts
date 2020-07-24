import i18next from 'i18next';
// import Backend from 'i18next-chained-backend';
// import LocalStorageBackend from 'i18next-localstorage-backend'; // primary use cache
import HttpApi from 'i18next-http-backend'; // fallback http load

i18next.use(HttpApi).init({
  lng: 'en',
  debug: false,
  backend: {
    loadPath: 'i18n/{{ns}}.i18n.{{lng}}.json'
  }
});

function componentLanguage(element: HTMLElement): string {
  const closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
}

export { i18next, componentLanguage };