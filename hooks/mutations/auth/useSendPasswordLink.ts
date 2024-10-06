import { passwordResetLink, ResetPasswordPayload } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSendPasswordLink() {
  return useMutation({
    mutationFn: (payload: ResetPasswordPayload) => passwordResetLink(payload),
  });
}
