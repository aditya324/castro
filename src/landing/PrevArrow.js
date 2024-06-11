import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import prevarrow from "../assets/images/prevarrow.png"
import { FaArrowLeftLong } from "react-icons/fa6";
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div>
  <button
    className=" absolute transform -translate-y-1/2  z-10 rounded-full lg:mt-12 lg:mr-10 items-center justify-center md:top-96 md:right-32 md:mt-5 hidden md:block lg:block "
    onClick={onClick}
    
  >
    
      <img src={prevarrow} className=""/>
    
  </button>
</div>

    );
  };

  export default PrevArrow