/* eslint-disable no-return-await */
import React from 'react';
import axios from 'axios';
import nextId from 'react-id-generator';
import {
  observable, computed, action, runInAction,
} from 'mobx';
import { TCoin, TCoinDiff } from '../types/index';
import { WSApi } from '../WebSocketServices/WebSocketServices';

type TSelectedCoin = {
  name: string;
  price: number;
}

type ImageCoin = {
  name: string;
  url: string;
}

const imagesCoin: Array<ImageCoin> = [
  {
    name: 'BTC',
    url: 'https://www.cryptocompare.com//media/19633/btc.png',
  },
  {
    name: 'ETH',
    url: 'https://www.cryptocompare.com//media/20646/eth_logo.png',
  },
  {
    name: 'DOT',
    url: 'https://www.cryptocompare.com//media/37072130/dot.png',
  },
  {
    name: 'LTC',
    url: 'https://www.cryptocompare.com//media/35309662/ltc.png',
  },
  {
    name: 'BCH',
    url: 'https://www.cryptocompare.com//media/35650680/bch.png',
  },
  {
    name: 'LINK',
    url: 'https://www.cryptocompare.com//media/35309382/link.png',
  },
  {
    name: 'XRP',
    url: 'https://www.cryptocompare.com//media/34477776/xrp.png',
  },
  {
    name: 'ADA',
    url: 'https://www.cryptocompare.com//media/12318177/ada.png',
  },
  {
    name: 'EOS',
    url: 'https://www.cryptocompare.com//media/1383652/eos_1.png',
  },
  {
    name: 'TRX',
    url: 'https://www.cryptocompare.com//media/34477805/trx.jpg',
  },
  {
    name: 'ETC',
    url: 'https://www.cryptocompare.com//media/33752295/etc_new.png',
  },
  {
    name: 'USDT',
    url: 'https://www.cryptocompare.com//media/1383672/usdt.png',
  },
  {
    name: 'ZEC',
    url: 'https://www.cryptocompare.com//media/351360/zec.png',
  },
  {
    name: 'UNI',
    url: 'https://www.cryptocompare.com//media/36935118/uniswap.png',
  },
];

class CurrenciesStore {
  @observable private items: TCoin[] = [];

  @observable private selectedCoin: TSelectedCoin | null = null;

  private nameCoins: string = 'BTC,ETH,ETC,LTC,DOT,BCH,UNI,XRP,TRX,USDT';

  @observable private trackedCoins: Array<string> = [];

  // eslint-disable-next-line class-methods-use-this
  async getDataCoins() {
    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD';
    const response = await fetch(url, { method: 'get' });
    return await response.json();
  }

  getFlagsColor = (flag: number): string => {
    let flagColor = 'none';
    if (flag === 1) {
      flagColor = 'green';
    } else if (flag === 2) {
      flagColor = 'red';
    }
    return flagColor;
  };

  @computed
  get getItems() {
    return this.items;
  }

  @computed
  get getSelectedCoin() {
    return this.selectedCoin;
  }

  @computed
  get getTrackedCoins() {
    return this.trackedCoins;
  }

  @action
  setTrackedCoins(coins: Array<string>) {
    this.trackedCoins = coins;
  }

  @action
  setCoins = (coins: TCoin[]): void => {
    this.items = coins;
  }

  @action
  updateCoins = (updatedCoins: any): void => {
    console.log('updateCoins after ws', updatedCoins);
    let buff = [...this.items || []];
    // // console.log('buff is', buff);
    const posAddedCoin = buff?.findIndex((coin) => coin.name === updatedCoins.FROMSYMBOL);
    // // console.log(posAddedCoin);
    if (posAddedCoin !== -1) {
      let buffCoin = {
        ...(buff && buff[posAddedCoin]),
        price: updatedCoins.PRICE || buff[posAddedCoin].price,
        flags: this.getFlagsColor(updatedCoins.FLAGS),
        id: (buff && buff[posAddedCoin].id) || '',
        name: (buff && buff[posAddedCoin].name) || '',
        fullName: (buff && buff[posAddedCoin].fullName) || '',
        volume24Hour: updatedCoins.VOLUME24HOUR,
        imageUrl: (buff && buff[posAddedCoin].imageUrl) || '',
      };
        // console.log('изменяемая монета', buffCoin);
      buff[posAddedCoin] = buffCoin;
    } else {
      let buffCoin = {
        id: nextId(),
        name: updatedCoins.FROMSYMBOL || '',
        fullName: updatedCoins.LASTMARKET, // здесь будет имя биржы, а не полное имя
        imageUrl: imagesCoin.find((coin) => (coin.name === updatedCoins.FROMSYMBOL))?.url || '',
        price: updatedCoins.PRICE || '',
        volume24Hour: updatedCoins.VOLUME24HOUR || '',
        flags: this.getFlagsColor(updatedCoins.FLAGS),
      };
        // console.log('добавленная монета', buffCoin);
        buff?.push(buffCoin);
    }
    this.setCoins(buff);
    // console.log(buff, 'массив после изменений');
  }

  @action
  hideColors = (): void => {
    console.log('items', this.items);
    let buff = [...this.items || []]?.map((coin) => ({
      ...coin,
      price: coin.price,
      flags: '4',
      id: coin.id,
      name: coin.name,
      fullName: coin.fullName,
      volume24Hour: coin.volume24Hour,
      imageUrl: coin.imageUrl,
    }));
    console.log(buff, 'items after change flags');
    this.setCoins(buff);
  }

  @action
  fetchCoins = () => {
    // https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD
    console.log(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.nameCoins}&tsyms=USD`,
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.trackedCoins.join()}&tsyms=USD`,
    );
    axios
      .get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.trackedCoins.join()}&tsyms=USD`)
      .then(({ data }) => {
        // console.log('data', Object.values(data.RAW));
        const coins: TCoin[] = Object.values(data.RAW)?.map((coin: any) => {
          const obj: TCoin = {
            id: coin.USD.FROMSYMBOL,
            name: coin.USD.FROMSYMBOL,
            fullName: coin.USD.LASTMARKET,
            imageUrl: `https://www.cryptocompare.com/${coin.USD.IMAGEURL}`,
            price: coin.USD.PRICE.toFixed(3),
            volume24Hour: parseInt(coin.USD.VOLUME24HOURTO, 10),
            flags: '4',
          };
          return obj;
        });
        this.setCoins(coins);
        this.selectedCoin = { name: coins[0].name, price: coins[0].price };
      });
  }

  @action
  fetchCoinsAsync = async () => {
    // const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD', {
    //   method: 'get',
    // });
    const data: any = await Promise.resolve(this.getDataCoins());
    console.log('data', data);
    runInAction(() => {
      const coins:TCoin[] = data?.Data?.map((coin: any) => {
        const obj:TCoin = {
          id: coin.CoinInfo.Id,
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE,
          volume24Hour: coin.RAW.USD.VOLUME24HOUR,
          flags: '4',
        };
        return obj;
      });
      // this.items = coins;
      this.setCoins(coins);
    });
  }

  @action
  startMessageListening = () => {
    WSApi.start();
    // WSApi.subscribe(this.nameCoins);
  }

  @action
  stopMessageListening = () => {
    WSApi.unsubscribe();
  }
}
const currenciesStore = new CurrenciesStore();
const currenciesContext = React.createContext(currenciesStore);
export { currenciesStore, currenciesContext };
// export const currenciesContext = React.createContext(new CurrenciesStore());
// export const currenciesStore = new CurrenciesStore();
