import { resetPassword, ResetPasswordPayload } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useResetPassword() {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => resetPassword(payload),
  });
}
