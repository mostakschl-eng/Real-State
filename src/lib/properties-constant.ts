export interface PropertySpec {
  label: string;
  value: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface FloorPlan {
  title: string;
  image: string;
  details: string[];
}

export interface Property {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  region: string;
  statusTag: "Completed" | "Upcoming";
  description: string;
  narrative: string[];
  image: string;
  gallery: GalleryImage[];
  floorPlans: FloorPlan[];
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

export const PROPERTIES: Property[] = [
  {
    slug: "avenue-ahsan-palace",
    name: "Avenue Ahsan Palace",
    tagline: "Eight-storied sanctuary of refined living in Bashundhara",
    location: "Bashundhara R/A, Dhaka",
    region: "Block E, Road 05",
    statusTag: "Completed",
    description:
      "A premium G+7 single-unit residential development designed to capture maximum light and ventilation.",
    narrative: [
      "Avenue Ahsan Palace was conceived as an architectural response to the urban landscape of Bashundhara. Structured as a G+7 residential villa, it offers single-unit privacy with an abundance of natural light and cross-ventilation, situated very close to Evercare Hospital.",
      "The building's orientation leverages southern wind paths and daylight, filtering them through deep terraces. Inside, every floor is finished with high-quality mirror-polished homogeneous tiles and premium sanitary fittings.",
      "Constructed using top-grade materials such as Crown/Holcim cement, BSRM steel, and a European passenger elevator, this completed project represents museum-grade residential engineering."
    ],
    image: "/images/properties/project_image_1.jpeg",
    gallery: [
      {
        src: "/images/properties/project_image_1.jpeg",
        alt: "Avenue Ahsan Palace Perspective View",
        caption: "Perspective View",
      },
      {
        src: "/images/properties/project_image_2.jpeg",
        alt: "Front facade architectural detailing",
        caption: "Facade detailing",
      },
      {
        src: "/images/properties/project_image_3.jpeg",
        alt: "Ground floor parking layout",
        caption: "Car parking & driveway",
      },
      {
        src: "/images/properties/project_image_4.jpeg",
        alt: "Interior open floor plan",
        caption: "Spacious interior layout",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan (1st to 7th Floor)",
        image: "/images/properties/project_image_4.jpeg",
        details: [
          "Unit Area: 1532 Sft single unit per floor",
          "Accommodates: 3 Bedrooms & 3 Bathrooms",
          "Includes: 3 Private Verandas & 1 Family Living",
          "Layout: 1 Drawing Room & 1 Dining Room",
          "Features: 1 Kitchen & 1 Maid's Toilet"
        ]
      },
      {
        title: "Ground Floor Plan & Driveway",
        image: "/images/properties/project_image_3.jpeg",
        details: [
          "Car Parking: 7 Spaces with secure driveway",
          "Lobby: Reception Desk & Guest Waiting Area",
          "Staff Area: Guard quarters & driver toilets",
          "Utilities: Standby generator & water pump station",
          "Access: European high-speed passenger lift"
        ]
      }
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,532 Sft" },
      { label: "Land Area", value: "3 Katha" },
      { label: "Status", value: "Completed" },
    ],
    highlights: [
      "Single-unit layout per floor for ultimate privacy",
      "Located in a prime block close to Evercare Hospital",
      "Stunning rooftop garden with community facilities",
      "European standard passenger lift (8-person capacity)",
      "Full-load standby generator for continuous power",
    ],
    materials: [
      "Mirror polish homogeneous tiles (24\"x24\")",
      "RAK Karla/Equivalent sanitary ware",
      "Sattar/Haibali premium CP fittings",
      "BSRM/AKS 60-grade structural steel",
      "Crown/Holcim high-strength cement",
    ],
    amenities: [
      "Rooftop community garden",
      "Intercom connection to guard post",
      "Drivers' waiting room and toilet",
      "Firefighting hydrant system",
      "Double water pump system",
    ],
    locationInsight:
      "Situated at Plot 51, Block E, Road 05, Bashundhara R/A, this project resides in Dhaka's most prestigious gated residential zone. It offers walking proximity to hospital services, top academic institutions, and retail enclaves.",
    architecturalDetails: {
      year: "2024-2026",
      type: "Completed G+7 Apartment Complex",
      architect: "Sharmin Afroz Shumi (IAB)",
      status: "Completed",
      plotOrientation: "South-facing wind paths",
    },
  },
  {
    slug: "avenue-md-heights",
    name: "Avenue MD. Heights",
    tagline: "Modernist volumetric blocks overlooking the park",
    location: "Aftabnagar R/A, Dhaka",
    region: "Block H, Road 18",
    statusTag: "Completed",
    description:
      "A cascading G+8 residential project engineered with monolithic concrete frames and open terrace structures.",
    narrative: [
      "Avenue MD. Heights rises from Aftabnagar as a landmark of modern architectural geometry. Combining deep terrace setbacks with a structural framework that optimizes natural thermal barriers, it stands as a completed jewel of urban design.",
      "The project features spacious 1,850 Sft apartments overlooking community parklands. Every detail, from the textured exterior plaster to the polished lobby stonemasonry, has been curated to set a new benchmark for Aftabnagar.",
      "Engineered for high structural resilience, the building incorporates 500W TMT steel and advanced seismic structural joints, ensuring lasting safety and luxury."
    ],
    image: "/images/properties/project_image_5.jpeg",
    gallery: [
      {
        src: "/images/properties/project_image_5.jpeg",
        alt: "Avenue MD. Heights elevation view",
        caption: "Elevation View",
      },
      {
        src: "/images/properties/project_image_6.jpeg",
        alt: "Entrance lobby rendering",
        caption: "Entrance Lobby",
      },
      {
        src: "/images/properties/project_image_7.jpeg",
        alt: "Rooftop terrace design",
        caption: "Rooftop Terrace",
      },
      {
        src: "/images/properties/project_image_4.jpeg",
        alt: "Living suite layout",
        caption: "Living Suite",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan",
        image: "/images/properties/project_image_6.jpeg",
        details: [
          "Unit Area: 1850 Sft",
          "Accommodates: 3 Bedrooms & 4 Bathrooms",
          "Includes: 3 Private balconies & spacious family lounge",
          "Layout: Monolithic open-plan kitchen & dining",
          "Features: High-performance structural glazing"
        ]
      },
      {
        title: "Ground Floor Plan",
        image: "/images/properties/project_image_7.jpeg",
        details: [
          "Car Parking: 8 Slots with automated security access",
          "Lobby: Double-height grand entrance lobby",
          "Staff Area: Guard room & driver waiting lounge",
          "Utilities: Substation & generator rooms"
        ]
      }
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "4" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,850 Sft" },
      { label: "Land Area", value: "4 Katha" },
      { label: "Status", value: "Completed" },
    ],
    highlights: [
      "Park-facing elevation with deep landscaped balconies",
      "Double-height entrance lobby with granite finishes",
      "Rooftop BBQ terrace and family lounge",
      "Two-car parking allocation per apartment",
      "VRF air conditioning provisions",
    ],
    materials: [
      "Imported granite lobby tiles",
      "Premium local sanitary fittings",
      "High-performance structural glass",
      "Holcim/Shah premium cement",
      "BSRM 60-grade steel reinforcement",
    ],
    amenities: [
      "Fully equipped rooftop gym",
      "CCTV surveillance and 24/7 security guard post",
      "Submerged arrival court with guard room",
      "Automated firefighting alarm system",
      "Water purification system",
    ],
    locationInsight:
      "Located at Plot 30, Road 18, Block H, Aftabnagar R/A, the property offers direct views of Aftabnagar's central park, with immediate access to Hatirjheel Expressway for quick commutes.",
    architecturalDetails: {
      year: "2024-2025",
      type: "Completed G+8 Luxury Complex",
      architect: "Avenue Design Partners",
      status: "Completed",
      plotOrientation: "West-facing parkview",
    },
  },
  {
    slug: "avenue-dream",
    name: "Avenue Dream",
    tagline: "Choreographed urban light and functional luxury",
    location: "Rampura, Dhaka",
    region: "Ulon Road",
    statusTag: "Upcoming",
    description:
      "An upcoming high-rise residential tower designed for maximum urban space efficiency and cross-ventilation.",
    narrative: [
      "Avenue Dream represents our upcoming commitment to developing modern luxury within Dhaka's key transit networks. Situated on Ulon Road in Rampura, this upcoming landmark will introduce refined urban family living.",
      "The building features cross-ventilated units that maintain comfortable indoor temperatures even during peak summer. Generous ceiling heights and open-plan kitchen-living layouts make each unit feel exceptionally spacious.",
      "Using our signature material selections—including robust sanitary ware, high-grade security doors, and low-maintenance facades—Avenue Dream will stand as an icon of Rampura."
    ],
    image: "/images/properties/upcoming_avenue_dream.png",
    gallery: [
      {
        src: "/images/properties/upcoming_avenue_dream.png",
        alt: "Avenue Dream Architectural Render",
        caption: "Upcoming Architectural Render",
      },
      {
        src: "/images/properties/project_image_8.jpeg",
        alt: "Living Room Concept",
        caption: "Living Lounge Concept",
      },
      {
        src: "/images/properties/project_image_9.jpeg",
        alt: "Rooftop Community Deck",
        caption: "Rooftop Community Deck",
      },
      {
        src: "/images/properties/project_image_2.jpeg",
        alt: "Balcony Details",
        caption: "Balcony Detailing",
      },
    ],
    floorPlans: [
      {
        title: "Upcoming Typical Floor Plan",
        image: "/images/properties/upcoming_avenue_dream.png",
        details: [
          "Unit Area: 1350 Sft",
          "Accommodates: 3 Bedrooms & 3 Bathrooms",
          "Includes: 2 Verandas & spacious living hall",
          "Layout: Closed kitchen design & dining room"
        ]
      },
      {
        title: "Ground Floor Plan & Parking",
        image: "/images/properties/project_image_8.jpeg",
        details: [
          "Car Parking: 6 Parking slots",
          "Lobby: Reception Desk & Security Post",
          "Utilities: Standby generator & water pump"
        ]
      }
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "2" },
      { label: "Unit Size", value: "1,350 Sft" },
      { label: "Handover", value: "Dec 2027" },
      { label: "Status", value: "Upcoming" },
    ],
    highlights: [
      "Upcoming architectural landmark on Ulon Road",
      "Excellent connectivity near Hatirjheel and Rampura Bridge",
      "Spacious multi-purpose community hall for residents",
      "Secure entry gate with smart access controls",
      "Modern structural layout with natural breeze path",
    ],
    materials: [
      "Local homogeneous floor tiles",
      "RAK sanitary ware and chrome fittings",
      "Solid teak wood entrance door frame",
      "Berger weathercoat exterior paint",
      "Safety glass windows",
    ],
    amenities: [
      "Community gathering room",
      "Rooftop seating area",
      "Intercom system to guard room",
      "Standby generator for common areas",
      "Overhead and underground water reserve tanks",
    ],
    locationInsight:
      "Positioned on Ulon Road, Rampura, the project offers excellent transport routes, connecting directly with Hatirjheel to the west and Badda-Gulshan routes to the north.",
    architecturalDetails: {
      year: "2026-2027",
      type: "Upcoming Residential Complex",
      architect: "Avenue Design Atelier",
      status: "Upcoming Landmark",
      plotOrientation: "South-east facing layout",
    },
  },
  {
    slug: "avenue-castle",
    name: "Avenue Castle",
    tagline: "Monolithic geometry holding the neighborhood skyline",
    location: "Uttar Badda, Dhaka",
    region: "Shadhinota Shoroni",
    statusTag: "Upcoming",
    description:
      "An upcoming luxury G+8 residential tower showcasing architectural symmetry and bold structural framing.",
    narrative: [
      "Avenue Castle will rise on Shadhinota Shoroni as an upcoming landmark of residential grandeur. Its bold concrete structure features dramatic cantilevered overhangs and recessed windows that shield the interior from direct afternoon solar radiation.",
      "The building holds G+8 floors, providing premium units designed for modern families. The entrance lobby is planned to be fully air-conditioned and finished with polished marble, offering a hotel-grade welcome.",
      "Engineered using top-grade local reinforcement and high-performance concrete mixes, this upcoming project ensures premium structural safety alongside its striking visual presence."
    ],
    image: "/images/properties/upcoming_avenue_castle.png",
    gallery: [
      {
        src: "/images/properties/upcoming_avenue_castle.png",
        alt: "Avenue Castle Architectural Render",
        caption: "Upcoming Architectural Render",
      },
      {
        src: "/images/properties/project_image_10.jpeg",
        alt: "Facade Concept",
        caption: "Facade Elevation",
      },
      {
        src: "/images/properties/project_image_11.jpeg",
        alt: "Lobby Concept",
        caption: "Lobby Concept",
      },
      {
        src: "/images/properties/project_image_1.jpeg",
        alt: "Rooftop Garden",
        caption: "Rooftop Garden View",
      },
    ],
    floorPlans: [
      {
        title: "Upcoming Typical Floor Plan",
        image: "/images/properties/upcoming_avenue_castle.png",
        details: [
          "Unit Area: 1450 Sft",
          "Accommodates: 3 Bedrooms & 3 Bathrooms",
          "Includes: 3 Verandas & air-conditioned lounge",
          "Layout: L-shaped living-dining configuration"
        ]
      },
      {
        title: "Ground Floor Parking & Driveway",
        image: "/images/properties/project_image_10.jpeg",
        details: [
          "Car Parking: 6 Parking slots",
          "Lobby: Reception Desk & Security Lounge",
          "Utilities: Standby generator & water reserve"
        ]
      }
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "1,450 Sft" },
      { label: "Building", value: "G+8 floors" },
      { label: "Status", value: "Upcoming" },
    ],
    highlights: [
      "Striking geometric exterior with concrete planters",
      "Air-conditioned marble-finished reception lobby",
      "High-speed elevator with automatic rescue device (ARD)",
      "Lush rooftop garden with seating alcoves",
      "Rainwater harvesting system implemented",
    ],
    materials: [
      "Polished Sylhet granite and marble",
      "RAK/Sheltech premium homogeneous tiles",
      "Sattar sanitary fittings and accessories",
      "BSRM Extreme structural steel bars",
      "Holcim/Crown high-strength cements",
    ],
    amenities: [
      "Rooftop landscape deck",
      "Central reception desk and intercom PABX",
      "Guard quarters with separate toilet facilities",
      "24/7 power backup through generator",
      "State-of-the-art fire extinguishers and detection",
    ],
    locationInsight:
      "Located on Shadhinota Shoroni, Uttar Badda, the property enjoys prime urban connectivity, sitting just minutes away from the diplomatic zone of Baridhara and the Gulshan-1 commercial hub.",
    architecturalDetails: {
      year: "2026-2028",
      type: "Upcoming G+8 Residential Tower",
      architect: "Avenue Design Associates",
      status: "Upcoming Landmark",
      plotOrientation: "North-east facing facade",
    },
  },
  {
    slug: "avenue-crest",
    name: "Avenue Crest",
    tagline: "Ultra-exclusive private sanctuary in diplomatic Gulshan 2",
    location: "Gulshan 2, Dhaka",
    region: "Road 71, Diplomatic Zone",
    statusTag: "Upcoming",
    description:
      "An upcoming boutique residential tower offering single-unit luxury floor plans in Gulshan 2.",
    narrative: [
      "Avenue Crest is designed as an ultra-exclusive residential landmark in Gulshan 2. Featuring private elevator foyers, double-height living areas, and expansive glass curtain walls, it sets a new standard for luxury real estate.",
      "The building integrates energy-efficient solar glass, sound-proof acoustic double glazing, and automated smart home infrastructure.",
      "Residents enjoy a heated rooftop infinity pool, wellness spa, and round-the-clock concierge services."
    ],
    image: "/images/properties/upcoming_avenue_crest.png",
    gallery: [
      {
        src: "/images/properties/upcoming_avenue_crest.png",
        alt: "Avenue Crest Exterior Render",
        caption: "Upcoming Facade Render",
      },
      {
        src: "/images/properties/project_image_5.jpeg",
        alt: "Terrace Balcony View",
        caption: "Terrace View Concept",
      },
      {
        src: "/images/properties/project_image_2.jpeg",
        alt: "Exterior Facade Glass",
        caption: "Curtain Wall Concept",
      },
      {
        src: "/images/properties/project_image_4.jpeg",
        alt: "Grand Living Suite",
        caption: "Grand Living Suite",
      },
    ],
    floorPlans: [
      {
        title: "Penthouse & Typical Floor Plan",
        image: "/images/properties/upcoming_avenue_crest.png",
        details: [
          "Unit Area: 2850 Sft",
          "Accommodates: 4 Bedrooms & 5 Bathrooms",
          "Includes: Private pool balcony & maid quarters",
          "Layout: Open-plan grand salon & formal dining"
        ]
      },
      {
        title: "Ground Floor Grand Lobby & Parking",
        image: "/images/properties/project_image_5.jpeg",
        details: [
          "Car Parking: 10 Slots with automated security gate",
          "Lobby: Marble-clad double-height reception",
          "Concierge: 24/7 Private Security & Valet Desk"
        ]
      }
    ],
    specs: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "5" },
      { label: "Verandas", value: "4" },
      { label: "Unit Size", value: "2,850 Sft" },
      { label: "Handover", value: "Dec 2028" },
      { label: "Status", value: "Upcoming" },
    ],
    highlights: [
      "Ultra-exclusive single-unit floors in Gulshan 2",
      "Private elevator access directly into apartment lobby",
      "Heated rooftop infinity pool with city skyline view",
      "Concierge service & automated valet parking",
      "Acoustic double-glazed glass for thermal & sound isolation",
    ],
    materials: [
      "Italian Travertine marble facade panels",
      "German Grohe & Duravit bathroom fittings",
      "Burmese teak hardwood interior doors",
      "BSRM 500W high-yield structural steel",
      "Low-E solar control double glazing",
    ],
    amenities: [
      "Rooftop infinity pool & sauna",
      "Private subterranean wine lounge",
      "24/7 biometric & smart card security",
      "Dual high-speed Mitsubishi elevators",
      "Full 100% power backup including ACs",
    ],
    locationInsight:
      "Positioned on Road 71 in Gulshan 2, Avenue Crest sits within Dhaka's most secure diplomatic enclave, steps away from international embassies, fine dining establishments, and high-end retail.",
    architecturalDetails: {
      year: "2027-2028",
      type: "Upcoming Luxury Boutique Tower",
      architect: "Avenue International Studio",
      status: "Upcoming Landmark",
      plotOrientation: "South-facing parkview",
    },
  },
  {
    slug: "avenue-serenade",
    name: "Avenue Serenade",
    tagline: "Tropical modernist sanctuary nestled in Banani DOHS",
    location: "Banani DOHS, Dhaka",
    region: "Lane 4, Quiet Zone",
    statusTag: "Upcoming",
    description:
      "An upcoming serene G+7 residential sanctuary designed with fair-faced concrete and vertical gardens.",
    narrative: [
      "Avenue Serenade harmonizes modern tropical architectural design with the tranquil environment of Banani DOHS. Lush vertical gardens and timber louvers wrap the building to provide natural privacy and shading.",
      "Each residence features cross-ventilated living suites, private planter balconies, and premium wood-paneled interior finishes.",
      "Designed for eco-conscious luxury, the building incorporates rooftop solar energy generation and rainwater harvesting."
    ],
    image: "/images/properties/upcoming_avenue_serenade.png",
    gallery: [
      {
        src: "/images/properties/upcoming_avenue_serenade.png",
        alt: "Avenue Serenade Architectural Render",
        caption: "Upcoming Architectural Render",
      },
      {
        src: "/images/properties/project_image_6.jpeg",
        alt: "Vertical Garden Concept",
        caption: "Vertical Garden Facade",
      },
      {
        src: "/images/properties/project_image_7.jpeg",
        alt: "Rooftop Garden Lounge",
        caption: "Rooftop Garden Lounge",
      },
      {
        src: "/images/properties/project_image_3.jpeg",
        alt: "Car Entrance Driveway",
        caption: "Private Arrival Driveway",
      },
    ],
    floorPlans: [
      {
        title: "Typical Floor Plan",
        image: "/images/properties/upcoming_avenue_serenade.png",
        details: [
          "Unit Area: 2100 Sft",
          "Accommodates: 3 Bedrooms & 4 Bathrooms",
          "Includes: 3 Garden balconies & family lounge",
          "Layout: Closed gourmet kitchen & breakfast bar"
        ]
      },
      {
        title: "Ground Floor Plan & Landscaped Driveway",
        image: "/images/properties/project_image_7.jpeg",
        details: [
          "Car Parking: 8 Slots with garden driveway",
          "Lobby: Open-air reception court",
          "Staff Lounge: Driver quarters & security room"
        ]
      }
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "4" },
      { label: "Verandas", value: "3" },
      { label: "Unit Size", value: "2,100 Sft" },
      { label: "Handover", value: "May 2029" },
      { label: "Status", value: "Upcoming" },
    ],
    highlights: [
      "Nestled in the quietest residential lane of Banani DOHS",
      "Tropical modernist architecture with fair-faced concrete",
      "Lush vertical planters with automatic drip irrigation",
      "Private roof garden deck with outdoor fireplace",
      "Integrated solar energy system for common lighting",
    ],
    materials: [
      "Fair-faced architectural concrete",
      "Thermally treated teak wooden louvers",
      "RAK Karla luxury sanitary fixtures",
      "BSRM 60-grade high-yield steel",
      "Holcim/Crown high-strength cements",
    ],
    amenities: [
      "Rooftop landscape lounge",
      "CCTV surveillance & smart gate locks",
      "Drivers' lounge and waiting facility",
      "Full standby generator for continuous power",
      "Underground water purification system",
    ],
    locationInsight:
      "Located in Banani DOHS, the property benefits from a gated, low-density military housing society with serene tree-lined streets, excellent security, and quick access to Mohakhali and Gulshan.",
    architecturalDetails: {
      year: "2027-2029",
      type: "Upcoming Tropical Modern Villa Tower",
      architect: "Avenue Design Atelier",
      status: "Upcoming Landmark",
      plotOrientation: "East-facing garden view",
    },
  },
];
