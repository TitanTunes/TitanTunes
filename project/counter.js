export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
document.addEventListener("DOMContentLoaded", function () {
  lottie.loadAnimation({
    container: document.getElementById("lottie-background"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/background.json" // Update this with the correct path to your JSON animation
  });
});