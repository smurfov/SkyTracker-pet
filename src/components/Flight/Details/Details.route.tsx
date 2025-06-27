import type { IFlightLocation } from "../../../shared/types/flight.types";

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
    // Location
    <div className="w-full min-h-[400px] flex flex-col gap-[4px]">
      {/* From and To */}
      <div className="relative flex justify-between items-center">
        {/* From */}
        <div className="dark:bg-neutral-800 bg-neutral-200 w-[49.5%] min-h-40 rounded-tl-3xl flex flex-col items-center justify-center">
          <div className="text-5xl mb-[12px] dark:text-[#fefefe] text-[#2c2c2c]">
            {from?.code}
          </div>
          <div className="text-2xl dark:text-[#fefefe] text-[#2c2c2c]">
            {from?.city}
          </div>
          <div className="text-lg text-neutral-500">{from?.timezone}</div>
        </div>
        {/* To */}
        <div className="dark:bg-neutral-800 bg-neutral-200 w-[49.5%] min-h-40 rounded-tr-3xl flex flex-col items-center justify-center">
          <div className="text-5xl mb-[12px] dark:text-[#fefefe] text-[#2c2c2c]">
            {to?.code}
          </div>
          <div className="text-2xl dark:text-[#fefefe] text-[#2c2c2c]">
            {to?.city}
          </div>
          <div className="text-lg text-neutral-500">{to?.timezone}</div>
        </div>
        {/* Plane icon */}
        <div className="dark:bg-neutral-950 bg-neutral-400 pt-3.5 pb-3 px-2 rounded-[50%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img src="/plane icon.svg" alt="plane icon" />
        </div>
      </div>
      {/* Info About Route */}
      <div className="dark:bg-neutral-800 bg-neutral-200 px-[16px] py-[20px]">
        <div className="w-full flex flex-col gap-[10px] h-full">
          {/* Progress Bar */}
          <div className="flex h-[20px] items-center relative">
            <div
              className="relative h-[3px] bg-gradient-to-r from-[#E44948] to-[#FBA316] rounded-l"
              style={{
                width: `${flightProgress}%`,
                // width: "60%",
              }}
            ></div>
            <div
              className="h-[3px] dark:bg-[#2c2c2c] bg-[#cecece]  rounded-r"
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
          <div className="flex items-center justify-between">
            {/* From */}
            <div className="text-neutral-600 text-xl">
              {infoFrom.distance} km · {infoFrom.time}
            </div>

            {/* To */}
            <div className="text-neutral-600 text-xl">
              {infoTo.distance} km · {infoTo.time}
            </div>
          </div>
        </div>
      </div>

      {/* Time From */}
      <div className="flex justify-between items-center">
        {/* Scheduled */}
        <div className="dark:bg-neutral-800 bg-neutral-200 w-[49.5%] min-h-16 flex items-center justify-around">
          <div className="text-neutral-600 text-xl">Scheduled</div>
          <div className="text-xl dark:text-[#fefefe] text-[#2c2c2c]">
            {infoFrom.scheduled}
          </div>
        </div>
        {/* Actual */}
        <div className="dark:bg-neutral-800 bg-neutral-200 w-[49.5%] min-h-16 flex items-center justify-around">
          <div className="text-neutral-600 text-xl">Actual</div>
          <div className="text-xl dark:text-[#fefefe] text-[#2c2c2c]">
            {infoFrom.actual}
          </div>
        </div>
      </div>

      {/* Time To */}
      <div className="flex justify-between items-center">
        {/* Scheduled */}
        <div className="dark:bg-neutral-800 bg-neutral-200 w-[49.5%] min-h-16 rounded-bl-3xl flex items-center justify-around">
          <div className="text-neutral-600 text-xl">Scheduled</div>
          <div className="text-xl dark:text-[#fefefe] text-[#2c2c2c]">
            {infoTo.scheduled}
          </div>
        </div>
        {/* Estimated */}
        <div className="dark:bg-neutral-800 bg-neutral-200 w-[49.5%] min-h-16 rounded-br-3xl flex items-center justify-around">
          <div className="text-neutral-600 text-xl">Scheduled</div>
          <div className="text-xl dark:text-[#fefefe] text-[#2c2c2c]">
            {infoTo.estimated}
          </div>
        </div>
      </div>
    </div>
  );
}
