import axios from "axios";
import { useEffect, useState } from "react";
import type { tFlightItem } from "../../types/Flight";
import { FlightItem } from "../FlightItem/FlightItem";

export function FlightList() {
  const [flightList, setFlightList] = useState<tFlightItem[]>([]);
  const [activeFlight, setActiveFlight] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const getFlightList = async () => {
      try {
        const response = await axios.get<tFlightItem[]>(
          "./data/flightList.json",
          {
            signal: controller.signal,
          }
        );
        setFlightList(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(`Error: ${e}`);
      }
    };

    getFlightList();

    return () => controller.abort();
  }, []);

  return (
    <div className="fixed top-[20px] left-[10px] flex flex-col gap-[20px] w-fit h-[97vh] overflow-y-auto no-scrollbar">
      {flightList.length > 0 &&
        flightList.map((item) => (
          <FlightItem
            key={item.numberRoute}
            from={item.from}
            fromCode={item.fromCode}
            to={item.to}
            toCode={item.toCode}
            numberRoute={item.numberRoute}
            airline={item.airline}
            logo={item.logo}
            onClick={() => setActiveFlight(item.numberRoute)}
            isActive={activeFlight === item.numberRoute}
          />
        ))}
    </div>
  );
}
