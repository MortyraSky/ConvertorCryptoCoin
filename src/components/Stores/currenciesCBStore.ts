/* eslint-disable no-return-await */
import React from 'react';
import axios from 'axios';
import { observable, computed, action } from 'mobx';

type TCurrenciecCB = {
    CharCode: string;
    ID: string;
    Name: string;
    Nominal: number;
    NumCode: string;
    Previous: number;
    Value: number;
}

class CurrenciesCBStore {
  @observable private items: TCurrenciecCB[] = [];

  @computed
  get getItems() {
    return this.items;
  }

  @action
  setCoins = (coins: TCurrenciecCB[]): void => {
    this.items = coins;
  };

  @action
  fetchCoins = () => {
    axios
      .get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(({ data }) => {
        console.log('data cb', data.Valute, Object.values(data.Valute));
        let buff:TCurrenciecCB[] = Object.values(data.Valute);
        buff.push(
          {
            CharCode: 'RUB',
            ID: 'R01060',
            Name: 'Российский рубль',
            Nominal: 1,
            NumCode: '001',
            Previous: 1,
            Value: 1,
          },
        );
        this.setCoins(buff);
      });
  };
}
const currenciesCBStore = new CurrenciesCBStore();
const currenciesCBContext = React.createContext(currenciesCBStore);
export { currenciesCBStore, currenciesCBContext };
