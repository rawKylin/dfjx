import { SheetsRegistry } from 'jss'
import { createMuiTheme,  createGenerateClassName } from '@material-ui/core/styles'
// import purple from '@material-ui/core/color/purple'
// import green from "@material-ui/core/color/green"

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#f3f3f3',
            dark: '#eee',
        },
        secondary: {
            light: '#fff',
            main: '#f3f3f3',
            dark: '#eee',
        }
    },
    // typography: {
    //     useNextVariants: true,
    // }
})

function createPageContext(){
    return {
        theme,
        // sheetsManger: new Map(),
        sheetsRegistry: new SheetsRegistry(),
        generateClassName: createGenerateClassName(),
    }
}

let pageContext;

export default function getPageContext(){
    
    if(!process.browser){
        return createPageContext()
    }

    if(!pageContext){
        pageContext = createPageContext();
    }

    return pageContext
}