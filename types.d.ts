export interface DashboardLayoutProps {
  children: ReactNode;
}

export interface IsCollapsedProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean | ((prevState: boolean) => boolean)) => void;
}

export type NewsDetails = {
  src: StaticImageData | string;
  poolingUnit: string;
  localGovt: string;
  state: string;
  title: string;
  status: string;
  createdAt: string;
};

export interface NotificationItem {
  id: number;
  title: string;
  context: string;
}

export type DropDownProps = {
  notifications: NotificationItem[]
};

export interface OnSubmitProps {
  email: string;
  password: string;
}

interface CustomUser {
  id: string;
  name: string;
  email: string;
  token: string;
}

export type InputResult = {
  registeredVoters: string;
  accreditedVoters: string;
  rejectedVotes: string;
  spoiledVotes: string;
  validVotes: string;
  unusedBallotPapers: string;
  politicalParty: string;
  votesAllocated: string;
};