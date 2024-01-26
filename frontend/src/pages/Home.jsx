import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Divider } from "../components/SectionDivider";

export function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <HowItWorks />
    </>
  );
}
