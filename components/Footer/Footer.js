import React from 'react'
import styles from "./footer.module.scss"
import ParallaxText from './ParallaxText'

const Footer = () => {
    return (
        <div className={styles.container}>
            <ParallaxText>
                ciao
            </ParallaxText>
            {/* <div className={`${styles.marques}`}>{`//BANNER//BANNER//BANNER//BANNER//BANNER//BANNER//BANNER`}</div> */}
            <div className={styles.body}></div>
        </div>
    )
}

export default Footer