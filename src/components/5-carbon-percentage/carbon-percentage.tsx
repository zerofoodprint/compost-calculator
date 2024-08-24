import { Body } from "../body";
import { Button } from "../button";
import { Container } from "../container";
import { Footer } from "../footer";
import { Header } from "../header";

interface CarbonPercentageProps {
  data: {
    carbonPercent: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreviousStep: () => void;
}

export function CarbonPercentage({
  data,
  handleInputChange,
  handlePreviousStep,
}: CarbonPercentageProps) {
  return (
    <Container>
      <Body>
        <Header
          title="Carbon percentage"
          subtitle="What is the percent of carbon in the chosen  material?"
        />
        <fieldset
          aria-label="Carbon percentage amount"
          className="w-full sm:w-auto"
        >
          <div className="flex max-w-2xl items-center rounded-lg border bg-white py-1 pl-3 pr-1.5 shadow-lg shadow-green-900 sm:flex sm:space-x-3 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-900/20">
            <div className="w-full">
              <label
                htmlFor="carbon_percentage"
                className="block text-sm font-medium"
              >
                <span className="sr-only">Carbon percentage amount</span>
              </label>
              <input
                className="block w-20 rounded-lg border-transparent px-4 py-3 text-center text-neutral-800 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:border-transparent dark:bg-neutral-900 dark:text-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus-visible:ring-neutral-600"
                id="carbon_percentage"
                name="carbonPercent"
                onChange={handleInputChange}
                placeholder="0"
                step="any"
                type="number"
                min="0"
                value={data.carbonPercent}
              />
            </div>
            <div className="flex min-w-fit flex-grow items-center rounded-lg bg-gray-200 px-4 py-2.5 text-gray-500">
              %
            </div>
          </div>
        </fieldset>
      </Body>

      <Footer>
        <Button onClick={handlePreviousStep} type="button">
          Previous
        </Button>
        <Button
          disabled={
            !data.carbonPercent || Number.parseInt(data.carbonPercent) <= 0
          }
          tabIndex={
            data.carbonPercent && Number.parseInt(data.carbonPercent) > 0
              ? 0
              : -1
          }
          type="submit"
        >
          Finish
        </Button>
      </Footer>
    </Container>
  );
}
