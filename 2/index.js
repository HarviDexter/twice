const valueInputNode = document.querySelector(".js-unput");
const valueSelection = document.querySelector(".js-currency-selector");
const outputNode = document.querySelector(".js-output");

function getInput() {
  return {
    kzt: Number(valueInputNode.value),
    currency: valueSelection.value,
  };
}
function render(result) {
  outputNode.innerText = result;
}
valueInputNode.addEventListener("input", function () {
  const result = convert(getInput());
  render(result);
});

valueSelection.addEventListener("change", function () {
  const result = convert(getInput());
  render(result);
});
