const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="m2.023 19.128.724-3.261a4 4 0 0 1 1.077-1.96l9.848-9.849a4 4 0 0 1 5.656 0l1.344 1.343a4 4 0 0 1 0 5.657l-9.848 9.848a4 4 0 0 1-1.961 1.077l-3.261.724c-2.144.477-4.056-1.436-3.58-3.58M4.7 16.3l-.725 3.26a1 1 0 0 0 1.193 1.194l3.261-.725c.357-.08.685-.255.95-.507l-4.172-4.171a2 2 0 0 0-.507.949m1.921-2.364 4.172 4.172 5.586-5.586-4.172-4.172zm12.636-4.293-1.464 1.465-4.172-4.172 1.465-1.464a2 2 0 0 1 2.828 0l1.343 1.343a2 2 0 0 1 0 2.828"
      clipRule="evenodd"
    ></path>
  </svg>
);

export { EditIcon };
