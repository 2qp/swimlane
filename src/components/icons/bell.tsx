import * as React from "react";

const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <g clipPath="url(#clip0_9_194)">
      <path
        fill={props.fill}
        d="M21 18.753a.884.884 0 0 1-.884.884H3.884a.884.884 0 0 1 0-1.768H3.9v-6.158C3.9 7.303 7.527 3.73 12 3.73s8.1 3.573 8.1 7.98v6.16h.016c.488 0 .884.395.884.883M5.7 17.87h12.6v-6.158c0-3.432-2.82-6.214-6.3-6.214S5.7 8.28 5.7 11.711zm4.276 3.617c-.245-.495.222-.965.774-.965h2.5c.552 0 1.019.47.774.965a2.2 2.2 0 0 1-.433.597A2.27 2.27 0 0 1 12 22.73a2.27 2.27 0 0 1-1.591-.647 2.2 2.2 0 0 1-.433-.597"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_9_194">
        <path fill="#fff" d="M0 .73h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export { BellIcon };
