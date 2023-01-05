import styles from '../../style/style'
import { arrowUp } from '../../assets'

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer`}
  >
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Get</span>
        </p>
          <img src={arrowUp} alt="arrow up" className='w-[23px] h-[23px] object-contain'/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-white'>Started</span>
          
        </p>
    </div>
  </div>
)

export default GetStarted
