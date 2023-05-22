
import React from 'react'
import styles from "./footer.module.scss"
import ParallaxText from './ParallaxText'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import NewsLetterInput from '../NewsLetterInput/NewsLetterInput';

// import { useForm } from "react-hook-form";

const Footer = () => {
    
    // const onSubmit = data => console.log(data);
    // console.log(watch("example")); // watch input value by passing the name of it


    return (
        <div className={styles.container}>
            <ParallaxText />
            <Grid className={styles.body} container spacing={2}>
                <Grid height={"100%"} xs={3}>
                    <Container className={styles.one}>
                        <p className={styles.titolo}>Contatti</p>
                        <span>
                            <p>{`(+39)300 033 0003`}</p>
                            <p>{`(+39)300 033 4441`}</p>
                        </span>
                        <p>ardente.studio@gmail.com</p>
                    </Container>
                </Grid>
                <Grid xs={3}>
                    <Container style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
                        <p>{`CHE-400.347.843`}</p>
                        <div className={styles.privacy_cookie}>
                            <p>Privacy</p>
                            {/* <p>Cookies</p> */}
                        </div>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ardentestudio/">
                            <Image alt='icona ig' width={50} height={50} src="/images/ig.png"/>
                            {/* inserire icone */}
                        </a>
                    </Container>
                </Grid>
                <Grid xs={3}>
                    <Container className={styles.newsletter}>
                        <NewsLetterInput/>
                        {/* <p>Iscriviti alla nostra newsletter non perderti tutte le novità.</p>



                        <input className={styles.input} type="email" placeholder='email address' />
                        <button className={styles.button}>Subscribe</button> */}
                    </Container>
                </Grid>


                <Image xs={3} alt="logo" className={styles.logo} src="/images/ard_2023_footer.png" width={500} height={500} />


            </Grid>
        </div>
    )
}

export default Footer