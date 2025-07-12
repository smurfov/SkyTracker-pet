import { FlightItem } from "@/components/Flight/FlightItem/FlightItem";
// import { FLIGHTS } from "@/data/fligths.data";
import "./FlightList.scss";
import { useFilteredFlights } from "@/shared/hooks/useFilteredFlights";
import { useEffect, useState } from "react";
import { SkeletonLoader } from "@/components/SkeletonLoader/SkeletonLoader";

export function FlightList() {
  const { filteredFlights } = useFilteredFlights();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flight__list no-scrollbar">
      {isLoading ? (
        <SkeletonLoader count={filteredFlights.length} />
      ) : (
        !!filteredFlights.length &&
        filteredFlights.map((flight, index) => (
          <FlightItem key={index} flight={flight} />
        ))
      )}
    </div>
  );
}
