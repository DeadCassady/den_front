export interface Order {
  id: number;
  title: string;
  date: Date;
  productIds: number[];
}

export interface Product {
  id: number;
  serialNumber: number;
  isNew: boolean;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  date: Date;
}

interface Price {
  value: number;
  symbol: CURRENCIES;
  isDefault: boolean;
}

enum CURRENCIES {
  USD,
  UAH,
}

interface Guarantee {
  start: Date;
  end: Date;
}
