/* eslint-disable react/prop-types */
import TradingImg from "/coin.png";
import TradingViewGraph from "./TradingViewGraph";

function TradingView({tradingViewData}) {

  return (
    <div className="bg-white h-max rounded-lg my-5 p-6 font-poppins">
      <div className="flex items-center">
        <div>
          <img src={TradingImg} className="w-9" alt="Bitcoin" />
        </div>
        <div className="text-2xl font-semibold text-[#0B1426] pl-2">Bitcoin</div>
        <div className="text-sm text-[#5D667B] pl-2">BTC</div>
        <div className="bg-[#808A9D] px-3 py-2 text-white rounded-lg ml-7">
          Rank #1
        </div>
      </div>
      <div className="mt-8 flex">
        <div>
          <div className="text-3xl font-semibold text-[#0B1426]">
            {(tradingViewData && `$${tradingViewData.usd}`) || `$66759`}
          </div>
          <div className="text-lg font-medium text-[#0B1426]">
            {(tradingViewData && `₹ ${tradingViewData.inr}`) || `₹ 5535287`}
          </div>
        </div>
        <div
          className={`flex items-center justify-center rounded-lg p-2 h-10 ml-10 ${
            tradingViewData && tradingViewData.inr_24h_change < 0
              ? "bg-red-300/20"
              : "bg-green-300/20"
          }`}
        >
          <svg
            viewBox="0 0 100 100"
            className={`w-4 fill-current ${
              tradingViewData && tradingViewData.inr_24h_change < 0
                ? "text-red-600 rotate-180"
                : "text-green-600"
            }`}
          >
            <polygon points="0,100 50,0 100,100" />
          </svg>
          <span
            className={`ml-2 text-sm font-bold ${
              tradingViewData && tradingViewData.inr_24h_change < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {(tradingViewData &&
              `${Math.abs(tradingViewData.inr_24h_change).toFixed(2)}%`) ||
              `2.18%`}
          </span>
        </div>

        <div className="text-sm text-[#768396] ml-2 mt-2">(24H)</div>
      </div>
      <hr className="my-4" />
      <div className="lg:flex mb-4 justify-between">
        <div className="ls:text-lg text-sm font-semibold text-[#0B1426]">
          Bitcoin Price Chart (USD)
        </div>
        <div className="flex lg:space-x-7 md:space-x-5 space-x-3 mr-4 text-sm text-[#5D667B] font-medium text-center items-center">
          <div>1H</div>
          <div>24H</div>
          <div className="text-[#0141CF] bg-[#E2ECFE] rounded-3xl px-3 py-1">
            5D
          </div>
          <div>1M</div>
          <div>3M</div>
          <div>6M</div>
          <div>1Y</div>
          <div>All</div>
        </div>
      </div>
      <div className="lg:h-[420px] h-[300px]">
       <TradingViewGraph symbol={"BTC"} style={"w-full h-full"} />
      </div>
    </div>
  );
}

export default TradingView;
