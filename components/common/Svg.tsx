import React from "react"

type Props = {
  SvgIcon: any,
} & React.ComponentProps<'svg'>

export default function Svg ({SvgIcon, ...props}: Props) {
  return <SvgIcon width="1.5em" height="1.5em" {...props} />
}
