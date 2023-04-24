import './forgot.css';
import {Paper} from '@mui/material';
import captacha from '../assest/capta.png';
import {CardMedia} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from 'react-router-dom';

const ForgetUser=()=>{
    return(
        <div className='forgot-all'>
            <Paper className='forgot-pap'>
            <h2 className='un-1'>Retrieve/Forgot Internet Banking <br/>Login User ID</h2>
            <p className='un-2'>To retrieve your Login User ID ,please enter your registered <br/>Customer ID and Mobile number.</p>
            <form className='un-3'>
                <label className='un-4'><h4>Customer ID*</h4> </label>
                <input className='un-5'type={'number'}/>
                <label className='un-6'><h4>Mobile Number*</h4> </label>
                <input className='un-7'type={'number'}/>
                <label className='un-8'><h4>Enter Captcha</h4> </label>
                <input className='un-9'type={'text'}/>
                <CardMedia className='un-card' component="img" image={captacha} alt="logo"/>
                <RefreshIcon className='un-99'/>
                <button className='un-10'><Link to={'/login'}>Cancel</Link></button><button className='un-11'><Link>Submit</Link></button>
            </form>
            <p className='un-12'>Note:<br/>
1. Customer ID and Mobile Number are mandatory.<br/>
2. You can modify existing User ID using the menu present under Customer Services after login in Internet Banking.</p>
            </Paper>
        </div>
    )
}

export default ForgetUser;