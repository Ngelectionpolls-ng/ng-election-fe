import { fetchStates } from "@/services/api/states";
import { useQuery } from "@tanstack/react-query";

export default function useFetchStates() {
  return useQuery({
    queryKey: ["fetch-states"],
    queryFn: fetchStates,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
