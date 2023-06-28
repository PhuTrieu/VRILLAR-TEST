import React from 'react'
import logo from '../../images/f1.png'
import useStyles from './styles'
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.container} color='inherit'>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="logo" style={{
            height: '54px'
          }} />
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent='center'>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>Latest</Link>
          </Button>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>Video</Link>
          </Button>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>F1 Unlocked</Link>
          </Button>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>Schedule</Link>
          </Button>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>Results</Link>
          </Button>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>Drivers</Link>
          </Button>
          <Button className={classes.buttonNav}>
            <Link to="/" className={classes.linkNav}>Teams</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
