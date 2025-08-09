import { Loader2 } from "lucide-react";

import type { JSX } from "react";

type LoaderProps = {};

type LoaderType = (props: LoaderProps) => JSX.Element;

const Loader: LoaderType = () => {
  return <Loader2 className="animate-spin" />;
};

export { Loader };
export type { LoaderProps, LoaderType };
