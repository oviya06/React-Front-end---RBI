import './newuser.css';
import {Paper} from '@mui/material' ;
import { Link } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import {CardMedia} from '@mui/material';
import capt from '../assest/capta.png';

const NewUser=()=>{
    return(
        <div>
             <div className='nu-all'>
            <Paper className='nu-pap'>
            <h2 className='nu-1'>Register for Internet Banking</h2>
            
            <form className='nu-2'>
                <label className='nu-3'><h4>Current/Saving Account Number*</h4> </label>
                <input className='nu-4'type={'number'}/>
                <label className='nu-5'><h4>ATM cum Debit Card Number*</h4></label>
                <input className='nu-6' type={'number'}/>
                <label className='nu-7'><h4>Customer ID*</h4></label>
                <input className='nu-8'type={'number'}/>
                <label className='nu-9'><h4>Enter Captcha</h4> </label>
                <input className='nu-10'type={'text'}/>
                <CardMedia className='nu-card' component="img" image={capt} alt="logo"/>
                <RefreshIcon className='nu-99'/>
            </form>
            <p className='nu-11'>Note : Funds Transfer Facility will Get Enabled on Generation of Transaction Password.
While registration for net-banking, customer will be provided with Inquiry Facility. For funds transfer or Tax payment facility, customer has to get a transaction password, for which a facility is provided in the net-banking itself.</p>
<button className='nu-12'>Send OTP</button>
<button className='nu-13'><Link>Login Page</Link></button>
            </Paper>
        </div>
        </div>
    )
}

export default NewUser;