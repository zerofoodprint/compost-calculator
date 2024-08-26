import { Calculator } from "@/components/calculator";

export default function Home() {
  return (
    <main className="h-full bg-accent-cream p-8 font-sans dark:bg-black">
      <Calculator className="rounded-3xl" />
    </main>
  );
}
