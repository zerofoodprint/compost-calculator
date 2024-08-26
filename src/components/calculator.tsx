"use client";

import { useState } from "react";

import clsx from "clsx";
import type { CARBON_NITROGEN_OPTIONS } from "../helpers/carbon-nitrogen-options";
import type { CLIMATE_OPTIONS } from "../helpers/climate-options";
import type { CURRENT_APPLICATION_OPTIONS } from "../helpers/current-application-options";
import { Climate } from "./1-climate/climate";
import { CurrentApplication } from "./2-current-application/current-application";
import { CarbonNitrogen } from "./3-carbon-nitrogen";
import { EstimatedApplication } from "./4-estimated-application";
import { CarbonPercentage } from "./5-carbon-percentage";
import { Result } from "./6-result";
import { Navigation } from "./navigation";

export interface Data {
  carbonPercent: string;
  climate: keyof typeof CLIMATE_OPTIONS | string;
  currentAmount: keyof typeof CURRENT_APPLICATION_OPTIONS | string;
  estimatedAmount: string;
  ratio: keyof typeof CARBON_NITROGEN_OPTIONS | string;
  zip: string;
}

const defaultData: Data = {
  carbonPercent: "",
  climate: "",
  currentAmount: "",
  estimatedAmount: "",
  ratio: "",
  zip: "",
};

interface CalculatorProps {
  className?: string;
}

export function Calculator({ className }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(defaultData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNextStep();
  };

  const reset = () => {
    setStep(1);
    setData(defaultData);
  };

  return (
    <div
      className={clsx(
        "flex w-full flex-col items-start bg-green-950 px-16 py-14 text-left text-accent-cream dark:bg-neutral-900",
        className,
      )}
    >
      {step !== 6 && (
        <>
          <h1 className="mb-12 text-left text-5xl font-semibold">
            Compost Calculator
          </h1>

          <Navigation step={step} setStep={setStep} />
        </>
      )}
      <form
        className="flex w-full flex-col items-start gap-10"
        onSubmit={handleSubmit}
      >
        {step === 1 && (
          <Climate data={data} handleInputChange={handleInputChange} />
        )}
        {step === 2 && (
          <CurrentApplication
            data={data}
            handleInputChange={handleInputChange}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {step === 3 && (
          <CarbonNitrogen
            data={data}
            handleInputChange={handleInputChange}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {step === 4 && (
          <EstimatedApplication
            data={data}
            handleInputChange={handleInputChange}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {step === 5 && (
          <CarbonPercentage
            data={data}
            handleInputChange={handleInputChange}
            handlePreviousStep={handlePreviousStep}
          />
        )}
      </form>
      {step === 6 && <Result data={data} reset={reset} />}
    </div>
  );
}
