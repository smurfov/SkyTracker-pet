import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../constants/flight.constants";

export function useFlightModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const isOpen = !!selectedFlight;

  const openModal = (flightCode: string) => {
    setSearchParams({ [QUERY_PARAM_FLIGHT]: flightCode });
  };

  const closeModal = () => {
    setSearchParams({});
  };

  return {
    isOpen,
    selectedFlight,
    openModal,
    closeModal,
  };
}
