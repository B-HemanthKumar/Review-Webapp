import React, { useState } from 'react'
import "./Folio.css"
import {  allWorks, reviews } from '../Data'

const Folio = () => {
  const [work, setWork] = useState("creatives");

  return (
    <>
      <div className="container">
        <button className="button1" onClick={() => setWork("creatives")}>
          Creatives
        </button>
        <button className="button1" onClick={() => setWork("emails")}>
          Emails
        </button>
        <button className="button1" onClick={() => setWork("landingPages")}>
          Landing Pages
        </button>
      </div>

      <div className="wrk">
        {allWorks[work].map((d) => (
          <>
          <div className='iwrk'>
            <h3>{d.name}</h3>
            <div className="image">{d.image}</div>
            </div>
          </>
        ))}
      </div>

      <h2> FILTER BY :</h2>
      <div className='fcont'>
        
        <div className='ftext'> Reviews 
            <select>
              <option className='opt' disabled selected> Popularity</option>
              
              <option className='opt'> 1</option>
              
              <option className='opt'> 1</option>
              
              <option className='opt'> 1</option>
              
              <option className='opt'> 1</option>

            </select>
            </div>
<div>

  <div className='ftext'>Rating
            <select>
              <option className='opt' disabled selected> Rating</option>
              
              <option className='opt'> 1</option>
              
              <option className='opt'> 2</option>
              
              <option className='opt'> 3</option>
              
              <option className='opt'> 4</option>

            </select>
          </div> 
          </div>
      </div>
      <div className="reviews">
        {reviews.map((d) => (
          <>
          <div className='rc'>
            
            <h3>{d.name}</h3>
            <p>{d.rating}</p>
            <p>{d.desc}</p>
            </div>
           
          </>
        ))}
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
  );
};

export default Folio;
