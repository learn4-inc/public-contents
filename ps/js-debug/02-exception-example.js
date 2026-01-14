// querySelector("button") と書くところが querySelector("bbutton") となった
// => 要素が見つからず、変数 button は null になる
const button = document.querySelector("bbutton");

// null の button に対して .addEventListener を呼び出そうとした
// => 例外の発生
button.addEventListener("click", handleClick);

function handleClick() {
  alert("ボタンがクリックされました！");
}
