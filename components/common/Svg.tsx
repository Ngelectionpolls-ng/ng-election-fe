import { default as logoutIcon } from "./logout-icon.svg";

type Props = {
  className?: string,
  width?: string,
  height?: string,
  width_2?: string,
  href: string,
  onClick?: () => void,
}

export default function Svg({ className, width = '16px', height = '16px', width_2 = '100%', href, onClick, ...props }: Props) {
  return (
    <svg
      onClick={onClick}
      className={className}
      width={width}
      height={height}
      {...props}>
      <use href={href} xlinkHref={href} width={width_2}></use>
    </svg>
  );
}
