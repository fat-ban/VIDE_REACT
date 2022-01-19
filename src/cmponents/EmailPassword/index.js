import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.scss'

import { withRouter } from 'react-router-dom'

import AuthWrapper from '../AithWrapper'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'

import {auth} from './../../firebase/utils'



const EmailPassword = props => {
   
    const [email, setEmail] = useState("")
    const [errorMsg, setErrorMsg] = useState([])
    
    const history =useHistory()
   
    const handleSubmit =async (e)=>{
        e.preventDefault()

        try {
            
            const config = {
                url:'http://localhost:3000/login'
            }

             await auth.sendPasswordResetEmail(email,config)
             .then(()=> {
                 console.log('Password Reset')
                 history.push('/login')
             })
             .catch(()=>{
                 const err = ['Email not found. Please try again.']
                 //console.log('Something went wrong')
                 setErrorMsg(err)
             })
        } catch (error) {
            //console.log(error)
        }
    }

  
     
        const configAuthWrapper ={
            headline:'Email Password'
        }
        return (
            <AuthWrapper {...configAuthWrapper}>
                {errorMsg.length > 0 && (
                 <ul>
                     {errorMsg.map((err, index)=>{
                         return(
                             <li key={index}>
                                {err}
                             </li>
                         )
                     })}
                 </ul>
                )
                }

               <div className='formWrap'>
                   <form onSubmit={handleSubmit}>
                    <FormInput
                     type ="email"
                     name="email"
                     value={email}
                     placeholder="Email"
                     handleChange={e=>{setEmail(e.target.value)}}
                    />
                    <Button type='submit'>
                        Email Password
                    </Button>
                   </form>
               </div> 
            </AuthWrapper>
        )
    }

//withRouter redirection with history
export default  withRouter(EmailPassword) 