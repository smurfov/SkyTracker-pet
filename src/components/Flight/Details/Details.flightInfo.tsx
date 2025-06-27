import type { IFlightRoute } from "../../../shared/types/flight.types";
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
    <>
      <div className="flex flex-col gap-[4px]">
        <div className="rounded-tl-3xl rounded-tr-3xl bg-neutral-700 py-[15px] pl-[16px]">
          Flight Information
        </div>
        <div className="flex item-center justify-between">
          <div className="w-[49.5%] bg-neutral-800 text-xl py-[20px] pl-[16px]">
            {airplane}
          </div>
          <div className="w-[49.5%] bg-neutral-800 text-xl py-[20px] pl-[16px]">
            <CountryFlag countryCode={isoCode} />
            <span className="ml-2">{country}</span>
          </div>
        </div>
        <div className="flex item-center justify-between">
          <div className="w-[49.5%] text-xl bg-neutral-800 flex item-center justify-between py-[20px] px-[16px] rounded-bl-3xl">
            <div className="text-neutral-600">Speed</div>
            <div>{flightInfo?.speed} km/h</div>
          </div>
          <div className="w-[49.5%] text-xl bg-neutral-800 flex item-center justify-between py-[20px] px-[16px] rounded-br-3xl">
            <div className="text-neutral-600">Altitude</div>
            <div>{flightInfo?.altitude} m</div>
          </div>
        </div>
      </div>
    </>
  );
}
