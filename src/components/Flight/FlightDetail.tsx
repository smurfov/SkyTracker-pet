import { FLIGHTS } from "../../data/fligths.data";
import { useFlightModal } from "../../shared/hooks/useFlightModal";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";
import iconPlane from "../../assets/plane icon.svg";
import { useAnimateProgress } from "../../shared/hooks/useAnimateProgress";

export function FlightDetail() {
  const { isOpen, selectedFlight, closeModal } = useFlightModal();
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => closeModal(), 500);
  };

  const flight = FLIGHTS.find((f) => f.airline.code === selectedFlight);

  const flightProgress = useAnimateProgress(flight?.progress);

  return (
    <div
      className={cn(
        "w-[520px] rounded-xl h-[97vh] bg-[#1c1c1c] fixed top-[20px] right-0 overflow-y-auto no-scrollbar transition-transform duration-500 ease-in flex flex-col items-center gap-[12px]",
        selectedFlight && isVisible
          ? "translate-x-[-40px]"
          : "translate-x-[530px]"
      )}
    >
      {isOpen && (
        <>
          {/* Header */}
          <div
            className={`flex flex-col gap-[10px] items-center p-[20px] w-full`}
            style={{
              backgroundImage: `linear-gradient(to top, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
            }}
          >
            <div className="w-full px-[20px] py-[10px] bg-neutral-950 flex justify-between items-center rounded-xl">
              {/* Aircraft info */}
              <div className="flex flex-col gap-[8px]">
                <div className="text-orange text-2xl">
                  {flight?.airline.code}
                </div>
                <div className="text-xl">{flight?.airline.name}</div>
              </div>
              {/* Close button */}
              <button
                type="button"
                className="w-[40px] h-[40px] text-center bg-neutral-700 rounded-[50%] cursor-pointer"
                onClick={handleClose}
              >
                x
              </button>
            </div>
            {/* Aircraft */}
            <div className="w-[480px]">
              <img src={flight?.airplane.image} alt={flight?.airplane.name} />
            </div>
          </div>
          {/* Main */}
          <div className="w-full p-[20px]">
            {/* Locations */}
            <div className="w-full min-h-[400px] flex flex-col gap-[4px]">
              {/* From and To */}
              <div className="relative flex justify-between items-center">
                {/* From */}
                <div className="bg-neutral-800 w-[49.5%] min-h-40 rounded-tl-3xl flex flex-col items-center justify-center">
                  <div className="text-4xl mb-[12px]">{flight?.from.code}</div>
                  <div className="text-xl">{flight?.from.city}</div>
                  <div className="text-l text-neutral-500">
                    {flight?.from.timezone}
                  </div>
                </div>
                {/* To */}
                <div className="bg-neutral-800 w-[49.5%] min-h-40 rounded-tr-3xl flex flex-col items-center justify-center">
                  <div className="text-4xl mb-[12px]">{flight?.to.code}</div>
                  <div className="text-xl">{flight?.to.city}</div>
                  <div className="text-l text-neutral-500">
                    {flight?.to.timezone}
                  </div>
                </div>
                {/* Plane icon */}
                <div className="bg-neutral-950 pt-3.5 pb-3 px-2 rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <img src="/plane icon.svg" alt="plane icon" />
                </div>
              </div>
              {/* Progress Bar */}
              <div className="bg-neutral-800 px-[30px] min-h-[90px]">
                <div className="w-full mt-[10px]">
                  <div className="flex h-[20px] items-center relative">
                    <div
                      className="relative h-[3px] bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l"
                      style={{
                        width: `${flightProgress}%`,
                        // width: "60%",
                      }}
                    ></div>
                    <div
                      className="h-[3px] bg-[#2c2c2c] rounded-r"
                      style={{
                        width: `${flightProgress && 100 - flightProgress}%`,
                        // width: "40%",
                      }}
                    ></div>

                    {/* Plane */}
                    <img
                      className={`absolute w-[24px] h-[22.5px] top-[-1px] translate-x-[-100%]`}
                      src={iconPlane}
                      alt="plane icon"
                      style={{
                        left: `${(flightProgress && flightProgress + 1) || 1}%`,
                        // left: "60%",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Time From */}
              <div className="flex justify-between items-center">
                {/* Scheduled */}
                <div className="bg-neutral-800 w-[49.5%] min-h-16"></div>
                {/* Actual */}
                <div className="bg-neutral-800 w-[49.5%] min-h-16"></div>
              </div>

              {/* Time To */}
              <div className="flex justify-between items-center">
                {/* Scheduled */}
                <div className="bg-neutral-800 w-[49.5%] min-h-16 rounded-bl-3xl"></div>
                {/* Estimated */}
                <div className="bg-neutral-800 w-[49.5%] min-h-16 rounded-br-3xl"></div>
              </div>
            </div>

            {/* Flight Info */}
            <div></div>

            {/* Buttons */}
            <div></div>
          </div>
        </>
      )}
    </div>
  );
}
