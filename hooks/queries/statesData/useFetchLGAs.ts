import { fetchLGA } from "@/services/api/states";
import { useQuery } from "@tanstack/react-query";

export default function useFetchLGAs() {
  return useQuery({
    queryKey: ["fetch-LGAs"],
    queryFn: fetchLGA,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
    staleTime: Infinity,
  });
}
