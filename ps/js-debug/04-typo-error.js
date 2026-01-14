const button = document.querySelector("button");
// 間違い: addeventlistener (すべて小文字) 
button.addeventlistener("click", showMessage);

function showMessage() {
  alert("ボタンがクリックされました！");
}
