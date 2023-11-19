export type Currencies = {
  [key: string]: {
    name: string;
    symbol: string;
  }
}

export const currencies: Currencies = { 
  AUD: {
    name: 'Australian Dollar',
    symbol: '$',
  },
  BGN: {
    name: 'Bulgarian Lev',
    symbol: 'лв',
  },
  BRL: {
    name: 'Brazilian Real',
    symbol: 'R$',
  },
  CAD: {
    name: 'Canadian Dollar',
    symbol: '$',
  },
  CHF: {
    name: 'Swiss Franc',
    symbol: 'Fr',
  },
  CNY: {
    name: 'Chinese Yuan',
    symbol: '¥',
  },
  CZK: {
    name: 'Czech Koruna',
    symbol: 'Kč',
  },
  DKK: {
    name: 'Danish Krone',
    symbol: 'kr',
  },
  EUR: {
    name: 'Euro',
    symbol: '€',
  },
  GBP: {
    name: 'British Pound',
    symbol: '£',
  },
  HKD: {
    name: 'Hong Kong Dollar',
    symbol: '$',
  },
  HRK: {
    name: 'Croatian Kuna',
    symbol: 'kn',
  },
  HUF: {
    name: 'Hungarian Forint',
    symbol: 'Ft',
  },
  IDR: {
    name: 'Indonesian Rupiah',
    symbol: 'Rp',
  },
  ILS: {
    name: 'Israeli New Shekel',
    symbol: '₪',
  },
  INR: {
    name: 'Indian Rupee',
    symbol: '₹',
  },
  ISK: {
    name: 'Icelandic Króna',
    symbol: 'kr',
  },
  JPY: {
    name: 'Japanese Yen',
    symbol: '¥',
  },
  KRW: {
    name: 'South Korean Won',
    symbol: '₩',
  },
  MXN: {
    name: 'Mexican Peso',
    symbol: '$',
  },
  MYR: {
    name: 'Malaysian Ringgit',
    symbol: 'RM',
  },
  NOK: {
    name: 'Norwegian Krone',
    symbol: 'kr',
  },
  NZD: {
    name: 'New Zealand Dollar',
    symbol: '$',
  },
  PHP: {
    name: 'Philippine Peso',
    symbol: '₱',
  },
  PLN: {
    name: 'Polish Złoty',
    symbol: 'zł',
  },
  RON: {
    name: 'Romanian Leu',
    symbol: 'lei',
  },
  RUB: {
    name: 'Russian Ruble',
    symbol: '₽',
  },
  SEK: {
    name: 'Swedish Krona',
    symbol: 'kr',
  },
  SGD: {
    name: 'Singapore Dollar',
    symbol: '$',
  },
  THB: {
    name: 'Thai Baht',
    symbol: '฿',
  },
  TRY: {
    name: 'Turkish Lira',
    symbol: '₺',
  },
  USD: {
    name: 'US Dollar',
    symbol: '$',
  },
  ZAR: {
    name: 'South African Rand',
    symbol: 'R',
  },
}
export default currencies;