import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import PermIdentityTwoToneIcon from '@mui/icons-material/PermIdentityTwoTone';
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='fc'>
        <div className='left'>
            <div className='logo'>Rachit's Website</div>
            <div className='desc'> ( COMPANY DESCRIPTION ) </div>
            <div className='sc'>
                <div className='si' color="black">
                    <InstagramIcon/>   
                </div >
                <div className='si' color="#3B5999">
                    <FacebookIcon/>   
                </div>
                <div className='si' color="#55ACEE">
                    <TwitterIcon/>   
                </div>
            </div>
        </div>
        <div className='center'>
            <div className='title'> Useful Links  </div>
            <div className='list'>
                <div className='li'>- Home.</div>
                <div className='li'>- Write a review.</div>
                {/* <div className='li'>- Agencies.</div> */}
                {/* <div className='li'>- Apply For Listing.</div> */}
                {/* <div className='li'>- Products.</div> */}
                {/* <ListItem>- Order Tracking.</ListItem> */}
                <div className='li'>- Terms and Conditions.</div>
            </div>
        </div>
        <div className='right'>
            <div className='title'> Contact </div>
            <div className='ci'>
            <PermIdentityTwoToneIcon style={{marginRight:"10px"}} />
                    Rachit yadav
            </div>
            <div className='ci'>
                <LocalPhoneTwoToneIcon style={{marginRight:"10px"}} />
                    +91xxxxxxxxxx.
            </div >
            <div className='ci'>
                <EmailTwoToneIcon style={{marginRight:"10px"}} />
                    Heyyrachit@gmail.com
            </div>
            {/* <Payment/>  */}
            {/* <TopSlide/> */}
        </div>
    </div>
    </>
  )
}

export default Footer
