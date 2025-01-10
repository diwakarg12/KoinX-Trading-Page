/* eslint-disable react/prop-types */

const CoinCard = ({crypto}) => {
  return (
    <div className="lg:w-[300px] rounded-2xl p-5 border-2 my-2 mr-2">
      <div className="flex items-center space-x-2">
        <img
          src={crypto.large}
          alt={crypto.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-[16px] font-normal">{crypto.name}</span>
        <span
          className={`text-${
            crypto.data.price_change_percentage_24h.usd > 0
              ? "green"
              : "red"
          }-500 bg-${
            crypto.data.price_change_percentage_24h.usd > 0
              ? "#0AB27D"
              : "#FF0000"
          }/10 text-xs font-normal pr-10`}
        >
          {crypto.data.price_change_percentage_24h.usd.toFixed(2)}%
        </span>
      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">
        {crypto.data.price}
      </div>
      {/* Display the chart image */}
      
      <img
        src={
          crypto && crypto.sparkline
            ? crypto.sparkline
            : "https://www.coingecko.com/coins/33566/sparkline.svg"
        }
        alt={crypto && crypto.name ? crypto.name : ""}
        className="w-full h-20"
      />
    </div>
  )
}

export default CoinCard