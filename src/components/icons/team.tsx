const TeamIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M12 13.73a7 7 0 0 0-7 7v2a1 1 0 1 1-2 0v-2a9 9 0 1 1 18 0v2a1 1 0 1 1-2 0v-2a7 7 0 0 0-7-7"
      clipRule="evenodd"
    ></path>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M12 11.73a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12"
      clipRule="evenodd"
    ></path>
  </svg>
);

export { TeamIcon };
