import './login.css';
import logo from '../assest/ban.png';
import { Link } from 'react-router-dom';
import { CardMedia } from '@mui/material';

const Login  = () => {
    return(
        <div className="login-form-container">
            <CardMedia className='login-card' component="img" image={logo} alt="logo"/>
            <h2 id="wel">WELCOME TO RBI</h2>
            <h6 id="sub">Login to access your RBI account</h6>
            <h3 id="lol">Login</h3>
            <form className="login-form">
                <label  className='lab' for="user">User ID:</label>
                <input  className='in' placeholder="Enter user ID" id="user" />
                <label  className='lab'for="password">Password:</label>
                <input  className='in'type="password"placeholder="************" id="password" name="password"/>
            <br/>
                <button className='login-button' type="submit">Log In</button>
            <br/>
            </form>
            <div className='login-forgot'>Forget</div>
            <div className='login-fuser'><Link to={'/forgotu'}>- My Username</Link></div>
            <div className='login-fuser'><Link to={'/forgotp'}>- My Password</Link></div>
            <div className='login-enroll'><Link to={'/newuser'}>New User Registration</Link></div>
        </div>
    )
}

export default Login;