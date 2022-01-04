import React from 'react'
import './style.scss'

import Logo from '../../assets/Fat-Ecommerce.gif'



const Header = () => {
    return (
        <div className='header'>
            <div className="wrap">
                <div className='logo'>
                  <img src={Logo} alt="Fat-Ecommerce"/>
                </div>

            </div>
            
        </div>
    )
}

export default Header
