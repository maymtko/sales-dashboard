import React,{ Component } from 'react';


class Header extends Component {
   
render() {
      return (
      <div>
        <div className='header d-flex flex-row'>
          <div className="logo2"><a href="#">Logo</a></div>
            <h6 className="header-title" style={{color:'#ffffff' ,fontSize:'14px'}}>Hello Company Name</h6>         
        </div>

        <div className='header-texts'>
          <h3 style={{fontWeight:' 700',fontSize: '30px',lineHeight: '34px'}}>Summary</h3>
          <h4 style={{fontWeight:' 600',fontSize: '20px',lineHeight: '24px',paddingTop:'8px'}}>How is your business doing?</h4>
        </div>
      </div>      
      );
    }
  }


  export default Header;