import './schedule.css';
import {Toolbar,AppBar,Typography,Box,CardMedia,Paper} from '@mui/material';
import logo from '../assest/ban.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Schedule=()=>{
    return(
       <div className='schedule-all'>
        <div className='sch-bar'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar  position="static" style={{backgroundColor:"rgb(86, 81, 81)"}} >
                    <Toolbar>
                    <CardMedia className='card' component="img" image={logo} alt="logo"/>
                    <Typography className='typo' variant="h6" sx={{ flexGrow: 1 }}>RANJI BANK OF INDIA</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
        <p className='sch-p-2'>Select a Location:</p>
        <Paper className='sch-paper-full' style={{backgroundColor:"white"}}>
        <p id='pap-sch-t-1'>Show locations near:</p>
        <form>
            <input type="text"placeholder="city or state" className='pap-sch-in1' name="number"/>
        </form>
        <LocationOnIcon className='sch-icon'/>
        </Paper>
        <button id='sch-butt-con'><Link>Continue</Link></button>
        <button id='sch-butt-can'><Link to={'/appoint'}>Cancel</Link></button>
       </div>
    )
}

export default Schedule;