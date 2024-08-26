import type { Data } from "@/components/calculator";

const defaultData: Data = {
  climate: "temperate", // can be "arid", "mediterranean", "temperate", or "nordic"
  zip: "",
  currentAmount: "less", // can be "less", "equal", or "greater"
  ratio: "less", // can be "greater", or "less"
  estimatedAmount: "4",
  carbonPercent: "15",
};

export const calculate = (data: Data = defaultData): number => {
  const { climate, currentAmount, ratio, estimatedAmount, carbonPercent } =
    data;

  const B2 = 0;
  const C2 = 0;
  const D2 = 1;
  const B7 = 1.7;
  const C7 = 1;
  const D7 = 0.5;
  const B11 = 0.2464;
  const C11 = 0.3248;
  const D11 = 0.4032;
  const E11 = 0.56;
  const B12 = 0.3479;
  const C12 = 0.4473;
  const D12 = 0.4828;
  const E12 = 0.71;
  const B16 = 0.6;
  const C16 = 1;

  let B6 = 0;
  let C6 = 0;
  let D6 = 0;
  let B10 = 0;
  let C10 = 0;
  let D10 = 0;
  let E10 = 0;
  let B15 = 0;
  let C15 = 0;

  if (currentAmount === "less") {
    B6 = 1;
  } else if (currentAmount === "equal") {
    C6 = 1;
  } else {
    D6 = 1;
  }

  if (climate === "arid") {
    B10 = 1;
  } else if (climate === "mediterranean") {
    C10 = 1;
  } else if (climate === "temperate") {
    D10 = 1;
  } else {
    E10 = 1;
  }

  if (ratio === "greater") {
    B15 = 1;
  } else {
    C15 = 1;
  }

  const part1 =
    B2 *
      (B6 * B7 + C6 * C7 + D6 * D7) *
      (B10 * B11 + C10 * C11 + D10 * D11 + E10 * E11) *
      (B15 * B16 + C15 * C16) +
    C2 *
      (B6 * B7 + C6 * C7 + D6 * D7) *
      (B10 * B11 + C10 * C11 + D10 * D11 + E10 * E11) *
      (B15 * B16 + C15 * C16) +
    D2 *
      (B6 * B7 + C6 * C7 + D6 * D7) *
      (B10 * B12 + C10 * C12 + D10 * D12 + E10 * E12) *
      (B15 * B16 + C15 * C16);

  return (
    (((part1 *
      Number.parseFloat(estimatedAmount) *
      Number.parseFloat(carbonPercent)) /
      100) *
      44) /
    12
  );
};
