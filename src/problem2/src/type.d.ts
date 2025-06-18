type Currency = {
  currency: string;
  date: string;
  price: number;
}

declare global {
  interface Window {
    listCurrency: Currency[];
  }
}

export {};