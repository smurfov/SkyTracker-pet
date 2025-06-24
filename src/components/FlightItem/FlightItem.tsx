import type { tFlightItem } from "../../types/Flight";
import iconPlane from "../../assets/plane icon.svg";

interface FlightItemProps extends tFlightItem {
  isActive: boolean;
  onClick: () => void;
  progress: number;
}

export function FlightItem({
  isActive,
  progress,
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
        {/* Top */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <img
              className="mr-[10px] w-[60px] h-[60px] object-contain rounded-[50%] bg-center"
              src={logo}
              alt={airline}
            />
            <div>{numberRoute}</div>
          </div>
          <div className="flex items-center">
            <div className="mr-[20px] px-[5px] py-[3px] bg-[#2c2c2c] rounded-xl">
              {numberRoute}
            </div>
            <div className="px-[5px] py-[3px] bg-[#2c2c2c] rounded-xl">
              {numberRoute}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          {/* From */}
          <div className="flex flex-col pr-[30px]">
            <div className="text-xs">{from}</div>
            <div className="text-2xl uppercase text-left">{fromCode}</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full mt-[10px]">
            <div className="flex h-[20px] items-center relative">
              <div
                className="relative h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-l"
                style={{
                  width: `${progress}%`,
                }}
              ></div>
              <div
                className="h-[3px] bg-[#2c2c2c] rounded-r"
                style={{
                  width: `${100 - progress}%`,
                }}
              ></div>

              {/* Plane */}
              <img
                className={`absolute rotate-90 w-[20px] h-[20px] top-[1px] translate-x-[-90%]`}
                src={iconPlane}
                alt="plane icon"
                style={{
                  left: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* To */}
          <div className="flex flex-col pl-[30px]">
            <div className="text-xs">{to}</div>
            <div className="text-2xl uppercase text-right">{toCode}</div>
          </div>
        </div>
      </button>
    </div>
  );
}
