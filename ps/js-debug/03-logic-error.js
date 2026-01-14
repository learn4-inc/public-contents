// 例: 税込価格を計算したい
const price = 1000;
const taxRate = 0.1;

function calculateWrong() {
  // 間違い: 足し算をしてしまっている
  const totalPrice = price + taxRate;  // 結果: 1000.1（間違い）
  
  document.getElementById("wrongTotal").textContent = totalPrice;
  console.log("price:", price);     // price: 1000
  console.log("taxRate:", taxRate); // taxRate: 0.1
  console.log("total:", totalPrice); // total: 1000.1 ← おかしい！
}

function calculateCorrect() {
  // 正しくは掛け算で税額を計算して足す
  const correctTotal = price + (price * taxRate);  // 結果: 1100（正しい）
  
  document.getElementById("correctTotal").textContent = correctTotal;
  console.log("正しい計算結果:", correctTotal);
}
