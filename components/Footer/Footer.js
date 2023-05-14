import React from 'react'
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.marques}`}>{`//BANNER//BANNER//BANNER//BANNER//BANNER//BANNER//BANNER`}</div>
            <div className='h-40 w-full'></div>
        </div>
    )
}

export default Footer