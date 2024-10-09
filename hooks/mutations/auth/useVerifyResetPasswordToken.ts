import {
  verifyResetPasswordToken,
  VerifyResetPasswordTokenPayload,
} from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useVerifyResetPasswordToken() {
  return useMutation({
    mutationFn: (payload: VerifyResetPasswordTokenPayload) =>
      verifyResetPasswordToken(payload),
  });
}
