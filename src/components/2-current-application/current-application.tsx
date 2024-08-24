import clsx from "clsx";
import { CURRENT_APPLICATION_OPTIONS } from "../../helpers/current-application-options";
import { Body } from "../body";
import { Button } from "../button";
import { Container } from "../container";
import { Footer } from "../footer";
import { Header } from "../header";

interface CurrentApplicationProps {
  data: {
    currentAmount: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePreviousStep: () => void;
}

export function CurrentApplication({
  data,
  handleInputChange,
  handlePreviousStep,
}: CurrentApplicationProps) {
  return (
    <Container>
      <Body>
        <Header
          title="Current Application"
          subtitle={
            <>
              What is the cumulative amount of compost already applied at this
              location?{" "}
              <span className="font-light italic">It’s okay to guess!</span>
            </>
          }
        />
        <fieldset
          aria-label="Current application amount"
          className="w-full sm:w-auto"
        >
          <div className="flex w-full flex-col rounded-md md:flex-row md:-space-x-px">
            {Object.entries(CURRENT_APPLICATION_OPTIONS).map(
              ([key, value], index) => (
                <label
                  aria-label={value.title}
                  className={clsx(
                    "relative flex cursor-pointer border bg-white p-4 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800",
                    index === 0 &&
                      "rounded-tl-md rounded-tr-md md:rounded-bl-md md:rounded-tl-md md:rounded-tr-none",
                    index ===
                      Object.keys(CURRENT_APPLICATION_OPTIONS).length - 1 &&
                      "rounded-bl-md rounded-br-md md:rounded-bl-none md:rounded-br-md md:rounded-tr-md",
                  )}
                  key={key}
                >
                  <input
                    checked={data.currentAmount === key}
                    className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded-md border-neutral-300 text-green-600 accent-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                    name="currentAmount"
                    onChange={handleInputChange}
                    type="radio"
                    value={key}
                  />
                  <span className="ml-3 flex flex-col">
                    <span className="block font-medium text-neutral-600 dark:text-neutral-300">
                      {value.title}
                    </span>
                  </span>
                </label>
              ),
            )}
          </div>
        </fieldset>
      </Body>

      <Footer>
        <Button onClick={handlePreviousStep} type="button">
          Previous
        </Button>
        <Button disabled={!data.currentAmount} type="submit" tabIndex={data.currentAmount ? 0 : -1}>
          Next
        </Button>
      </Footer>
    </Container>
  );
}
