import { Skeleton } from "../ui/skeleton";

import type { JSX } from "react";

type SkeletonLoaderProps = {};

type SkeletonLoaderType = (props: SkeletonLoaderProps) => JSX.Element;

const SkeletonLoader: SkeletonLoaderType = () => {
  return <Skeleton className="h-[48px] w-[150px] " />;
};

export { SkeletonLoader };
export type { SkeletonLoaderProps, SkeletonLoaderType };
