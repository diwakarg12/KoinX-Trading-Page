/* eslint-disable react/prop-types */
import CoinCard from "../CoinCard"

const SuggestedCoins = ({text, cryptos}) => {
  return (
    <div className="py-4">
        <div className="text-[#202020] text-2xl font-semibold">
          {text}
        </div>
        <div className="my-4 flex justify-between overflow-x-scroll overflow-auto  ">
          {
            text === "You may like" ? 
            (
              cryptos.slice(0, 5).map((crypto) => (
                <CoinCard key={crypto.item.id} crypto={crypto.item} />
              ))
            ) : 
            (
              cryptos.slice(5, 10).map((crypto) => (
                <CoinCard key={crypto.item.id} crypto={crypto.item} />
              ))
            )
          }
        </div>
    </div>
  )
}

export default SuggestedCoins