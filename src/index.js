/**
 * Adjusts the width of a given element to fit its text content without increasing its height.
 * @param {HTMLElement} element - The element to adjust.
 */
export function hugText(element) {
  if (!element) {
    throw new Error("Element is required");
  }

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
