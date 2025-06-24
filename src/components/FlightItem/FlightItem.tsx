import type { tFlightItem } from "../../types/Flight";
import iconPlane from "../../assets/plane icon.svg";
import { useEffect, useState } from "react";

interface FlightItemProps extends tFlightItem {
  isActive: boolean;
  onClick: () => void;
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
  const [flightProgress, setFlightProgress] = useState<number>(0);

  useEffect(() => {
    setFlightProgress(progress);
  }, [progress]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlightProgress((progress) => {
        const newProgress = progress + 1;
        if (newProgress >= 100) {
          clearInterval(intervalId);
          return 100;
        } else {
          return newProgress;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`p-[3px] rounded-xl ${
        isActive ? `bg-gradient-to-r from-orange-500 to-yellow-400` : ""
      } hover:scale-95`}
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
          <div className="flex flex-col w-[100px]">
            <div className="text-xs text-left">{from}</div>
            <div className="text-2xl uppercase text-left">{fromCode}</div>
          </div>

          {/* Progress Bar */}
          <div className="w-[60%] mt-[10px]">
            <div className="flex h-[20px] items-center relative">
              <div
                className="relative h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 rounded-l"
                style={{
                  width: `${flightProgress}%`,
                }}
              ></div>
              <div
                className="h-[3px] bg-[#2c2c2c] rounded-r"
                style={{
                  width: `${100 - flightProgress}%`,
                }}
              ></div>

              {/* Plane */}
              <img
                className={`absolute rotate-90 w-[20px] h-[20px] top-[1px] translate-x-[-90%]`}
                src={iconPlane}
                alt="plane icon"
                style={{
                  left: `${flightProgress}%`,
                }}
              />
            </div>
          </div>

          {/* To */}
          <div className="flex flex-col w-[100px]">
            <div className="text-xs text-right">{to}</div>
            <div className="text-2xl uppercase text-right">{toCode}</div>
          </div>
        </div>
      </button>
    </div>
  );
}
