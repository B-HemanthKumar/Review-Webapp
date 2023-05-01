import React from 'react'
import "./Company.css"

const Company = () => {
  return (
    <>
        <div className='cont'>
            <div className='img-cont'>
                <img src='Assests/1.jpg' alt=''/>
            </div>

            <div className='txt-cont'>
                <div className='nl'>
                    <span>  [COMPANY NAME]  </span>
                    <span> [COMPANY LOGO]  </span>
                </div>
                <span>Hey Peeps.....Welcome HOME! , Have An Amaizng Day Ahead. <br></br> [COMPANY DESCRIPTION] <br></br> we are an review company. <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fuga quis enim repellendus similique eius, incidunt magnam assumenda corporis ut laudantium consectetur non obcaecati ratione alias reprehenderit mollitia impedit eum!</span>
                <button className='cta-button'> CTA ( Join Us Now, Explore Us )</button>
            </div>
            </div>
    </>
  )
}

export default Company