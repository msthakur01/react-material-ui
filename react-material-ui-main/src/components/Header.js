import React from 'react';
import { Typography, CssBaseline, Toolbar, AppBar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from './styles/HeaderStyle';

export default function Header(){

    const classes = useStyles()

    return (
          <>
           
            <AppBar  className={classes.navbar} color='paper' position="fixed" justify-content="space-between"  >
                <Toolbar  className={classes.tool} position='right'>
                    <img className={`${classes.smallImage} ${classes.logo}` } src={"media/logo.png"} alt="" />
                    <Typography className={`${classes.icon} active`} variant="h7">PATIENTS</Typography>
                    <Typography className={classes.icon} variant="h7">CALENDAR</Typography>
                    <Typography className={classes.icon} variant="h7">USERS</Typography>
                    <Typography className={classes.icon} variant="h7">BILLING</Typography>
                    <Typography className={classes.navLeft}></Typography>
                    <NotificationsIcon />
                    <img className={classes.smallImage} left src="media/user4.png" alt="" />
                </Toolbar>
                
            </AppBar>
            
          </>
    )
}







