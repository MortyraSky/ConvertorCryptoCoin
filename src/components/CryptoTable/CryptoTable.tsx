/* eslint-disable no-unused-vars */
import React, { ReactElement, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { currenciesContext } from '../Stores/currenciesStore';
import { convertorContext } from '../Stores/convertorStore';
import { TCoin, Column, TCoinDiff } from '../types/index';

import Style from './Style.scss';

const columns: Column[] = [
  { id: 'imageUrl', label: '', minWidth: 50 },
  { id: 'name', label: 'NAME', minWidth: 90 },
  {
    id: 'fullName',
    label: 'CryptoExchange',
    minWidth: 170,
    align: 'left',
    // format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'PRICE',
    minWidth: 90,
    align: 'left',
    // format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'volume24Hour',
    label: 'volume24Hour',
    minWidth: 170,
    align: 'left',
    // format: (value: number) => value.toLocaleString('en-US'),
  },
];

interface ICryptoTable {
  classes: any;
}

const colors: { [key: string]: string } = {
  red: '#f8181880',
  green: '#5bd150a3',
  none: '',
};

export const CryptoTable = observer(({ classes }: ICryptoTable) => {
  const currenciesStore = React.useContext(currenciesContext);
  const converterStore = React.useContext(convertorContext);
  const items: TCoin[] = currenciesStore!.getItems;
  React.useEffect(() => {
    currenciesStore?.fetchCoins();
    // currenciesStore?.startMessageListening();
  }, [currenciesStore.getTrackedCoins]);
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {!items?.length
            ? 'Load...'
            : items?.map((coin: TCoin) => (
              <TableRow
                hover
                tabIndex={-1}
                key={coin.id}
                className={Style.rowTable}
                onClick={() => {
                      // console.log('coin', coin);
                      converterStore?.setItems(coin);
                }}
              >
                {columns.map((column) => {
                  const value = coin[column.id];
                  const colorCell: string = colors[coin.flags];
                  const tableCell: ReactElement = column.id !== 'imageUrl' ? (
                    <TableCell
                      key={column.id}
                      align={column.align}
                            // className={Style[]}
                      style={{ background: colorCell }}
                    >
                      {value}
                    </TableCell>
                  ) : (
                    <TableCell key={column.id} align={column.align}>
                      <img
                        className={classes.currencyCoinIcon}
                        src={coin.imageUrl}
                        alt="Coin ico"
                      />
                    </TableCell>
                  );
                  return tableCell;
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
export default CryptoTable;
