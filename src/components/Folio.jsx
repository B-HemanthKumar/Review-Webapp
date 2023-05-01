import React, { useState } from 'react'
import "./Folio.css"
import { AllWorks } from '../Data'

const Folio = () => {

    const [work, SetWork] = useState();
  
    return (
    <>
        <div className='container'>
            <button className='button1'>Creative</button>
            <button className='button1'>Email</button>
            <button className='button1'>Landing Page</button>
        </div>

        <div className='wrk'> 
        {
            AllWorks.map
        }
        <div className='image'> </div>

        </div> 


    {/* <div className='container'>
       <div className='services'>
         
           <h2>OUR SERVICES</h2>
            <p className='services-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, dolorem libero. Maxime quaerat modi ipsum ad odio accusantium, rem voluptates sunt fuga eos culpa tempore assumenda ipsa saepe incidunt adipisci.</p>
        
     
           </div>
        <div className='folio'>
         
            <div className='service-card'>
           
            <h3 className='title'>
                Service 1
            </h3>
            
            <p className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum nesciunt aliquid, nemo quia, quas distinctio explicabo temporibus, expedita amet impedit minima voluptatem alias cum eos iste. Eligendi, impedit!
            </p>
            </div>

            <div className='service-card'>
           
           <h3 className='title'>
               Service 2
           </h3>
           
           <p className='desc'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum nesciunt aliquid, nemo quia, quas distinctio explicabo temporibus, expedita amet impedit minima voluptatem alias cum eos iste. Eligendi, impedit!
           </p>
           </div>

           <div className='service-card'>
           
            <h3 className='title'>
                Service 3
            </h3>
            
            <p className='desc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sapiente voluptatum nesciunt aliquid, nemo quia, quas distinctio explicabo temporibus, expedita amet impedit minima voluptatem alias cum eos iste. Eligendi, impedit!
            </p>
            </div>

            </div>
            </div> */}
        </>
  )
}

export default Folio