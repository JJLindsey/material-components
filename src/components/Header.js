import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../assets/sunder-muthukumaran-fd6K_OFlnRA-unsplash.jpg'

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
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '26px'
  }
}))


export default function Header(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <ElevationScroll>
          <AppBar position='fixed' color='primary'>
              <Toolbar disableGutters>
                <img className={classes.logo} alt='company logo' src={logo} />
                FE Dev
                <Tabs className={classes.tabContainer}>
                  <Tab className={classes.tab} label='Home'/>
                  <Tab className={classes.tab} label='Services'/>
                  <Tab className={classes.tab} label='About'/>
                  <Tab className={classes.tab} label='Contact'/>
                </Tabs>
              </Toolbar>
          </AppBar>
      </ElevationScroll> 
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
