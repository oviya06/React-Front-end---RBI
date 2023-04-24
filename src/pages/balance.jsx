import './balance.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Balance = () =>{
    return(
        <div className='balance'>
            <Link to="/desk"><ArrowBackIcon  className='bal-arrow'/></Link>
            <h2><u>Check Balance</u></h2>
            <br/>
            <h3>Saving account</h3>
            <h5>RBI</h5>
            <br/>
            <h3>Account balance</h3>
            <h5>₹5000.0/-</h5>
        </div>
    )
} 

export default Balance;