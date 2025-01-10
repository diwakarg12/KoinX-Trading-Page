import AboutCoinCard from "../AboutCoinCard"
import Calculate from "../Calculate"

const AboutCoin = () => {
  return (
       <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">
          About Bitcoin
        </div>
        <AboutCoinCard question={"What is Bitcoin?"} answer1={"Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC."} />
        <AboutCoinCard question={"Lorem ipsum dolor sit amet"} answer1={"Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus."} answer2={"Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at."} answer3={"Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui"} />
        <div className=" mt-2 py-2">
            <h1 className="text-[#0F1629] text-2xl font-semibold">Already Holding Bitcoins?</h1>
            <div className="lg:flex border-b-2 border-[#C9CFDD]/40 pb-4">
                <div className="mt-4 lg:flex lg:space-x-7 space-y-3">
                    <Calculate img={"/calculateImg1.jpg"} text={"Calculate your Profits"} />
                    <Calculate img={"/calculateImg2.jpg"} text={"Calculate your Profits"} />
                </div>
            </div>
        </div>
        <div className="my-4 text-[#3E424A] font-medium ">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </div>
      </div>
    </div>
  )
}

export default AboutCoin