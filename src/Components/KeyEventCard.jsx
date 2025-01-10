/* eslint-disable react/prop-types */

const KeyEventCard = ({svg, path, heading, text}) => {
  return (
    <div className="lg:w-[456px]  bg-[#E8F4FD] lg:h-[210px] rounded-xl overflow-y-hidden my-2">
            <div className="p-4 flex">
              <div className="bg-[#0082FF] w-11 h-11 rounded-full justify-center flex items-center">
                <svg
                  width={svg.width}
                  height={svg.height}
                  viewBox={`0 0 ${svg.width} ${svg.height}`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={path.d}
                    fill="white"
                    stroke={path.stroke}
                    strokeWidth={path.strokeWidth}
                    strokeLinecap={path.strokeLinecap}
                    strokeLinejoin={path.strokeLinejoin}
                  />
                </svg>
              </div>
              <div className="ml-2 w-[calc(100%-3rem)]">
                <div className="lg:text-sm text-xs font-medium text-[#191C1F] whitespace-normal">
                 {heading}
                </div>
                <div className="text-sm font-normal text-[#3E5765] whitespace-normal mt-2">
                  {text}
                </div>
              </div>
            </div>
          </div>
  )
}

export default KeyEventCard