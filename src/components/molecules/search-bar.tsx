"use client";

import { RHFTextField } from "@/components/rhf/rhf-text-field";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { useQueryParams } from "@/hooks/use-query-params";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { memo, useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";

import type { JSX } from "react/jsx-runtime";

type QuerySearchBarProps = {
  mode?: "submit" | "auto";
  className?: string;
};

type QuerySearchBarType = (props: QuerySearchBarProps) => JSX.Element;

const FormSchema = z.object({
  search: z.string().optional(),
});

const QuerySearchBar: QuerySearchBarType = ({ mode }) => {
  const [_, setQuery] = useQueryParams();

  const defaultState = useMemo(() => {
    return {
      search: _?.search || "",
    };
  }, [_]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultState,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) =>
    setQuery({ ...values, page: "1" });

  // AUTO
  const watchedData = useWatch({
    control: form.control,
    defaultValue: defaultState,
  });

  const debounced = useDebouncedCallback(form.handleSubmit(onSubmit), 1000);

  useEffect(() => {
    if (mode === "submit") return;

    if (form.formState.isDirty || form.formState.isValid) {
      debounced();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedData]);

  console.log("heavy");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`p-1 sm:space-y-6 ${"w-full"}
        `}
      >
        <RHFTextField
          control={form.control}
          name="search"
          placeholder="Search tasks ..."
          icon={<Search className="size-[16px] self-center text-neutral-4" />}
          styles={{
            inputClassName:
              "h-[48px] w-fit w-[150px] md:w-auto placeholder:text-custom-medium",
          }}
        />
      </form>
    </Form>
  );
};

const MemoizedQuerySearchBar = memo((props: QuerySearchBarProps) => {
  return <QuerySearchBar {...props} />;
});

MemoizedQuerySearchBar.displayName = "MemoizedQuerySearchBar";

export { MemoizedQuerySearchBar, QuerySearchBar };
export type { QuerySearchBarProps, QuerySearchBarType };
