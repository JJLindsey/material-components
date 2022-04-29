import React, { useState, useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import logo from '../assets/testLogo.png'

function ElevationScroll(props) {
    const { children } = props;
    //useScrollTrigger hook Material - event listener
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    //using spread operator we have copied all styles over from toolbar object
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '26px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight:'25px',
    height: '45px'
  }
}))


export default function Header(props) {
  const classes = useStyles()
  const [value, setValue] = useState(0);

  const handleChange =(e, value) => {
    setValue(value)
  };
//check current URL & set value to active tab
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0)
    } else if (window.location.pathname === "/services" && value !== 1){
      setValue(1)
    } else if (window.location.pathname === "/about" && value !== 2) {
      setValue(2)
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3)
    } else if (window.location.pathname === "/estimate" && value !== 4) {
      setValue(4)
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
          <AppBar position='fixed' color='primary'>
              <Toolbar disableGutters>
                <Button component={Link} to="/" disableRipple onClick={() => setValue(0)}
                  className={classes.logoContainer}>
                  <img className={classes.logo} alt='company logo' src={logo} />
                </Button>
                <Tabs  value={value} onChange={handleChange} className={classes.tabContainer}
                  indicatorColor='primary'
                >
                  <Tab className={classes.tab} component={Link} to="/" label='Home'/>
                  <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
                  <Tab className={classes.tab} component={Link} to="/about" label='About'/>
                  <Tab className={classes.tab} component={Link} to="/contact" label='Contact'/>
                </Tabs>
                <Button variant='contained' color='secondary' className={classes.button}>
                  Free Estimate
                </Button>
              </Toolbar>
          </AppBar>
      </ElevationScroll> 
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
