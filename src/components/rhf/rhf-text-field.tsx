import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputIcon, InputRoot } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import type { ComponentProps, JSX } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

// see .vscode tw attributes
type RHFTextFieldStyles = {
  inputClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
};

type RHFTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;

  type?: ComponentProps<"input">["type"];
  label?: string;
  placeholder?: string;
  description?: string;

  styles?: RHFTextFieldStyles;

  icon?: JSX.Element;
};

type RHFTextFieldType = <T extends FieldValues>(
  props: RHFTextFieldProps<T>
) => JSX.Element;

const RHFTextField: RHFTextFieldType = ({
  control,
  name,
  label,
  placeholder,
  description,
  styles,
  icon,
  type = "text",
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn(styles?.labelClassName)}>{label}</FormLabel>
          <FormControl>
            <InputRoot className="">
              <InputIcon className="">{icon}</InputIcon>
              <Input
                {...field}
                placeholder={placeholder}
                type={type}
                className={cn(styles?.inputClassName)}
              />
            </InputRoot>
          </FormControl>
          <FormDescription className={cn(styles?.descriptionClassName)}>
            {description}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// MIT Lib : github.com/2qp/ui

export { RHFTextField };
export type { RHFTextFieldProps, RHFTextFieldType };
