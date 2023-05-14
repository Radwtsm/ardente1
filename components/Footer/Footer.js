import React from 'react'
import styles from "./footer.module.scss"
import ParallaxText from './ParallaxText'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';
import Image from 'next/image';

const Footer = () => {
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
                    <Container>
                        <p>{`CHE-400.347.843`}</p>
                        <div className={styles.privacy_cookie}>
                            <p>Privacy</p>
                            <p>Cookies</p>
                        </div>
                        <div>
                            {/* inserire icone */}
                        </div>
                    </Container>
                </Grid>
                <Grid xs={3}>
                    <Container>
                        <span>
                            <p>Iscriviti alla nostra newsletter</p>
                            <p>per non perderti tutte le novità.</p>
                        </span>

                        <input type="text" placeholder='email address' />
                        <button>Subscribe</button>
                    </Container>
                </Grid>


                <Image xs={3} alt="logo" className={styles.logo} src="/images/ard_2023_footer.png" width={500} height={500} />


            </Grid>
        </div>
    )
}

export default Footer