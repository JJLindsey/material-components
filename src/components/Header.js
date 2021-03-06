import React, { useState, useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  }
}))


export default function Header(props) {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange =(e, value) => {
    setValue(value)
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  };

  const menuOptions = [
    {name: "Services", link: "/services"},
    {name: "Custom Software Development", link:"/customSoftware"},
    {name: "Mobile App Development", link: "/mobileApp"},
    {name: "Website Development", link: "websiteDev"}
  ];

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
                  <Tab
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup={anchorEl ? "true" : undefined}
                    className={classes.tab}
                    component={Link}
                    onMouseOver={event => handleClick(event)}
                    to="/services"
                    label="Services"
                  />
                  <Tab className={classes.tab} component={Link} to="/about" label='About'/>
                  <Tab className={classes.tab} component={Link} to="/contact" label='Contact'/>
                </Tabs>
                <Button variant='contained' color='secondary' className={classes.button}>
                  Free Estimate
                </Button>
                <Menu id="simple-id" anchorEl={anchorEl} open={openMenu} onClose={handleClose} classes={{paper: classes.menu}} MenuListProps={{onMouseLeave: handleClose}} elevation={0}>
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={option}
                      component={Link}
                      to={option.link}
                      classes={{root: classes.menuItem}}
                      onClick={event => {
                        handleMenuItemClick(event, i);
                        setValue(1);
                        handleClose();
                      }}
                      selected={i === selectedIndex && value === 1}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                  {/* <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to="/services" classes={{root: classes.menuItem}}> Services</MenuItem>
                  <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to="/customSoftware" classes={{root: classes.menuItem}}> Custom Software</MenuItem>
                  <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to="/mobileApp" classes={{root: classes.menuItem}}> Mobile App Development</MenuItem>
                  <MenuItem onClick={() => {handleClose(); setValue(1)}} component={Link} to="/websiteDev" classes={{root: classes.menuItem}}> Website Development</MenuItem> */}
                </Menu>
              </Toolbar>
          </AppBar>
      </ElevationScroll> 
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
