"use client";
import { FormLabel } from "@mui/material";
import styles from "./preventivo.module.scss";
import { motion,AnimatePresence } from "framer-motion";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const [isSent, setIsSent] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyD_BIMJ5hNepJLX6tUSckAk_0BLAmzS4Qs",
    authDomain: "ardtest1.firebaseapp.com",
    projectId: "ardtest1",
    storageBucket: "ardtest1.appspot.com",
    messagingSenderId: "696379044850",
    appId: "1:696379044850:web:8ac742f2611daea83bf16b",
    measurementId: "G-HMSLXTGJSJ",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  const db = getFirestore(app);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    // switchSuccess()
    // setIsLoading(true);
    // console.log(data);

    const auth = getAuth();
    signInAnonymously(auth)
      .then(async () => {
        try {
          const docRef = await addDoc(collection(db, "richieste_mail"), {
            nome: data.nome,
            cognome: data.cognome,
            email: data.email,
            azienda: data.azienda,
            richiesta: data.richiesta,
          });

          // setIsLoading(false);
          console.log("Document written with ID: ", docRef.id);
          setIsSent((value)=>!value)
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  return (
    <>
    <AnimatePresence
    mode="popLayout"
    >
      {isSent ? (
        <motion.div 
        key="form_preventivo" 
        className={styles.second_container}
        initial={{ opacity: 0,x:300 }}
        animate={{ opacity: 1,x:0 }}
        exit={{ opacity: 0 }}>
          <p>{`//Grazie del messaggio!`}</p>
          <p>Ti risponderemo il prima possibile</p>

          <div>
            <div>div1</div>
            <div>div2</div>
            <div>div3</div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
        key="success_preventivo" 
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0,x:-300 }}>
          <div>
            <div className={styles.top}>
              <h2>{`//Vuoi lavorare con noi?`}</h2>
              <h2>Conosciamoci meglio!</h2>

              <h2>{`vorrei rinfrescare la mia brand identity/`}</h2>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div className={styles.form_ln}>
                <div className={styles.form_el}>
                  <label>Nome</label>
                  <input className={styles.input} {...register("nome")} />
                </div>

                <div className={styles.form_el}>
                  <label>Cognome</label>
                  <input className={styles.input} {...register("cognome")} />
                </div>
              </div>

              <div className={styles.form_ln}>
                <div className={styles.form_el}>
                  <label>Azienda</label>
                  <input className={styles.input} {...register("azienda")} />
                </div>

                <div className={styles.form_el}>
                  <label>Mail</label>
                  <input
                    className={styles.input}
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Indirizzo email non valido",
                      },
                    })}
                  />
                </div>
              </div>

              <div className={styles.last_inp}>
                <label>{`cos'hai da dirci`}</label>
                <input className={styles.input} {...register("richiesta")} />
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
              {errors.email && <span>{errors.email.message}</span>}

              {/* <input type="submit" /> */}
            </form>
          </div>

          <div onClick={handleSubmit(onSubmit)} style={{ color: "white" }}>
            freccia
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};

export default Page;
