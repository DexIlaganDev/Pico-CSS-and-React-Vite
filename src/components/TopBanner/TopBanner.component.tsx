import React from 'react'

import { BiSolidPhoneCall } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import TopBannerIconText from './TopBannerIconText';


const TopBanner = () => {
  return (
    <div className='topBanner'>
        <div className="container topBanner__container">

          <div>
              <div>
                
              </div>

              <TopBannerIconText 
                icon={<BiSolidPhoneCall /> }
                text={ <div style={styles.fs}>We're here for you <strong>24/7</strong> &nbsp; including weekends and holidays: <strong>888-888-4444</strong></div> }
              />
          </div>
            

            <div className='topBanner__right'>
              <TopBannerIconText 
                icon={<MdEmail /> }
                text={<div style={styles.fs}>test@gmail.com</div>}
              />
            </div>


        </div>
    </div>
    
  )
}

export default TopBanner

const styles = {
  fs : {
    fontSize : '12px'
  }
}