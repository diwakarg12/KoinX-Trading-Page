/* eslint-disable react/prop-types */

import CoinCard from "../CoinCard"

const TrendingCoins = ({cryptos}) => {
  return (
    <div className="bg-white lg:ml-4 mt-4 rounded-lg px-8 py-5">
        <h2 className="text-2xl font-semibold text-[#0F1629]">Trending Coins (24h)</h2>
        <div className="mt-4">
        {cryptos.map((coin, index) => (
          <CoinCard
            key={index}
            crypto={coin}
          />
        ))}
      </div>
    </div>
  )
}

export default TrendingCoins