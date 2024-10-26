export const FETCH_STATE = "/state?limit=37&page=1";

export const FETCH_INDIVIDUAL_STATE = (stateId: string) => `/state/${stateId}`;

export const FETCH_LGA = "/lga";

export const FETCH_INDIVIDUAL_LGA = (lgaId: string) => `/lga/${lgaId}`;
export const FETCH_WARD = "/ward";

export const FETCH_INDIVIDUAL_WARD = (wardId: string) => `/ward/${wardId}`;
export const FETCH_POLLINGUNIT = "/pollingunit";

export const FETCH_INDIVIDUAL_POLLINGUNIT = (pollingUnitId: string) =>
  `/pollingunit/${pollingUnitId}`;

export const FETCH_POLITICAL_PARTY = "/party";
export const FETCH_INDIVIDUAL_POLITICAL_PARTY = (partyId: string) =>
  `/party/${partyId}`;
