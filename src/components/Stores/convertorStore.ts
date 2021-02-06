import React from 'react';
import { observable, computed, action } from 'mobx';
import { TCoin, TCoinDiff } from '../types/index';

type TSelectedCoin = {
  name: string;
  price: number;
}

class ConvertorStore {
  @observable private selectedCoin: TSelectedCoin = {
    name: '',
    price: 0,
  };

  @computed
  get getSelectedCoin() {
    return this.selectedCoin;
  }

  @action
  setItems = (coin: TCoin): void => {
    this.selectedCoin = {
      name: coin.name,
      price: coin.price,
    };
  };
}

const convertorStore = new ConvertorStore();
const convertorContext = React.createContext(convertorStore);
export { convertorStore, convertorContext };
