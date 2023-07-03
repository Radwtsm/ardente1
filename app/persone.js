import styles from './persone.module.scss'


const Persone = () => {
    return (
        <div style={{height:'60vh'}} className='relative'>
    {/* width: 70%;
    z-index: 1;
    left: 143px;
    bottom: 125px;
    transform: rotate(355deg); */}
        <img src="/images/banner_chisiamo.svg" style={{width:'70%',zIndex:1,left:'142px',bottom:'125px',transform:'rotate(355deg)'}} className='text-white text-3xl absolute'/>
        <div className='flex justify-around my-32'>

            <div className="">
                <div className="rounded-md relative flex justify-center items-end bg-red-300 h-96 w-48 overflow-visible">
                    <div className="absolute w-full h-96 bottom-0">
                        <img style={{ position: 'absolute', bottom: '-18px' }} src="/images/luca.svg" className="w-96 h-96 mx-auto scale-110 absolute" alt="" />
                        <span style={{ fontFamily: 'Rifton',bottom:'89px' }} className='absolute text-white  left-2 text-3xl'>
                            <p>TIPO</p>
                            <p>CEO</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="rounded-md relative flex justify-center items-end bg-red-300 h-96 w-48 overflow-visible">
                    <div className="absolute w-full h-96 bottom-0">
                        <img style={{ position: 'absolute', bottom: '-55px' }} src="/images/ava.svg" className="w-96 h-96 mx-auto scale-110 absolute" alt="" />
                        <span style={{ fontFamily: 'Rifton',bottom:'89px' }} className='absolute text-white  left-2 text-3xl'>
                            <p>TIPO</p>
                            <p>CEO</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="">
                <div className="rounded-md relative flex justify-center items-end bg-red-300 h-96 w-48 overflow-visible">
                    <div className="absolute w-full h-96 bottom-0">
                        <img style={{ position: 'absolute', bottom: '-55px' }} src="/images/ava.svg" className="w-96 h-96 mx-auto scale-110 absolute" alt="" />
                        <span style={{ fontFamily: 'Rifton',bottom:'89px' }} className='absolute text-white  left-2 text-3xl'>
                            <p>TIPO</p>
                            <p>CEO</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Persone