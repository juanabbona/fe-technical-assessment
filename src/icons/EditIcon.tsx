import { SVGProps } from "react";

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.06 2.133a.541.541 0 0 0-.379.157l-.99.99 2.029 2.027.99-.99a.538.538 0 0 0 0-.762L10.443 2.29a.53.53 0 0 0-.384-.157ZM8.113 5.39l.498.497-4.9 4.9h-.497v-.498l4.9-4.9Zm-5.98 4.45 5.98-5.98 2.028 2.027-5.98 5.98H2.132V9.84Z"
      clipRule="evenodd"
    />
  </svg>
);

export default EditIcon;
