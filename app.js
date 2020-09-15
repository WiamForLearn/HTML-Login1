const input = document.querySelectorAll("input");

function focusInput() {
  let inputSelec = this.parentNode.parentNode;
  inputSelec.classList.add("focus");
}
function blurInput() {
  let inputSelec = this.parentNode.parentNode;
  if (this.value == "") {
    inputSelec.classList.remove("focus");
  }
}
input.forEach((input) => {
  input.addEventListener("focus", focusInput);
});
input.forEach((input) => {
  input.addEventListener("blur", blurInput);
});
