export const validateInput = (inputAmount: number) => {
  let error = "";
  if (!inputAmount) {
    error = "Please enter a valid amount";
    return error;
  }

  if (inputAmount < 0) {
    error = "Please enter a positive amount";
    return error;
  }

  if (inputAmount.toString().trim() === "") {
    error = "Please enter an amount";
    return error;
  }

  if (`${inputAmount}`.match(/[^0-9.]/)) {
    error = "Please enter a number";
    return error;
  }

  return error;
}

export const imageTemplate = (currency: string) => {
  return `
    https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${currency}.svg
  `
}