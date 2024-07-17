import { useMutation } from "@tanstack/react-query";
import { createBusiness } from "services/profile_business_API";

export const useCreateBusiness = () => {
  const { status: creating, mutate: business } = useMutation({
    mutationFn: createBusiness,
  });

  return { creating, business };
};
