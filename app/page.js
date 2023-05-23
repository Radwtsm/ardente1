'use client'

import styles from './home.module.scss'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { isProject, isDefault } from '../components/Cursor/cursorSlice'

import { motion } from 'framer-motion';
import { useState } from 'react';
import Block from '@/components/Block/Block';


export default function Home() {

  const dispatch = useDispatch()

  


  return (
    <Grid margin={0} marginTop={2} className={styles.main_container} container spacing={2} padding={0} onMouseEnter={() => dispatch(isProject())} onMouseLeave={() => dispatch(isDefault())}>

      <Grid className={styles.first} paddingLeft={0}  xs={6} gap={2}>
        <Block bg="gray" overlay="rgba(255,114,0,0.54)" text="test11" height="60%" />
        <Block bg="gray" overlay="red" text="good" height="40%" />
      </Grid>

      <Grid className={styles.second} xs={3} gap={2}>
        <Block bg="gray" overlay="rgba(255,114,0,0.54)" text="test11" height="40%" />
        <Block bg="gray" overlay="red" text="good" height="60%" />
      </Grid>

      <Grid className={styles.third} paddingRight={0} xs={3}>
        {/* <Container className={styles.third_one}></Container> */}
        <Block bg="gray" overlay="yellow" text="good" height="100%" />

      </Grid>

    

    </Grid>
  )
}
