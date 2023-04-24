import './loan.css';
import {Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import Person2Icon from '@mui/icons-material/Person2';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CarRentalIcon from '@mui/icons-material/CarRental';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Loan =()=>{
    return(
        <div className='loan'>
            <h3 id='loan111-h3'>LOAN</h3>
            <button><Link to={"/"}>Back</Link></button>
             <Paper elevation={10} className='paper'/>
             <Paper elevation={10} className='paper1'/>
             <Paper elevation={10}className='paper2'/>
             <Paper elevation={10} className='paper3'/>
             <Paper elevation={10} className='paper4'/>
             <Paper elevation={10} className='paper5'/>
             <Paper elevation={10} className='paper6'/>
            <h4 className='bx1-4'>Home Loan</h4>
            <HomeIcon className='home'/>
            <p className='p-1'><h5>	➢RBI Home Loan<br/>
            ➢RBI Home Loan Advantage<br/>
            ➢RBI Pre approved Home Loan</h5></p>
            <h4 className='bx2-4'>Education Loan</h4>
            <SchoolIcon className='school'/>
            <p className='p-2'><h5>➢RBI Vidya (for school education from <br/>Nursery to XII)<br/>
            ➢RBI Scholar (for study abroad)<br/>
            ➢RBI Education Loan to students of premier<br/> Institutions Individuals 
between 21 and <br/>60 years of age</h5></p>
            <h4 className='bx3-4'>Personal Loan</h4>
            <Person2Icon className='person'/>
            <p className='p-3'><h5>➢RBI Personal Loan<br/>
            ➢RBI Personal Loan COVID 19<br/>
            ➢Pre approved Personal Loan<br/> Individuals 
between 21 and 60 years of age</h5></p>
            <h4 className='bx4-4'>Fintech Loan</h4>
            <PhonelinkIcon className='fintech'/>
            <p className='p-4'><h5>➢Pre approved Micro PL<br/>
            ➢RBI Overdraft for E-commerce Business<br/> (Amazon/Flipkart) Individuals 
between 21 and<br/> 60 years of age</h5></p>
            <h4 className='bx5-4'>Gold Loan</h4>
            <MonetizationOnIcon className='gold'/>
            <p className='p-5'><h5>➢Agri Gold Loan<br/>
            ➢Retail Gold Loan</h5></p>
            <h4 className='bx6-4'>Vehile Loan</h4>
            <CarRentalIcon className='car'/>
            <p className='p-6'><h5> ➢RBI Digital Car Loan<br/>
            ➢RBI Auto Loan for Pre-owned Car<br/>
            ➢RBI Car Loan<br/>
            ➢RBI Two Wheeler Loan</h5></p>
            <h4 className='bx7-4'>Yoddha Loan</h4>
            <MenuBookIcon className='yoddha'/>
            <p className='p-7'><h5>➢Baroda Yoddha Home Loan<br/>
            ➢RBI Yoddha Auto Loan<br/>
            ➢RBI Yoddha Two-Wheeler Loan<br/>
            ➢RBI Yoddha Loan to Defence Pensioners<br/>
            ➢RBI Yoddha Education Loans</h5></p>
            <button className='bx-btn1'>More Information</button>
            <button className='bx-btn2'>More Information</button>
            <button className='bx-btn3'>More Information</button>
            <button className='bx-btn4'>More Information</button>
            <button className='bx-btn5'>More Information</button>
            <button className='bx-btn6'>More Information</button>
            <button className='bx-btn7'>More Information</button>

        </div>
    )
}

export default Loan;