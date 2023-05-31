import styles from "./second.module.scss"

const Second = () => {
    return(      <div className={styles.second}>
        
        <div  className={styles.second_one}>
          <div className={styles.second_one_one} >2_1_1</div>
          <div className={styles.second_one_two}>2_1_2</div>
        </div>

        <div className={styles.second_two}>
          <div className={styles.second_two_one} >
            <div className={styles.second_two_one_one}></div>
            <div className={styles.second_two_one_two}></div>
            <div className={styles.second_two_one_three}></div>
          </div>
          <div className={styles.second_two_two}>
           <div className={styles.second_two_two_one}>1</div>
           <div  className={styles.second_two_two_two}>2</div>
          </div>
        </div>

      </div>);
}

export default Second;