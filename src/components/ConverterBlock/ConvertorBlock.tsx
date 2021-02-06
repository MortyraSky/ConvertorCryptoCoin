/* eslint-disable max-len */
import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { currenciesContext } from '../Stores/currenciesStore';
import { convertorContext } from '../Stores/convertorStore';
import { testStoreContext } from '../Stores/testStore';
import { currenciesCBContext } from '../Stores/currenciesCBStore';
import { TCoin } from '../types/index';

type IConvertorBlock = {
  classes: any;
};

type BaseCoin = {
  name: string;
  price: number;
};

const ConvertorBlock = observer(({ classes }: IConvertorBlock) => {
  const currenciesStore = React.useContext(currenciesContext);
  const converterStore = React.useContext(convertorContext);
  const currenciesCBStore = React.useContext(currenciesCBContext);
  const testStore = React.useContext(testStoreContext);
  const USD = currenciesCBStore.getItems?.reduce((initVal, coin) => {
    if (coin.CharCode === 'USD') {
      initVal = coin.Value;
    }
    return initVal;
  }, 0);
  const [costInCurrencies, setCostInCurrencies] = useState<number>(0);
  const [coins, setCoins] = useState<Array<BaseCoin>>([]);
  const [nameInCoin, setNameInCoin] = useState<string>('');
  const [priceIn, setPriceIn] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [priceOut, setPriceOut] = useState<number>(0);
  const [countOut, setCountOut] = useState<number>(0);
  const [nameOutCoin, setNameOutCoin] = useState<string>('');
  // console.log('кто быстрее coins или useEffect', coins, currenciesStore?.getItems);

  React.useEffect(() => {
    if (currenciesStore!.getItems.length > 0) {
      setCoins(currenciesStore!.getItems?.map((coin) => ({
        name: coin.name || '',
        price: coin.price || 0,
      })) || []);
    }
  }, [currenciesStore, currenciesStore.getItems]);

  React.useEffect(() => {
    console.log('this shit first');
    if (converterStore?.getSelectedCoin?.price) {
      setCountOut(
        (count * converterStore?.getSelectedCoin?.price) / priceOut,
      );
    } else if (coins.length > 0) {
      console.log(count, coins[0], coins[1]);
      setNameInCoin(coins[0]?.name);
      setPriceIn(coins[0]?.price);
      setPriceOut(coins[1]?.price);
      setNameOutCoin(coins[1]?.name);
      setCountOut((count * coins[0]?.price) / coins[1]?.price);
      setCostInCurrencies(count * coins[0]?.price * USD);
    }
  }, [converterStore.getSelectedCoin, coins]);

  React.useEffect(() => {
    console.log('count out', countOut, priceOut, priceIn);
    if (converterStore!.getSelectedCoin?.price) {
      setCount((countOut * priceOut) / converterStore!.getSelectedCoin.price);
    } else if (priceIn) {
      console.log((countOut * priceOut) / priceIn, 'расчет кол 1 инпута');
      setCount((countOut * priceOut) / priceIn);
    }
  }, [nameOutCoin]);

  return (
    <Paper className={classes.paper}>
      <div className={classes.currencyInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField
            type="number"
            label="Количество"
            value={count.toFixed(3) || 0}
            disabled={testStore.getIsTracked}
            onChange={(e) => {
              // console.log('change text field', e.target.value);
              // setPriceIn(parseFloat(e.target.value));
              let count = parseFloat(e.target.value);
              setCount(count);
              setCostInCurrencies(count * USD * priceIn);
              if (converterStore!.getSelectedCoin?.price) {
                setCountOut(
                  (count * converterStore!.getSelectedCoin.price) / priceOut,
                );
                setCostInCurrencies((count * converterStore!.getSelectedCoin.price) / priceOut);
              } else {
                setCountOut((count * priceIn) / priceOut);
                setCostInCurrencies((count * priceIn) / priceOut);
              }
            }}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-helper-label">
            Криптовалюта
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={converterStore?.getSelectedCoin.name || nameInCoin}
            disabled={testStore.getIsTracked}
            onChange={(e: any) => {
              if (e.target?.value) {
                  currenciesStore!.getItems.map((coin: TCoin) => {
                    if (coin.name === e.target?.value) {
                      converterStore?.setItems(coin);
                      setNameInCoin(coin.name);
                      setPriceIn(coin.price);
                    }
                  });
              }
            }}
          >
            {coins?.map((coin) => (
              <MenuItem value={coin.name} key={coin.name}>{coin.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.currencyInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField
            type="number"
            label="Количество"
            value={countOut.toFixed(3) || 0}
            disabled={testStore.getIsTracked}
            onChange={(e) => {
              // setPriceIn(parseFloat(e.target.value));
              let count = parseFloat(e.target.value);
              setCountOut(parseFloat(e.target.value));
              if (converterStore!.getSelectedCoin?.price) {
                setCount(
                  (count * priceOut) / converterStore!.getSelectedCoin.price,
                );
                setCostInCurrencies((count * priceOut) / converterStore!.getSelectedCoin.price);
              } else {
                setCount((count * priceOut) / priceIn);
                setCostInCurrencies((count * priceOut) / priceIn);
              }
            }}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-helper-label">
            Криптовалюта
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={nameOutCoin || ''}
            disabled={testStore.getIsTracked}
            onChange={(e: any) => {
              if (e.target?.value) {
                  currenciesStore!.getItems.map((coin: TCoin) => {
                    if (coin.name === e.target?.value) {
                      setNameOutCoin(coin.name);
                      setPriceOut(coin.price);
                    }
                  });
              }
            }}
          >
            {coins?.map((coin) => (
              <MenuItem value={coin.name} key={coin.name}>{coin.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className={classes.currencyInputBox}>
        <FormControl className={classes.currencyInput}>
          <TextField
            type="number"
            label="Стоимость"
            value={costInCurrencies.toFixed(3) || 0}
            // disabled
            onChange={(e) => {
              if (e.target.value) {
                let cost = +e.target.value;
                setCostInCurrencies(cost);
                setCount(cost / (priceIn * USD));
              }
            }}
          />
        </FormControl>
        <FormControl className={classes.currencyType}>
          <InputLabel shrink id="demo-simple-select-helper-label">
            Валюта
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            value={'RUB' || ''}
            disabled
          >
            {currenciesCBStore.getItems?.map((coin) => (
              <MenuItem value={coin.CharCode} key={coin.ID}>{coin.CharCode}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Paper>
  );
});

export default ConvertorBlock;
