import type { IFlightLocation } from "@/shared/types/flight.types";

type InfoRoute = {
  distance: string;
  time: string;
  scheduled: string;
  actual?: string;
  estimated?: string;
};

interface DetailsRouteProps {
  from: IFlightLocation | undefined;
  to: IFlightLocation | undefined;
  flightProgress: number | undefined;
  iconPlane: string;
  infoFrom: InfoRoute;
  infoTo: InfoRoute;
}

export function DetailsRoute({
  from,
  to,
  flightProgress,
  iconPlane,
  infoFrom,
  infoTo,
}: DetailsRouteProps) {
  return (
    <div className="flight-detail__route">
      {/* From and To */}
      <div className="flight-detail__route-locations">
        {/* From */}
        <div className="flight-detail__route-location">
          <div className="flight-detail__route-code">{from?.code}</div>
          <div className="flight-detail__route-city">{from?.city}</div>
          <div className="flight-detail__route-timezone">{from?.timezone}</div>
        </div>
        {/* To */}
        <div className="flight-detail__route-location flight-detail__route-location--to">
          <div className="flight-detail__route-code">{to?.code}</div>
          <div className="flight-detail__route-city">{to?.city}</div>
          <div className="flight-detail__route-timezone">{to?.timezone}</div>
        </div>
        {/* Plane icon */}
        <div className="flight-detail__route-plane">
          <img src="./plane icon.svg" alt="plane icon" />
        </div>
      </div>
      {/* Info About Route */}
      <div className="flight-detail__route-info">
        <div className="flight-detail__route-info-progress-bar">
          <div
            className="flight-detail__route-info-progress-bar-progress"
            style={{ width: `${flightProgress}%` }}
          ></div>
          <div
            className="flight-detail__route-info-progress-bar-rest"
            style={{ width: `${flightProgress && 100 - flightProgress}%` }}
          ></div>
          <img
            className="flight-detail__route-info-progress-bar-plane"
            src={iconPlane}
            alt="plane icon"
            style={{
              left: `${(flightProgress && flightProgress + 1) || 1}%`,
            }}
          />
        </div>
        <div className="flight-detail__route-info-info">
          <div className="flight-detail__route-info-info-from">
            {infoFrom.distance} km · {infoFrom.time}
          </div>
          <div className="flight-detail__route-info-info-to">
            {infoTo.distance} km · {infoTo.time}
          </div>
        </div>
      </div>
      {/* Time From */}
      <div className="flight-detail__route-time-row">
        <div className="flight-detail__route-time-cell">
          <div className="flight-detail__route-time-label">Scheduled</div>
          <div className="flight-detail__route-time-value">
            {infoFrom.scheduled}
          </div>
        </div>
        <div className="flight-detail__route-time-cell">
          <div className="flight-detail__route-time-label">Actual</div>
          <div className="flight-detail__route-time-value">
            {infoFrom.actual}
          </div>
        </div>
      </div>
      {/* Time To */}
      <div className="flight-detail__route-time-row last">
        <div className="flight-detail__route-time-cell flight-detail__route-time-cell--bl">
          <div className="flight-detail__route-time-label">Scheduled</div>
          <div className="flight-detail__route-time-value">
            {infoTo.scheduled}
          </div>
        </div>
        <div className="flight-detail__route-time-cell flight-detail__route-time-cell--br">
          <div className="flight-detail__route-time-label">Estimated</div>
          <div className="flight-detail__route-time-value">
            {infoTo.estimated}
          </div>
        </div>
      </div>
    </div>
  );
}
