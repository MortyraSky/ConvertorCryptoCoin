import { observable, computed, action } from 'mobx';
import { createContext } from 'react';
import axios from 'axios';
import { TNameCoins } from '../types/index';

type TrackedCoinsInterface = Array<string>;

class TestStore {
  // @observable private nameCoins: string = 'BTC,ETH,ETC,LTC,DOT,BCH,UNI,XRP,TRX,USDT';
  @observable private isTracked: boolean = false;

  @observable private trackedCoins: TrackedCoinsInterface = [];

  @observable private listCoins: TNameCoins = [];

  @observable private listWithoutSelectedCoins: TNameCoins = [];

  @computed
  get getIsTracked() {
    return this.isTracked;
  }

  @computed
  get getTrackedCoins() {
    return this.trackedCoins;
  }

  @computed
  get getListCoins() {
    return this.listCoins;
  }

  @computed
  get getListWithoutSelectedCoins() {
    return this.listWithoutSelectedCoins;
  }

    @action
  setIsTracked(trackedStatus: boolean) {
    this.isTracked = trackedStatus;
  }

  @action
    setTrackedCoins(coins: TrackedCoinsInterface) {
      this.trackedCoins = coins;
    }

  @action
  setListWithoutSelectedCoins(arrayCoins: TNameCoins) {
    this.listWithoutSelectedCoins = arrayCoins;
  }

  @action
  fetchNameCoins() {
    // отправить запрос https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD,
    // записать название всех монет в массив nameCoins
    axios
      .get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD')
      .then(({ data }) => {
        // console.log('data', Object.values(data.RAW));
        const coins: TNameCoins = data.Data?.map((coin: any) => ({
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
        }));
        this.listCoins = coins;
      });
  }
}

const TESTSTORE = new TestStore();
const testStoreContext = createContext(TESTSTORE);
export { TESTSTORE, testStoreContext };
