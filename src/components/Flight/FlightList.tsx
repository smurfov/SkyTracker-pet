import { FlightItem } from "./FlightItem";
import { FLIGHTS } from "../../data/fligths.data";

export function FlightList() {
  return (
    <div className="fixed top-[20px] left-[40px] flex flex-col gap-[10px] w-fit h-[97vh] overflow-y-auto no-scrollbar">
      {FLIGHTS.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
    </div>
  );
}
