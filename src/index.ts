import { concatenation } from './concatenation';

const button = document.querySelector('button');
const input = document.querySelector('input');
input.value = "HEY, everySoul!";

if (button && input) {
    button.addEventListener("click", () => {
    concatenation(input.value, "PEACE TO ALL!");
  });
}