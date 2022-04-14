import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteTaskStart, loadTaskStart } from '../redux/actions';
import { sweetAlertConfirm } from '../helpers/sweetAlertConfirm';
import { toast } from "react-toastify";
import { Cards } from '../components/Card/Cards';
import { useStyles } from './styles/homeStyles';
import { Box, Typography, Grid, Container, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



export const Home = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { tasks } = useSelector(state => state.tasks);


    useEffect(() => {
        dispatch(loadTaskStart())
    },[dispatch])

    const handleDelete = async (id) => {
        const deleteTask = await sweetAlertConfirm();
        if(deleteTask){
            dispatch(deleteTaskStart(id));
            toast.success('Se elimino la tarea correctamente')
        }
    }

    return(
        <>
        <Box className={classes.containerTitle}>
            <Typography className={classes.title} variant='h5'>Tareas</Typography>
        </Box>
        <Box className={classes.containerButtonCreate}>
            <IconButton
                onClick={() => navigate('/create')}
                color='primary'
                size='large'
            >
                <AddIcon fontSize='large' />
            </IconButton>
        </Box>
        <Container>
        <Grid container spacing={4}>
        {tasks.map((object) => (
            <Grid 
            key={object.id}
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            >
                <Cards 
                    object={object} 
                    handleDelete={handleDelete}
                />
            </Grid>
        ))}
        </Grid>
        </Container>
        </>
    )
}