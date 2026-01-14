const button = document.querySelector("#myButton");
button.addEventListener("click", handleClick);

function handleClick() {
  const input = document.querySelector("#myInput");
  const message = input.value;
  document.querySelector("#result").textContent = message;
}
