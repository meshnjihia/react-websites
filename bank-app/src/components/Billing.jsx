import { apple, bill, google } from "../assets"
import styles, { layout } from "../style/style"
const Billing = () => 
  (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="product" className="w-full h-full z-[5] relative"/>
      <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 rounded-full white__gradient" />
      <div className="absolute z-0 w-[40%] h-[35%] -left-1/2 bottom-0 pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily Control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the go.
      </p>
      
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="" className="cursor-pointer w-[128px] h-[42px] object-contain mr-5"/>
        <img src={google} alt="" className="cursor-pointer w-[128px] h-[42px] object-contain"/>
      </div>
    </div>
    </section>
  )


export default Billing