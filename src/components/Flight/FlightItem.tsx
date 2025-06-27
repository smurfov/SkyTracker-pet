import iconPlane from "../../assets/plane icon.svg";
import darkIconPlane from "../../assets/dark plane ico.svg";
import type { IFlight } from "../../shared/types/flight.types";
import { cn } from "../../utils/cn";
import { useFlightModal } from "../../shared/hooks/useFlightModal";
// import { useAnimateProgress } from "../../shared/hooks/useAnimateProgress";
import { useEffect, useState } from "react";
import { useTheme } from "../../shared/hooks/useTheme";

interface Props {
  flight: IFlight;
}

export function FlightItem({ flight }: Props) {
  const [flightProgress, setFlightProgress] = useState<number>(flight.progress);
  const { selectedFlight, openModal } = useFlightModal();
  const isActive = selectedFlight === flight.airline.code;
  const { theme } = useTheme();
  // const flightProgress = useAnimateProgress(flight.progress);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlightProgress((progress) => {
        const newProgress = progress + 1;
        if (newProgress >= 100) {
          // clearInterval(intervalId);
          return 0;
        } else {
          return newProgress;
        }
      });
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={cn(
        `p-[3px] rounded-xl duration-500 ease-in transition-colors`,
        isActive
          ? "bg-gradient-to-r from-[#E44948] to-[#FBA316]"
          : "bg-transparent"
      )}
    >
      <button
        className="flex flex-col gap-[20px] rounded-xl w-[480px] h-[200px] justify-between p-[20px] bg-[#fefefe] dark:bg-[#1c1c1c] cursor-pointer"
        onClick={() => {
          openModal(flight.airline.code);
          localStorage.setItem(
            "flightProgress",
            JSON.stringify(flight.progress)
          );
        }}
      >
        {/* Top */}
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <img
              className="mr-[10px] w-[44px] h-[44px] object-cover rounded-[50%] bg-center bg-white"
              src={flight.logo}
              alt={flight.airline.name}
            />
            <div className="text-xl text-[#2c2c2c] dark:text-[#fefefe]">
              {flight.airline.code}
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-[8px] pb-[3px] pt-[5px] m-0 bg-[#cecece] dark:bg-[#2c2c2c] text-[#2c2c2c] dark:text-[#fefefe] rounded-xl text-l">
              {flight.aircraftReg}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center">
          {/* From */}
          <div className="flex flex-col w-[100px]">
            <div className="text-l text-left text-[#2c2c2c] dark:text-[#fefefe]">
              {flight.from.city}
            </div>
            <div className="text-4xl uppercase text-left text-[#2c2c2c] dark:text-[#fefefe]">
              {flight.from.code}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-[70%] mt-[10px]">
            <div className="flex h-[20px] items-center relative">
              <div
                className="relative h-[4px] bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l"
                style={{
                  width: `${flightProgress}%`,
                }}
              ></div>
              <div
                className="h-[4px] dark:bg-[#2c2c2c] bg-[#cecece] rounded-r"
                style={{
                  width: `${100 - flightProgress}%`,
                }}
              ></div>

              {/* Plane */}
              <img
                className={`absolute w-[24px] h-[22.5px] top-[-1px] translate-x-[-100%]`}
                src={theme === "dark" ? iconPlane : darkIconPlane}
                alt="plane icon"
                style={{
                  left: `${flightProgress + 1 || 1}%`,
                }}
              />
            </div>
          </div>

          {/* To */}
          <div className="flex flex-col w-[100px]">
            <div className="text-l text-right text-[#2c2c2c] dark:text-[#fefefe]">
              {flight.to.city}
            </div>
            <div className="text-4xl uppercase text-right text-[#2c2c2c] dark:text-[#fefefe]">
              {flight.to.code}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
