const price = 1000;
const taxRate = 0.1;

function calculate() {
  const total = price + taxRate;
  
  document.getElementById("total").textContent = total;
  
  // console.log() で変数の値を確認
  console.log("price:", price);     // price: 1000
  console.log("taxRate:", taxRate); // taxRate: 0.1
  console.log("total:", total);     // total: 1000.1 ← おかしい！
}
