export function componentLanguage(element: HTMLElement): string {
  const closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
}
