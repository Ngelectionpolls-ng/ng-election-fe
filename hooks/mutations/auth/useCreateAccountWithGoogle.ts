import { createAccountWithGoogle } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useCreateAccountWithGoogle() {
  return useMutation({
    mutationFn: (payload: any) => createAccountWithGoogle(payload),
  });
}
