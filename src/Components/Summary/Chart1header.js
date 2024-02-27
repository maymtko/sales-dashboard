import React from 'react';
import '../../Styles/App.css';

class Chart1header extends React.Component {
    constructor(props) {
      super(props);

    }

render() {
       
      return (
          
        // style={{fontSize:'18px',fontWeight:'bold',marginBottom:'0px'}}
      <div className='chartheader container' >
          <div className='smt'>
              <div>
              <p className='chartheader-title' >40.51M</p> 
              <p className='chartheader-sub' style={{paddingLeft:'10px'}}>GMV$</p>
              </div>

              <div>
              <p className='chartheader-title' >-100.00%</p> 
              <p className='chartheader-sub' style={{paddingLeft:'10px'}}>vs Last Month</p>

                  </div>
                  <div>
                  <p className='chartheader-title'>1.23M</p> 
              <p className='chartheader-sub' style={{paddingLeft:'4px'}}>No of Order</p>

              </div>
              <div>
              <p className='chartheader-title' >-100.00%</p> 
              <p className='chartheader-sub' style={{paddingLeft:'10px'}}>vs Last Month</p>

                  </div>
                  <div>
                  <p className='chartheader-title'>32.97</p> 
              <p className='chartheader-sub' style={{paddingLeft:'10px'}}>AOV($)</p>
             

              </div>
              <div>
              <p className='chartheader-title' >-100.00%</p> 
              <p className='chartheader-sub' style={{paddingLeft:'10px'}}>vs Last Month</p>
            

                  </div>

                 
          </div>
          <div className='hr-line'>
          <hr className='hr-l1'></hr> 
          <hr className='hr-l1'></hr> 
          <hr className='hr-l2'></hr> 
          <hr className='hr-l2'></hr> 
          <hr className='hr-l3'></hr> 
          <hr className='hr-l3'></hr> 
          </div>
          
          



</div>

        
          
      
          
      );
    }
  }


  export default Chart1header;