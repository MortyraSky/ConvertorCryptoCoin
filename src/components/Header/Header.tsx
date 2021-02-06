import React from 'react';
import { observer } from 'mobx-react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { currenciesCBContext } from '../Stores/currenciesCBStore';

const useStyles = makeStyles((theme: Theme) => createStyles({
  header: {
    width: '100%',
    height: 50,
    background: 'gray',
  },
  currenciesBlock: {
    marginBottom: 24,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  currenciesItem: {
    paddingRight: 15,
  },
  link: {
    paddingRight: 15,
  },
}));

export const Header = observer(() => {
  const CurrCBStore = React.useContext(currenciesCBContext);
  React.useEffect(() => {
    const intervalID = setInterval(() => {
      CurrCBStore.fetchCoins();
    }, 1000 * 60 * 10);

    return () => { clearInterval(intervalID); };
  }, []);

  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.currenciesBlock}>
        {
          CurrCBStore.getItems?.map((coin) => {
            if (coin.CharCode === 'USD' || coin.CharCode === 'EUR') {
              return (
                <div
                  className={classes.currenciesItem}
                  key={coin.ID}
                >
                  {`${coin.CharCode} - ${coin.Value}`}
                </div>
              );
            }
            return null;
          })
        }
      </div>
      {/* <a className={classes.link} href="#" target="_blank" rel="noopener noreferrer">Home</a>
      <a className={classes.link} href="#" target="_blank" rel="noopener noreferrer">About</a>
      <a className={classes.link} href="#" target="_blank" rel="noopener noreferrer">Contacts</a> */}
    </header>
  );
});
