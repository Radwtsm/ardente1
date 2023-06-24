'use client'

import Marquee from "react-fast-marquee";
// import styles from "./header.styles.scss"
import styles from "./home.module.scss"

const page = () => {
    return(
<>
<div className="angry-grid">
  <div id="item-0">&nbsp;</div>
  <div id="item-1" className={styles.perditempo}><div>
    <p>//ovunque con 2 click/</p>
    <p>{'</no perditempo>'}</p>
    </div>
    </div>
  <div id="item-2">&nbsp;</div>
  <div id="item-3">&nbsp;</div>
  <div id="item-4">&nbsp;</div>
  <div className={styles.ard} id="item-5"><p>ARD.</p></div>
  <div id="item-6">&nbsp;</div>
  <div id="item-7">&nbsp;</div>
  <div id="item-8">&nbsp;</div>
  <div id="item-9" className="flex justify-center items-center"><img className={styles.globe} src="/images/globe.svg"/></div>
  <div id="item-10"><Marquee autoFill={true} className="" style={{height:'100%',marginTop:'auto',marginBottom:'auto',fontSize:'7rem',fontWeight:700}}>{`ROBA`}</Marquee></div>
  <div id="item-11">&nbsp;</div>
  <div id="item-12">&nbsp;</div>
  <div id="item-13">&nbsp;</div>
  <div id="item-14">&nbsp;</div>
</div>

<section className={styles.chi_siamo_container}>

<div className={styles.persone}>
<div className={`${styles.container_persona} ${styles.persona_one}`}>

    <div>
    <p>Lucrezia </p>
    <p>CEO</p>
    </div>
 </div>
  <div className={`${styles.container_persona} ${styles.persona_two}`}>
    <div>
    <p>SIMONE </p>
    <p>Art Director</p>
    </div>
  </div>
  <div className={`${styles.container_persona} ${styles.persona_three}`}>
    <div>
    <p>MATTIA</p>
    <p>Designer</p>
    </div>
  </div>
  <div className={`${styles.container_persona} ${styles.persona_four}`}>
    <div>
    <p>RADW</p>
    <p>Developer</p>
    </div>
  </div>
  </div>
  <img src="/images/banner_chisiamo.svg"/>
</section>

<section className="text-white">
  <p>COSA FACCIAMO?</p>
  <div className={styles.p_altro}>
    <p>Nel nostro studio accogliamo le idee di tutti, le valutiamo e... quando non giochiamo a fortnite, le avveriamo!</p>
    <img className={styles.freccia} src="/images/altro_freccia.svg"/>
  </div>

<div className={styles.counters}>

  <div className={styles.container_count}>
      <img className={styles.ico_count} src="/images/smile.svg"/>
      <span>
        <p>13</p>
        <p>testo</p>
      </span>
    </div>
    
    <div className={styles.container_count}>
      <img className={styles.ico_count} src="/images/smile.svg"/>
      <span>
        <p>13</p>
        <p>testo</p>
      </span>
    </div>

</div>

<div className={styles.counters}>

  <div className={styles.container_count}>
      <img className={styles.ico_count} src="/images/smile.svg"/>
      <span>
        <p>13</p>
        <p>testo</p>
      </span>
    </div>
    
    <div className={styles.container_count}>
      <img className={styles.ico_count} src="/images/smile.svg"/>
      <span>
        <p>13</p>
        <p>testo</p>
      </span>
    </div>

</div>
    

{/* <div className={styles.container_count}>
<div className={styles.count_container}>
      <img className={styles.ico_count} src="/images/smile.svg"/>
      <span>
        <p>13</p>
        <p>testo</p>
      </span>
    </div>
    <div className={styles.count_container}>
      <img className={styles.ico_count} src="/images/smile.svg"/>
      <span>
        <p>13</p>
        <p>testo</p>
      </span>
    </div>
</div> */}

 
</section>

<section className="text-white">

  <div className={styles.phone_marquee}>
  <img className={styles.phone} src="/images/phone.svg"/>
  
  <div className={styles.scrolling_container}>
  <Marquee autoFill={true} style={{height:'100%',marginTop:'auto',marginBottom:'auto',fontSize:'7rem',fontWeight:700}}>{`ROBA`}</Marquee>
  <Marquee autoFill={true}  style={{height:'100%',marginTop:'auto',marginBottom:'auto',fontSize:'7rem',fontWeight:700}}>{`ROBA`}</Marquee>
  <Marquee autoFill={true}  style={{height:'100%',marginTop:'auto',marginBottom:'auto',fontSize:'7rem',fontWeight:700}}>{`ROBA`}</Marquee>
  </div>
  
  </div>
  
  <p>Fatti un giro!</p>
  <img className={styles.giro_btn} src="/images/freccia_giro.svg"/>
  
</section>
</>
    )
}

export default page;