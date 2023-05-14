'use client'

import Link from 'next/link'
import styles from './Navbar.module.scss'
import Typewriter from 'typewriter-effect';
import { usePathname, useSearchParams } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname()
  
  


  return (
<>
    <div className={`${styles.main} flex justify-between items-center my-3 `}>

      <div className='flex list-none gap-5'>
        <Link className={pathname === '/servizi' ? styles.active_link : styles.link } href='/servizi'>SERVIZI</Link>
        <Link className={pathname === '/studio' ? styles.active_link : styles.link } href='/studio'>STUDIO</Link>
      </div>

      <Link href='/' className={`${styles.logo}`}>
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
    <div className={`${styles.line}`}>ciao</div>
    </>
  )
}

export default Navbar;