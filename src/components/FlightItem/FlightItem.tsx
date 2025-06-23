import type { tFlightItem } from "../../types/Flight";
import iconPlane from "../../assets/plane icon.svg";

interface FlightItemProps extends tFlightItem {
  isActive: boolean;
  onClick: () => void;
}

export function FlightItem({
  isActive,
  onClick,
  from,
  fromCode = from,
  to,
  toCode = to,
  numberRoute,
  airline,
  logo,
}: FlightItemProps) {
  return (
    <div
      className={`p-[3px] rounded-xl ${
        isActive ? `bg-gradient-to-r from-orange-500 to-yellow-400` : ""
      }`}
    >
      <button
        className="flex flex-col gap-[20px] rounded-xl w-[500px] p-[20px] bg-[#1c1c1c] cursor-pointer"
        onClick={onClick}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <img
              className="mr-[10px] w-[60px] h-[60px] object-contain rounded-[50%] bg-center"
              src={logo}
              alt={airline}
            />
            <span>{numberRoute}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-[20px] px-[5px] py-[3px] bg-[#2c2c2c] rounded-xl">
              {numberRoute}
            </span>
            <span className="px-[5px] py-[3px] bg-[#2c2c2c] rounded-xl">
              {numberRoute}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col pr-[10px]">
            <span className="text-xs">{from}</span>
            <span className="text-2xl uppercase text-left">{fromCode}</span>
          </div>
          <div className="w-full mt-[10px]">
            <div className="flex">
              <div className="relative w-full h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-l">
                <img
                  className="rotate-90 absolute top-[-8px] right-[-2px]"
                  src={iconPlane}
                  alt="plane icon"
                  width={"20px"}
                />
              </div>
              <div className="w-full bg-[#2c2c2c] rounded-r"></div>
            </div>
          </div>
          <div className="flex flex-col pl-[10px]">
            <span className="text-xs">{to}</span>
            <span className="text-2xl uppercase text-right">{toCode}</span>
          </div>
        </div>
      </button>
    </div>
  );
}
