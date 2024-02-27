import React,{ Component } from 'react';
import { Button } from '@mui/material';

class Navbar extends Component {

render() {
       
      return ( 
			<nav>
			  <div className="logo1"><a href="#">Logo</a></div>
               <div className='navtitles'>    
            	<h6 className="navbar-brand na-title" href="#" style={{fontSize:'14px',color:'#fff'}}>Partner Portal | Company Name </h6>
                <h6 className="navbar-brand na-subtitle" href="#" style={{fontSize:'10px',color:'#fff'}}>Partner Portal Dashboard</h6>
               </div>
				<ul className="navi-bar">
					<Button className='text-white'>Notification</Button>
					<Button className='text-white'>Profile</Button>		
                    <Button className='text-white'>Contact Us</Button>
				</ul>
				<div className="burger">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>        
      );
    }
  }


  export default Navbar;



