import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Page from './Page';
import Footer from './Footer';



function Home() {
    
    return (

        <>
            <Navbar />
        
        
        
        
     
            
        <div className='container'>
            
            <Carousel />
            <div className='row' >
 <div className='col-md-4'>
   <Card img="./img/Card-1 (1).jpg" title="Card Title-01" p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!" />
 </div>

 <div className='col-md-4'>
   <Card img="./img/Card-1 (2).jpg" title="Card Title-02" p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!" />
 </div>

 <div className='col-md-4'>
   <Card img="./img/Card-1 (8).jpg" title="Card Title-03" p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!" />
 </div>

 <div className='col-md-4'>
   <Card img="./img/Card-1 (1).jpg" title="Card Title-04" p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!" />
 </div>

 <div className='col-md-4'>
   <Card img="./img/Card-1 (2).jpg" title="Card Title-05" p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!" />
 </div>

 <div className='col-md-4'>
   <Card img="./img/Card-1 (8).jpg" title="Card Title-06" p="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!" />
                    </div>

                    <Page />
                 

                    
                  
                </div></div>
                <Footer/>
            
                </>

            
     
    
  );
}

export default Home;
