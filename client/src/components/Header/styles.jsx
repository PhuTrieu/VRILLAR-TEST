import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    container: {
        marginBottom: 50,
        fontWeight: 'lighter',
        padding: '5px 0'
    },
    buttonNav: {
        my: 2, 
        color: '#e10600', 
        display: 'block'
    },
    linkNav: {
        textDecoration: 'none', color: '#e10600',
        '&:hover': {
            backgroundColor: '#fafafa',
            textDecoration: 'underline',
            textDecorationColor: '#e10600',
            textDecorationThickness: '3px',
        }
    }
}))