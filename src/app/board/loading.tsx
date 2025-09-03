import { Loader } from "@/components/icons/loader";
import type { JSX } from "react";

type LoadingProps = {};

type LoadingType = (props: LoadingProps) => JSX.Element;

const Loading: LoadingType = () => {
  return <Loader />;
};

export default Loading;
export type { LoadingProps, LoadingType };
