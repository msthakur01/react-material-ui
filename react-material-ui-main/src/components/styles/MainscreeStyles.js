import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%'
    },
    mainScreenHead: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      flexGrow: 1
    },
    image: {
      width: '6rem',
      height: '6rem',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '.25em',
      
    },
    detailsContainer: {
      marginLeft: '.5em',
  
    },
    listContainer:{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '2rem',
      marginRight: '1rem',
      '&>*':{
        display: 'flex',
      },
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr'
      },
  
    },
    listTitle:{
      minWidth: '8rem',
      marginRight:'1em'
    },
    mainContainer:{
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      },
    },
    downMenu:{
      display: 'flex',
      marginTop: '2em',
      background: 'white',
      width: '100%',
    },
    infoCard:{
      marginLeft: '1em',
      marginTop: '1em',
      maxWidth: '500px'
    },
    cardDetilTitle:{
      background: 'lightBlue',
      paddingLeft: '.5em'
    },
    downMenuTitles:{
      maxHeight: '5em',
      padding: '.5em',
      textAlign: 'center',
    },
    active:{
      border: '1px solid #dbdbdb',
      borderBottom: 'none'
    },
    button: {
      marginTop: '1em'
    },
    title:{
      paddingLeft: ".5em",
    },
    listItem:{
      display: 'flex'
    },
    doctorDetails:{
      position: 'relative'
    },
    surgery:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '3rem',
    },
    yes: {
      width: '3rem',
      height: '3rem',
      background: 'green',
      color: 'white',
      borderRadius: '50%',
      position: 'relative'
    },
    no: {
      width: '3rem',
      height: '3rem',
      background: 'red',
      color: 'white',
      borderRadius: '50%',
      position: 'relative'
    },
    center: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }))