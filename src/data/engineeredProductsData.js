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
  }
];
