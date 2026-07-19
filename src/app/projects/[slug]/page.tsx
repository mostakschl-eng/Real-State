import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { ImageGallery } from "@/components/shared/image-gallery";
import { PROPERTIES } from "@/lib/properties-constant";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);
  if (!property)
    return { title: "Project not found | Avenue Construction Limited" };
  return {
    title: `${property.name} | Avenue Construction Limited`,
    description: property.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const currentIndex = PROPERTIES.findIndex((p) => p.slug === slug);
  const nextProperty = PROPERTIES[(currentIndex + 1) % PROPERTIES.length];
  const prevProperty =
    PROPERTIES[(currentIndex - 1 + PROPERTIES.length) % PROPERTIES.length];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-canvas pt-32 pb-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20">
          {/* Back Navigation + status row */}
          <div className="flex items-center justify-between">
            <Link
              href="/projects"
              className="text-[10px] uppercase tracking-[0.25em] font-mono text-text-secondary hover:text-accent transition-colors"
            >
              &larr; Back to Portfolio
            </Link>
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
              {property.architecturalDetails.status}
            </span>
          </div>

          {/* Title block */}
          <header className="flex flex-col gap-5">
            <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
              {property.location} · {property.region}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-text-primary uppercase">
              {property.name}
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-text-secondary max-w-[40ch]">
              {property.tagline}
            </p>
          </header>

          {/* Image gallery */}
          <ImageGallery
            images={property.gallery}
            label={`${property.name} gallery`}
          />

          {/* Intro narrative + quick specs */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                The Narrative
              </span>
              {property.narrative.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-sm md:text-base leading-relaxed text-text-secondary font-light ${
                    index === 0
                      ? "first-letter:font-serif first-letter:text-5xl first-letter:font-light first-letter:text-text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-[0.85]"
                      : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="lg:col-span-5 double-bezel-outer">
              <div className="double-bezel-inner p-8 md:p-10 flex flex-col gap-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.25em] font-mono text-text-secondary mb-5">
                    Estate Specifications
                  </h3>
                  <dl className="grid grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-xl overflow-hidden">
                    {property.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="bg-surface p-4 flex flex-col gap-1.5"
                      >
                        <dt className="text-[9px] uppercase tracking-[0.22em] text-text-secondary">
                          {spec.label}
                        </dt>
                        <dd className="font-mono text-sm text-text-primary tracking-wide">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="border-t border-black/5 pt-6">
                  <h3 className="text-[10px] uppercase tracking-[0.25em] font-mono text-text-secondary mb-4">
                    Architectural Record
                  </h3>
                  <dl className="flex flex-col gap-3 text-xs">
                    <div className="flex justify-between gap-4">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        Typology
                      </dt>
                      <dd className="text-text-primary text-right">
                        {property.architecturalDetails.type}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-black/5 pt-3">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        Design Atelier
                      </dt>
                      <dd className="text-text-primary text-right">
                        {property.architecturalDetails.architect}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-black/5 pt-3">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        Orientation
                      </dt>
                      <dd className="text-text-primary text-right">
                        {property.architecturalDetails.plotOrientation}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-black/5 pt-3">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        Year
                      </dt>
                      <dd className="font-mono text-text-primary text-right">
                        {property.architecturalDetails.year}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="border-t border-black/5 pt-6">
                  <h3 className="text-[10px] uppercase tracking-[0.25em] font-mono text-text-secondary mb-4">
                    Regulatory & Structural Compliance
                  </h3>
                  <dl className="flex flex-col gap-3 text-xs">
                    <div className="flex justify-between gap-4">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        RAJUK Permit
                      </dt>
                      <dd className="font-mono text-text-primary text-right font-medium">
                        D-0006453-10-25
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-black/5 pt-3">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        IEB Struct Engineer
                      </dt>
                      <dd className="text-text-primary text-right">
                        Engr. Maruf Ahmed
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-black/5 pt-3">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        IAB Architect
                      </dt>
                      <dd className="text-text-primary text-right">
                        Sharmin Afroz Shumi
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-black/5 pt-3">
                      <dt className="uppercase tracking-wider text-text-secondary/80">
                        TIN Code
                      </dt>
                      <dd className="font-mono text-text-primary text-right">
                        162947654103
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>
          </section>

          {/* Highlights feature row */}
          <section className="flex flex-col gap-8 border-t border-black/5 pt-16">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Defining Features
              </span>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.05] text-text-primary uppercase">
                What makes this{" "}
                <span className="italic font-light text-accent">residence</span>
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden">
              {property.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="bg-surface p-6 md:p-8 flex items-start gap-4"
                >
                  <span className="font-mono text-xs text-accent mt-1">
                    [+]
                  </span>
                  <span className="text-sm md:text-base text-text-primary font-light leading-relaxed">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Materials + Amenities split */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-2xl uppercase tracking-wide text-text-primary">
                Material Library
              </h3>
              <ul className="flex flex-col gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden">
                {property.materials.map((material) => (
                  <li
                    key={material}
                    className="bg-surface px-6 py-4 flex justify-between items-center"
                  >
                    <span className="text-sm text-text-primary font-light">
                      {material}
                    </span>
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">
                      Specified
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-serif text-2xl uppercase tracking-wide text-text-primary">
                Amenities
              </h3>
              <ul className="flex flex-col gap-px bg-black/5 border border-black/5 rounded-2xl overflow-hidden">
                {property.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="bg-surface px-6 py-4 flex justify-between items-center"
                  >
                    <span className="text-sm text-text-primary font-light">
                      {amenity}
                    </span>
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">
                      Included
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Architectural Structure & Floor Plans Section */}
          {property.floorPlans && property.floorPlans.length > 0 && (
            <section className="flex flex-col gap-12 border-t border-black/5 pt-16">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                  Blueprint & Layouts
                </span>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.05] text-text-primary uppercase">
                  Architectural <span className="italic font-light text-accent">Structure</span>
                </h2>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light max-w-xl">
                  Inspect the physical layouts and structural blueprint details designed for maximum cross-ventilation, open-plan flow, and solar-tracking light.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {property.floorPlans.map((plan, idx) => (
                  <div key={idx} className="double-bezel-outer flex flex-col gap-6">
                    <div className="double-bezel-inner bg-surface/50 p-6 md:p-8 flex flex-col gap-6">
                      <h3 className="font-serif text-xl uppercase tracking-wider text-text-primary border-b border-black/5 pb-4">
                        {plan.title}
                      </h3>
                      
                      {/* Image container */}
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-black/5 bg-white shadow-xs">
                        <Image
                          src={plan.image}
                          alt={plan.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-contain p-2 opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>

                      {/* Detail points */}
                      <ul className="flex flex-col gap-2 mt-2">
                        {plan.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-3 text-xs md:text-sm text-text-secondary font-light">
                            <span className="text-accent font-semibold font-mono">&middot;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Location insight */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center border-t border-black/5 pt-16">
            <div className="lg:col-span-5 double-bezel-outer aspect-4/5 rounded-4xl overflow-hidden">
              <div className="double-bezel-inner relative w-full h-full">
                <Image
                  src={property.gallery[1]?.src ?? property.image}
                  alt={`${property.name} location context`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover brightness-95"
                />
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent">
                Location Context
              </span>
              <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-[1.05] text-text-primary uppercase max-w-[18ch]">
                Situated in{" "}
                <span className="italic font-light text-accent">
                  {property.region}
                </span>
              </h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light max-w-[55ch]">
                {property.locationInsight}
              </p>
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-accent text-white px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-text-primary active:scale-[0.98]"
              >
                Request a Private Viewing
                <span aria-hidden className="text-sm">
                  &rarr;
                </span>
              </Link>
            </div>
          </section>

          {/* Photo Grid Section */}
          <section className="flex flex-col gap-12 border-t border-black/5 pt-16">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.05] text-text-primary">
                Visual Theater
              </h2>
            </div>

            {/* 8-Image Staggered Grid - Exact Grid Style */}
            <div className="flex justify-center max-w-6xl mx-auto pb-24 w-full px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 items-start w-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-3 md:gap-5 md:mt-24">
                  <div className="relative w-full aspect-3/4 overflow-hidden group">
                    <Image
                      src={property.gallery[0]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="relative w-full aspect-4/5 overflow-hidden group">
                    <Image
                      src={property.gallery[1]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-3 md:gap-5">
                  <div className="relative w-full aspect-4/5 overflow-hidden group">
                    <Image
                      src={property.gallery[2]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="relative w-full aspect-3/4 overflow-hidden group">
                    <Image
                      src={property.gallery[3]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-3 md:gap-5 md:mt-16">
                  <div className="relative w-full aspect-4/5 overflow-hidden group">
                    <Image
                      src={property.gallery[0]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="relative w-full aspect-3/4 overflow-hidden group">
                    <Image
                      src={property.gallery[1]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-3 md:gap-5 md:mt-32">
                  <div className="relative w-full aspect-3/4 overflow-hidden group">
                    <Image
                      src={property.gallery[2]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="relative w-full aspect-4/5 overflow-hidden group">
                    <Image
                      src={property.gallery[3]?.src ?? property.image}
                      alt="Gallery image"
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prev / Next navigation */}
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-black/5 pt-16">
            <Link
              href={`/projects/${prevProperty.slug}`}
              className="group double-bezel-outer transition-colors duration-400 hover:bg-accent/5 hover:border-accent/20"
            >
              <div className="double-bezel-inner p-6 md:p-8 flex items-center gap-5 bg-surface">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={prevProperty.image}
                    alt={prevProperty.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-text-secondary">
                    Previous
                  </span>
                  <span className="font-serif text-base md:text-lg uppercase tracking-wide text-text-primary group-hover:text-accent transition-colors truncate">
                    {prevProperty.name}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="ml-auto text-text-secondary text-lg group-hover:text-accent transition-colors"
                >
                  &larr;
                </span>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProperty.slug}`}
              className="group double-bezel-outer transition-colors duration-400 hover:bg-accent/5 hover:border-accent/20"
            >
              <div className="double-bezel-inner p-6 md:p-8 flex items-center gap-5 bg-surface">
                <span
                  aria-hidden
                  className="text-text-secondary text-lg group-hover:text-accent transition-colors"
                >
                  &rarr;
                </span>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={nextProperty.image}
                    alt={nextProperty.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 min-w-0 md:items-end md:text-right">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-text-secondary">
                    Up Next
                  </span>
                  <span className="font-serif text-base md:text-lg uppercase tracking-wide text-text-primary group-hover:text-accent transition-colors truncate">
                    {nextProperty.name}
                  </span>
                </div>
              </div>
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}
