/* eslint-disable react/prop-types */

import TradingViewGraph from "./Home/TradingViewGraph";

const CoinCard = ({crypto}) => {
  const isPositiveChange = parseFloat(crypto.priceChangePercentage) >= 0;
  return (
      crypto.large ? (
        <div className="w-96 rounded-2xl p-5 border-2 my-2 mr-2 font-poppins">
  <div className="flex items-center space-x-2">
    <img
      src={crypto.large}
      alt={crypto.name}
      className="w-5 h-5 rounded-full"
    />
    <span className="text-sm font-normal">{`${crypto.name.slice(0, 6)}...`}</span>
    <span
      className={`text-${
        crypto.data.price_change_percentage_24h.usd > 0 ? "green" : "red"
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
    {crypto.data.price.toFixed(10)}
  </div>
  {/* Render TradingViewGraph or fallback */}
  {
  (crypto.symbol === "ANDY" || crypto.symbol === "BUTTHOLE" || crypto.symbol === "MEOW" || crypto.symbol === "ANON" || crypto.symbol === "COOKIE" || crypto.symbol === "GRIFT") ? (
    <img
      src={
        crypto.sparkline
          ? crypto.sparkline
          : "https://www.coingecko.com/coins/33566/sparkline.svg"
      }
      alt={crypto.name || ""}
      className="w-full h-20"
    />
  ) : (
    <TradingViewGraph
      symbol={crypto.symbol.toUpperCase()}
      style={"w-full h-32"}
    />
  )}
</div>

    ) : (
    <div className="flex my-2 justify-between text-center py-1">
      <div className="flex pt-1">
        <div>
          <img src={crypto.img} className="w-6 rounded-full" alt="Coin icon" />
        </div>
        <p className="text-[#0F1629] ml-1 ">{`${crypto.name.slice(0, 6)}...`} ({crypto.symbol})</p>
      </div>
      <div
        className={`flex items-center justify-center rounded-lg p-2 h-8 ${
          isPositiveChange ? "bg-green-300/20" : "bg-red-300/20"
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-4 fill-current ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
          style={{ transform: isPositiveChange ? "" : "rotate(180deg)" }}
        >
          <polygon points="0,100 50,0 100,100" />
        </svg>
        <span
          className={`ml-2 text-sm font-bold ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
        >
          {crypto.priceChangePercentage}%
        </span>
      </div>
    </div>
      )
  )
}

export default CoinCard

