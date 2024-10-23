import {
  updateSubscriberPassword,
  UpdateSubscriberPasswordPayload,
} from "@/services/api/auth";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateSubscriberPassword() {
  return useMutation({
    mutationFn: (payload: UpdateSubscriberPasswordPayload) =>
      updateSubscriberPassword(payload),
  });
}
