import nextarrow from "../assets/images/nextarrow.png"

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div>
      <button
      className=" absolute transform -translate-y-1/2  z-10 rounded-full lg:mt-12 lg:right-20   items-center justify-center md:top-96 md:right-12 md:mt-5 hidden md:block lg:block "
      onClick={onClick}
      
    >
      
      <img src={nextarrow}/>
    </button>
    </div>
  );
};

export default NextArrow;
