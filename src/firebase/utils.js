import firebase from "firebase/app";
import "firebase/firestore"
import 'firebase/auth'
import {firebaseConfig} from './config'

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//connect with google
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(GoogleProvider)

//get data from google connection
export const handleUserProfile = async (userAuth, AdditionalData) =>{
    console.log(userAuth)
    if(!userAuth) return;
    const {uid} =userAuth;
    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()

    if(!snapshot.exists){
        const {displayName,email} = userAuth;
        const timestamp = new Date()
       
        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...AdditionalData
            })
        } catch (error) {
            //console.log(err)
        }
    }
        return userRef
    }