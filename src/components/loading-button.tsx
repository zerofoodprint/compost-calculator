import { ArrowPathIcon } from "@heroicons/react/20/solid";
import type { ComponentProps } from "react";

interface LoadingButtonProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export function LoadingButton({
  children,
  className,
  loading = false,
  ...rest
}: LoadingButtonProps & ComponentProps<"button">) {
  return (
    <button {...rest} className={`${className} relative`} disabled={loading}>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <ArrowPathIcon className="size-5 animate-spin" />
        </span>
      )}

      <span className={loading ? "invisible" : "flex"}>{children}</span>
    </button>
  );
}
