export interface Order {
  id: number;
  title: string;
  date: Date;
  products: Product[];
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

export interface Price {
  value: number;
  symbol: CURRENCIES;
  isDefault: boolean;
}

export enum CURRENCIES {
  USD,
  UAH,
}

export interface Guarantee {
  start: string | Date;
  end: string | Date;
}
