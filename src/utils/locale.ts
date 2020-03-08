import Polyglot from 'node-polyglot'

function getComponentClosestLanguage(element: HTMLElement): string {
    let closestElement = element.closest('[lang]') as HTMLElement;
    return closestElement ? closestElement.lang : 'en';
}
function fetchLocaleStringsForComponent(componentName: string, locale: string): Promise<any> {
    return new Promise((resolve, reject): void => {
        fetch(`/i18n/${componentName}.i18n.${locale}.json`)
            .then((result) => {
                if (result.ok) resolve(result.json());
                else reject();
            }, () => reject());
    });
}
export async function getLocaleComponentStrings(element: HTMLElement): Promise<any> {
    let componentName = element.tagName.toLowerCase();
    let componentLanguage = getComponentClosestLanguage(element);
    
    // https://airbnb.io/polyglot.js/
    // Currently, the only thing that Polyglot uses this locale setting for is pluralization.
    let polyglot = new Polyglot({locale: componentLanguage});
    let strings = {};
    try {
        strings[componentName] = await fetchLocaleStringsForComponent(componentName, componentLanguage);
    } catch (e) {
        console.warn(`no locale for ${componentName} (${componentLanguage}) loading default locale en.`);
        strings[componentName] = await fetchLocaleStringsForComponent(componentName, 'en');
    }
    console.log("getLocate", strings)
    polyglot.extend( strings )
    return polyglot;
}