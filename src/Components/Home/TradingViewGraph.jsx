/* eslint-disable react/prop-types */
import { memo } from "react";

function TradingViewGraph({container}) {
  
  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default memo(TradingViewGraph);
