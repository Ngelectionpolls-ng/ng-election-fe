import {
  FETCH_INDIVIDUAL_LGA,
  FETCH_INDIVIDUAL_POLITICAL_PARTY,
  FETCH_INDIVIDUAL_POLLINGUNIT,
  FETCH_INDIVIDUAL_STATE,
  FETCH_INDIVIDUAL_WARD,
  FETCH_LGA,
  FETCH_POLITICAL_PARTY,
  FETCH_POLLINGUNIT,
  FETCH_STATE,
  FETCH_WARD,
} from "../endpoints/states";
import { instance } from "../instance";

export const fetchStates = () => instance.get(FETCH_STATE);

export const fetchIndividualState = (stateId: string) =>
  instance.get(FETCH_INDIVIDUAL_STATE(stateId));

export const fetchLGA = () => instance.get(FETCH_LGA);

export const fetchIndividualLGA = (lgaId: string) =>
  instance.get(FETCH_INDIVIDUAL_LGA(lgaId));

export const fetchWards = () => instance.get(FETCH_WARD);

export const fetchIndividualWard = (wardId: string) =>
  instance.get(FETCH_INDIVIDUAL_WARD(wardId));

export const fetchPollingUnits = () => instance.get(FETCH_POLLINGUNIT);

export const fetchIndividualPollingUnit = (pollingUnitId: string) =>
  instance.get(FETCH_INDIVIDUAL_POLLINGUNIT(pollingUnitId));

export const fetchPoliticalParties = () => instance.get(FETCH_POLITICAL_PARTY);

export const fetchIndividualPoliticalParty = (politicalPartyId: string) =>
  instance.get(FETCH_INDIVIDUAL_POLITICAL_PARTY(politicalPartyId));
