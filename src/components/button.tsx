import clsx from "clsx";
import type { ComponentProps } from "react";
import { LoadingButton } from "./loading-button";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  disabled = false,
  ...rest
}: ButtonProps & ComponentProps<"button">) {
  return (
    <LoadingButton
      className={clsx(
        "rounded-full px-10 py-3",
        "font-semibold",
        "bg-yellow-400 text-green-900",
        "dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white",
        "transition-all duration-150 ease-out",
        "hover:-translate-y-0.5",
        disabled && "pointer-events-none cursor-not-allowed opacity-30",
        !disabled && "opacity-100",
      )}
      {...rest}
      disabled={disabled}
    >
      {children}
    </LoadingButton>
  );
}
