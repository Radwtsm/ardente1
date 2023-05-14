'use client'

import Link from 'next/link'
import styles from './Navbar.module.scss'
import Typewriter from 'typewriter-effect';
import { usePathname, useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux'
import { isLink, isDefault } from '../Cursor/cursorSlice'


const Navbar = () => {
  const pathname = usePathname()

  // const cursor = useSelector((state) => state.cursor.value)
  const dispatch = useDispatch()


  return (
    <>
      <div className={styles.main}>

        <div className={styles.list}>
          <Link onMouseEnter={() => dispatch(isLink())} onMouseLeave={() => dispatch(isDefault())} style={{ cursor: 'none' }} className={pathname === '/servizi' ? styles.active_link : styles.link} href='/servizi'>SERVIZI</Link>
          <Link onMouseEnter={() => dispatch(isLink())} onMouseLeave={() => dispatch(isDefault())} style={{ cursor: 'none' }} className={pathname === '/studio' ? styles.active_link : styles.link} href='/studio'>STUDIO</Link>
        </div>

        <Link onMouseEnter={() => dispatch(isLink())} onMouseLeave={() => dispatch(isDefault())} style={{ cursor: 'none' }} href='/mission' className={`${styles.logo}`}>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('ARDENTE')
                .pauseFor(2500)
                // .typeString('ENTE')
                // .pauseFor(2500)
                .deleteChars(4)
                .typeString('.')
                .pauseFor(10000)
                // .pauseFor(4000)
                // .callFunction(() => {
                //   console.log('String typed out!');
                // })
                // .pauseFor(2500)

                // .callFunction(() => {
                //   console.log('All strings were deleted');
                // })
                .start();
            }}
          />
        </Link>

      </div>
      <div className={`${styles.line}`}></div>
    </>
  )
}

export default Navbar;