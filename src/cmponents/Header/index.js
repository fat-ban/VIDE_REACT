import React from 'react'
import {Link} from "react-router-dom"

import './style.scss'

import Logo from '../../assets/Fat-Ecommerce.gif'

//import Registration from '../../pages/Registartion'


const Header = () => {
    return (
        <div className='header'>
            <div className="wrap">
                <div className='logo'>
                    <Link to="/">
                      <img src={Logo} alt="Fat-Ecommerce"/>
                    </Link>
                  
                </div>
                <div className='callToActions'>
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Header
