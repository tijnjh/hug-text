export function hugText(input) {
  if (!input) {
    throw new Error("Input is required");
  }

  let elements = [];
  
  if (input instanceof Element) {
    elements = [input];
  } else if (input instanceof NodeList || input instanceof HTMLCollection) {
    elements = Array.from(input);
  } else if (Array.isArray(input)) {
    elements = input.filter(el => el instanceof Element);
  } else {
    throw new Error(`Invalid input type. Expected Element, NodeList, HTMLCollection, or Array. got ${typeof input}`);
  }

  for (const element of elements) {
    const initialHeight = element.offsetHeight;
    const computedStyle = getComputedStyle(element);
    let currentWidth = parseFloat(computedStyle.width);
    
    while (currentWidth > 0) {
      currentWidth -= 1;
      element.style.width = `${currentWidth}px`;

      if (element.offsetHeight > initialHeight) {
        element.style.width = `${currentWidth + 1}px`;
        break;
      }
    }
  }
}
