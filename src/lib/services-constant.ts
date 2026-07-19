export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const SERVICES: Service[] = [
  {
    id: "architecture",
    number: "01",
    title: "Architectural Design",
    description:
      "Sculpting minimalist volumes and high-concept structural layouts that respond to sunlight, wind, and landscape conditions.",
    imageUrl: "/images/services/service_architecture.png",
  },
  {
    id: "development",
    number: "02",
    title: "Luxury Development",
    description:
      "Executing premium builds with master-craftsman precision, utilizing premium materials like structural fair-faced concrete, teak wood paneling, and imported marble.",
    imageUrl: "/images/services/service_development.png",
  },
  {
    id: "advisory",
    number: "03",
    title: "Property Advisory",
    description:
      "Providing discrete acquisition intelligence for high-net-worth individuals seeking signature assets and architectural masterpieces.",
    imageUrl: "/images/services/service_advisory.png",
  },
  {
    id: "investment",
    number: "04",
    title: "Portfolio Management",
    description:
      "Optimizing premium real estate assets through custom tenancy strategies, structural restorations, and asset valuations.",
    imageUrl: "/images/services/service_investment.png",
  },
];
