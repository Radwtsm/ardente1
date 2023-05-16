"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import styles from '../Cursor/cursor.module.scss'

const Cursortwo = () => {

    const cursor = useSelector((state) => state.cursor.value)
    const [cursorText, setCursorText] = useState(null);
    const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
        switch (cursor) {
          case 'default':
            setCursorVariant("default")
            setCursorText(null)
            console.log(cursorVariant)
  
            break;
          case 'link':
            setCursorVariant("link")
            console.log(cursorVariant)
  
            break;
          case 'project':
            setCursorVariant("project")
            setTimeout(setCursorText("Learn More"), 3000)
            console.log(cursorVariant)
    
        }
      }, [cursor,cursorVariant])




  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;


  const ref = useRef();


  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    //   console.log(x, y);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      
    };
  }, []);

  let mouseXPosition = null;
  let mouseYPosition = null;


  if (x !== null) {
    mouseXPosition = x;
  }

  if (y !== null) {
    mouseYPosition = y;
  }

  document.documentElement.addEventListener('mouseleave', () => {
    mouseXPosition = null;
    mouseYPosition = null;
})



  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#dad9d9",
      x: mouseXPosition,
      y: mouseYPosition,
      color: "#dad9d9",
      transition: {
        duration:0,
        type: "spring",
        mass: 0.3
      }
    },
    hidden: {
      opacity: 0,

    },
    link: {
      transition:{
        duration:0
      },
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
      transition:{
        duration:0,
      },


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
    stiffness: 1,
    damping: 0.1
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
    <>
    
    <motion.div
      ref={ref}
      variants={variants}
      animate={cursorVariant}
      transition={spring}
      className={`${styles.circle} rounded-full`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    > <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }} className={styles.cursorText}>{cursorText}</motion.span></motion.div>
        </>
  );
};

export default Cursortwo;
