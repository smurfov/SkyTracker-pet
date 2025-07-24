import type { IFlightRoute } from "@/shared/types/flight.types";
import "flag-icons/css/flag-icons.min.css";

const CountryFlag = ({ countryCode }: { countryCode: string | undefined }) => {
  return (
    <span className={`fi fi-${countryCode && countryCode.toLowerCase()}`} />
  );
};

interface DeatailsFlightInfoProps {
  flightInfo: IFlightRoute | undefined;
  airplane: string | undefined;
  country: string | undefined;
  isoCode: string | undefined;
}

export function DeatailsFlightInfo({
  flightInfo,
  airplane,
  country,
  isoCode,
}: DeatailsFlightInfoProps) {
  return (
    <div className="flight-detail__info">
      <div className="flight-detail__info-header">Flight Information</div>
      <div className="flight-detail__info-row">
        <div className="flight-detail__info-row-cell">{airplane}</div>
        <div className="flight-detail__info-row-cell">
          <CountryFlag countryCode={isoCode} />
          <span style={{ marginLeft: 8 }}>{country}</span>
        </div>
      </div>
      <div className="flight-detail__info-row">
        <div className="flight-detail__info-row-cell flight-detail__info-row-cell--bl">
          <div className="flight-detail__info-row-cell-label">Speed</div>
          <div className="flight-detail__info-row-cell-value">
            {flightInfo?.speed} km/h
          </div>
        </div>
        <div className="flight-detail__info-row-cell flight-detail__info-row-cell--br">
          <div className="flight-detail__info-row-cell-label">Altitude</div>
          <div className="flight-detail__info-row-cell-value">
            {flightInfo?.altitude} m
          </div>
        </div>
      </div>
    </div>
  );
}
