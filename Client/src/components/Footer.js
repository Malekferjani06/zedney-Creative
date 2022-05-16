
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import {  faLocationDot, faMapLocationDot, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logos from '../image/logos.jpg'
function Footer() {
  return (
    <footer className='foot' >
  <div style={{display:'flex',justifyContent:'space-around'}}>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center'}}>
      <div>
  <ul type='none'>
    <li><h4>zedney tunisie</h4></li>
    <li><h6><FontAwesomeIcon icon={faLocationDot }/> 188,Av. 14 Janvier - Bizerte</h6></li>
    <li><h6><FontAwesomeIcon icon={faPhone} />  +216 72 428 365</h6></li>
  </ul>
</div>
<div>
  <ul type='none'>
  
    <li><h4>zedney Arabie Saoudite</h4></li>
    <li><h6><FontAwesomeIcon icon={faLocationDot }/>  Ghirnatah - Riyadh</h6></li>
    <li><h6><FontAwesomeIcon icon={faPhone} />  +96 69 2000 79 50</h6></li>
  </ul>
</div>
<div>
  <ul type='none'>
    <li><h4>zedney France</h4></li>
    <li><h6><FontAwesomeIcon icon={faLocationDot }/>  48,Rue sarrette 75014 - Paris</h6></li>
    <li><h6><FontAwesomeIcon icon={faPhone} />  +33 184 885 593</h6></li>
  </ul>
</div>
</div>

    <img style={{width:'200px',height:'180px'}} src={logos} alt='logo' id='fof'  ></img>


    </div>
<h3 style={{display:'flex',justifyContent:'center'}}>www.zedneycreative.com</h3><FontAwesomeIcon icon={faCopyright} />

    </footer>
  )
}

export default Footer