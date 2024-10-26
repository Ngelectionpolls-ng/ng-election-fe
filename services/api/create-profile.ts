import { CREATE_PROFILE } from "../endpoints";
import { instance } from "../instance";

export interface CreateProfilePayload {
  accountType: string;
  wardId: string;
  pollingUnitId: string;
  stateId: string;
  LGAId: string;
  politicalPartyId?: string;
  ageRange: string;
  sex: string;
  occupation: string;
  phoneNumber: string;
}

export const createProfile = (payload: CreateProfilePayload) => {
  const { accountType, ...rest } = payload;
  return instance.post(CREATE_PROFILE(accountType), rest);
};
