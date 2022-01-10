import React from 'react'

import "./style.scss";

//import imgLogo from "./../../assets/Fat-Ecommerce.gif"
import shopMens from './../../assets/shopMens.png';
import shopWomens from './../../assets/shopWomens.jpg';


const Directory = (props) => {
    return (
        <div className='directory'>
            <div className='wrap'>
                <div
                className='item'
               // style={{
                    //backgroundImage:`url(${shopWomens})`
                   
                    //, width:"20%"
                   
                    
               // }}
                >
                   
                  <img src={shopWomens} alt="Fat-Ecommerce"/>
                  <a>Shop Womens</a>
                </div>
            
            <div
                className='item'
                //style={{
                    //backgroundImage:`url(${shopMens})`
                    //,width:"20%"
                //}}
                >
                 <img src={shopMens} alt="Fat-Ecommerce"/>
                   <a>Shop Mens</a>
                </div>
                </div>
            
        </div>
    )
}

export default Directory
