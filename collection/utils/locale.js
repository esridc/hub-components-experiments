import Polyglot from 'node-polyglot';
export function getComponentClosestLanguage(element) {
  let closestElement = element.closest('[lang]');
  return closestElement ? closestElement.lang : 'en';
}
export async function getLocaleStrings(name, locale, path) {
  // https://airbnb.io/polyglot.js/
  // Currently, the only thing that Polyglot uses this locale setting for is pluralization.
  let polyglot = new Polyglot({ locale });
  let strings = {};
  try {
    strings[name] = await fetchLocaleStringsForComponent(name, locale, path);
  }
  catch (e) {
    console.warn(`no locale for ${name} (${locale}) loading default locale en.`);
    strings[name] = await fetchLocaleStringsForComponent(name, 'en', path);
  }
  console.log("getLocaleComponent", strings);
  polyglot.extend(strings);
  return polyglot;
}
export async function getMetadataLocaleStrings(metadataName, metadataLocale) {
  const localePath = `./schema/locale`;
  return await getLocaleStrings(metadataName, metadataLocale, localePath);
}
export async function getComponentLocaleStrings(element) {
  const localePath = '/i18n';
  const componentLocale = getComponentClosestLanguage(element);
  const componentName = element.tagName.toLowerCase();
  return await getLocaleStrings(componentName, componentLocale, localePath);
}
function fetchLocaleStringsForComponent(componentName, locale, path) {
  return new Promise((resolve, reject) => {
    fetch(`${path}/${componentName}.i18n.${locale}.json`)
      .then((result) => {
      if (result.ok)
        resolve(result.json());
      else
        reject();
    }, () => reject());
  });
}
