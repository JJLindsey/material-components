//import createMuiTheme from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles';
const appBlue = '#0072EC'
const appOrange = '#EC7A00'

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
    }
});