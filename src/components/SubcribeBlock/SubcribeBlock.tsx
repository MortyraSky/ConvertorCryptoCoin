import React from 'react';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';
import { currenciesContext } from '../Stores/currenciesStore';
// import { testStoreContext } from '../Stores/testStore';
import SpringModal from '../Modal/Modal';

type ISubscribeBlock = {
  classes: any;
};

const SubscribeBlock = observer(
  ({ classes }: ISubscribeBlock) => {
    const [isSubs, setIsSubs] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    // const TestsStore = React.useContext(testStoreContext);
    const currenciesStore = React.useContext(currenciesContext);
    return (
      <div className={classes.subscribeBlock}>
        <Button
          variant="contained"
          color={isSubs ? 'default' : 'primary'}
          onClick={() => {
            setIsSubs(false);
            currenciesStore?.stopMessageListening();
            // console.log(TestsStore.getSelectedCoin, 'dont track ws');
          }}
        >
          Не отслеживать изменения
        </Button>
        <Button
          className={classes.trackChangeButton}
          variant="contained"
          color={isSubs ? 'primary' : 'default'}
          onClick={() => {
            setIsSubs(true);
            currenciesStore?.startMessageListening();
            // console.log(TestsStore.getSelectedCoin, 'отслеживаем ws');
          }}
        >
          Отслеживать изменения
        </Button>
        <Button
          className={classes.trackChangeButton}
          variant="outlined"
          color="primary"
          onClick={() => {
            setIsSubs(false);
            currenciesStore?.stopMessageListening();
            setOpen(true);
            // console.log(TestsStore.getSelectedCoin, 'отслеживаем ws');
          }}
        >
          Изменить монеты
        </Button>
        {open && (
          <SpringModal
            GlobalOpenStatus={open}
            ChangeGlobalOpenStatus={() => {
              setOpen(!open);
            }}
          />
        )}
      </div>
    );
  },
);

export default SubscribeBlock;
