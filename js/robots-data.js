/* Real Australian-market restaurant robots — shelf prices from AU retailers (AGC, RoboBuddy, PC Market, KW Commercial, Robots Australia). Confirm GST & config on quote. */
window.ROBOPEARL_ROBOTS = [
  {
    id: "pudu-bellabot",
    brand: "Pudu Robotics",
    name: "BellaBot",
    role: "Interactive front-of-house delivery",
    summary: "Australia’s most recognised restaurant delivery robot — cat-inspired guest interaction with four trays. Already running in Sydney venues such as Planar and Casa.",
    priceFrom: 19900,
    priceTo: 21452,
    priceNote: "AU shelf: ~A$19,900 (PC Market) to A$21,452 inc GST (AGC). Rental plans available at some dealers.",
    image: "pudu-bellabot.jpg",
    scenes: ["hero-fine-dining-robots.jpg", "scene-hotpot-service.jpg"],
    features: [
      "Four trays, up to 40 kg total (10 kg per tray)",
      "Cat-like expressive face, touch-responsive interaction",
      "Laser + visual SLAM navigation",
      "Hot-swappable battery, 12–24 h runtime",
      "Fleet coordination for up to 20 units"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Dimensions (W×D×H)": "565 × 537 × 1290 mm",
      "Weight": "55 kg",
      "Trays": "4 (approx. 410 × 500 mm)",
      "Max payload": "40 kg (10 kg per tray)",
      "Speed": "0.5 – 1.2 m/s",
      "Min. passage": "~70–80 cm",
      "Battery / runtime": "25.6 Ah · 12–24 h · charge ~4.5 h",
      "Best for": "Fine dining, Italian, guest-facing floors"
    },
    sources: "AGC Equipment, PC Market, Servbotics, KW Commercial Kitchen"
  },
  {
    id: "pudu-bellabot-pro",
    brand: "Pudu Robotics",
    name: "BellaBot Pro",
    role: "Premium delivery & advertising",
    summary: "Premium BellaBot class with stronger advertising and interaction features for venues that want theatre plus reliable plate runs.",
    priceFrom: 23100,
    priceTo: 23100,
    priceNote: "AU shelf: A$23,100 (RoboBuddy). Confirm configuration on quote.",
    image: "pudu-bellabot-pro.jpg",
    scenes: ["hero-fine-dining-robots.jpg", "scene-greeting.jpg"],
    features: [
      "Premium interactive delivery for guest engagement",
      "Advertising-capable front-of-house presence",
      "Multi-tray restaurant running",
      "SLAM navigation for mapped dining rooms",
      "Strong upgrade path for venues already using BellaBot"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Class": "Premium BellaBot / advertising delivery",
      "Primary jobs": "Delivery + guest interaction + on-robot ads",
      "Navigation": "Commercial SLAM indoor navigation",
      "Best for": "Busy waterfront & premium dining rooms",
      "AU listing": "RoboBuddy commercial delivery range"
    },
    sources: "RoboBuddy, Quantum Robotics product listings"
  },
  {
    id: "pudu-kettybot",
    brand: "Pudu Robotics",
    name: "KettyBot",
    role: "Greeting, reception & delivery",
    summary: "Compact 3-in-1 host robot with a large advertising screen — greets guests and still delivers trays. Ideal entry model for mall and CBD restaurants.",
    priceFrom: 11900,
    priceTo: 16062,
    priceNote: "AU shelf: A$11,900 (KW sale) to A$16,062 inc GST (AGC). PC Market listed ~A$12,500.",
    image: "pudu-kettybot.jpg",
    scenes: ["scene-greeting.jpg", "hero-fine-dining-robots.jpg"],
    features: [
      "18.5″ HD advertising / welcome screen",
      "Two trays, up to ~38 kg total payload",
      "Narrow-aisle friendly (~55 cm passable width)",
      "Reception, escort and delivery modes",
      "Up to ~9 h runtime, ~3.5 h charge"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Dimensions (W×D×H)": "435 × 450 × 1120 mm",
      "Trays": "2 adjustable",
      "Max payload": "Up to 38 kg total",
      "Display": "18.5″ HD touchscreen",
      "Min. passage": "~55 cm",
      "Cruise speed": "Up to 1.2 m/s",
      "Runtime": "Up to ~9 hours",
      "Best for": "Mall Thai, CBD casual, host-stand greeting"
    },
    sources: "AGC Equipment, KW Commercial, PC Market, Servbotics"
  },
  {
    id: "pudu-kettybot-pro",
    brand: "Pudu Robotics",
    name: "KettyBot Pro",
    role: "Delivery, reception & marketing",
    summary: "Pro reception robot with ad display — dual SLAM, smart tray detection and enhanced voice interaction for high-traffic Australian venues.",
    priceFrom: 16500,
    priceTo: 16500,
    priceNote: "AU shelf: A$16,500 (RoboBuddy KettyBot Pro).",
    image: "pudu-kettybot-pro.jpg",
    scenes: ["scene-greeting.jpg", "scene-hotpot-service.jpg"],
    features: [
      "3-in-1: delivery, reception and marketing",
      "Large front advertising display",
      "Dual SLAM navigation + smart tray detection",
      "Enhanced voice interaction",
      "Fits restaurants, cafés, hotels and retail"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Class": "KettyBot Pro delivery & reception",
      "Display": "Advertising / reception screen",
      "Navigation": "Dual SLAM",
      "Best for": "Shopping-centre restaurants & multi-site groups",
      "AU listing": "RoboBuddy A$16,500"
    },
    sources: "RoboBuddy"
  },
  {
    id: "pudu-pudubot-2",
    brand: "Pudu Robotics",
    name: "PuduBot 2",
    role: "Universal indoor delivery",
    summary: "Next-gen universal delivery workhorse — VSLAM+ navigation, three adjustable trays, and the most common ‘everyday runner’ configuration on Australian restaurant floors.",
    priceFrom: 14990,
    priceTo: 16159,
    priceNote: "AU shelf: A$14,990 (PC Market) to A$16,159 inc GST (AGC). RoboBuddy lists A$14,999.",
    image: "pudu-pudubot-2.jpg",
    scenes: ["scene-hotpot-service.jpg", "hero-fine-dining-robots.jpg"],
    features: [
      "Three removable / adjustable metal trays",
      "Rated ~10 kg per tray (max ~13 kg)",
      "VSLAM+ visual + laser mapping (no ceiling markers)",
      "~12 h unloaded runtime, ~3 h charge",
      "Delivery, cruise, birthday and collection modes"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Model": "PuduBot 2 (PDFD12 / PDFD22)",
      "Dimensions (W×D×H)": "580 × 535 × 1290 mm",
      "Weight": "~37–39 kg",
      "Trays": "3 adjustable (520 × 435 mm)",
      "Payload": "Rated 10 kg / tray",
      "Battery": "20 Ah · ~12 h · charge ~3 h",
      "Screen": "7″ or 10.1″ LCD variants",
      "Best for": "All-day dining, cafés, multi-pass kitchens"
    },
    sources: "AGC Equipment, RoboBuddy, PC Market, Pudu product docs"
  },
  {
    id: "pudu-holabot",
    brand: "Pudu Robotics",
    name: "HolaBot",
    role: "High-capacity delivery & dish collection",
    summary: "High-volume runner with large compartment and dish-collection modes — the hotpot, buffet and banquet choice on Australian menus.",
    priceFrom: 22638,
    priceTo: 30000,
    priceNote: "AU shelf: A$22,638 inc GST (AGC) to A$23,100 (RoboBuddy). PC Market listed up to A$30,000 — confirm exact SKU.",
    image: "pudu-holabot.jpg",
    scenes: ["scene-hotpot-service.jpg", "hero-fine-dining-robots.jpg"],
    features: [
      "High capacity: 4 trays / ~120 L compartment class",
      "Up to 15 kg per level on flat floors",
      "Delivery and collection (bussing) modes",
      "Call via watch, pager or voice on supported setups",
      "~12 h unloaded runtime"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Dimensions (W×D×H)": "542 × 534 × 1228 mm",
      "Weight": "55 kg",
      "Trays": "4 · tray ~390 × 360 mm",
      "Payload": "Up to 15 kg / level (flat)",
      "Min. passage": "~70 cm",
      "Battery": "25.6 Ah · ~12 h · charge ~4.5 h",
      "Best for": "Hotpot, buffet, yum cha, high-volume Chinese dining"
    },
    sources: "AGC Equipment, RoboBuddy, PC Market, Pudu product docs"
  },
  {
    id: "pudu-swiftbot",
    brand: "Pudu Robotics",
    name: "SwiftBot",
    role: "Versatile covered / premium delivery",
    summary: "Premium versatile delivery with optional enclosed doors, laser projection interaction and up to five trays — suited to fine dining and hotel F&B.",
    priceFrom: 23000,
    priceTo: 28000,
    priceNote: "AU shelf: A$23,000 (RoboBuddy) to A$28,000 (PC Market).",
    image: "pudu-swiftbot.jpg",
    scenes: ["hero-fine-dining-robots.jpg", "scene-greeting.jpg"],
    features: [
      "Default 3 trays, expandable to 5",
      "Max payload 35 kg",
      "Standard model with automatic bi-fold doors (or doorless)",
      "Dual LiDAR + RGBD + laser projector",
      "Optional lift / door API integration"
    ],
    specs: {
      "Manufacturer": "Pudu Robotics",
      "Dimensions (W×D×H)": "488 × 593 × ~1288 mm",
      "Weight": "59 kg standard / 49 kg doorless",
      "Trays": "3 default / 5 max (433 × 502 mm)",
      "Max payload": "35 kg",
      "Min. path clearance": "~80 cm",
      "Runtime": "10–24 h · charge ~4.5 h",
      "Best for": "Fine dining, hotel restaurants, longer protected runs"
    },
    sources: "RoboBuddy, PC Market, Servbotics"
  },
  {
    id: "keenon-dinerbot-t9",
    brand: "Keenon Robotics",
    name: "DINERBOT T9",
    role: "High-load restaurant delivery",
    summary: "Keenon’s high-load dinerbot — 40 kg across adjustable layers and up to ~18 h battery. Widely listed by Australian Keenon dealers including Automiq and Robots Australia.",
    priceFrom: 15913,
    priceTo: 16093,
    priceNote: "AU listing: ~A$15,913–A$16,093 (Robots Australia). Confirm GST & warranty terms.",
    image: "keenon-dinerbot-t9.jpg",
    scenes: ["scene-hotpot-service.jpg", "hero-fine-dining-robots.jpg"],
    features: [
      "40 kg total load (10 kg per layer)",
      "Adjustable tray heights for mixed dishware",
      "SLAM / LiDAR autonomous navigation",
      "Up to ~18 h battery life",
      "Multi-robot dispatch support"
    ],
    specs: {
      "Manufacturer": "Keenon Robotics",
      "Dimensions (W×D×H)": "50.0 × 52.7 × 126.6 cm",
      "Weight": "63 kg",
      "Total load": "40 kg",
      "Speed": "0.1 – 1.0 m/s",
      "Min. passage": "70 cm",
      "Battery": "Up to ~18 h · charge ~4 h",
      "Best for": "Large dining rooms, canteens, high-volume service"
    },
    sources: "Robots Australia, Automiq Robotics, Keenon product pages"
  },
  {
    id: "keenon-dinerbot-t10",
    brand: "Keenon Robotics",
    name: "DINERBOT T10",
    role: "Delivery + large advertising screen",
    summary: "Delivery and marketing dinerbot with a large ~23.8″ display — used by Australian food-service sellers for high-visibility restaurant floors.",
    priceFrom: 20147,
    priceTo: 20375,
    priceNote: "AU listing: ~A$20,147–A$20,375 (Robots Australia). HIT Equipment also lists T10 for food service.",
    image: "keenon-dinerbot-t10.jpg",
    scenes: ["scene-greeting.jpg", "scene-hotpot-service.jpg"],
    features: [
      "40 kg delivery capacity",
      "~23.8″ advertising / brand display",
      "Multi-modal interaction (voice, touch, vision)",
      "Min. passage ~59 cm",
      "Multi-robot scheduling"
    ],
    specs: {
      "Manufacturer": "Keenon Robotics",
      "Dimensions (W×D×H)": "48.6 × 55.5 × 139.9 cm",
      "Weight": "~58 kg",
      "Total load": "40 kg",
      "Display": "~23.8″ marketing screen",
      "Min. passage": "~58.5–59 cm",
      "Best for": "High-volume food service with brand display"
    },
    sources: "Robots Australia, HIT Equipment / foodservicerobots.com.au, Automiq"
  },
  {
    id: "keenon-dinerbot-t8",
    brand: "Keenon Robotics",
    name: "DINERBOT T8",
    role: "Compact narrow-aisle delivery",
    summary: "Compact Keenon dinerbot for tighter Australian dining rooms — passes aisles around 55 cm with a 20 kg open-tray payload.",
    priceFrom: 15913,
    priceTo: 16093,
    priceNote: "AU listing: ~A$15,913–A$16,093 (Robots Australia).",
    image: "keenon-dinerbot-t8.jpg",
    scenes: ["scene-greeting.jpg", "hero-fine-dining-robots.jpg"],
    features: [
      "Compact body for ~55 cm passages",
      "20 kg total load capacity",
      "300° open tray design with tray sensors",
      "Up to ~15 h battery life",
      "Ideal pilot robot for smaller CBD rooms"
    ],
    specs: {
      "Manufacturer": "Keenon Robotics",
      "Dimensions (W×D×H)": "38.4 × 46.8 × 111.1 cm",
      "Weight": "~34–38 kg",
      "Total load": "20 kg",
      "Min. passage": "55 cm",
      "Battery": "Up to ~15 h · charge ~4–4.5 h",
      "Speed": "Up to 1.0 m/s",
      "Best for": "Compact mall & neighbourhood restaurants"
    },
    sources: "Robots Australia, Keenon product pages"
  }
];
