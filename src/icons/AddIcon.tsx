import { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="inherit"
    {...props}
  >
    <path
      fill="inherit"
      d="M11.322 7.38H7.179v4.143H5.464V7.381H1.322V5.666h4.142V1.523H7.18v4.143h4.143v1.715Z"
    />
  </svg>
);
export default AddIcon;
