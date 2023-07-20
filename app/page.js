'use client'

import Marquee from "react-fast-marquee";
import Persone from "./persone";
// import styles from "./header.styles.scss"
import styles from "./home.module.scss"
import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from 'react-countup';
import GridHeader from "./_components/GridHeader/GridHeader";
import CosaFacciamo from "./_components/cosaFacciamo/CosaFacciamo";

const Page = () => {

  const counter_ref = useRef(null)
  const is_counter_view = useInView(counter_ref,{once:true})

  return (
    <>
     <GridHeader/>

      {/* <div className="display-block"> */}
      <Persone />
      <CosaFacciamo/>
      {/* </div> */}
      {/* <div className="flex text-white bg-red-300 w-64 h-64">
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div> */}
      {/* <section className="text-white my-32">
        <p className="text-center">COSA FACCIAMO?</p>
        <div className={styles.p_altro}>
          <p>Nel nostro studio accogliamo le idee di tutti, le valutiamo e... quando non giochiamo a fortnite, le avveriamo!</p>
          <img className={styles.freccia} src="/images/altro_freccia.svg" />
        </div>

        <div ref={counter_ref}></div>
        {is_counter_view &&         <div  className={styles.counters}>

<div className={styles.container_count}>
  <img className={styles.ico_count} src="/images/smile.svg" />
  <span>
    <p className="text-5xl"><CountUp duration={5} start={0} end={13}  /></p>
    <p>Clienti contenti</p>
  </span>
</div>

<div className={styles.container_count}>
  <img className={styles.ico_count} src="/images/archivio.svg" />
  <span>
  <p className="text-5xl"><CountUp duration={5} start={0} end={41} suffix="Gb"  /></p>
    <p>ARCHIVIATI</p>
  </span>
</div>

</div> }


        <div className={styles.counters}>

          <div className={styles.container_count}>
            <img className={styles.ico_count} src="/images/occhio.svg" />
            <span>
              <p className="text-5xl"><CountUp duration={5} start={0} end={72} suffix="H"  /></p>
              <p>ore di sonno perse</p>
            </span>
          </div>

          <div className={styles.container_count}>
            <img className={styles.ico_count} src="/images/caffe.svg" />
            <span>
              <p className="text-5xl"><CountUp duration={5} start={0} end={297}  /></p>
              <p>caffè consumati</p>
            </span>
          </div>

        </div>

      </section> */}

      
      
      
      
      {/* <section className="text-white">

        <div className={styles.phone_marquee}>
          <div className={styles.phone}>
            <img src="/images/phone.svg" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl">FATTI UN GIRO!</p>
              <img className={styles.giro_btn} src="/images/freccia_giro.svg" />
            </div>
          </div>

          <div className={styles.scrolling_container}>
            <Marquee autoFill={true} style={{ height: '100%', marginTop: 'auto', marginBottom: 'auto', fontSize: '10rem', fontWeight: 700 }}>{`ROBA`}</Marquee>
            <Marquee autoFill={true} style={{ height: '100%', marginTop: 'auto', marginBottom: 'auto', fontSize: '10rem', fontWeight: 700 }}>{`ROBA`}</Marquee>
            <Marquee autoFill={true} style={{ height: '100%', marginTop: 'auto', marginBottom: 'auto', fontSize: '10rem', fontWeight: 700 }}>{`ROBA`}</Marquee>
          </div>

        </div>
</section> */}



    </>
  )
}

export default Page;