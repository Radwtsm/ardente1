'use client'

import styles from './home.module.scss'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { isProject, isDefault } from '../components/Cursor/cursorSlice'

import { motion } from 'framer-motion';

export default function Home() {

  const dispatch = useDispatch()

  return (
    <Grid margin={0} marginTop={2} className={styles.main_container} container spacing={2} padding={0} onMouseEnter={() => dispatch(isProject())} onMouseLeave={() => dispatch(isDefault())}>

      <Grid className={styles.first} paddingLeft={0} xs={6} gap={2}>
        <Container className={styles.first_one}><motion.div className={styles.overlay} initial={{ opacity: 0 }} transition={{ duration: 0.2 }} whileHover={{ opacity: 1, backgroundColor: 'orange' }}><motion.p className={styles.overlay_text}>TEST1</motion.p></motion.div></Container>
        <Container className={styles.first_two}></Container>

        {/* <div >1</div>
          <div className={styles.first_two}>2</div> */}
      </Grid>
      <Grid className={styles.second} xs={3} gap={2}>
        <Container className={styles.second_one}></Container>
        <Container className={styles.second_two}></Container>
      </Grid>
      <Grid className={styles.third} paddingRight={0} xs={3}>
        <Container className={styles.third_one}></Container>
      </Grid>


    </Grid>
  )
}
