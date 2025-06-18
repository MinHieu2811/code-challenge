import "./style.css";
import { fetchDataCurrency } from "./loadData.ts";
import { validateInput, imageTemplate } from "./helper.ts";

type Currency = {
  currency: string;
  date: string;
  price: number;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="swap-form">
    <form id="swap-form">
    <div class="swap-form__header">
    <h5 class="swap-form__title">Swap</h5>
    <div class="swap-form__select-container">
      <div class="swap-form__select-image">
        <img id="selected-image" src="https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/USDT.svg" alt="USDT" />
      </div>
      <select id="select-currency" class="swap-form__select">
      </select>
    </div>
    </div>
    <div class="swap-form__input-container">
      <div class="swap-form__input-item">
      <label for="input-amount" class="swap-form__label">Amount to send</label>
      <input id="input-amount" class="swap-form__input" />
      <span class="swap-form__input-item-error"></span>
    </div>
    <div class="swap-form__input-item">
      <label for="output-amount" class="swap-form__label">Amount to receive</label>
      <input id="output-amount" disabled class="swap-form__input" />
    </div>
    </div>

      <button class="swap-form__button">CONFIRM SWAP</button>
    </form>
  </div>
`;

fetchDataCurrency();

const swapForm = document.getElementById("swap-form");
const selectCurrency = document.querySelector("#select-currency") as HTMLSelectElement;
const selectedImage = document.querySelector("#selected-image") as HTMLImageElement;

selectCurrency.addEventListener("change", (e) => {
  const selectedCurrency = +((e.target as HTMLSelectElement).value ?? '0');
  const currency = window.listCurrency.find((currency: Currency) => currency?.price === selectedCurrency)?.currency ?? '';
  selectedImage.src = imageTemplate(currency);
});

if (swapForm) {
  swapForm.addEventListener("submit", (e) => {
    try {
      e.preventDefault();

      const inputAmount = document.getElementById(
        "input-amount"
      ) as HTMLInputElement;
      const outputAmount = document.getElementById(
        "output-amount"
      ) as HTMLInputElement;
      const select = document.querySelector(
        ".swap-form__select"
      ) as HTMLSelectElement;
      const error = document.querySelector(
        ".swap-form__input-item-error"
      ) as HTMLSpanElement;

      const inputAmountValue = +(inputAmount.value ?? "0");
      const selectValue = +(select?.value ?? "0");

      if (inputAmount && outputAmount && select) {
        const errorMessage = validateInput(inputAmountValue);
        if (errorMessage) {
          error.textContent = errorMessage;
          return;
        } else {
          error.textContent = "";
        }

        const outputAmountValue = inputAmountValue * selectValue;
        outputAmount.value = (outputAmountValue?.toFixed(2) ?? "0").toString();
      }
    } catch (error) {
      console.error(error);
    }
  });
}
