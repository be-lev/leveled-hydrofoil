import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../assets/images/logo-noBg.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'transparent',
      flexGrow: 1,
      zIndex: 10,
      position: 'fixed',
      width: '100%',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={`${classes.root}`}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <img src={Logo} alt="logo" width="80px" />
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Technology
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Products
        </Typography>
        <Typography variant="h6" className={classes.title}>
          About
        </Typography>
        <Typography variant="h6" className={classes.title}>
          Contact
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
