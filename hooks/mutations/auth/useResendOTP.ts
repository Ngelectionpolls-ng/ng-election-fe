import { resendOTP, ResendOTPPayload } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useResendOTP() {
  return useMutation({
    mutationFn: (payload: ResendOTPPayload) => resendOTP(payload),
  });
}
