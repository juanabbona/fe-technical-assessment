import { SVGProps } from "react";

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#09090B"
      fillRule="evenodd"
      d="M8.352 2.133H5.648l-.54.541H3.214v1.081h7.57V2.674H8.893l-.541-.54Zm.811 3.245v5.407H4.837V5.378h4.326ZM3.755 4.296h6.49v6.49c0 .594-.487 1.08-1.082 1.08H4.837a1.085 1.085 0 0 1-1.082-1.08v-6.49Z"
      clipRule="evenodd"
    />
  </svg>
);

export default DeleteIcon;
