/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

const TradingViewGraph = ({ symbol, style }) => {
  const container = useRef(null);
  // const [graphError, setGraphError] = useState(false);

  useEffect(() => {
    if (!container.current) return;

    // Clear any previous content
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    const config = {
      autosize: true,
      symbol: `CRYPTO:${symbol.toUpperCase()}USD`,
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

    script.innerHTML = JSON.stringify(config);

    // Append the script
    container.current.appendChild(script);

    // Add a timeout to check for "Invalid symbol" or empty content
    const timeout = setTimeout(() => {
      if (
        container.current.innerText.includes("Invalid symbol"),
        container.current.childElementCount === 0 // Check if no graph is rendered
      ) {
        container.current.innerText.includes("No Graph Available");
      }
    }, 2000); // Adjust delay as needed for TradingView's rendering time

    return () => {
      clearTimeout(timeout);
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [symbol]);

  return <div ref={container} className={style}></div>;
};

export default TradingViewGraph;
