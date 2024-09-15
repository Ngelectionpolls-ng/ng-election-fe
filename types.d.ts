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
