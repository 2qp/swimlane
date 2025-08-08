import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

type ParamRecord = {
  search?: string;
};

type SetQueryParamsProps = { [key: string]: any } & ParamRecord;
type SetQueryParamsType = (props: SetQueryParamsProps) => void;

type UseQueryParamsProps = {};
type UseQueryParamsTuple = [ParamRecord, SetQueryParamsType];
type UseQueryParamsType = (props?: UseQueryParamsProps) => UseQueryParamsTuple;

const useQueryParams: UseQueryParamsType = () => {
  const searchParams = useSearchParams();

  const { replace } = useRouter();
  const pathName = usePathname();

  const currentParams = useMemo(
    () => Object.fromEntries(new URLSearchParams(searchParams).entries()),
    [searchParams]
  );

  // SETTER
  const setQueryParams: SetQueryParamsType = (queryParams) => {
    const mergedParams = {
      //   ...defaultValues,
      ...currentParams,
      ...queryParams,
    };

    const nonEmptyParams = Object.fromEntries(
      Object.entries(mergedParams).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
    );

    const stringParams = Object.fromEntries(
      Object.entries(nonEmptyParams).map(([key, value]) => [key, String(value)])
    );

    const queryString = new URLSearchParams(stringParams).toString();

    if (queryString) {
      replace(`${pathName}?${queryString}`);
      return;
    }

    if (!queryString) {
      replace(pathName);
      return;
    }
  };

  return [currentParams, setQueryParams];
};

export { useQueryParams };
export type { ParamRecord, SetQueryParamsType };
