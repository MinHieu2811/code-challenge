type Currency = {
  currency: string;
  date: string;
  price: number;
}

const API_PATH = "https://interview.switcheo.com/prices.json";

const fetchDataCurrency = async () => {
  const dropdown = document.querySelector(".swap-form__select") as HTMLSelectElement;
  if (!dropdown) {
    console.error("Dropdown not found");
    return;
  }

  dropdown.setAttribute("disabled", "true");

  try {
    const response = await fetch(API_PATH);
    const listCurrency = await response.json();
    dropdown.innerHTML = '';
    listCurrency.forEach((curr: Currency) => {
      const optionElement = document.createElement("option");
      optionElement.value = `${curr.price}`;
      optionElement.textContent = curr?.currency;
      dropdown.appendChild(optionElement);
    });

    window.listCurrency = listCurrency;

    dropdown.value = `${listCurrency[0].price}`;
    return listCurrency;
  } catch (error) {
    console.error(error);
  } finally {
    dropdown.removeAttribute("disabled");
  }
}

export { fetchDataCurrency };