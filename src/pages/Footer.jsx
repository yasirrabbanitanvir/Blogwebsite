import React from 'react';

function Footer() {
    return (
        <> <div className='bg-light p-4'> <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <h3>Newsletter Subscriptions</h3>
            <p className='WidthSmall'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className='col-md-4'>
            <div className='input-group mt-5'>
              <input type="text" className='form-control' placeholder='Enter Your Email'/>
              <span className='input-group-btn'>
                <button className='btn btn-primary' type='button'>
                  <img src="./img/send.svg" alt=""/>
                </button>
              </span>
            </div>
          </div>
        </div>
        </div></div>
            <p className='text-center mt-3'>Copyright all Rights Reserved by Yasir</p>
        
        </>
     
   
  );
}

export default Footer;
