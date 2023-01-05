import styles from '../style/style'
import { discount, robot } from '../assets'
import GetStarted from './minor/GetStarted'

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row bg-discount-gradient items-center py-[6px] px-4 rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount icon"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>{' '}
            <br className="sm:block hidden" />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>

        <h1 className="flex-1 text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a proprietary methodology to identify the
          credit cards most likely to fit your needs. we examine annual
          percentage rates, annual fees and much more to create a perfect fit
          for your needs
        </p>
        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </div>
      <div className={`flex flex-1 md:my-0 my-10 relative ${styles.flexCenter}`}>
        <img
          src={robot}
          alt="robot arm"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  )
}

export default Hero
