import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useMouse from '@react-hook/mouse-position';

import styles from './cursor.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { isDefault, isLink } from './cursorSlice';

const CursorProvider = ({ children }) => {

  const cursor = useSelector((state) => state.cursor.value)
  useEffect(() => {
    switch (cursor) {
      case 'default':
        setCursorVariant("default")
        setCursorText(null)
        break;
      case 'link':
        setCursorVariant("link")
        break;
      case 'project':
        setCursorVariant("project")
        setTimeout(setCursorText("Learn More"), 3000)

    }
  }, [cursor])

  const [cursorText, setCursorText] = useState(null);
  const [cursorVariant, setCursorVariant] = useState("default");



  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0
  });

  let mouseXPosition = null;
  let mouseYPosition = null;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "white",
      x: mouseXPosition,
      y: mouseYPosition,
      color: "white",
      transition: {
        type: "spring",
        mass: 0.3
      }
    },
    hidden: {
      opacity: 0,

    },
    link: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "red",
      x: mouseXPosition,
      y: mouseYPosition,
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      // backgroundColor: "#fff",
      color: "#000",
      height: 60,
      width: 60,
      fontSize: "18px",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      color: "white",


      // x: mouseXPosition - 32,
      // y: mouseYPosition - 32
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.3
      }
    },
    // contact: {
    //   opacity: 1,
    //   backgroundColor: "#FFBCBC",
    //   color: "#000",
    //   height: 64,
    //   width: 64,
    //   fontSize: "32px",
    //   x: mouseXPosition - 48,
    //   y: mouseYPosition - 48
    // }
  };

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 20
  };

  // function linkEner(event) {

  // }



  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }


  return (
    <div ref={ref}>
      {mouse.y && mouse.x ? <motion.div
        variants={variants}
        className={`${styles.circle} rounded-full`}

        animate={cursorVariant}
        transition={spring}
      >
        {cursorText && <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={spring} className={styles.cursorText}>{cursorText}</motion.span>}

      </motion.div> : null}
      {children}
    </div>
  )
}

export default CursorProvider