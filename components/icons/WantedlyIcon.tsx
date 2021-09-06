import { IconProps } from "components/Icon"
import { FC } from "react"

export const WantedlyIcon: FC<IconProps> = ({
  width = 24,
  height = 24,
}) => {
  return (
    <svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 394" width={width} height={height}>
      <circle className="cls-1" fill="#21bddb" cx="375" cy="122.95" r="38.98"/>
      <path className="cls-2" fill="#282828" fillRule="evenodd" d="M217.17,234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.22-5.14-3.23-7.18l-3.77-9.08L150.47,86.12H85.89l32.29,77.95,32.29,78,29.82,72a2.68,2.68,0,0,0,4.94,0l32.45-77.68A1.34,1.34,0,0,0,217.17,234.77Z"/>
      <path className="cls-2" d="M338.15,234.77c-2.34-1.52-9-10.45-27.42-54.44-1.15-2.76-2.23-5.14-3.24-7.19l-3.75-9.07L271.45,86.12H206.87l32.29,77.95,32.29,78,29.82,72a2.68,2.68,0,0,0,4.94,0l32.45-77.67A1.36,1.36,0,0,0,338.15,234.77Z"/>
    </svg>
  )
}
