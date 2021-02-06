export type TCoin = {
  id: string;
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24Hour: number;
  flags: string;
}

export type Column = {
  id: 'imageUrl' | 'name' | 'fullName' | 'price' | 'volume24Hour';
  label: string;
  minWidth?: number;
  align?: 'left';
}

export type TCoinDiff = { [key: string]: string }

export type TNameCoin = {
  name: string;
  fullName: string;
}

export type TNameCoins = Array<TNameCoin>;
