//import createMuiTheme from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles';
const appBlue = '#005698'
const appOrange = '#984200'

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
        h5: {
            fontWeight: 300
        }
    }
});