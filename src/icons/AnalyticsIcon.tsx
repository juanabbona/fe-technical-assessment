import { SVGProps } from "react";

const AnalyticsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g fill="#A1A1A1" clipPath="url(#b)">
        <path d="M4.072 7.31H1.714a.393.393 0 0 0-.392.392v3.929c0 .216.175.392.392.392h2.358a.393.393 0 0 0 .392-.392V7.702a.393.393 0 0 0-.392-.393ZM11.929 4.166H9.572a.393.393 0 0 0-.393.393v7.072c0 .216.176.392.393.392h2.357a.393.393 0 0 0 .393-.392V4.559a.393.393 0 0 0-.393-.393ZM8 1.023H5.643a.393.393 0 0 0-.393.393v10.215c0 .216.176.392.393.392H8a.393.393 0 0 0 .393-.392V1.416A.393.393 0 0 0 8 1.023Z" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.822.523h12v12h-12z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M1.322 1.023h11v11h-11z" />
      </clipPath>
    </defs>
  </svg>
);

export default AnalyticsIcon;
