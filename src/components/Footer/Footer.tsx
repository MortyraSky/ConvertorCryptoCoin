import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  footer: {
    width: '100%',
    height: 50,
    background: 'gray',
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>@ Created By PK</div>
    </footer>
  );
};
