import './offer.css';
import {Paper,CardMedia} from '@mui/material';
import { Link } from 'react-router-dom';
import payed from '../assest/payed.jpg';
import gaanaoffer from '../assest/gaana-of.jpg';
import myntraoffer from '../assest/myntraoff.png';
import hotel from '../assest/hotel.png';
import booking from '../assest/booking.png';
import jewellery from '../assest/jewellery.jpg';

const Offer =()=>{
    return(
        <div className='offer'>
            <h3 id='off-h3'>OFFERS</h3>
             <button><Link to={"/"}>Back</Link></button>
             <Paper elevation={10} className='paper'><CardMedia  component="img" image={gaanaoffer} alt=""/>
             <p className='p1-off-1'><h5>Gaana<br/>Get a 3 month Gaana plus subscription at just ₹1/- <br/>using UPI ID linked to RBI<br/>Expires on 31/01/2023</h5></p>
             <button id='off-btn1'><Link>Know More</Link></button></Paper>

             <Paper elevation={10} className='paper1'><CardMedia  component="img" image={payed} alt=""/>
             <p id='off-paper-2'><h5>Payed<br/>Get 100% cashback on your every purchase from<br/>Payed<br/>
             Expires on 31/03/2023</h5></p>
             <button id='off-btn1'><Link>Know More</Link></button></Paper>

             <Paper elevation={10}className='paper2'><CardMedia  component="img" image={booking} alt=""/>
             <p id='off-paper-3'><h5>Booking.com<br/>Up to 10% Cashback at Booking.com<br/>
             Expires on 15/09/2023</h5></p>
             <button id='off-btn1'><Link>Know More</Link></button></Paper>

             <Paper elevation={10} className='paper3'><CardMedia  component="img" image={jewellery} alt=""/>
             <p id='off-paper-4'><h5>Giva Jewellery offer<br/>
             Get flat Rs.300 off on purchase of jewellery worth <br/>Rs.900 from Giva<br/> 
             Expires on 31/01/2023</h5></p>
             <button id='off-btn1'><Link>Know More</Link></button></Paper>

             <Paper elevation={10} className='paper4'><CardMedia  component="img" image={myntraoffer} alt=""/>
             <p id='off-paper-5'><h5>Myntra<br/>Extra 10% off upto rs.500 on min buy of rs.999<br/> on select styles using UPI ID 
             linked to RBI<br/>Expires on 20/02/2023</h5></p>
             <button id='off-btn1'><Link>Know More</Link></button></Paper>

             <Paper elevation={10} className='paper5'><CardMedia component="img" image={hotel} alt=""/>
             <p id='off-paper-6'><h5>Hotels.com<br/>Enjoy 8% off hotels.com<br/>Expires on 31/12/2023</h5></p>
             <button id='off-btn1'><Link>Know More</Link></button></Paper>
        
        </div>
    )
}

export default Offer;