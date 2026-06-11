export const engineeredProductsData = [
  // ─── UNINTERRUPTIBLE POWER SUPPLIES (UPS) ──────────────────────────────────
  {
    id: "vertiv-liebert-exl-s1-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "Vertiv™ Liebert® EXL S1 UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 97,
    description: "The Liebert® EXL S1 delivers secure power and first-class load protection, maximizing energy savings for medium-to-large data centers and mission-critical applications.",
    features: [
      "Dynamic Online Mode with 99% efficiency",
      "Robust double-conversion design (97% efficiency)",
      "High power density in an optimized footprint",
      "Advanced touchscreen controls & diagnostics",
      "Li-ion battery system compatibility"
    ],
    stats: [
      { label: "CAPACITY", value: "300-1200 kW" },
      { label: "SYSTEM EFFICIENCY", value: "Up to 99%" },
      { label: "VOLTAGE OPTIONS", value: "380 / 400 / 415 V" },
      { label: "PARALLEL CAPABILITY", value: "Up to 8 units" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Uninterruptible Power Supply",
    images: [
      { src: "/images/products/ups.png", alt: "Liebert EXL S1 UPS — Front View" },
      { src: "/images/products/switchgear.png", alt: "Liebert EXL S1 UPS — Rear Panel" },
      { src: "/images/products/cooling.png", alt: "Liebert EXL S1 UPS — Cooling Module" }
    ],
    models: [
      { 
        name: "EXL S1 - 300kW", 
        capacity: "300 kW", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "400V 3-Phase",
        efficiency: "97.0% Online / 99.0% Dynamic", 
        height: 1950, // mm
        width: 1400, // mm
        depth: 900, // mm
        weight: "1450 kg" 
      },
      { 
        name: "EXL S1 - 600kW", 
        capacity: "600 kW", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "400V 3-Phase",
        efficiency: "97.0% Online / 99.0% Dynamic", 
        height: 1950, // mm
        width: 2200, // mm
        depth: 900, // mm
        weight: "2600 kg" 
      },
      { 
        name: "EXL S1 - 1200kW", 
        capacity: "1200 kW", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "400V 3-Phase",
        efficiency: "97.0% Online / 99.0% Dynamic", 
        height: 1950, // mm
        width: 4400, // mm
        depth: 900, // mm
        weight: "5100 kg" 
      }
    ]
  },
  {
    id: "vertiv-liebert-exm2-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "Vertiv™ Liebert® EXM2 UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 96,
    description: "Monolithic, high-efficiency UPS designed for mid-size applications. Incorporates next-generation cooling technologies and internal diagnostics to ensure maximum power reliability.",
    features: [
      "Fault-tolerant design",
      "Unity Power Factor (kVA = kW)",
      "96.5% efficiency in double-conversion",
      "Flexible battery configurations",
      "Intelligent monitoring integrations"
    ],
    stats: [
      { label: "CAPACITY", value: "100-250 kW" },
      { label: "POWER FACTOR", value: "1.0 (Unity)" },
      { label: "FOOTPRINT", value: "0.64 m² (Highly Compact)" },
      { label: "NOISE LEVEL", value: "< 62 dBA" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Vertiv Liebert EXM2 UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Liebert EXM2 UPS — Front View" },
      { src: "/images/products/switchgear.png", alt: "Liebert EXM2 UPS — Control Panel" },
      { src: "/images/products/cooling.png", alt: "Liebert EXM2 UPS — Thermal Module" }
    ],
    models: [
      { 
        name: "EXM2 - 100kW", 
        capacity: "100 kW", 
        inputVoltage: "380/400/415V", 
        outputVoltage: "380/400/415V",
        efficiency: "96.5%", 
        height: 1900, 
        width: 600, 
        depth: 850, 
        weight: "480 kg" 
      },
      { 
        name: "EXM2 - 250kW", 
        capacity: "250 kW", 
        inputVoltage: "380/400/415V", 
        outputVoltage: "380/400/415V",
        efficiency: "96.6%", 
        height: 1900, 
        width: 1000, 
        depth: 850, 
        weight: "820 kg" 
      }
    ]
  },
  {
    id: "vertiv-liebert-aps-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "Vertiv™ Liebert® APS UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 93,
    description: "A modular, redundant UPS solution designed for small-to-medium data centers, offering high adaptability and easy hot-swappable capacity scaling.",
    features: [
      "Modular design with hot-swappable modules",
      "Internal N+1 redundancy capability",
      "High power factor operation",
      "Wide input voltage tolerance range",
      "Integrated smart distribution panel"
    ],
    stats: [
      { label: "CAPACITY", value: "5-20 kVA" },
      { label: "MODULE SIZE", value: "5 kVA per Power Module" },
      { label: "EFFICIENCY", value: "93.5% Double Conversion" },
      { label: "SCALABILITY", value: "Up to 4 Modules" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Vertiv Liebert APS UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Liebert APS UPS — Front View" }
    ],
    models: [
      { name: "Liebert APS - 10kVA", capacity: "10 kVA", inputVoltage: "230V Single-Phase", outputVoltage: "230V Single-Phase", efficiency: "93.2%", height: 1200, width: 600, depth: 800, weight: "180 kg" }
    ]
  },
  {
    id: "vertiv-liebert-ita2-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "Vertiv™ Liebert® ITA2 UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 96,
    description: "Highly reliable, double-conversion UPS designed for rack or tower configuration, providing premium load protection for edge network cabinets.",
    features: [
      "96.2% efficiency in double-conversion mode",
      "Dynamic Eco Mode with 99% efficiency",
      "0.99 Input Power Factor",
      "Flexible rack/tower convertible design",
      "Programmable outlet groups for load shedding"
    ],
    stats: [
      { label: "CAPACITY", value: "5-30 kVA" },
      { label: "POWER FACTOR", value: "1.0 (Unity)" },
      { label: "HEIGHT", value: "2U / 3U rackmount space" },
      { label: "BATTERY TYPE", value: "Internal / External Lead-Acid" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Vertiv Liebert ITA2 UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Liebert ITA2 UPS — Front View" }
    ],
    models: [
      { name: "Liebert ITA2 - 10kVA", capacity: "10 kVA", inputVoltage: "400V 3-Phase", outputVoltage: "230V Single-Phase", efficiency: "96.2%", height: 85, width: 438, depth: 680, weight: "24 kg" }
    ]
  },
  {
    id: "vertiv-liebert-gxt5-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "Vertiv™ Liebert® GXT5 UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 95,
    description: "Online double-conversion UPS system offering premium power outage protection and continuous power conditioning in a compact deployment footprint.",
    features: [
      "Continuous power conditioning with low noise",
      "User-friendly color LCD interface",
      "Integrated communication slot (SNMP)",
      "Eco-mode option for enhanced efficiency",
      "Hot-swappable internal battery assemblies"
    ],
    stats: [
      { label: "CAPACITY", value: "1-10 kVA" },
      { label: "BATTERY RUNTIME", value: "Up to 14 minutes at half load" },
      { label: "CERTIFICATIONS", value: "Energy Star 2.0 / CE" },
      { label: "OUTPUT RECEPTACLES", value: "Programmable individual outlets" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Vertiv Liebert GXT5 UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Liebert GXT5 UPS — Product View" }
    ],
    models: [
      { name: "Liebert GXT5 - 3000", capacity: "3000 VA", inputVoltage: "230V Single-Phase", outputVoltage: "230V Single-Phase", efficiency: "95.0%", height: 85, width: 430, depth: 540, weight: "28 kg" }
    ]
  },
  {
    id: "vertiv-apc-sym-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "APC™ Symmetra™ PX UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 95,
    description: "A world-class redundant, scalable, power protection system designed to cost-effectively provide high levels of availability for modular data centers.",
    features: [
      "Modular power, runtime, and control modules",
      "Scalable power capacity from 16 to 160 kW",
      "N+1 redundant modules in a single footprint",
      "Remotely manageable over web network protocols",
      "High efficiency at partial load levels"
    ],
    stats: [
      { label: "CAPACITY", value: "16-160 kW" },
      { label: "REDUNDANCY", value: "N+1 Power & Control Modules" },
      { label: "VOLTAGE", value: "400V 3-Phase Input/Output" },
      { label: "FOOTPRINT", value: "Fully integrated layout cabinet" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "APC Symmetra PX UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Symmetra PX — Enclosure View" }
    ],
    models: [
      { name: "Symmetra PX 48kW", capacity: "48 kW", inputVoltage: "400V 3-Phase", outputVoltage: "400V 3-Phase", efficiency: "95.4%", height: 2000, width: 600, depth: 1070, weight: "620 kg" }
    ]
  },
  {
    id: "vertiv-eaton-9px-ups",
    categoryId: "ups",
    tag: "CRITICAL POWER",
    title: "Eaton® 9PX Double Conversion UPS",
    scoreLabel: "EFFICIENCY RATING",
    scorePercentage: 94,
    description: "An exceptional double-conversion online UPS that delivers reliable, efficient, and versatile critical power protection for virtualized IT rooms.",
    features: [
      "Energy Star qualified with up to 94% efficiency",
      "Next-generation graphical LCD interface display",
      "Integrates with virtualization management software",
      "Active battery integration technology",
      "Standard rack/tower convertible design format"
    ],
    stats: [
      { label: "CAPACITY", value: "5-11 kVA" },
      { label: "POWER FACTOR", value: "0.9 (Standard)" },
      { label: "VIRTUALIZATION", value: "VMware / Hyper-V Ready" },
      { label: "WARRANTY", value: "3-Year Advanced replacement" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Eaton 9PX UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Eaton 9PX — Chassis View" }
    ],
    models: [
      { name: "Eaton 9PX - 6000", capacity: "6000 VA", inputVoltage: "230V Single-Phase", outputVoltage: "230V Single-Phase", efficiency: "94.0%", height: 130, width: 440, depth: 685, weight: "48 kg" }
    ]
  },


  // ─── DC POWER SYSTEMS ──────────────────────────────────────────────────────
  {
    id: "netsure-7100-dc-power",
    categoryId: "dc-power",
    tag: "DC POWER SYSTEMS",
    title: "NetSure™ 7100 Series DC Power",
    scoreLabel: "SYSTEM EFFICIENCY",
    scorePercentage: 96,
    description: "A highly modular 48V DC power system designed for medium-to-large telecom hubs, central offices, and data center co-location facilities requiring rock-solid DC infrastructure.",
    features: [
      "96.5% efficient eSure rectifiers",
      "High power density: 3000A capacity in a single rack",
      "Advanced controller with dynamic monitoring",
      "Flexible distribution configurations",
      "Hot-swappable modules for zero-downtime service"
    ],
    stats: [
      { label: "VOLTAGE", value: "-48 VDC" },
      { label: "MAX CURRENT", value: "3000 A" },
      { label: "MODULE CAPACITY", value: "3.5 kW per Rectifier" },
      { label: "OPERATING TEMP", value: "-40°C to +65°C" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "NetSure 7100 DC Power",
    images: [
      { src: "/images/products/switchgear.png", alt: "NetSure 5100 — System Overview" },
      { src: "/images/products/ups.png", alt: "NetSure 5100 — Power Module" },
      { src: "/images/products/cooling.png", alt: "NetSure 5100 — Ventilation" }
    ],
    models: [
      { 
        name: "NetSure 7100 - Single Cab", 
        capacity: "1000 A / 58 kW", 
        inputVoltage: "200-250V AC", 
        outputVoltage: "-48 VDC Nominal",
        efficiency: "96.2%", 
        height: 2000, 
        width: 600, 
        depth: 600, 
        weight: "220 kg" 
      },
      { 
        name: "NetSure 7100 - Dual Cab", 
        capacity: "2000 A / 116 kW", 
        inputVoltage: "200-250V AC", 
        outputVoltage: "-48 VDC Nominal",
        efficiency: "96.2%", 
        height: 2000, 
        width: 1200, 
        depth: 600, 
        weight: "410 kg" 
      }
    ]
  },

  // ─── POWER DISTRIBUTION ───────────────────────────────────────────────────
  {
    id: "liebert-rx-cabinet",
    categoryId: "power-distribution",
    tag: "POWER DISTRIBUTION",
    title: "Liebert® RX Distribution Cabinet",
    scoreLabel: "DISTRIBUTION EFFICIENCY",
    scorePercentage: 98,
    description: "Compact electrical distribution cabinet engineered to optimize space usage while delivering highly reliable and granular power control straight to server enclosures.",
    features: [
      "Granular circuit-level monitoring",
      "Exceptionally small footprint",
      "Configurable breaker configurations",
      "Interlocking safety features",
      "High interruption ratings for surge mitigation"
    ],
    stats: [
      { label: "RATED VOLTAGE", value: "208V / 400V AC" },
      { label: "BREAKER CAPACITY", value: "Up to 84 poles" },
      { label: "MONITORING", value: "Modbus/BACnet" },
      { label: "FOOTPRINT", value: "0.28 m²" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Liebert RX Cabinet",
    images: [
      { src: "/images/products/switchgear.png", alt: "Geist rPDU — Front View" },
      { src: "/images/products/ups.png", alt: "Geist rPDU — Rack Mounted" },
      { src: "/images/products/cooling.png", alt: "Geist rPDU — Cable Management" }
    ],
    models: [
      { 
        name: "Liebert RX - Standard", 
        capacity: "225 A / 400A", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "230V Single / 400V 3-Phase",
        efficiency: "99.8%", 
        height: 2000, 
        width: 600, 
        depth: 450, 
        weight: "180 kg" 
      }
    ]
  },

  // ─── INDUSTRIAL AC AND DC SYSTEMS ──────────────────────────────────────────
  {
    id: "chloride-cp70z-industrial-ups",
    categoryId: "industrial-ac-dc",
    tag: "INDUSTRIAL AC & DC",
    title: "Chloride® CP70Z Industrial AC UPS",
    scoreLabel: "SEISMIC & RUGGEDNESS INDEX",
    scorePercentage: 95,
    description: "Heavy-duty industrial double-conversion AC UPS engineered for harsh environments like offshore oil rigs, refineries, nuclear power sites, and heavy steel production.",
    features: [
      "60-year structural design life support",
      "High galvanic isolation on input/output",
      "High short-circuit capability",
      "Seismically rated enclosures",
      "Harsh ambient cooling architecture"
    ],
    stats: [
      { label: "CAPACITY", value: "5-250 kVA" },
      { label: "DESIGN LIFE", value: "20+ Years" },
      { label: "IP RATING", value: "Up to IP42" },
      { label: "DYNAMIC STABILITY", value: "±1% Voltage Deviation" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Chloride CP70Z Industrial UPS",
    images: [
      { src: "/images/products/ups.png", alt: "Chloride CP70Z — Industrial Enclosure" },
      { src: "/images/products/switchgear.png", alt: "Chloride CP70Z — Internal Wiring" },
      { src: "/images/products/cooling.png", alt: "Chloride CP70Z — Cooling Vent" }
    ],
    models: [
      { 
        name: "CP70Z - 10kVA", 
        capacity: "10 kVA / 8 kW", 
        inputVoltage: "400V AC (Galvanic Iso)", 
        outputVoltage: "230V AC",
        efficiency: "92.0%", 
        height: 1800, 
        width: 800, 
        depth: 800, 
        weight: "480 kg" 
      },
      { 
        name: "CP70Z - 50kVA", 
        capacity: "50 kVA / 40 kW", 
        inputVoltage: "400V AC (Galvanic Iso)", 
        outputVoltage: "230V AC / 400V AC",
        efficiency: "93.5%", 
        height: 2000, 
        width: 1200, 
        depth: 800, 
        weight: "950 kg" 
      }
    ]
  },

  // ─── LIQUID COOLING SOLUTIONS ──────────────────────────────────────────────
  {
    id: "liebert-xdu-coolant-unit",
    categoryId: "liquid-cooling",
    tag: "LIQUID COOLING",
    title: "Liebert® XDU Coolant Distribution Unit",
    scoreLabel: "HEAT EXCHANGER COEF",
    scorePercentage: 98,
    description: "Advanced liquid-to-liquid and liquid-to-air cooling systems, critical for handling extreme heat densities of next-gen GPU server architectures.",
    features: [
      "Dual variable-speed pumps for redundant loop",
      "Precise coolant dewpoint control to avoid condensation",
      "Primary-secondary loop isolation",
      "Integrated leak-detection algorithms",
      "Modulating control valves for capacity trimming"
    ],
    stats: [
      { label: "HEAT EXCHANGE", value: "Up to 1350 kW" },
      { label: "FLOW RATE", value: "Up to 350 L/min" },
      { label: "COOLANT", value: "Water / Glycol / PG" },
      { label: "PUMP REDUNDANCY", value: "1+1 Active Redundancy" }
    ],
    imageSrc: "/images/products/cooling.png",
    imageAlt: "Liebert XDU Coolant Unit",
    images: [
      { src: "/images/products/cooling.png", alt: "Liebert XDU — Front View" },
      { src: "/images/products/ups.png", alt: "Liebert XDU — Power Integration" },
      { src: "/images/products/switchgear.png", alt: "Liebert XDU — Control Panel" }
    ],
    models: [
      { 
        name: "Liebert XDU 450", 
        capacity: "450 kW", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "N/A",
        efficiency: "98.5% Heat Transfer", 
        height: 2000, 
        width: 800, 
        depth: 1000, 
        weight: "650 kg" 
      },
      { 
        name: "Liebert XDU 1350", 
        capacity: "1350 kW", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "N/A",
        efficiency: "98.8% Heat Transfer", 
        height: 2000, 
        width: 1600, 
        depth: 1000, 
        weight: "1150 kg" 
      }
    ]
  },

  // ─── ENCLOSURE COOLING ─────────────────────────────────────────────────────
  {
    id: "liebert-src-mini-split",
    categoryId: "enclosure-cooling",
    tag: "ENCLOSURE COOLING",
    title: "Liebert® SRC Mini-Split Cooling",
    scoreLabel: "COOLING COMPLIANCE",
    scorePercentage: 92,
    description: "High-efficiency vertical cooling systems engineered specifically for remote computing sites, network cabinets, and electrical enclosures without central HVAC.",
    features: [
      "24/7 continuous operation design",
      "EC Fan technology for precision speed",
      "Remote status reporting and alarms",
      "No condensation drainage hazards",
      "Compact indoor wall-mounted unit"
    ],
    stats: [
      { label: "COOLING CAP", value: "3.5 - 11.5 kW" },
      { label: "REFRIGERANT", value: "R410A / Low GWP" },
      { label: "EFFICIENCY COP", value: "Up to 3.8" },
      { label: "SUPPORT NETWORK", value: "24/7 Remote NOC" }
    ],
    imageSrc: "/images/products/cooling.png",
    imageAlt: "Liebert SRC Mini-Split",
    images: [
      { src: "/images/products/cooling.png", alt: "Liebert SRC — Wall Mount" },
      { src: "/images/products/ups.png", alt: "Liebert SRC — External Unit" },
      { src: "/images/products/switchgear.png", alt: "Liebert SRC — Status Screen" }
    ],
    models: [
      { 
        name: "Liebert SRC 035", 
        capacity: "3.5 kW", 
        inputVoltage: "230V Single-Phase", 
        outputVoltage: "N/A",
        efficiency: "COP 3.5", 
        height: 800, 
        width: 500, 
        depth: 250, 
        weight: "45 kg" 
      },
      { 
        name: "Liebert SRC 115", 
        capacity: "11.5 kW", 
        inputVoltage: "400V 3-Phase", 
        outputVoltage: "N/A",
        efficiency: "COP 3.7", 
        height: 1000, 
        width: 600, 
        depth: 350, 
        weight: "85 kg" 
      }
    ]
  },

  // ─── INTEGRATED SOLUTIONS ──────────────────────────────────────────────────
  {
    id: "vertiv-smartcabinet-micro",
    categoryId: "integrated-solutions",
    tag: "INTEGRATED SOLUTIONS",
    title: "Vertiv™ SmartCabinet™ Micro Data Center",
    scoreLabel: "INTEGRATION LEVEL",
    scorePercentage: 99,
    description: "A pre-packaged, fully integrated micro data center containing power protection, cooling unit, cabling management, physical security, and monitoring in a single IT rack.",
    features: [
      "Fully self-contained, dust-proof environment",
      "Integrated 3kVA rackmount UPS",
      "Built-in emergency backup ventilation",
      "Biometric access control for cybersecurity compliance",
      "Central monitoring controller with alerts"
    ],
    stats: [
      { label: "RACK SIZE", value: "24U / 42U" },
      { label: "COOLING CAPACITY", value: "Up to 3.5 kW" },
      { label: "UPS RATING", value: "3 kVA Double-Conversion" },
      { label: "IP RATING", value: "IP54 Structural" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Vertiv SmartCabinet",
    images: [
      { src: "/images/products/switchgear.png", alt: "SmartCabinet — Rack Front" },
      { src: "/images/products/ups.png", alt: "SmartCabinet — Interior View" },
      { src: "/images/products/cooling.png", alt: "SmartCabinet — Cooling Integration" }
    ],
    models: [
      { 
        name: "SmartCabinet - 24U", 
        capacity: "2.5 kW Net Load", 
        inputVoltage: "230V Single-Phase", 
        outputVoltage: "230V Single-Phase",
        efficiency: "94% UPS / COP 3.1 Cooling", 
        height: 1400, 
        width: 800, 
        depth: 1100, 
        weight: "340 kg" 
      },
      { 
        name: "SmartCabinet - 42U", 
        capacity: "3.5 kW Net Load", 
        inputVoltage: "230V Single-Phase", 
        outputVoltage: "230V Single-Phase",
        efficiency: "94% UPS / COP 3.3 Cooling", 
        height: 2000, 
        width: 800, 
        depth: 1200, 
        weight: "510 kg" 
      }
    ]
  },

  // ─── DIGITAL INFRASTRUCTURE SOLUTIONS ──────────────────────────────────────
  {
    id: "vertiv-trellis-enterprise-suite",
    categoryId: "digital-infrastructure",
    tag: "DIGITAL INFRASTRUCTURE",
    title: "Trellis™ Enterprise Suite (DCIM)",
    scoreLabel: "INFRASTRUCTURE VISIBILITY",
    scorePercentage: 97,
    description: "Award-winning, comprehensive DCIM platform providing data-center managers with real-time optimization, heat mapping, asset management, and capacity metrics.",
    features: [
      "Real-time power and thermal path monitoring",
      "Automated capacity planning and forecasting",
      "Granular 3D visualization of floor layouts",
      "Alert correlations for rapid root-cause diagnosis",
      "Integrates with virtualization layers (VMware, etc.)"
    ],
    stats: [
      { label: "INTEGRATIONS", value: "10,000+ Device Library" },
      { label: "DEPLOYMENT", value: "On-Prem / Hybrid Cloud" },
      { label: "DATA RETENTION", value: "Granular Time-Series DB" },
      { label: "ALERT TIME", value: "< 2 Seconds" }
    ],
    imageSrc: "/images/products/cooling.png",
    imageAlt: "Trellis Enterprise Suite Dashboard",
    models: [
      { 
        name: "Trellis VM Deployment", 
        capacity: "Up to 50,000 Nodes", 
        inputVoltage: "N/A", 
        outputVoltage: "N/A",
        efficiency: "99.9% Software Uptime", 
        height: "Virtual Machine", 
        width: "N/A", 
        depth: "N/A", 
        weight: "0 kg" 
      }
    ]
  },
  // ─── L&T BRAND TTA PANEL ──────────────────────────────────────────────────
  {
    id: "lt-tta-panel",
    categoryId: "power-distribution",
    tag: "CRITICAL POWER",
    title: "L&T Brand Type Tested Assembly (TTA) Panel",
    scoreLabel: "COMPLIANCE SCORE",
    scorePercentage: 100,
    description: "High-performance Type Tested Assemblies (TTA) manufactured under strategic JV with Synchro Electricals. Certified to IS/IEC standards, offering modular, fully compliant low-voltage power distribution with intelligent control.",
    features: [
      "Fully Type Tested Assemblies (TTA) as per IS/IEC standards",
      "Triple source changeover capability with mechanical & electrical interlocks",
      "Microprocessor-based automatic source selection & power management",
      "Configurable current range from 63A up to 4000A capacity",
      "Flexible ingress protection options: IP42 / IP54 solutions",
      "Integrated Auto Mains Failure (AMF) control systems"
    ],
    stats: [
      { label: "CURRENT RANGE", value: "63A – 4000A" },
      { label: "JV ALLIANCE", value: "Synchro Electricals" },
      { label: "STANDARDS", value: "IS/IEC Compliant" },
      { label: "INGRESS PROTECTION", value: "IP42 / IP54" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "L&T TTA Panel Switchgear",
    images: [
      { src: "/images/products/switchgear.png", alt: "L&T TTA Panel — Front View" }
    ],
    models: [
      { name: "TTA-630", capacity: "630 A", inputVoltage: "415V 3-Phase", outputVoltage: "415V 3-Phase", efficiency: "99.5%", height: 2000, width: 800, depth: 800, weight: "450 kg" },
      { name: "TTA-1600", capacity: "1600 A", inputVoltage: "415V 3-Phase", outputVoltage: "415V 3-Phase", efficiency: "99.6%", height: 2200, width: 1000, depth: 1000, weight: "850 kg" },
      { name: "TTA-4000", capacity: "4000 A", inputVoltage: "415V 3-Phase", outputVoltage: "415V 3-Phase", efficiency: "99.7%", height: 2200, width: 2400, depth: 1200, weight: "2100 kg" }
    ]
  },
  // ─── LUCY BRAND RMU ───────────────────────────────────────────────────────
  {
    id: "lucy-rmu",
    categoryId: "power-distribution",
    tag: "CRITICAL POWER",
    title: "Lucy Brand Ring Main Unit (RMU)",
    scoreLabel: "RELIABILITY INDEX",
    scorePercentage: 99,
    description: "Premium Lucy Electric medium-voltage Ring Main Units (RMU) for smart distribution grids. Designed for 11kV and 33kV networks, utilizing SF6 or vacuum technology in a sealed, maintenance-free enclosure.",
    features: [
      "Medium voltage ratings: 11kV and 33kV distribution options",
      "Advanced SF6 gas or eco-friendly vacuum insulation technology",
      "Highly configurable configurations: 2-way, 3-way, or multi-way panels",
      "Sealed-for-life tank design for maintenance-free operations",
      "Full compliance with IEC 62271-200 international standard specifications",
      "Integrated smart grid automation & remote terminal unit (RTU) ready"
    ],
    stats: [
      { label: "VOLTAGE RANGE", value: "11kV – 33kV" },
      { label: "INSULATION TYPE", value: "SF6 / Vacuum" },
      { label: "COMPLIANCE", value: "IEC 62271-200" },
      { label: "DESIGN", value: "Sealed Maintenance-Free" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Lucy Electric Ring Main Unit (RMU)",
    images: [
      { src: "/images/products/switchgear.png", alt: "Lucy RMU — Front View" }
    ],
    models: [
      { name: "Sabre VRN2a", capacity: "11 kV / 630A", inputVoltage: "11 kV", outputVoltage: "11 kV", efficiency: "99.8%", height: 1450, width: 1050, depth: 850, weight: "420 kg" },
      { name: "Aegis 36", capacity: "33 kV / 630A", inputVoltage: "33 kV", outputVoltage: "33 kV", efficiency: "99.8%", height: 1800, width: 1200, depth: 950, weight: "780 kg" }
    ]
  },
  // ─── LUCY BRAND CSS ───────────────────────────────────────────────────────
  {
    id: "lucy-css",
    categoryId: "power-distribution",
    tag: "CRITICAL POWER",
    title: "Lucy Brand Compact Substation (CSS)",
    scoreLabel: "INTEGRATION INDEX",
    scorePercentage: 98,
    description: "Fully integrated, type-tested Lucy Electric Compact Substations (CSS) designed for distribution networks. Houses medium voltage switchgear, distribution transformer, and low voltage boards in a robust, weatherproof enclosure.",
    features: [
      "Factory assembled, fully integrated MV + Transformer + LV system",
      "Standard voltage range: 11kV incoming / 415V distribution outgoing",
      "Scalable power ratings from 100kVA up to 2500kVA capacity",
      "Robust, weatherproof & walk-in / non-walk-in style metal enclosure",
      "Completely factory tested to ensure safety and quick commissioning",
      "Optimal cooling design for extreme ambient tropical conditions"
    ],
    stats: [
      { label: "CAPACITY RANGE", value: "100kVA – 2500kVA" },
      { label: "VOLTAGE STEP", value: "11kV / 415V" },
      { label: "INTEGRATION", value: "MV + TX + LV" },
      { label: "ENCLOSURE", value: "Weatherproof IP23D/IP54" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Lucy Electric Compact Substation (CSS)",
    images: [
      { src: "/images/products/switchgear.png", alt: "Lucy CSS — Full Enclosure" }
    ],
    models: [
      { name: "CSS-500", capacity: "500 kVA", inputVoltage: "11 kV", outputVoltage: "415 V", efficiency: "98.5%", height: 2200, width: 2800, depth: 2200, weight: "4200 kg" },
      { name: "CSS-1000", capacity: "1000 kVA", inputVoltage: "11 kV", outputVoltage: "415 V", efficiency: "98.7%", height: 2400, width: 3400, depth: 2400, weight: "6800 kg" },
      { name: "CSS-2500", capacity: "2500 kVA", inputVoltage: "11 kV", outputVoltage: "415 V", efficiency: "98.9%", height: 2600, width: 4200, depth: 2600, weight: "12500 kg" }
    ]
  }
];
