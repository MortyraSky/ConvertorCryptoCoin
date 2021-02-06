import React from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Chip from '@material-ui/core/Chip';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SaveIcon from '@material-ui/icons/Save';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import { TNameCoins, TNameCoin } from '../types/index';
import { testStoreContext } from '../Stores/testStore';
import { currenciesContext } from '../Stores/currenciesStore';

const useStyles = makeStyles((theme: Theme) => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    maxWidth: 500,
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  currencyInputBox: {
    marginBottom: 10,
    marginTop: 10,
  },
  currencyInput: {
    minWidth: 'calc(15% - 10px)',
    marginRight: 10,
  },
  currencyType: {
    minWidth: '40%',
  },
  chip: {
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

// const Fade = React.forwardRef<HTMLDivElement, FadeProps>((
//   props,
//   ref,
// ) => {
//   const {
//     in: open, children, onEnter, onExited, ...other
//   } = props;

//   const spring = React.useMemo(() => ({
//     from: { opacity: 0 },
//     enter: (currentlyOpen: any) => async (next: any) => {
//       if (currentlyOpen && onEnter) {
//         onEnter();
//       }
//       console.log(currentlyOpen, 'enter');
//       await next({ opacity: 1 });
//       if (!currentlyOpen && onExited) {
//         onExited();
//       }
//       console.log(currentlyOpen, 'entered');
//     },
//     leave: (currentlyOpen: any) => async (next: any, cancel) => {
//       console.log(currentlyOpen, 'leaving');
//       await next({ opacity: 0 });
//       if (currentlyOpen && onExited) {
//         // onExited();
//       }
//       console.log(currentlyOpen, 'left');
//     },
//   }), [onEnter, onExited]);
//   const transitions = useTransition(open, null, spring);

//   return transitions.map(({ item, key, props }) => (
//     item && (
//     <animated.div key={key} style={props}>
//       {children}
//     </animated.div>
//     )
//   ));
// });

const Fade = React.forwardRef<HTMLDivElement, FadeProps>((
  props,
  ref,
) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

type ModalProps = {
  GlobalOpenStatus: boolean;
  ChangeGlobalOpenStatus?: Function;
};

const SpringModal = observer(({
  GlobalOpenStatus,
  ChangeGlobalOpenStatus,
}: ModalProps) => {
  const TestsStore = React.useContext(testStoreContext);
  const CurrenciesStore = React.useContext(currenciesContext);
  let listCoinsRef = React.useRef<TNameCoins | null>(null);
  let trackedCoinsRef = React.useRef<Array<string> | null>(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(GlobalOpenStatus);
  // const [selectedCoin, setSelectedCoin] = React.useState<string>('');
  const [listCoinsName, setListCoinsName] = React.useState<TNameCoins>([]);
  console.log('отрисовка modal.tsx');

  // React.useEffect(() => {
  //   let requestOptions = {
  //     method: 'GET',
  //     // redirect: 'follow',
  //   };

  //   fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=1385841600000&end=1612270394604', requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log('error', error));
  // }, []);

  React.useEffect(() => {
    // переделать условие инициализации!!!!
    console.log('в эффекте, где стейтим список коинов');
    if (
      TestsStore.getListWithoutSelectedCoins.length === 0
      && TestsStore.getListCoins.length > 0
    ) {
      console.log('стейтим массив с именами коинов');
      setListCoinsName(TestsStore.getListCoins);
    } else if (
      TestsStore.getListWithoutSelectedCoins.length > 0
      && TestsStore.getListCoins.length > 0
    ) {
      console.log('стейтим массив без выбранных коинов');
      setListCoinsName(TestsStore.getListWithoutSelectedCoins);
    }
  }, [TestsStore.getListCoins, TestsStore.getListWithoutSelectedCoins]);

  const handleClose = () => {
    // setOpen(false);
    // TestsStore.setTrackedCoins(trackedCoinsRef?.current || []);
    CurrenciesStore.setTrackedCoins(trackedCoinsRef?.current || []);
    TestsStore.setListWithoutSelectedCoins(listCoinsRef?.current || []);
    console.log('ref is', listCoinsRef, trackedCoinsRef);
    if (ChangeGlobalOpenStatus) {
      ChangeGlobalOpenStatus();
    } else {
      setOpen(false);
    }
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-spring
      </button> */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.root}>
            <Typography variant="h5" gutterBottom>
              Выберите монеты для отображения
            </Typography>
            <div className={classes.currencyInputBox}>
              <FormControl className={classes.currencyType}>
                <InputLabel shrink id="demo-simple-select-helper-label">
                  Криптовалюта
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  // value={selectedCoin || ''}
                  disabled={listCoinsName.length === 0}
                  onChange={(e: any) => {
                    // console.log(e.target);
                    if (e.target?.value) {
                      // здесь добавляем из селекта новую, отслеживаемую монету
                      let buffTracked = [...TestsStore.getTrackedCoins];
                      buffTracked.push(e.target.value);
                      TestsStore.setTrackedCoins(buffTracked);
                      trackedCoinsRef.current = buffTracked;
                      // setSelectedCoin(e.target?.value);
                      // здесь убираем элемент из отображения списка выбора селекта
                      let buff = [...listCoinsName];
                      // eslint-disable-next-line max-len
                      buff.splice(listCoinsName.findIndex((coin) => coin.name === e.target.value), 1);
                      setListCoinsName(buff);
                      listCoinsRef.current = buff;
                      // TestsStore.setListWithoutSelectedCoins(buff);
                    }
                  }}
                >
                  {listCoinsName?.map((coin, index) => (
                    <MenuItem value={coin.name} key={`coin_${index}`}>{coin.fullName}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
              {TestsStore.getTrackedCoins?.map((item) => (
                <Chip
                  key={item}
                  className={classes.chip}
                  icon={<MonetizationOnIcon />}
                  label={item}
                  onDelete={() => {
                    // eslint-disable-next-line max-len
                    const indexDeletedChips = TestsStore.getTrackedCoins?.findIndex((coin) => coin === item);
                    let buff = [...TestsStore.getTrackedCoins];
                    buff.splice(indexDeletedChips, 1);
                    // setTrackedCoins(buff);
                    TestsStore.setTrackedCoins(buff);
                    // CurrenciesStore.setTrackedCoins(buff);
                    trackedCoinsRef.current = buff;

                    let buffListCoins = [...listCoinsName];
                    let nameDelCoin:TNameCoin = TestsStore.getListCoins?.reduce((initVal, coin) => {
                      if (coin.name === item) {
                        initVal.name = coin.name;
                        initVal.fullName = coin.fullName;
                      }
                      return initVal;
                    }, {} as any);
                    buffListCoins.unshift(nameDelCoin);
                    listCoinsRef.current = buffListCoins;
                    setListCoinsName(buffListCoins);
                    // TestsStore.setListWithoutSelectedCoins(buffListCoins);
                  }}
                />
              ))}
            </div>
            <div className={classes.buttonBlock}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                disabled={TestsStore.getTrackedCoins.length === 0}
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={handleClose}
              >
                Сохранить
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
export default SpringModal;
