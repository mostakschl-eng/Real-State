import { Navbar } from "@/components/shared/navbar";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { PropertiesSlider } from "./_components/properties-slider";
import { Locations } from "./_components/locations";
import { Services } from "./_components/services";
import { Team } from "./_components/team";
import { Credentials } from "./_components/credentials";
import { JointVenture } from "./_components/joint-venture";
import { ContactForm } from "./_components/contact-form";
import { Footer } from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        className="min-h-screen bg-canvas z-10 relative"
        suppressHydrationWarning
      >
        <Hero />
        <About />
        <PropertiesSlider />
        <Locations />
        <Services />
        <Team />
        <Credentials />
        <JointVenture />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
