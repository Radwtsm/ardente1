'use client'

import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import styles from './NewsLetterInput.module.scss'



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import CircularProgress from '@mui/material/CircularProgress';



// import { google } from 'googleapis';


const NewsLetterInput = () => {

  const [success,setSuccess] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const switchSuccess = () => {
    setTimeout(() => {
      setSuccess(true)
    }, 7000);
    setSuccess(false)
  }

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_BIMJ5hNepJLX6tUSckAk_0BLAmzS4Qs",
  authDomain: "ardtest1.firebaseapp.com",
  projectId: "ardtest1",
  storageBucket: "ardtest1.appspot.com",
  messagingSenderId: "696379044850",
  appId: "1:696379044850:web:8ac742f2611daea83bf16b",
  measurementId: "G-HMSLXTGJSJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)

console.log(app,db)


  
  // const auth = new google.auth.GoogleAuth({
  //   credentials:{
  //     client_email:process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //     private_key:process.env.GOOGLE_PRIVATE_KEY,
  //   },
  //   scopes: {

  //   },
  // })
  // const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  // console.log

  // console.log(process.env.GOOGLE_PRIVATE_KEY)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    setIsLoading(true);
    // console.log(data);

    const auth = getAuth();
signInAnonymously(auth)
  .then(async () => {
    try {
      const docRef = await addDoc(collection(db, "newsletter_list"), {
        email:data.email
      });
    
      console.log("Document written with ID: ", docRef.id);
      setIsLoading(false);
      switchSuccess()
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

  
    
  }

  // console.log(watch("email")); // watch input value by passing the name of it

  return (
    <>
    <p>Iscriviti alla nostra newsletter non perderti tutte le novità.</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {success && <div style={{color:'green'}}>successo!</div>}
      {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      {isLoading && <CircularProgress color="secondary" /> }
      <input placeholder='email address' className={styles.input} {...register("email",{required:true,pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',}})} disabled={isLoading}/> 
      <input className={styles.button} value="Subscribe" type="submit" disabled={isLoading}/>
    </form>



       </>
  )
}

export default NewsLetterInput