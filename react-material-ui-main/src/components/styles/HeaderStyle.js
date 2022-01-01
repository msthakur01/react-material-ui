import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    navbar: {
        zIndex: theme.zIndex.drawer+1
    },
    logo: {
        marginRight: '1rem',
        marginLeft: '.5rem',
        width: '3rem'
    },
    icon: {
        padding: '0 1rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover':{
            background: '#1a73e8',
            color: theme.palette.background.paper
        },
    },
    navLeft: {
        flexGrow: 1
    },
    
}));