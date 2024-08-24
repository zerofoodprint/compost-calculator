import { SunIcon } from "@heroicons/react/20/solid";
import type { Data } from "../../App";
import { calculate } from "../../helpers/calculate";
import { Button } from "../button";

interface ResultProps {
  data: Data;
  reset: () => void;
}

export function Result({ data, reset }: ResultProps) {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center rounded-3xl px-12 pb-24 pt-20 text-center text-white dark:bg-neutral-800 dark:text-white">
      <h2 className="mb-2 self-stretch text-xl font-semibold md:text-2xl">
        Thank you!
      </h2>
      <p className="mb-10 text-sm md:text-base">
        The amount of CO<sub>2</sub> stored is:
      </p>
      <h3 className="mb-14 text-3xl font-semibold md:text-5xl">
        {calculate(data).toFixed(1)} tons per acre
      </h3>
      <div className="mb-4">
        <Button onClick={() => alert("Coming soon…")}>
          <div className="flex gap-2">
            <SunIcon className="h-6 w-6" />
            Make these results public
          </div>
        </Button>
      </div>
      <div className="text-center">
        <button
          className="offset text-sm underline"
          onClick={reset}
          type="button"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
