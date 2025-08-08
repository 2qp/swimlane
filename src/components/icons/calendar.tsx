const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M19 6.73H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1m-14-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-12a3 3 0 0 0-3-3z"
      clipRule="evenodd"
    ></path>
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M10 12.73a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-3 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zM7 2.73a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1"
      clipRule="evenodd"
    ></path>
  </svg>
);

export { CalendarIcon };
