'use client'

import styles from './home.module.scss'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { isProject, isDefault } from '../components/Cursor/cursorSlice'

import { motion } from 'framer-motion';
import { useState } from 'react';
import Block from '@/components/Block/Block';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Second from "../components/Second/Second"

const First = () => {
  return (      
  <div className={styles.first}>
    <div className={styles.first_one}>1</div>
    <div className={styles.first_two}>2</div>
    <div className={styles.first_three}>3</div>
  </div>);
}

const Third = () => {
  return(
    <div className={styles.third}>
    <div className={styles.third_one}>3_1</div>
    <div className={styles.third_two}>
      <div className={styles.third_two_one}>3_2_1</div>
      <div className={styles.third_two_two}>3_2_2</div>
    </div>
    <div className={styles.third_three}>3_3</div>
  </div>
  );
}

export default function Home() {
  const matches_sm = useMediaQuery('(min-width:600px)');

  // const dispatch = useDispatch()

  


  return (
    <header className={styles.main}>

      <First/>

      <div className={styles.second}>
        
        <div  className={styles.second_one}>
          <div className={styles.second_one_one} >2_1_1</div>
          <div className={styles.second_one_two}>2_1_2</div>
        </div>

        <div className={styles.second_two}>

          <div className={styles.second_two_one} >
            <div className={styles.second_two_one_one}></div>
            <div className={styles.second_two_one_two}></div>
            <div className={styles.second_two_one_three}></div>
          </div>

          <div className={styles.second_two_two}>

            <div className={styles.second_two_two_one}></div>
            
            <div className={styles.second_two_two_two}>
              <div className={styles.second_two_two_two_one} ></div>
              <div className={styles.second_two_two_two_two}></div>
            </div>

          </div>
        </div>

      </div>

<Third/>
    </header>
    // <Grid key="home" margin={0} marginTop={2} className={styles.main_container} container spacing={2} padding={0} onMouseEnter={() => dispatch(isProject())} onMouseLeave={() => dispatch(isDefault())}>

    //   <Grid className={styles.first} paddingLeft={0} xs={12}  lg={6} gap={2}>
    //     <Block bg="gray" overlay="rgba(255,114,0,0.54)" text="test11" height="60%" />
    //     <Block bg="gray" overlay="red" text="good" height="40%" />
    //   </Grid>

    //   <Grid className={styles.second} lg={3} gap={2}>
    //     <Block bg="gray" overlay="rgba(255,114,0,0.54)" text="test11" height="40%" />
    //     <Block bg="gray" overlay="red" text="good" height="60%" />
    //   </Grid>

    //   <Grid className={styles.third} paddingRight={0} lg={3}>
    //     {/* <Container className={styles.third_one}></Container> */}
    //     <Block bg="gray" overlay="yellow" text="good" height="100%" />

    //   </Grid>

    

    // </Grid>
  )
}
