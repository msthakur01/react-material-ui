import { makeStyles } from "@material-ui/core";
const drawerWidth = 250;
export const useStyles = makeStyles((theme) =>({
    root: {
      display: 'flex',
    },
    drawer:{
      width: drawerWidth,
      flexShrink: 0,
      background: '#e8f5fe',
    },
    ListContainer:{
      padding: '4px'
    },
    search: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: '#fff',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: 'auto'
    },
    searchIcon: {
      padding: theme.spacing(0, 1),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
    },
    inputRoot: {
      color: 'inherit',
      background: '#fff',
    },
    inputInput: {
      background: '#fff',
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(0.5)}px)`,
      transition: theme.transitions.create('width'),
      width: '24ch',
      [theme.breakpoints.down('sm')]: {
        width: '24ch',
      },
    },
}))