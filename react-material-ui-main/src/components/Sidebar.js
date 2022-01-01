import React from 'react'
import { PatientList } from './PatientList';
import { Drawer, List, CssBaseline, makeStyles, Toolbar, InputBase, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './styles/SidebarStyle';


export const Sidebar = (props, { onSelect }) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
                <Drawer className={classes.drawer} classes={{ paper: classes.drawer}} variant="permanent">
                  <Toolbar />
                  <List className={classes.List} >
                      <div className={classes.ListContainer}>
                        <Typography variant='h6' className="side-heading">Patients</Typography>
                        <div className={classes.search}>
                          <div className={classes.searchIcon}>
                          </div>
                          <InputBase
                            placeholder="Search…"
                            classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                          />
                            <SearchIcon />
                          </div>
                        {/* <div className="search">
                            <input type="text" className="search-patient" placeholder='search for...' />
                            <i className="icon"><FaSistrix /></i>
                        </div> */}
                        <div className="patient-list">
                            <PatientList patient={props} onSelect={onSelect} />
                        </div>
                      </div>
                  </List>
            </Drawer>
        </div>
    )
}
