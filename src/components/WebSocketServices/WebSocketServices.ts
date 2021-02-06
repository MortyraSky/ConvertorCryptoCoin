import { TESTSTORE } from '../Stores/testStore';
import { currenciesStore } from '../Stores/currenciesStore';

console.log('In ws stores', TESTSTORE, currenciesStore);
let ws: WebSocket | null = null;
let status: 'open' | 'pending' | 'close' = 'close';
let apiKey = '08def8b83364db6da0c88e687a95930db8c0983d24786493f3845ceebe599d4f';
// const nameCCoins: Array<string> = TESTSTORE.getNameCoins.split(',');
let trackedCoins: Array<string> = [];

const closeHandler = () => {
  console.log('Close ws');
  // eslint-disable-next-line no-use-before-define
  // setTimeout(createChannel, 10000);
};

const openHandler = () => {
  // console.log('WS connected', ws);
  status = 'open';
  const sub = {
    action: 'SubAdd',
    subs: trackedCoins?.map((coin) => `5~CCCAGG~${coin}~USD`),
  };
  console.log('SUB add', sub);
  ws?.send(JSON.stringify(sub));
};

const messageHandler = (event: MessageEvent) => {
  const response = JSON.parse(event.data);
  console.log('message ws', event);
  if (response.TYPE === '5') {
    console.log('resp type 5', response);
    currenciesStore?.updateCoins(response);
    // TESTSTORE.setItems('sdasda');
  }
};

function createChannel() {
  ws?.removeEventListener('close', closeHandler);
  ws?.close();
  ws = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);
  ws.addEventListener('close', closeHandler);
  ws.addEventListener('message', messageHandler);
  ws.addEventListener('open', openHandler);
  TESTSTORE.setIsTracked(true);
  console.log('WS created');
}

export const WSApi = {

  start() {
    trackedCoins = TESTSTORE.getTrackedCoins;
    console.log('Start ws and view tracked coins', trackedCoins, TESTSTORE);
    if (status === 'close') {
      createChannel();
    }
  },

  unsubscribe() {
    if (status === 'open') {
      const subRemove = {
        action: 'SubRemove',
        subs: trackedCoins?.map((coin) => `5~CCCAGG~${coin}~USD`),
      };
      console.log('UNSUB', subRemove);
      ws?.send(JSON.stringify(subRemove));
      ws?.removeEventListener('message', messageHandler);
      ws?.removeEventListener('open', openHandler);
      ws?.close();
      status = 'close';
      currenciesStore?.hideColors();
      TESTSTORE.setIsTracked(true);
    }
    console.log('откл не подключенную подписку');
  },

};
