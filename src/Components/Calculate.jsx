/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
const Calculate = ({img, text}) => {
  return (
    <div className="lg:w-[48%] h-[151px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg flex my-2">
        <div className="p-3">
            <img
                className="w-32 h-32 rounded-xl object-right object-cover"
                src={img}
                alt="calculate1"
            />
        </div>
        <div className="items-center p-4 flex flex-col justify-center mr-10">
          <div className=" text-white text-xl">
            {text}
          </div>
          <div className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center">
            Check Now
            <FaArrowRight className="ml-2 font-normal" />
          </div>
        </div>
    </div>
  )
}

export default Calculate