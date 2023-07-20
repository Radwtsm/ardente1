
import React from 'react'
import styles from "./footer.module.scss"
import ParallaxText from './ParallaxText'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import NewsLetterInput from '../NewsLetterInput/NewsLetterInput';



const Footer = () => {



    return (
        <div className='mt-3'>
            <ParallaxText />
                <div className="flex flex-col gap-7 my-6 ml-2">
                <div style={{color:'white'}} className={styles.one}>
                    <p className={styles.titolo}>Contatti</p>
                    <span>
                        <p>{`(+39)300 033 0003`}</p>
                        <p>{`(+39)300 033 4441`}</p>
                    </span>
                    <p>ardente.studio@gmail.com</p>
                </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', color: 'white' }}>
                <div>
                    <p>{`CHE-400.347.843`}</p>
                    <div className={styles.privacy_cookie}>
                        <p>Privacy</p>

                    </div>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ardentestudio/">
                    <Image alt='icona ig' width={50} height={50} src="/images/ig.png" />

                </a>
            </div>
            <div style={{ color: 'white' }} className={styles.newsletter}>
                <NewsLetterInput />
            </div>
            </div>
        </div>
        // <div className={styles.container}>
        //     <ParallaxText />
        //     <Grid className={styles.body} container spacing={2}>
        //         <div className='d-flex flex-col'>
        //         <Grid height={"100%"} xs={3}>
        //             <Container className={styles.one}>
        //                 <p className={styles.titolo}>Contatti</p>
        //                 <span>
        //                     <p>{`(+39)300 033 0003`}</p>
        //                     <p>{`(+39)300 033 4441`}</p>
        //                 </span>
        //                 <p>ardente.studio@gmail.com</p>
        //             </Container>
        //         </Grid>
        //         <Grid xs={3}>
        //             <Container style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
        //                 <div>
        //                 <p>{`CHE-400.347.843`}</p>
        //                 <div className={styles.privacy_cookie}>
        //                     <p>Privacy</p>

        //                 </div>
        //                 </div>
        //                 <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ardentestudio/">
        //                     <Image alt='icona ig' width={50} height={50} src="/images/ig.png"/>

        //                 </a>
        //             </Container>
        //         </Grid>
        //         <Grid xs={3}>
        //             <Container className={styles.newsletter}>
        //                 <NewsLetterInput/>
        //             </Container>
        //         </Grid>
        //         </div>

        //         <Image xs={3} alt="logo" className={styles.logo} src="/images/ard_2023_footer.png" width={500} height={500} />


        //     </Grid>
        // </div>
    )
}

export default Footer