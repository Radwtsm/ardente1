import React, { useState } from 'react'
import { Container } from '@mui/material'
import { motion } from 'framer-motion'
import styles from './Block.module.scss'

const Block = (props) => {
    const {bg,overlay,text,height} = props
    const [IsHovering,setIsHovering] = useState(false);

  return (

<Container
 disableGutters={true}
 onMouseEnter={()=>setIsHovering(true)} 
 onMouseLeave={()=>{setIsHovering(false)}} 
 style={{backgroundColor:bg,height:height}}
 className={styles.container}>
        <motion.div className={styles.overlay} initial={{ opacity: 0,x:300 }} transition={{ duration: 0.3, }} animate={{ opacity: IsHovering ? 1 : 0, backgroundColor: overlay ,x:IsHovering ? 0 : 300}} >
          <motion.p className={styles.overlay_text}>{text}</motion.p>
          </motion.div>
        </Container>
    )
}

export default Block