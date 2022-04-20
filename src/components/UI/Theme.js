//import createMuiTheme from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles';
const appBlue = '#26dbff'
const appOrange = '#ff6e30'

export default createTheme({
    palette: {
        common: {
            blue:`${appBlue}`,
            orange:`${appOrange}`
        },
        primary: {
            main: `${appBlue}`
        },
        secondary: {
            main: `${appOrange}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            fontWeight: 600,
            fontSize:'1rem',
        },
        estimate: {
            fontFamily: 'Raleway',
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
        }
    }
});