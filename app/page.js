'use client'

import Marquee from "react-fast-marquee";
import styles from "./header.styles.scss"


const page = () => {
    return(

<div class="angry-grid">
  <div id="item-0">&nbsp;</div>
  <div id="item-1">&nbsp;</div>
  <div id="item-2">&nbsp;</div>
  <div id="item-3">&nbsp;</div>
  <div id="item-4">&nbsp;</div>
  <div id="item-5">&nbsp;</div>
  <div id="item-6">&nbsp;</div>
  <div id="item-7">&nbsp;</div>
  <div id="item-8">&nbsp;</div>
  <div id="item-9">&nbsp;</div>
  <div id="item-10"><Marquee autoFill={true} className="" style={{height:'100%',marginTop:'auto',marginBottom:'auto',fontSize:'7rem',fontWeight:700}}>{`ROBA`}</Marquee></div>
  <div id="item-11">&nbsp;</div>
  <div id="item-12">&nbsp;</div>
  <div id="item-13">&nbsp;</div>
  <div id="item-14">&nbsp;</div>
</div>

    )
}

export default page;