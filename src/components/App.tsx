import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { testStoreContext } from './Stores/testStore';
import { currenciesCBContext } from "./Stores/currenciesCBStore";
import SpringModal from '../components/Modal/Modal';
import SubcribeBlock from '../components/SubcribeBlock/SubcribeBlock';
import { CryptoTable, ConverterBlock } from '../components';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

const useStyles = makeStyles((theme: Theme) => createStyles({
  body: {
    margin: 0,
    padding: 0,
  },
  root: {
    padding: theme.spacing(10),
    minHeight: 'calc(100vh - 100px)',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  currencyInputBox: {
    marginBottom: 20,
    marginTop: 20,
  },
  currencyInput: {
    minWidth: 'calc(15% - 10px)',
    marginRight: 10,
  },
  currencyType: {
    minWidth: '30%',
  },
  container: {
    // maxHeight: 440,
  },
  currencyCoinIcon: {
    width: 18,
    height: 18,
    borderRadius: 25,
  },
  subscribeBlock: {
    marginBottom: 18,
  },
  trackChangeButton: {
    marginLeft: 18,
  },
}));

export const App = () => {
  const TestStore = React.useContext(testStoreContext);
  const CurrCBStore = React.useContext(currenciesCBContext);
  const classes = useStyles();
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.minHeight = '100%';
  const [open, setOpen] = React.useState<boolean>(true);
  console.log('отрисовка апп.тсх');

  React.useEffect(() => {
    TestStore.fetchNameCoins();
    CurrCBStore.fetchCoins();
  }, []);
  return (
    <>
      {
        open ? (
          <SpringModal
            GlobalOpenStatus={open}
            ChangeGlobalOpenStatus={() => {
              setOpen(!open);
            }}
          />

        ) : (
          <>
            <Header />
            <Container className={classes.root} maxWidth="lg">
              <Container>
                <SubcribeBlock classes={classes} />
              </Container>
              <Grid container spacing={3}>
                <Grid item xs={8}>
                  <CryptoTable classes={classes} />
                </Grid>
                <Grid item xs={4}>
                  <ConverterBlock classes={classes} />
                </Grid>
              </Grid>
            </Container>
            <Footer />
          </>
        )

      }
      {/* <Header />
      <Container className={classes.root} maxWidth="lg">
        <Container>
          <SubcribeBlock classes={classes} />
        </Container>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CryptoTable classes={classes} />
          </Grid>
          <Grid item xs={4}>
            <ConverterBlock classes={classes} />
          </Grid>
        </Grid>
      </Container>
      <Footer /> */}
    </>
  );
};
