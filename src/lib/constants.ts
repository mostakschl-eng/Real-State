export interface PropertySpec {
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Property {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  description: string;
  narrative: string[];
  price: string;
  image: string;
  gallery: GalleryImage[];
  specs: PropertySpec[];
  highlights: string[];
  materials: string[];
  amenities: string[];
  locationInsight: string;
  architecturalDetails: {
    year: string;
    type: string;
    architect: string;
    status: string;
    plotOrientation: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export const PROPERTIES: Property[] = [
  {
    slug: "the-luminary-oasis",
    name: "The Luminary Oasis",
    tagline: "Botanical modernism in dialogue with light",
    location: "Al Barari, Dubai",
    region: "Inland Botanical Reserve",
    description:
      "A minimalist modernist mansion designed to blur the boundary between structural architecture and botanical landscape.",
    narrative: [
      "The Luminary Oasis was conceived as a quiet instrument for living among greenery. A single continuous travertine plinth folds upward to form the principal living volume, while floor-to-ceiling glazing dissolves the perimeter wall into the surrounding canopy.",
      "Solar orientation drives the entire plan. Deep cantilevered overhangs track the high summer sun, admitting low winter light into a triple-height central atrium. At dusk, concealed linear grazers trace the concrete ribs, turning the structure into a luminous lantern visible across the reserve.",
      "Every interior surface was specified by the Avenue Construction Limited material library: honed Italian travertine floors, brushed oak wall panels, and hand-troweled microcement ceilings that absorb and redistribute daylight without glare.",
    ],
    price: "$18,500,000",
    image: "/images/properties/prop_luminary.png",
    gallery: [
      {
        src: "/images/properties/prop_luminary.png",
        alt: "The Luminary Oasis principal elevation at dusk",
        caption: "Principal elevation at dusk",
      },
      {
        src: "/images/services/service_architecture.png",
        alt: "Travertine atrium and floating staircase",
        caption: "Travertine atrium and floating stair",
      },
      {
        src: "/images/services/service_development.png",
        alt: "Raw concrete detail and shadow plane",
        caption: "Raw concrete and shadow plane",
      },
      {
        src: "/images/services/service_advisory.png",
        alt: "Garden terrace overlooking the canopy",
        caption: "Garden terrace over the canopy",
      },
    ],
    specs: [
      { label: "Bedrooms", value: "6" },
      { label: "Bathrooms", value: "8" },
      { label: "Built Area", value: "14,500 sq ft" },
      { label: "Plot Size", value: "22,000 sq ft" },
      { label: "Ceiling Height", value: "6.8 m" },
      { label: "Completion", value: "Q2 2025" },
    ],
    highlights: [
      "Triple-height atrium with solar-tracking skylight",
      "Disappearing glass walls opening to botanical gardens",
      "Private wellness pavilion with cold plunge and sauna",
      "Underground gallery for a 40-vehicle collection",
    ],
    materials: [
      "Honed Italian travertine",
      "Hand-troweled microcement",
      "Brushed white oak",
      "Blackened steel joinery",
    ],
    amenities: [
      "Infinity edge reflection pool",
      "Private home cinema",
      "Wine cellar with climate control",
      "Staff wing with separate access",
    ],
    locationInsight:
      "Set within Al Barari's protected botanical reserve, the estate enjoys mature landscaped privacy ten minutes from Sheikh Mohammed Bin Zayed Road, with direct access to landscaped wadi trails.",
    architecturalDetails: {
      year: "2025",
      type: "Modern Residential Villa",
      architect: "ACL Atelier",
      status: "Completed",
      plotOrientation: "South-facing atrium",
    },
  },
  {
    slug: "the-obsidian-crest",
    name: "The Obsidian Crest",
    tagline: "Monolithic basalt holding the tide line",
    location: "Palm Jumeirah, Dubai",
    region: "Beachfront Frond",
    description:
      "A monolithic sea-front villa crafted from volcanic basalt stone and dark textured metals, capturing the raw power of ocean tides.",
    narrative: [
      "The Obsidian Crest rises from the frond as a single carved volume of volcanic basalt, its facets angled to refract the Gulf light across the day. The massing reads as a defensive breakwater from the beach and as a transparent lantern from the sea.",
      "A submerged arrival court draws visitors beneath the crest into a double-height salon framed in frameless glass. Here the horizon becomes the only ornament: the structure deliberately recedes so that the ocean occupies the full visual field.",
      "The lower level is dedicated to water. A 25-metre lap pool, a therapy spa, and a private beach lounge connect through a continuous wet-floor system finished in honed basalt and teak, designed to age gracefully against salt and spray.",
    ],
    price: "$24,200,000",
    image: "/images/properties/prop_obsidian.png",
    gallery: [
      {
        src: "/images/properties/prop_obsidian.png",
        alt: "The Obsidian Crest from the beachfront",
        caption: "The crest from the beachfront",
      },
      {
        src: "/images/services/service_development.png",
        alt: "Basalt salon opening to the sea",
        caption: "Basalt salon opening to the sea",
      },
      {
        src: "/images/services/service_investment.png",
        alt: "Submerged arrival court detail",
        caption: "Submerged arrival court",
      },
      {
        src: "/images/services/service_architecture.png",
        alt: "Lower level spa and lap pool",
        caption: "Lower level spa and lap pool",
      },
    ],
    specs: [
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "7" },
      { label: "Built Area", value: "12,200 sq ft" },
      { label: "Beach Frontage", value: "120 ft" },
      { label: "Pool", value: "25 m lap" },
      { label: "Completion", value: "Q4 2026" },
    ],
    highlights: [
      "120 ft of private beach frontage on the frond",
      "Submerged double-height ocean salon",
      "Basalt and teak wet-floor wellness level",
      "Private mooring and sunset terrace",
    ],
    materials: [
      "Volcanic basalt cladding",
      "Dark textured bronze metal",
      "Marine-grade teak",
      "Frameless structural glazing",
    ],
    amenities: [
      "Private beach lounge",
      "Therapy spa and hammam",
      "Sunset rooftop terrace",
      "Mooring and boat storage",
    ],
    locationInsight:
      "Positioned on a prime Palm Jumeirah frond, the estate holds uninterrupted west-facing sunset views over the Gulf, twelve minutes from DIFC and moments from the Atlantis district.",
    architecturalDetails: {
      year: "2026",
      type: "Luxury Beachfront Estate",
      architect: "Zaha Hadid Associates (Lead Partnership)",
      status: "Under Construction",
      plotOrientation: "West-facing beachfront",
    },
  },
  {
    slug: "the-aria-penthouse",
    name: "The Aria Penthouse",
    tagline: "A vertical instrument above the skyline",
    location: "Downtown Dubai",
    region: "Sky District",
    description:
      "A glass sky-mansion featuring double-height spaces, floating spiral stairs, and infinite views of the Burj Khalifa skyline.",
    narrative: [
      "The Aria Penthouse occupies the crown of a Downtown tower, a duplex sky-villa engineered as a single continuous promenade. A floating blackened-steel spiral stair threads the two levels, its treads cantilevered from a central column so that the route reads as a suspended ribbon.",
      "The principal salon is double-height and fully glazed on three exposures. Automated louvres track the sun through the day, modulating glare over the Burj Khalifa while preserving the uninterrupted skyline composition that is the residence's defining asset.",
      "Material restraint defines the interior. Microcement floors, smoked oak millwork, and brushed bronze accents were chosen to disappear at dusk, leaving only the city and the changing Gulf light to define each room.",
    ],
    price: "$15,800,000",
    image: "/images/properties/prop_aria.png",
    gallery: [
      {
        src: "/images/properties/prop_aria.png",
        alt: "The Aria Penthouse salon and skyline",
        caption: "Salon over the skyline",
      },
      {
        src: "/images/services/service_advisory.png",
        alt: "Floating spiral staircase detail",
        caption: "Floating spiral stair",
      },
      {
        src: "/images/services/service_architecture.png",
        alt: "Double-height glazed corner",
        caption: "Double-height glazed corner",
      },
      {
        src: "/images/services/service_development.png",
        alt: "Sky terrace at twilight",
        caption: "Sky terrace at twilight",
      },
    ],
    specs: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "5" },
      { label: "Built Area", value: "8,900 sq ft" },
      { label: "Sky Terrace", value: "1,500 sq ft" },
      { label: "Levels", value: "Duplex" },
      { label: "Completion", value: "Q1 2025" },
    ],
    highlights: [
      "Triple-glazed corner salon facing Burj Khalifa",
      "Floating blackened-steel spiral stair",
      "1,500 sq ft private sky terrace",
      "Private lift lobby and secure access",
    ],
    materials: [
      "Hand-troweled microcement",
      "Smoked oak millwork",
      "Brushed bronze accents",
      "Triple-glazed structural glass",
    ],
    amenities: [
      "Private sky terrace with plunge pool",
      "Climate-controlled library",
      "Integrated smart-home system",
      "Dedicated concierge and lift",
    ],
    locationInsight:
      "Crowning a landmark Downtown tower, the penthouse commands unobstructed views of Burj Khalifa and the Gulf, steps from the Opera District and the Boulevard.",
    architecturalDetails: {
      year: "2025",
      type: "Sky Villa Duplex",
      architect: "ACL Atelier",
      status: "Completed",
      plotOrientation: "Three-aspect corner",
    },
  },
  {
    slug: "the-terraces-at-serene",
    name: "The Terraces at Serene",
    tagline: "Rammed earth cascading over the fairway",
    location: "Jumeirah Golf Estates, Dubai",
    region: "Golf Course Frontline",
    description:
      "A cascading residential retreat featuring raw rammed-earth finishes and extensive wellness terraces overlooking golf fairways.",
    narrative: [
      "The Terraces at Serene steps down the natural contour of the site in four linked platforms, each one a separate living realm opening onto its own landscaped terrace. The rammed-earth walls, hand-poured on site, carry the imprint of the local soil and bind the residence to its ground.",
      "The principal living level sits at canopy height, framing the fairway through a 14-metre span of sliding glass. Below, a wellness terrace holds a 25-metre pool, a sunken fire lounge, and an outdoor kitchen sheltered by a cantilevered concrete blade.",
      "The residence was developed in close consultation with Kengo Kuma Associates, whose vocabulary of layered natural materials and fine linear detail informs the screen walls, the pool pavilion, and the garden follies.",
    ],
    price: "$11,400,000",
    image: "/images/properties/prop_terraces.png",
    gallery: [
      {
        src: "/images/properties/prop_terraces.png",
        alt: "The Terraces at Serene cascading down the contour",
        caption: "Cascading terraces over the fairway",
      },
      {
        src: "/images/services/service_development.png",
        alt: "Rammed-earth wall and timber screen",
        caption: "Rammed earth and timber screen",
      },
      {
        src: "/images/services/service_architecture.png",
        alt: "Wellness terrace and 25 m pool",
        caption: "Wellness terrace and pool",
      },
      {
        src: "/images/services/service_investment.png",
        alt: "Sunken fire lounge at dusk",
        caption: "Sunken fire lounge at dusk",
      },
    ],
    specs: [
      { label: "Bedrooms", value: "5" },
      { label: "Bathrooms", value: "6" },
      { label: "Built Area", value: "9,600 sq ft" },
      { label: "Pool Length", value: "25 m" },
      { label: "Terraces", value: "4 levels" },
      { label: "Completion", value: "Q3 2026" },
    ],
    highlights: [
      "Four cascading terraces following the natural contour",
      "Hand-poured rammed-earth walls on site",
      "14-metre sliding glass opening to the fairway",
      "Sunken fire lounge and outdoor kitchen",
    ],
    materials: [
      "Hand-poured rammed earth",
      "Thermally-modified timber",
      "Exposed architectural concrete",
      "Natural stone paving",
    ],
    amenities: [
      "25-metre wellness pool",
      "Sunken fire lounge",
      "Outdoor kitchen and dining",
      "Garden folly and putting green",
    ],
    locationInsight:
      "Fronting the Earth course at Jumeirah Golf Estates, the residence combines tournament-grade fairway frontage with the privacy of a gated golf community, twenty minutes from Marina.",
    architecturalDetails: {
      year: "2026",
      type: "Cascading Villa",
      architect: "Kengo Kuma Associates (Consulting)",
      status: "Pre-Selling",
      plotOrientation: "Fairway-facing slope",
    },
  },
];

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
      "Executing premium builds with master-craftsman precision, utilizing rare materials like basalt, travertine, and architectural concrete.",
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

