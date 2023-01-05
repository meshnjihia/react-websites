import { stats } from "../constants"
import styles from "../style/style"

const Stats = () => 
  (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stats, i) => (
      <div key={stats.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins text-white font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">{stats.value}</h4>
        <p className="font-poppins text-gradient font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] ml-3 uppercase">
          {stats.title}
        </p>
      </div>
    ))}
    </section>
  )


export default Stats