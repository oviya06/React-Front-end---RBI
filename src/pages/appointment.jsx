import './appointment.css';
import enj from '../assest/enjoy.webp';
import talk from '../assest/talk.webp';
import discover from '../assest/discover.webp';
import plan from '../assest/plan.webp';
import { Link } from 'react-router-dom';
import {CardMedia,Paper} from '@mui/material';

const Appointment=()=>{
    return(
       <div className='appointment-all'>
        <button className='app-key-button'><Link to={"/"}>Back</Link></button>
        <CardMedia className='app-card' component="img" image={enj} alt="logo"/>
        <p id='app-key-head'>What is a Key Financial Wellness ?</p>
        <p id='app-key-defn'>With a better understanding of your financial life, it's easier to enjoy what you love in life.</p> 
        <p>.</p>
        <p>.</p>
        <div className='appointment-all2'>
           <p id='app-key-quto'>We know talking about money can be tough,so we’re  <br/>ready with simple questions, straightforward<br/> ideas and zero judgment. <br/>Wherever you are on your financial path,
           <br/> we can point you in the right direction.</p>
           <p id='app-key-expect'>What to Expect</p>
           <p id='app-expect-sub'>In just 30 minutes, an experienced banker will help you see where your finances stand and show you how to reach your 
            financial goals <br/>– whether they include buying a bike, a house or just feeling more in control of your money.</p>
            <CardMedia className='app-card-talk' component="img" image={talk} alt="logo"/>
            <p id='app-t-talk'>Talk</p>
            <p id='app-talk-defn'>We’ll talk where you are with your finances right now.</p>
            <CardMedia className='app-card-discover' component="img" image={discover} alt="logo"/>
            <p id='app-t-discover'>Discover</p>
            <p id='app-discover-defn'>We’ll discuss your short- and long-term financial goals.</p>
            <CardMedia className='app-card-plan' component="img" image={plan} alt="logo"/>
            <p id='app-t-plan'>Plan</p>
            <p id='app-plan-defn'>We’ll create a personalized, comprehensive plan to reach <br/>your goals.</p>
            
            <Paper className='app-paper-1'><p id='app-pap-head'>Schedule Your Key Financial Wellness Today</p>
            <p id='app-pap-defn'>Select a date and time to schedule an in-person review.</p>
            <button id='app-pap-butt'><Link to={"/schedule"}>Schedule your in-person review</Link></button></Paper>
        </div>
       </div>
    )
}

export default Appointment;