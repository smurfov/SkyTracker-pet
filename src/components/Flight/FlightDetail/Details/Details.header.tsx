import type {
  IFlightAirline,
  IFlightAirplane,
} from "../../../../shared/types/flight.types";

interface DetailsHeaderProps {
  airplane: IFlightAirplane | undefined;
  airline: IFlightAirline | undefined;
  color1: string | undefined;
  color2: string | undefined;
  handleClose: () => void;
  move: boolean;
}

export function DetailsHeader({
  airplane,
  airline,
  color1,
  color2,
  handleClose,
  move,
}: DetailsHeaderProps) {
  return (
    <div
      className="flight-detail__header"
      style={{
        backgroundImage: `linear-gradient(to top, ${color1}, ${color2})`,
      }}
    >
      <div className="flight-detail__header-inner">
        {/* Aircraft info */}
        <div className="flight-detail__header-info">
          <div className="flight-detail__header-airline-code">
            {airline?.code}
          </div>
          <div className="flight-detail__header-airline-name">
            {airline?.name}
          </div>
        </div>
        {/* Close button */}
        <button
          type="button"
          className="flight-detail__header-close-btn"
          onClick={handleClose}
        >
          <img
            width={"25px"}
            height={"25px"}
            src="./icons/Close.svg"
            alt="Close ico"
            className={!move ? "animate-spin" : undefined}
          />
        </button>
      </div>
      {/* Aircraft */}
      <div className="flight-detail__header-airplane-img">
        <img src={airplane?.image} alt={airplane?.name} />
      </div>
    </div>
  );
}
