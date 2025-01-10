function AboutCoinToggle() {
  return (
    <div>
      <div className="flex space-x-6 md:space-x-10 lg:space-x-16 text-sm font-medium font-raleway text-[#3E424A] py-4 overflow-x-auto">
        <div className="text-[#0141CF] border-[#0052FE] border-b-4 pb-4">
          Overview
        </div>
        <div className="cursor-pointer">Fundamentals</div>
        <div className="cursor-pointer">News Insights</div>
        <div className="cursor-pointer">Sentiments</div>
        <div className="cursor-pointer">Team</div>
        <div className="cursor-pointer">Technicals</div>
        <div className="cursor-pointer">Tokenomics</div>
      </div>
      <hr className=""></hr>
    </div>
  );
}

export default AboutCoinToggle;
