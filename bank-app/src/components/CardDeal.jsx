import {card} from '../assets'
import styles, { layout } from '../style/style'
import Button from './minor/Button'
const CardDeal = () => 
   (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        Find a better card deal <br className='sm:block hidden'/> in a few easy steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Et sit accusam tempor et magna. Duo magna dolores eos dolore takimata et dolores amet, ipsum ipsum diam dolor gubergren consetetur dolores eirmod sanctus ipsum, et et et magna eirmod eirmod rebum takimata. Sea accusam.
      </p>
    <Button styles ="mt-10 rounded-[10px]"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-full h-full'/>
    </div>
    </section>
  )


export default CardDeal