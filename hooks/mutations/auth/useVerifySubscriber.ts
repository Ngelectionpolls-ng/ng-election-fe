import { verifySubscriber } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useVerifySubscriber() {
  return useMutation({
    mutationFn: (payload: object) => verifySubscriber(payload),
  });
}
