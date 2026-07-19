import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { LandownerForm } from "./_components/landowner-form";

export const metadata: Metadata = {
  title: "Landowner Partnerships & Joint Ventures | Avenue Constructions",
  description:
    "Partner with Avenue Constructions Limited. Enter a joint venture development to transform your premium land in Gulshan, Banani, or Bashundhara into a landmark residential asset.",
};

const CO_DEV_STAGES = [
  {
    step: "01",
    title: "Feasibility Study & Technical Audit",
    details: [
      "Digital topographic surveys and structural soil testing.",
      "Seismic zone assessments and microclimate studies.",
      "Optimized land ratio calculations according to current building codes."
    ]
  },
  {
    step: "02",
    title: "Bespoke Architectural Conception",
    details: [
      "Custom layouts oriented around southern wind directions.",
      "Cantilevered balconies and deep wooden louvers for cooling.",
      "Green lobby gardens and extensive rooftop community landscaping."
    ]
  },
  {
    step: "03",
    title: "Compliance & Government Approvals",
    details: [
      "Hassle-free management of all RAJUK permits and zoning clearances.",
      "Local municipality approvals and NBR tax code alignment.",
      "Strict compliance validation to guarantee zero legal hurdles."
    ]
  },
  {
    step: "04",
    title: "Precision Construction & Handover",
    details: [
      "Execution using 60-grade steel (BSRM/AKS) and Crown cement.",
      "Constant material inspection and structural monitoring.",
      "Bank-backed funding to guarantee completion and handover on schedule."
    ]
  }
];

export default function LandownerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
          
          {/* Header block */}
          <header className="flex flex-col gap-5 max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
              Joint Venture Partnerships
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-text-primary uppercase">
              Transform Your Land <br />
              <span className="italic font-light text-accent">Into a Landmark</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-text-secondary font-light max-w-xl">
              At Avenue Constructions Limited, we respect the emotional value of your ancestral land. 
              We partner with Dhaka's landowners to craft architectural sanctuaries that honor family heritage, assure structural durability, and maximize investment returns.
            </p>
          </header>

          {/* Form + Explainer Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Explainer Block */}
            <div className="lg:col-span-6 flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                  The JV Framework
                </span>
                <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-text-primary">
                  Our Development Stages
                </h2>
              </div>

              <div className="flex flex-col gap-10">
                {CO_DEV_STAGES.map((stage) => (
                  <div key={stage.step} className="flex gap-6 items-start border-b border-black/5 pb-6 last:border-b-0">
                    <span className="font-serif text-2xl text-accent font-light mt-0.5">
                      {stage.step}
                    </span>
                    <div className="flex flex-col gap-2.5">
                      <h3 className="font-serif text-lg uppercase tracking-wide text-text-primary">
                        {stage.title}
                      </h3>
                      <ul className="flex flex-col gap-1.5">
                        {stage.details.map((detail, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-text-secondary font-light flex items-start gap-2">
                            <span className="text-accent mt-1">&middot;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Form Block */}
            <div className="lg:col-span-6 double-bezel-outer w-full">
              <div className="double-bezel-inner p-8 md:p-10 bg-surface/40 flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl uppercase tracking-wide text-text-primary">
                    Share Your Property
                  </h3>
                  <p className="text-[10px] text-text-secondary uppercase tracking-wider font-light mt-1">
                    Direct Joint Venture Plot Submission
                  </p>
                </div>
                <div className="border-t border-black/5 pt-6">
                  <LandownerForm />
                </div>
              </div>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
