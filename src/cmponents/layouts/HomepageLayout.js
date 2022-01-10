import React from "react"
import Header from '../Header'
import Footer from "../Footer"

const HomePageLayout=(props)=>{
    //console.log(props.children)
 return(
     <div className="fullHeight">
         <Header/>
         {props.children}
        
         <Footer/>
     </div>
 )
}

export default HomePageLayout