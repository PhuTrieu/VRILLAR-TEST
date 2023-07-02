import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '10vh',
        backgroundColor: '#05060c',
        color: '#ffffff',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#e10600',
            backgroundColor: '#e10600'
        },
        [theme.breakpoints.up('xs')]: {
            right: '-45%',
            backgroundColor: 'rgb(220,220,220,0.7)',
        },
        [theme.breakpoints.up('lg')]: {
            right: '-45%',
        },
    }
}))