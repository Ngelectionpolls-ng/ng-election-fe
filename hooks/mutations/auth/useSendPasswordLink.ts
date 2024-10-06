import { passwordResetLink, PasswordResetLinkPayload } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useSendPasswordLink() {
  return useMutation({
    mutationFn: (payload: PasswordResetLinkPayload) => passwordResetLink(payload),
  });
}
