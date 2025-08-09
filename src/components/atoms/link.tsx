"use client";

import NextLink from "next/link";

import type { LinkProps } from "next/link";
import type { ComponentProps } from "react";
import type { JSX } from "react/jsx-dev-runtime";

type LinkType = (props: ComponentProps<typeof NextLink>) => JSX.Element;

const Link: LinkType = (props) => {
  //

  return <NextLink {...props} prefetch={false} />;
};

export { Link };
export type { LinkProps, LinkType };
