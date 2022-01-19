import React, { useState } from 'react'
import { auth,handleUserProfile} from "./../../firebase/utils"
import { withRouter } from 'react-router-dom'
import './styles.scss'

import FormInput from '../forms/FormInput'
import Button from '../forms/Button'
import AuthWrapper from '../AithWrapper'
//import { auth } from 'firebase'




const Signup = props => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')
    const [displayName, setDisplayName] = useState('')  
    const [errors, setErrors] = useState([])
    
    const resetForm = ()=>{
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setDisplayName('')
      setErrors([])

    }

    const handleFormSubmit= async e=>{
       e.preventDefault()
       
       if(password !== confirmPassword){
           const err = ['Password Don\'t match']
            
             setErrors(err);
           return;
        }
        
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email,password)
        await handleUserProfile(user,{displayName})
        //console.log(`user${user.displayName}`)
        
        resetForm();
        props.history.push('/')

    } catch (error) {
        //console.log(error)
    }

    }

   
        //const{displayName,email,password,confirmPassword, errors} = this.state
        const configAuthWrapper = {
            headline : 'Registration'
        }
        return (
            <AuthWrapper {...configAuthWrapper}>
                   

                 <div className="formWrap" >

                 {errors.length > 0 && (
                       <ul>
                       {errors.map((err,index)=>{
                       return(
                          
                               <li key={index}>
                                   {err}
                               </li>
                           
                       )
                       
                   }) }
                   </ul>
                   )}

                   <form onSubmit={handleFormSubmit}>
                       
                     <FormInput
                      type="text"
                      name="displayName"
                      value={displayName}
                      placeholder="Full name" 
                      handleChange={e =>setDisplayName(e.target.value)}
                     />

                    <FormInput
                      type="email"
                      name="email"
                      value={email}
                      placeholder="email" 
                      handleChange={e=>{setEmail(e.target.value)}}
                     />

                    <FormInput
                      type="password"
                      name="password"
                      value={password}
                      placeholder="PassWord" 
                      handleChange={e=>setPassword(e.target.value)}
                     />

                    <FormInput
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="Confirm PassWord" 
                      onChange={e=>{setConfirmPassword(e.target.value)}}
                     />

                     <Button type="submit">
                         Register
                     </Button>
                   </form>
                   </div>
                
                
            </AuthWrapper>
        )
    }



export default  withRouter(Signup)