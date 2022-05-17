export function checkTouchSmartphoneDevice() {
  return (
    screen.width <= 760 &&
    ("ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0)
  );
}
