interface DashboardLayoutProps {
  children: ReactNode;
}

export type NewsDetails = {
  src: StaticImageData | string;
  poolingUnit: string
  localGovt: string;
  state: string;
  title: string;
  status: string;
  createdAt: string;
}