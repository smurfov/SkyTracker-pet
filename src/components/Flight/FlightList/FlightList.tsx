import { FlightItem } from "@/components/Flight/FlightItem/FlightItem";
import { FLIGHTS } from "@/data/fligths.data";
import "./FlightList.scss";

export function FlightList() {
  return (
    <div className="flight__list no-scrollbar">
      {FLIGHTS.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
    </div>
  );
}
