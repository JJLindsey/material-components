import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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


export default function Header(props) {
  return (
    <ElevationScroll>
        <AppBar position='fixed' color='primary'>
            <Toolbar>
              <Typography variant='h5' color='secondary'>
                Navigation
              </Typography>
            </Toolbar>
        </AppBar>
    </ElevationScroll> 
  )
}
