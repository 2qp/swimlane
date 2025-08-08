import * as React from "react";

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M12 20.73a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
      clipRule="evenodd"
    ></path>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M12 7.73a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1"
      clipRule="evenodd"
    ></path>
  </svg>
);

export { InfoIcon };
