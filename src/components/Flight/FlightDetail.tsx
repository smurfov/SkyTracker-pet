import { FLIGHTS } from "../../data/fligths.data";
import { useFlightModal } from "../../shared/hooks/useFlightModal";
import { cn } from "../../utils/cn";
import { useEffect, useState } from "react";
import iconPlane from "../../assets/plane icon.svg";
import darkIconPlane from "../../assets/dark plane ico.svg";
import { useAnimateProgress } from "../../shared/hooks/useAnimateProgress";
import { DetailsHeader } from "./Details/Details.header";
import { DetailsRoute } from "./Details/Details.route";
import { DeatailsFlightInfo } from "./Details/Details.flightInfo";
import { DetailsButtons } from "./Details/Details.buttons";
import { useTheme } from "../../shared/hooks/useTheme";

export function FlightDetail() {
  const { isOpen, selectedFlight, closeModal } = useFlightModal();
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => closeModal(), 1000);
  };

  const flight = FLIGHTS.find((f) => f.airline.code === selectedFlight);

  const flightProgress = useAnimateProgress(flight?.progress);

  return (
    <div
      className={cn(
        "w-[520px] rounded-xl h-[97vh] bg-[#fefefe] dark:bg-[#1c1c1c] fixed top-[20px] right-0 overflow-y-auto no-scrollbar transition-transform duration-1000 ease flex flex-col items-center gap-[12px]",
        selectedFlight && isVisible
          ? "translate-x-[-40px]"
          : "translate-x-[530px]"
      )}
    >
      {isOpen && (
        <>
          {/* Header */}
          <DetailsHeader
            airline={flight?.airline}
            airplane={flight?.airplane}
            color1={flight?.colorGradient[0]}
            color2={flight?.colorGradient[1]}
            handleClose={handleClose}
            move={isVisible}
          />
          {/* Main */}
          {/* <DetailsMain /> */}
          <div className="w-full p-[20px] flex flex-col gap-[10px]">
            {/* Locations */}
            <DetailsRoute
              flightProgress={flightProgress}
              from={flight?.from}
              to={flight?.to}
              iconPlane={theme === "dark" ? iconPlane : darkIconPlane}
              infoFrom={{
                distance: "2400",
                time: "3h 30m",
                scheduled: "08:35",
                actual: "08:40",
              }}
              infoTo={{
                distance: "500",
                time: "30m",
                scheduled: "12:35",
                estimated: "12:40",
              }}
            />
            {/* Flight Info */}
            <DeatailsFlightInfo
              airplane={flight?.airplane.name}
              country={flight?.airline.country}
              flightInfo={flight?.route}
              isoCode={flight?.airline.isoCode}
            />

            {/* Buttons */}
            <DetailsButtons />
          </div>
        </>
      )}
    </div>
  );
}
