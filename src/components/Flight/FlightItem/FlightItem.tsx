import iconPlane from "@/assets/plane icon.svg";
import darkIconPlane from "@/assets/dark plane ico.svg";
import type { IFlight } from "@/shared/types/flight.types";
import { useFlightModal } from "@/shared/hooks/useFlightModal";
import { useEffect, useState } from "react";
import { useTheme } from "@/shared/hooks/useTheme";
import { FavoriteButton } from "./FavoriteButton/FavoriteButton";
import "./FlightItem.scss";

interface Props {
  flight: IFlight;
}

export function FlightItem({ flight }: Props) {
  const [flightProgress, setFlightProgress] = useState<number>(flight.progress);
  const { selectedFlight, openModal } = useFlightModal();
  const isActive = selectedFlight === flight.airline.code;
  const { theme } = useTheme();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlightProgress((progress) => {
        const newProgress = progress + 1;
        if (newProgress >= 100) {
          return 0;
        } else {
          return newProgress;
        }
      });
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`flight__item ${isActive && "active"}`}>
      <FavoriteButton flightId={flight.aircraftReg} />
      <button
        className="flight__btn"
        onClick={() => {
          openModal(flight.airline.code);
          localStorage.setItem(
            "flightProgress",
            JSON.stringify(flight.progress)
          );
        }}
      >
        {/* Top */}
        <div className="flight__top">
          <div className="flight__logo-block">
            <img
              className="flight__logo"
              src={flight.logo}
              alt={flight.airline.name}
            />
            <div className="flight__code">{flight.airline.code}</div>
          </div>
          <div className="flight__reg-block">
            <div className="flight__reg">{flight.aircraftReg}</div>
          </div>
        </div>
        {/* Bottom */}
        <div className="flight__bottom">
          {/* From */}
          <div className="flight__from">
            <div className="flight__city">{flight.from.city}</div>
            <div className="flight__iata">{flight.from.code}</div>
          </div>
          {/* Progress Bar */}
          <div className="flight__progress-bar">
            <div className="flight__progress-bg">
              <div
                className="flight__progress"
                style={{ width: `${flightProgress}%` }}
              ></div>
              <div
                className="flight__progress-rest"
                style={{ width: `${100 - flightProgress}%` }}
              ></div>
              <img
                className="flight__plane"
                src={theme === "dark" ? iconPlane : darkIconPlane}
                alt="plane icon"
                style={{ left: `${flightProgress + 1 || 1}%` }}
              />
            </div>
          </div>
          {/* To */}
          <div className="flight__to">
            <div className="flight__city flight__city--right">
              {flight.to.city}
            </div>
            <div className="flight__iata flight__iata--right">
              {flight.to.code}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
