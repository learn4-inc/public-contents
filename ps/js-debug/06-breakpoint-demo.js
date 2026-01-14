const price = 1000;
const taxRate = 0.1;

function calculate() {
  // ここにブレークポイントを設定してみましょう
  // 一時停止すると、右側の「Scope」パネルで price と taxRate の値を確認できます
  const total = price + taxRate;
  
  // 一時停止中に、コンソールで以下を試してみてください:
  // > price
  // 1000
  // > taxRate
  // 0.1
  // > price * taxRate
  // 100
  // > price + price * taxRate
  // 1100
  
  document.getElementById("total").textContent = total;
  console.log("計算結果:", total);
}
