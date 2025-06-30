import { FlightItem } from "./FlightItem";
import { FLIGHTS } from "../../data/fligths.data";

export function FlightList() {
  return (
    <div className="fixed top-12 left-10 flex flex-col gap-[10px] w-fit h-[93vh] overflow-y-auto no-scrollbar">
      {FLIGHTS.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
    </div>
  );
}
