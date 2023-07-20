import styles from './CosaFacciamo.module.scss'

const CosaFacciamo = () => {
  return (
    <section className='my-10'>
    <p className={`text-white text-center text-4xl pb-3`}>Cosa Facciamo</p>
    <div className='text-white flex flex-col justify-center items-center gap-5'>
        <p className='px-10'>Nel nostro studio accogliamo le idee di tutti, le valutiamo e... quando non giochiamo a fortnite, a volte le avveriamo!</p>
        <img className='w-64' src="/images/altro_freccia.svg" />
    </div>

    <div className='px-3 flex flex-col gap-3 my-10'>
        <div className='flex gap-3 h-32'>
            <div className={`${styles.counter_cont} w-1/2 rounded-md`}>1</div>
            <div className='w-1/2 bg-purple-500 rounded-md'>2</div>
        </div>
        <div className='flex gap-3 h-32'>
            <div className='w-1/2 bg-green-900 rounded-md'>3</div>
            <div className='w-1/2 bg-blue-700 rounded-md'>4</div>
        </div>


    </div>
    </section>
  )
}

export default CosaFacciamo