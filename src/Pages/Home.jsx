import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../Components/Home/Breadcrumb"
import SuggestedCoins from "../Components/Home/SuggestedCoins";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setCryptos(response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching Crypto Coins:", error);
      });
  }, []);

  return (
    <div className="h-full w-screen bg-[#eff2f5]">
      <Breadcrumb />
      <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">

        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          
        </div>
      </div>
      <SuggestedCoins text="You may like" cryptos={cryptos} />
      <SuggestedCoins text="Trending Coins" cryptos={cryptos} />

    </div>
  )
}

export default Home