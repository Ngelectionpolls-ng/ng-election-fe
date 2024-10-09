import { verifyTokens } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useVerifyTokens() {
  return useMutation({
    mutationFn: (payload: { id: any ; code: any }) =>
      verifyTokens(payload.id, payload.code),
  });
}
