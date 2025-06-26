import type {
  IFlightAirline,
  IFlightAirplane,
} from "../../../shared/types/flight.types";

interface DetailsHeaderProps {
  airplane: IFlightAirplane | undefined;
  airline: IFlightAirline | undefined;
  color1: string | undefined;
  color2: string | undefined;
  handleClose: () => void;
}

export function DetailsHeader({
  airplane,
  airline,
  color1,
  color2,
  handleClose,
}: DetailsHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-[10px] items-center p-[20px] w-full`}
      style={{
        backgroundImage: `linear-gradient(to top, ${color1}, ${color2})`,
      }}
    >
      <div className="w-full px-[20px] py-[10px] bg-neutral-950 flex justify-between items-center rounded-xl">
        {/* Aircraft info */}
        <div className="flex flex-col gap-[8px]">
          <div className="text-orange text-3xl">{airline?.code}</div>
          <div className="text-2xl">{airline?.name}</div>
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
        <img src={airplane?.image} alt={airplane?.name} />
      </div>
    </div>
  );
}
