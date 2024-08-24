interface NavigationProps {
  step: number;
  setStep: (value: number) => void;
}

export function Navigation({ step, setStep }: NavigationProps) {
  return (
    <>
      {/* Mobile Menu */}
      <select
        className="mb-12 block w-full rounded-lg border border-neutral-300 bg-neutral-50 p-2.5 text-sm text-neutral-900 focus:border-blue-500 focus:ring-blue-500 sm:w-auto lg:hidden dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        name="step-navigation"
        onChange={(e) => setStep(Number.parseInt(e.target.value))}
        value={step}
      >
        <option value="1">1. Climate</option>
        <option value="2">2. Current application</option>
        <option value="3">3. Carbon/Nitrogen ratio</option>
        <option value="4">4. Estimated application</option>
        <option value="5">5. % Carbon</option>
      </select>
      {/* Desktop Menu */}
      <ul className="mb-12 hidden w-full flex-wrap items-end justify-between gap-6 border-b border-b-white/25 lg:flex">
        <li
          className="relative flex min-w-[fit-content] flex-grow items-start opacity-40 data-[active=true]:opacity-100 data-[active=true]:after:absolute data-[active=true]:after:-bottom-px data-[active=true]:after:h-0.5 data-[active=true]:after:w-full data-[active=true]:after:bg-white data-[active=true]:after:content-['']"
          data-active={step === 1}
        >
          <button
            className="w-full pb-4 text-left"
            type="button"
            onClick={() => setStep(1)}
          >
            1. Climate
          </button>
        </li>
        <li
          className="relative flex min-w-[fit-content] flex-grow items-start opacity-40 data-[active=true]:opacity-100 data-[active=true]:after:absolute data-[active=true]:after:-bottom-px data-[active=true]:after:h-0.5 data-[active=true]:after:w-full data-[active=true]:after:bg-white data-[active=true]:after:content-['']"
          data-active={step === 2}
        >
          <button
            className="w-full pb-4 text-left"
            type="button"
            onClick={() => setStep(2)}
          >
            2. Current application
          </button>
        </li>
        <li
          className="relative flex min-w-[fit-content] flex-grow items-start opacity-40 data-[active=true]:opacity-100 data-[active=true]:after:absolute data-[active=true]:after:-bottom-px data-[active=true]:after:h-0.5 data-[active=true]:after:w-full data-[active=true]:after:bg-white data-[active=true]:after:content-['']"
          data-active={step === 3}
        >
          <button
            className="w-full pb-4 text-left"
            type="button"
            onClick={() => setStep(3)}
          >
            3. Carbon/Nitrogen ratio
          </button>
        </li>
        <li
          className="relative flex min-w-[fit-content] flex-grow items-start opacity-40 data-[active=true]:opacity-100 data-[active=true]:after:absolute data-[active=true]:after:-bottom-px data-[active=true]:after:h-0.5 data-[active=true]:after:w-full data-[active=true]:after:bg-white data-[active=true]:after:content-['']"
          data-active={step === 4}
        >
          <button
            className="w-full pb-4 text-left"
            type="button"
            onClick={() => setStep(4)}
          >
            4. Estimated application
          </button>
        </li>
        <li
          className="relative flex min-w-[fit-content] flex-grow items-start opacity-40 data-[active=true]:opacity-100 data-[active=true]:after:absolute data-[active=true]:after:-bottom-px data-[active=true]:after:h-0.5 data-[active=true]:after:w-full data-[active=true]:after:bg-white data-[active=true]:after:content-['']"
          data-active={step === 5}
        >
          <button
            className="w-full pb-4 text-left"
            type="button"
            onClick={() => setStep(5)}
          >
            5. % Carbon
          </button>
        </li>
      </ul>
    </>
  );
}
