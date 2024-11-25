import { createAccount, signInAccount, SignInAccountPayload } from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";
import { CreateAccountPayload } from "@/services/api/auth";

export default function useCreateAccount() {
  return useMutation({
    mutationFn: (payload: SignInAccountPayload) => signInAccount(payload),
  });
}
