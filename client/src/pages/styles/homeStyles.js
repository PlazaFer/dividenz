import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
    containerTitle:{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        padding: theme.spacing(3)
    },
    containerButtonCreate:{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(4)
    }
}))