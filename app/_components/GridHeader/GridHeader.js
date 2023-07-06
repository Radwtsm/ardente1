import styles from './GridHeader.module.scss'

import Marquee from "react-fast-marquee";

const GridHeader = () => {
  return (
    <div className={`angry-grid ${styles.padding}`}>
    <div id="item-0">&nbsp;</div>
    <div id="item-1" className={`${styles.perditempo} text-xs`}><div>
      <p>//ovunque con 2 click/</p>
      <p>{'</no perditempo>'}</p>
    </div>
    </div>
    <div id="item-2">&nbsp;</div>
    <div id="item-3">&nbsp;</div>
    <div id="item-4">&nbsp;</div>
    <div className={`${styles.ard}`} id="item-5"><p className=' text-md '>ARD.</p></div>
    <div id="item-6">&nbsp;</div>
    <div id="item-7">&nbsp;</div>
    <div id="item-8">&nbsp;</div>
    <div id="item-9" className="flex justify-center items-center"><img className={styles.globe} src="/images/globe.svg" /></div>
    <div id="item-10"><Marquee autoFill={true} className="" style={{ height: '100%', marginTop: 'auto', marginBottom: 'auto', fontSize: '7rem', fontWeight: 700 }}>{`ROBA`}</Marquee></div>
    <div id="item-11">&nbsp;</div>
    <div id="item-12">&nbsp;</div>
    <div id="item-13">&nbsp;</div>
    <div id="item-14">&nbsp;</div>
  </div>
  )
}

export default GridHeader