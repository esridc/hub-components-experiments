// Methods for working with frameworks

function getBoolean(value){
  switch(value){
       case true:
       case "true":
       case 1:
       case "1":
       case "on":
       case "yes":
           return true;
       default: 
           return false;
   }
}

/**
 * Detects if the component is operated in an app framework
 * For example, if the component is in React it should try to use 
 * evented links rather than hard links.
 * @returns 
 */
export function isFramework(element :HTMLElement):boolean {
  let closestElement = element.closest('[data-framework]') as HTMLElement;
  console.debug("isFramework: closestElement", closestElement);
  if(closestElement && getBoolean(closestElement.dataset.framework)) {
    return true;
  } else {
    return false;
  }
}