import { verifyAccount } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useVerifyAccount() {
  return useMutation({
    mutationFn: (payload: object) => verifyAccount(payload),
  });
}
