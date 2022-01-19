import React,{useState} from 'react'
import { Link,withRouter } from 'react-router-dom'

import './styles.scss'
import Button from '../forms/Button'

import {signInWithGoogle, auth} from './../../firebase/utils'

import AuthWrapper from '../AithWrapper'
import FormInput from '../forms/FormInput'



const SignIn = props => {
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     
     //reset Email and Password
     const resetForm = () =>{
        setEmail('')
        setPassword('')
     }
    
    const handleSubmit= async e => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword( email, password)
            
            resetForm();

            props.history.push('/')

        } catch (error) {
            console.log(error)
        }
    }

    
 
        
        
        const configAuthWrapper ={
            headline:'logIn'
        }

        return (
           <AuthWrapper {...configAuthWrapper}>
                <div className='formWrap'>
                    <form onSubmit={handleSubmit}>
                        <FormInput
                         type='email'
                         value={email}
                         name="email"
                         placeholder='email'
                         handleChange={(e)=> setEmail(e.target.value)} 
                        />
                        <FormInput
                         type='password'
                         value={password}
                         name="password"
                         placeholder='password'
                         handleChange={(e)=>setPassword(e.target.value)}
                        />
                        <Button type='submit'>
                            Login
                        </Button>

                        <div className='socialSignin'>
                            <div className='row'>
                                <Button onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Button>
    
                            </div>
                        </div>

                        <div className='links'>
                            <Link to="/recovery">
                                Reset Password
                            </Link>

                        </div>
                    
                    </form>  
                </div>
               
           
            </AuthWrapper>
        )
    }
    


export default withRouter(SignIn)
