import './fpass.css';
import {Paper} from '@mui/material';
import { Link } from 'react-router-dom';

const ForgetPassword=()=>{
    return(
        <div className='forgotpass-all'>
            <Paper className='forgotpass-pap'>
            <h2 className='fp-1'>Create/Reset Login Password</h2>
            <p className='fp-2'>Please enter below details to reset Internet Banking Login Password</p>
            <form className='fp-3'>
                <label className='fp-4'><h4>User ID*</h4> </label>
                <input className='fp-5'type={'number'}/>
                <label className='fp-6'><h4>Date of Birth/Date of Incorporation*</h4></label>
                <input className='fp-7' type={'date'}/>
                <label className='fp-8'><h4>I am a*</h4></label>
                <input className='fp-9' type={'radio'} name='radio'/>
                <p className='fp-10'>Retail User</p>
                <input className='fp-11' type={'radio'} name='radio'/>
                <p className='fp-12' >Corporate User</p>
                <label className='fp-13'><h4>Account Number*</h4></label>
                <input className='fp-14' type={'number'}/>
                <input className='fp-15' type={'radio'} name='radio'/>
                <p className='fp-16'>PAN Number</p>
                <input className='fp-17' type={'radio'} name='radio'/>
                <p className='fp-18'>Passport Number</p>
                <input className='fp-19' type={'radio'} name='radio'/>
                <p className='fp-20'>AADHAAR Number</p>
                <input className='fp-21' type={'radio'} name='radio'/>
                <p className='fp-22'>Debit Card Number</p>
                <input className='fp-23'type={'number'}/>
                <label classname='fp-24'><h4>Please enter your new login password</h4></label>
                <input className='fp-25'type={'password'}/>
                <label classname='fp-26'><h4>Re-enter Login Password</h4></label>
                <input className='fp-27' type={'password'}/>
                <button className='fp-28'><Link to={'/login'}>Cancel</Link></button><button className='fp-29'><Link>Submit</Link></button>
            </form>
            <p className='fp-30'>Note:<br/>
1. Corporate customers should enter Date of Incorporation. Retail customers should enter Date of Birth.<br/>
2. Please enter either your PAN/Passport or AADHAAR or Debit Card number with which you have registered in Canara Bank.</p>
            </Paper>
        </div>
    )
}

export default ForgetPassword;