export interface FirmStat {
  value: string;
  label: string;
}

export const FIRM_STATS: FirmStat[] = [
  { value: "18+", label: "Completed Estates" },
  { value: "AED 2.4B", label: "Portfolio Value" },
  { value: "2018", label: "Founded" },
  { value: "100%", label: "Client Retention" },
];

export const HERO_STATS: FirmStat[] = [
  { value: "18+", label: "Completed Estates" },
  { value: "AED 2.4B", label: "Portfolio Value" },
  { value: "2018", label: "Founded" },
  { value: "100%", label: "Client Retention" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Alexander Mercer",
    role: "Founding Partner & Lead Architect",
    imageUrl: "/images/team/alexander.png",
    bio: "Formally trained at the AA School of Architecture, Alexander has spent two decades pioneering structural minimalism in Europe and the Middle East.",
  },
  {
    name: "Elena Rostova",
    role: "Managing Director & Advisory Lead",
    imageUrl: "/images/team/elena.png",
    bio: "Elena oversees signature acquisitions and portfolio growth, orchestrating private asset transactions for institutional collectors and family offices.",
  },
  {
    name: "Marcus Thorne",
    role: "Director of Construction Crafts",
    imageUrl: "/images/team/marcus.png",
    bio: "Marcus commands our onsite execution teams, ensuring structural concrete pours, stonemasonry details, and interior finishes match museum-grade standards.",
  },
];

export const Z_INDEX = {
  grain: 50,
  preloader: 45,
  navbar: 40,
  modal: 35,
  overlay: 30,
  dropdown: 25,
  content: 10,
  background: 0,
};
