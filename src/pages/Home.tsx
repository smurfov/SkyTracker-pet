import { FlightDetail } from "../components/Flight/FlightDetail";
import { FlightList } from "../components/Flight/FlightList";

export function Home() {
  return (
    <div className="w-screen h-screen">
      <FlightList />
      <FlightDetail />
    </div>
  );
}
