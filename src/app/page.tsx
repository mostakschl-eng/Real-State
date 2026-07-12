import { Navbar } from "@/components/shared/navbar";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { PropertiesSlider } from "./_components/properties-slider";
import { Services } from "./_components/services";
import { Team } from "./_components/team";
import { ContactForm } from "./_components/contact-form";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <Navbar />

        <main className="grow">
          <Hero />
          <About />
          <PropertiesSlider />
          <Services />
          <Team />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  );
}
