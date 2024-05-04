import React from 'react';
import './indroduction.css'
import Profilepicture from '../../assets/IMG-20230904-WA0027.jpg'

const Indroduction = () => {
  return (
    <div className='main-conatiner1'> 
         
         <div className="item1">
             <img src={Profilepicture}  alt="" srcset=""  className='image1 p-5'/>
             <h1>
              (Web && mobile developer)
             </h1>
         </div>
         <div className="item"   style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1 style={{color:'white'}}>
              I'm sathis <br />
              Software Engineer  
              undergraduate. 
            </h1>

            <h3  style={{color:'white'}}>
            learned lot of technologies base on Web devolopment, <br />
             Mobile devolopment,Data science and Artificial interlegent
            </h3>

            <button className='btn btn-success' >Hire Me</button>
        </div>
         
    </div>
  )
}

export default Indroduction

 
 