import './desk.css';
import {Toolbar,AppBar,Typography,Box,Button,Paper,CardMedia} from '@mui/material';
import logo from '../assest/ban.png';
import open from '../assest/open.jpg';
import ll from '../assest/ppl.jpg';
import goal from '../assest/goals.jpg';
import offer from '../assest/r-offer.jpg';
import gaana from '../assest/gaana.jpg';
import secure from '../assest/secr.webp';
import loan from '../assest/ed-loan.jpg';
import mytra from '../assest/mytra.jpg';
import ropen from '../assest/r-open.jpg';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


const Desk =()=>{
    return(
        <div className='whole'>
            <div className='bar'>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar  position="static" style={{backgroundColor:"rgb(86, 81, 81)"}} >
                        <Toolbar>
                        <CardMedia className='card' component="img" image={logo} alt="logo"/>
                        <Typography className='typo' variant="h6" sx={{ flexGrow: 1 }}>RANJI BANK OF INDIA</Typography>
                        <Button color="inherit" href='#contact'>about</Button>
                        <Button color="inherit" href='#contact'>Contact us</Button>
                        <Button color="inherit"><Link to={'/login'}>Net Banking</Link></Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <div><CallIcon className='call'/></div>
            <p className='para'>National Helpline No <br/>1800 425 00 000</p>
            <CardMedia className='secu' component="img" image={secure} alt="logo"/>
            <h1 className='rh-1'>SECURE</h1>
            <div class='slider'>
                <div class='slides'>
                    <input id="radio1" type="radio" name="radio-btn"/>
                    <input id="radio2" type="radio" name="radio-btn"/>
                    <input id="radio3" type="radio" name="radio-btn"/>
                    <input id="radio4" type="radio" name="radio-btn"/>

                    <div class="slide first">
                        <img src={open} alt=""/>
                    </div>
                    <div class="slide first">
                        <img src={gaana} alt=""/>
                    </div>
                    <div class="slide first">
                        <img src={loan} alt=""/>
                    </div>
                    <div class="slide first">
                        <img src={mytra} alt=""/>
                    </div>

                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                </div>

                <div class="navigation-manual">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                    <label for="radio3" class="manual-btn"></label>
                    <label for="radio4" class="manual-btn"></label>

                </div>

            </div>
            <div>
                <Paper elevation={10} style={{backgroundColor:"rgb(184, 170, 170)"}} className='pap-1'>
                <CardMedia className='img-1' component="img" image={ropen} alt=""/>
                <h6 className='rh-6'><Link to={'/login'}>OPEN AN ACCOUNT</Link></h6>
                <Link to={'/login'}><ArrowForwardIcon className='arrow-1'/></Link>
                <p className='rp-1'>A healthy banking system is one of <br/>the vital parts of a nation’s foundation.</p>
                </Paper>
                <Paper elevation={10} style={{backgroundColor:"rgb(184, 170, 170)"}} className='pap-2'>
                <CardMedia className='img-1' component="img" image={goal} alt=""/>
                <h6 className='rh-6'><Link to={"/appoint"}>KEY FINANCIAL WELLNESS</Link></h6>
                <Link><ArrowForwardIcon className='arrow-2'/></Link>
                <p className='rp-1'>yep, you have a banker now.<br/>Tell us your money goals and we will help you reach them.</p>
                </Paper>
                <Paper elevation={10} style={{backgroundColor:"rgb(184, 170, 170)"}} className='pap-3'>
                <CardMedia className='img-1' component="img" image={ll} alt=""/>
                <h6 className='rh-6'><Link to={'/loan'}>LOAN</Link></h6>
                <Link to={'/loan'}><ArrowForwardIcon className='arrow-3'/></Link>
                <p className='rp-1'>A bank is a place that will lend you money, if you can prove that you don’t need it.</p>
                </Paper>
                <Paper elevation={10} style={{backgroundColor:"rgb(184, 170, 170)"}} className='pap-4'>
                <CardMedia className='img-1' component="img" image={offer} alt=""/>
                <h6 className='rh-6'><Link to={"/offer"}>OFFER</Link></h6>
                <Link><ArrowForwardIcon className='arrow-4'/></Link>
                <p className='rp-1'> Net Banking instantly unlocks a better lifestyle anytime and anywhere.</p>
                </Paper>
            </div>
            <Paper elevation={10}  style={{backgroundColor:"rgb(86, 81, 81)"}} className='b-p'>
                <p  id="contact" className='footer-call'>
                    <PermPhoneMsgIcon/>
                <h4>Call Us</h4>
                <h5>1-800-539-2968</h5>
                <h5>Clients using a relay service:</h5>
                1-866-821-9126<br/><br/>
               
                
            
                </p>
                <p  id="contact" className='footer-schedule'>
                <EventAvailableIcon/>
                <h4>Schedule an Appointment</h4>
                Talk to a Branch Manager in your neighborhood.<br/><Link to={"/schedule"}>Schedule an appointment now</Link>
                </p>
                <p className='footer-location'>

                <LocationOnIcon/>
                <h4>Find a Branch or ATM</h4>
                <form>
                    <input type="number"placeholder="e.g.44114"  name="number"/>
                    <button>Go</button>
                </form>
                </p>
                <div class="vl"></div>
                <div class="vl1"></div>
                <hr width="1350" className='footer-line'/>
                <h5 className='footer-privacy'>User Agreement  |  Online Privacy Statement  |  Your privacy and security<br/>©2022 RBI® All Rights Reserved.</h5>
                <WhatsAppIcon className='ic' style={{color:"white"}}/>
                <LinkedInIcon style={{color:"white"}}/>
                <InstagramIcon style={{color:"white"}}/>
                <YouTubeIcon style={{color:"white"}}/>
                <TwitterIcon style={{color:"white"}}/>
            </Paper>
        </div>
    )
}

export default Desk;