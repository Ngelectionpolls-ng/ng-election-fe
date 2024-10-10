import { useMutation } from "@tanstack/react-query";
import { createProfile, CreateProfilePayload } from "@/services/api/create-profile";

export default function useCreateProfile() {
  return useMutation({
    mutationFn: (payload: CreateProfilePayload) => createProfile(payload),
  });
}
