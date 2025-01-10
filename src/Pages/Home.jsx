import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Breadcrumb from "../Components/Home/Breadcrumb"
import SuggestedCoins from "../Components/Home/SuggestedCoins";
import TradingView from "../Components/Home/TradingView";
import AboutCoinToggle from "../Components/Home/AboutCoinToggle";
import CoinPerformance from "../Components/Home/CoinPerformance";
import CoinMarketSentiment from "../Components/Home/CoinMarketSentiment";

const Home = () => {
  const [cryptos, setCryptos] = useState([]);
  const [tradingViewData, setTradingViewData] = useState([]);
  const container = useRef(null);

  useEffect(()=>{
    const interval = setInterval(
      axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true")
      .then((response)=>{
        setTradingViewData(response.data.bitcoin)
      })
      .catch((err)=>{
        console.log("Error fetching Crypto Coins:", err)
      }), 1000)
      return () => clearInterval(interval);
  }, [])


  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const scriptContent = JSON.stringify({
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
      support_host: "https://www.tradingview.com",
    });

    script.innerHTML = scriptContent;
    container.current.appendChild(script);

    return () => {
      if (container.current && script.parentNode) {
        container.current.removeChild(script);
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

  return (
    <div className="h-full py-5 w-screen bg-[#eff2f5] font-poppins lg:px-10 md:px-6 px-2">
      <Breadcrumb />
      <div className="w-screen lg:flex">
        <div className="lg:w-8/12">
        <TradingView tradingViewData={tradingViewData} container={container} />
        <AboutCoinToggle />
        <CoinPerformance />
        <CoinMarketSentiment />
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