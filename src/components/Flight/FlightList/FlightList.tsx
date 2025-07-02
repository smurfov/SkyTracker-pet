import { FlightItem } from "@/components/Flight/FlightItem/FlightItem";
// import { FLIGHTS } from "@/data/fligths.data";
import "./FlightList.scss";
import { useFilteredFlights } from "@/shared/hooks/useFilteredFlights";

export function FlightList() {
  const { filteredFlights } = useFilteredFlights();

  return (
    <div className="flight__list no-scrollbar">
      {filteredFlights.map((flight, index) => (
        <FlightItem key={index} flight={flight} />
      ))}
    </div>
  );
}
