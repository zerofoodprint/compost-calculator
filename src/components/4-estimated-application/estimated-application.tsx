import { Body } from "../body";
import { Button } from "../button";
import { Container } from "../container";
import { Footer } from "../footer";
import { Header } from "../header";

interface EstimatedApplicationProps {
  data: {
    estimatedAmount: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreviousStep: () => void;
}

export function EstimatedApplication({
  data,
  handleInputChange,
  handlePreviousStep,
}: EstimatedApplicationProps) {
  return (
    <Container>
      <Body>
        <Header
          title="Estimated Application"
          subtitle="How many tons of compost per acre will you apply this year? (tons per acre)"
        />
        <fieldset
          aria-label="Estimated application amount"
          className="w-full sm:w-auto"
        >
          <div className="flex max-w-2xl items-center rounded-lg border bg-white py-1 pl-3 pr-1.5 shadow-lg shadow-green-900 sm:flex sm:space-x-3 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-neutral-900/20">
            <div className="w-full">
              <label
                htmlFor="estimated_amount"
                className="block text-sm font-medium"
              >
                <span className="sr-only">Estimated application amount</span>
              </label>
              <input
                className="block w-20 rounded-lg border-transparent px-4 py-3 text-center text-base text-neutral-800 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:border-transparent dark:bg-neutral-900 dark:text-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus-visible:ring-neutral-600"
                id="estimated_amount"
                name="estimatedAmount"
                onChange={handleInputChange}
                placeholder="0"
                step="any"
                type="number"
                min="0"
                value={data.estimatedAmount}
              />
            </div>
            <div className="flex min-w-fit flex-grow items-center rounded-lg bg-gray-200 px-4 py-2.5 text-gray-500">
              t/ac
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
            !data.estimatedAmount || Number.parseInt(data.estimatedAmount) <= 0
          }
          tabIndex={
            data.estimatedAmount && Number.parseInt(data.estimatedAmount) > 0
              ? 0
              : -1
          }
          type="submit"
        >
          Next
        </Button>
      </Footer>
    </Container>
  );
}
