import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { CLIMATE_OPTIONS } from "../../helpers/climate-options";
import { Body } from "../body";
import { Button } from "../button";
import { Container } from "../container";
import { Footer } from "../footer";
import { Header } from "../header";
import { LoadingButton } from "../loading-button";

interface ClimateProps {
  data: {
    climate: string;
    zip: string;
  };
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Climate({ data, handleInputChange }: ClimateProps) {
  const [loading, setLoading] = useState(false);

  const handleExampleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <Body>
        <Header
          title="Choose your climate"
          subtitle={
            <>
              Climate classification is based on seasonal rainfall and
              temperature patterns. Read more about the{" "}
              <a
                href="https://en.wikipedia.org/wiki/K%C3%B6ppen_climate_classification"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Köppen climate classification
              </a>
              .
            </>
          }
        />
        <fieldset
          aria-label="Climate classifications"
          className="w-full sm:w-auto"
        >
          <div className="flex w-full flex-col rounded-md md:flex-row md:-space-x-px">
            {Object.entries(CLIMATE_OPTIONS).map(([key, value], index) => (
              <label
                aria-label={value.title}
                className={clsx(
                  "relative flex cursor-pointer border bg-white p-4 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800",
                  index === 0 &&
                    "rounded-tl-md rounded-tr-md md:rounded-bl-md md:rounded-tl-md md:rounded-tr-none",
                  index === Object.keys(CLIMATE_OPTIONS).length - 1 &&
                    "rounded-bl-md rounded-br-md md:rounded-bl-none md:rounded-br-md md:rounded-tr-md",
                )}
                key={key}
              >
                <input
                  checked={data.climate === key}
                  className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded-md border-neutral-300 text-green-600 accent-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                  name="climate"
                  onChange={handleInputChange}
                  type="radio"
                  value={key}
                />
                <span className="ml-3 flex flex-col">
                  <span className="block select-none font-medium text-neutral-600 dark:text-neutral-300">
                    {value.title}
                  </span>
                </span>
              </label>
            ))}
          </div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton className="mt-2 inline-flex items-center gap-2 rounded-md py-1.5 text-sm font-normal focus-visible:ring-1 focus-visible:ring-white active:opacity-100">
                  Or <span className="underline">find your climate</span> by zip
                  code
                  <MagnifyingGlassIcon className={clsx("size-5")} />
                </PopoverButton>
                <PopoverBackdrop
                  className="fixed inset-0 bg-black/25 transition duration-300 ease-out data-[closed]:opacity-0"
                  transition
                />
                <AnimatePresence>
                  {open && (
                    <PopoverPanel
                      anchor={{ to: "top start", offset: "16px" }}
                      as={motion.div}
                      className="flex w-96 origin-bottom-left flex-col rounded-3xl bg-green-900 shadow-lg dark:bg-neutral-800"
                      static
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          type: "spring",
                          duration: "0.25",
                        },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: {
                          type: "spring",
                          duration: "0.25",
                        },
                      }}
                    >
                      <div className="flex flex-col gap-3 p-8 text-accent-cream">
                        <div>
                          <label
                            className="block text-lg font-medium"
                            htmlFor="zip"
                          >
                            Zip Code
                          </label>
                          <p>Find your climate classification.</p>
                        </div>
                        <div className="flex max-w-2xl items-center rounded-lg border bg-white p-3 shadow-lg shadow-green-900 sm:flex sm:space-x-3 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow-white/5">
                          <div className="w-full">
                            <label
                              htmlFor="zip"
                              className="block text-sm font-medium"
                            >
                              <span className="sr-only">Zip Code</span>
                            </label>
                            <input
                              autoComplete="postal-code"
                              className="block w-full rounded-lg border-transparent px-4 py-3 text-base text-neutral-800 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 dark:border-transparent dark:bg-neutral-900 dark:text-neutral-200 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus-visible:ring-neutral-600"
                              id="zip"
                              name="zip"
                              onChange={handleInputChange}
                              placeholder="Your zip code"
                              type="text"
                              value={data.zip}
                            />
                          </div>
                          <div className="flex min-w-fit flex-grow items-center">
                            <LoadingButton
                              className="flex items-center rounded-lg border border-transparent bg-green-600 px-4 py-3 text-sm font-medium hover:bg-green-700 focus:bg-green-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-white dark:focus:bg-neutral-700 dark:focus:text-white"
                              loading={loading}
                              onClick={handleExampleLoading}
                            >
                              <div className="flex items-center justify-center gap-x-2">
                                <div className="mt-px flex">Find</div>
                                <svg
                                  className="size-4 shrink-0"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <title>Search icon</title>
                                  <circle cx="11" cy="11" r="8" />
                                  <path d="m21 21-4.3-4.3" />
                                </svg>
                              </div>
                            </LoadingButton>
                          </div>
                        </div>
                        {/* <p className="text-sm text-yellow-100 dark:text-neutral-300">
                          Hmmmm…we couldn’t seem to find your climate
                          classification. Please choose from the list instead.
                        </p> */}
                      </div>
                    </PopoverPanel>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </fieldset>
      </Body>

      <Footer>
        <Button
          disabled={!data.climate}
          tabIndex={data.climate ? 0 : -1}
          type="submit"
        >
          Next
        </Button>
      </Footer>
    </Container>
  );
}
