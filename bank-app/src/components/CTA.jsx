import styles from "../style/style"
import Button from './minor/Button'

const CTA = () => 
  (
  <section className={`${styles.padding} ${styles.flexCenter} ${styles.marginY} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let's try our services now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Soleil mais bleu quelque anciens et un. Sous béhémots oiseau enfants l'ouragan et. Hippocampes soleils les la peuple coup hanses.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles ="mt-10 rounded-[20px]"/>
    </div>
    </section>
  )


export default CTA