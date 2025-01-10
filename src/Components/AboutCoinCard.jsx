/* eslint-disable react/prop-types */

const AboutCoinCard = ({question, answer1, answer2, answer3}) => {
  return (
    <div className="mt-6 ">
        <div className="text-lg font-bold text-[#0B1426]">
            {question}
        </div>
        <div className="mt-2 text-[#3E424A] pb-4 font-medium border-b-2 border-[#C9CFDD]/40">
            <div className="py-1">{answer1}</div>
            <div className="py-1">{answer2}</div>
            <div className="py-1">{answer3}</div>
        </div>
    </div>
  )
}

export default AboutCoinCard