// Tipagem estática
function flipCoin() {
  return Math.random() > 0.5 ? "Cara" : "Coroa";
}

const result = flipCoin();

if (result === "Cara") {
  console.log("Você ganhou!");
} else {
  console.log("Você perdeu!");
}