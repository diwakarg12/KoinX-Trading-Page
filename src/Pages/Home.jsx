import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Breadcrumb from "../Components/Home/Breadcrumb"
import SuggestedCoins from "../Components/Home/SuggestedCoins";
import TradingView from "../Components/Home/TradingView";
import AboutCoinToggle from "../Components/Home/AboutCoinToggle";
import CoinPerformance from "../Components/Home/CoinPerformance";
import CoinMarketSentiment from "../Components/Home/CoinMarketSentiment";
import CoinEstimateAnalysis from "../Components/Home/CoinEstimateAnalysis";
import Tokenomics from "../Components/Home/Tokenomics";
import KoinXTeams from "../Components/Home/KoinX-Teams";
import AboutCoin from "../Components/Home/AboutCoin";
import TrendingCoins from "../Components/Home/TrendingCoins";
import Advertisement from "../Components/Home/Advertisement";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [tradingViewData, setTradingViewData] = useState([]);
  const container = useRef(null);

  useEffect(()=>{
    const fetchCryptoData = () => {
    axios
      .get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true")
      .then((response) => {
        setTradingViewData(response.data.bitcoin);
      })
      .catch((err) => {
        console.log("Error fetching Crypto Coins:", err);
      });
  };

    const interval = setInterval(fetchCryptoData, 10000)
      return () => clearInterval(interval);
  }, [])


  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // Correct configuration for Bitcoin
    const config = {
      autosize: true,
      symbol: "CRYPTO:BTCUSD",
      timezone: "Etc/UTC",
      theme: "light",
      style: "2",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: true,
      range: "5D",
      save_image: false,
      calendar: false,
      hide_volume: true,
    };

    // Instead of setting innerHTML, use dataset for widget config
    script.innerHTML = JSON.stringify(config);

    // Append the script to the container
    container.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container.current) {
        container.current.innerHTML = ""; // Clear the container
      }
    };
  }, []);
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

  const formattedCoinsData = cryptos.slice(5,8).map(coin=>({
    symbol: coin.item.symbol.toUpperCase(),
    name: coin.item.name,
    img: coin.item.large,
    priceChangePercentage: coin.item.data.price_change_percentage_24h.usd.toFixed(2),
  }))

  return (
    <div className="h-full py-5 w-full bg-[#eff2f5] font-poppins lg:px-10 overflow-x-hidden">
      <Breadcrumb />
      <div className="w-screen lg:flex">
        <div className="lg:w-8/12">
          <TradingView tradingViewData={tradingViewData} container={container} />
          <AboutCoinToggle />
          <CoinPerformance />
          <CoinMarketSentiment />
          <CoinEstimateAnalysis />
          <AboutCoin />
          <Tokenomics />
          <KoinXTeams />
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <Advertisement />
          <TrendingCoins cryptos={formattedCoinsData} />
        </div>
      </div>
      <SuggestedCoins text="You may like" cryptos={cryptos} />
      <SuggestedCoins text="Trending Coins" cryptos={cryptos} />

    </div>
  )
}

export default Home