import React from 'react'
import logos from '../image/logos.jpg'
import {HashLink as Link} from 'react-router-hash-link'


function Navigation() {
  return (
    <div>
        
        <header className="header sticky-top">
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
            <div className="container">
                <a href='/'><img style={{width:'100px',height:'80px'}} src={logos}  ></img></a><br/>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex',justifyContent:'space-between'}} >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="/">Home </a></li>
                  <li className="nav-item"><a className="nav-link" href="/Apropos">A Propos</a></li>
                  <li className="nav-item"><a className="nav-link" href="/contacts-Us">Contacts-Us</a></li>
                  <li className="nav-item"><a className="nav-link" href="/#contacts">Contacts</a></li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </header>
       
        {/* Demo content*/}
        
      </div>
  )
}

export default Navigation



