export const engineeredServicesData = [
  // ─── SPARE PARTS & MANAGEMENT ─────────────────────────────────────────────
  {
    id: "oem-spare-parts-provisioning",
    categoryId: "spare-parts",
    tag: "SPARE PARTS MANAGEMENT",
    title: "OEM Spare Parts Provisioning",
    scoreLabel: "AVAILABILITY RATE",
    scorePercentage: 99,
    description: "Global procurement and deployment of genuine OEM spare parts, managing inventory and staging to minimize Mean Time to Repair (MTTR) across your critical power and cooling infrastructure.",
    features: [
      "24/7 emergency parts dispatch",
      "OEM warranty integrity preservation",
      "Critical spare parts kits pre-staged on-site",
      "End-of-life component replacement sourcing",
      "ISO 9001 certified logistics management"
    ],
    stats: [
      { label: "LOGISTICS CENTER", value: "3 Regional Hubs" },
      { label: "DISPATCH TIME", value: "< 2 Hours" },
      { label: "PARTS ACCURACY", value: "99.98% Fill Rate" },
      { label: "COMPATIBILITY", value: "Multi-Brand Validation" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Spare Parts Management",
    images: [
      { src: "/images/products/switchgear.png", alt: "Spare Parts — Warehouse" },
      { src: "/images/products/ups.png", alt: "Spare Parts — UPS Components" },
      { src: "/images/products/cooling.png", alt: "Spare Parts — Cooling Units" }
    ],
    slaPlans: [
      {
        parameter: "Response Window",
        bronze: "Next Business Day",
        silver: "Within 4 Hours",
        gold: "Within 2 Hours Guaranteed"
      },
      {
        parameter: "Support Coverage",
        bronze: "8x5 (Business Hours)",
        silver: "12x5 (Extended)",
        gold: "24x7x365 (Continuous Dispatch)"
      },
      {
        parameter: "On-Site Spares Kit",
        bronze: "Not Included",
        silver: "Standard Consumables",
        gold: "Comprehensive Critical Spares Locker"
      },
      {
        parameter: "Shipping Costs",
        bronze: "Charged to Client",
        silver: "Free Priority Ground",
        gold: "Free Next-Flight-Out Courier"
      }
    ]
  },
  {
    id: "emergency-spare-parts-logistics",
    categoryId: "spare-parts",
    tag: "SPARE PARTS MANAGEMENT",
    title: "Emergency Parts Dispatch & Air Logistics",
    scoreLabel: "DISPATCH SLA MET",
    scorePercentage: 98,
    description: "Expedited next-flight-out parts dispatch and dedicated air courier services for hyper-critical hardware failures that demand active time-critical site delivery.",
    features: [
      "Dedicated hot-shot courier delivery",
      "Customs pre-clearance priority validation",
      "Specialized protective transit packaging",
      "Real-time GPS transit tracking alerts",
      "24/7/365 active NOC hotline dispatch"
    ],
    stats: [
      { label: "TRANSIT SPEED", value: "Next-Flight-Out" },
      { label: "COURIER", value: "Dedicated Hand-Carry" },
      { label: "DISPATCH SUCCESS", value: "99.4%" },
      { label: "GLOBAL COVERAGE", value: "Multi-Hub Availability" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Emergency Spare Parts Logistics",
    images: [
      { src: "/images/products/switchgear.png", alt: "Emergency Logistics — Air Transit" }
    ],
    slaPlans: [
      { parameter: "Delivery Target", bronze: "Within 24 Hours", silver: "Within 6 Hours", gold: "Within 3 Hours Guaranteed" }
    ]
  },
  {
    id: "on-site-critical-parts-locker",
    categoryId: "spare-parts",
    tag: "SPARE PARTS MANAGEMENT",
    title: "On-Site Critical Spares Cabinet Provisioning",
    scoreLabel: "ON-SITE STOCK RATE",
    scorePercentage: 100,
    description: "Installation of a secure, environmentally monitored parts locker on-site containing all high-failure-rate parts, guaranteeing immediate physical replacement availability.",
    features: [
      "Custom tailored parts inventory locker",
      "Secure RFID access logging control",
      "Automatic replenishment inventory sensors",
      "Climate and dust-proof storage container",
      "Fully audited annual swap-out program"
    ],
    stats: [
      { label: "STOCK AVAILABILITY", value: "100% On-Site" },
      { label: "ACCESS LOGGING", value: "RFID / Pin Code" },
      { label: "MONITORING", value: "24/7 Connectivity" },
      { label: "REPLENISHMENT", value: "Automated Dispatch Trigger" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "On-Site Spares Locker",
    images: [
      { src: "/images/products/switchgear.png", alt: "Spares Locker — System cabinet" }
    ],
    slaPlans: [
      { parameter: "Stock Level Integrity", bronze: "Monthly Audits", silver: "Bi-Weekly Auto-check", gold: "Real-time RFID Tracking" }
    ]
  },
  {
    id: "custom-switchgear-parts-sourcing",
    categoryId: "spare-parts",
    tag: "SPARE PARTS MANAGEMENT",
    title: "Legacy Switchgear & Breaker Parts Sourcing",
    scoreLabel: "LEGACY PARTS SOLVED",
    scorePercentage: 97,
    description: "Specialized reverse-engineering and sourcing services for discontinued or legacy high-voltage switchgear components, keeping aging electrical systems operational.",
    features: [
      "Discontinued breaker contact sourcing",
      "Precision CNC machining of legacy copper busbars",
      "OEM-certified remanufactured parts support",
      "Electrical certification compliance testing",
      "Custom isolation barriers manufacturing"
    ],
    stats: [
      { label: "Sourcing time", value: "7-14 Days average" },
      { label: "Legacy support", value: "Up to 40-year old gear" },
      { label: "Machining", value: "ISO Certified Facility" },
      { label: "Testing", value: "Dielectric certified" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Legacy Parts Sourcing",
    images: [
      { src: "/images/products/switchgear.png", alt: "Legacy Parts — Switchgear panel" }
    ],
    slaPlans: [
      { parameter: "Sourcing SLA", bronze: "Best-effort Sourcing", silver: "Priority Procurement Loop", gold: "Guaranteed Global search & Machining Plan" }
    ]
  },
  {
    id: "battery-terminal-replacement-kit",
    categoryId: "spare-parts",
    tag: "SPARE PARTS MANAGEMENT",
    title: "Battery Terminal & Intercell Connector Spares",
    scoreLabel: "CONNECTOR RELIABILITY",
    scorePercentage: 99,
    description: "Provisioning and on-site stocking of specialized heavy-duty copper intercell connectors, terminals, and anti-corrosion grease kits for UPS battery rooms.",
    features: [
      "Ultra-low resistance solid copper intercell bars",
      "Specialized terminal lug connectors",
      "Anti-oxidant conductant grease tubes",
      "Flame-retardant terminal safety covers",
      "IEEE-compliant battery maintenance tools"
    ],
    stats: [
      { label: "Connector load", value: "Up to 800A capacity" },
      { label: "Grease formula", value: "OEM certified conductive" },
      { label: "Covers", value: "UL94 V-0 Rated" },
      { label: "Testing", value: "Resistance drop certified" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Battery intercell connectors",
    images: [
      { src: "/images/products/switchgear.png", alt: "Battery Parts — Intercell bars" }
    ],
    slaPlans: [
      { parameter: "Parts availability", bronze: "Standard delivery", silver: "Next-Day Air", gold: "Pre-stocked in On-Site Locker" }
    ]
  },
  {
    id: "cooling-compressor-oem-parts",
    categoryId: "spare-parts",
    tag: "SPARE PARTS MANAGEMENT",
    title: "OEM Compressors & Thermal Valves Provisioning",
    scoreLabel: "THERMAL PARTS INDEX",
    scorePercentage: 96,
    description: "Sourcing and priority logistics for genuine Copeland, Danfoss, and Liebert scroll compressors and electronic expansion valves (EEV) for data center cooling loops.",
    features: [
      "OEM factory-matched scroll compressors",
      "Electronic expansion valve (EEV) assemblies",
      "Filter drier and receiver cores",
      "Leak testing nitrogen manifolds",
      "Eco-refrigerant recharge kits"
    ],
    stats: [
      { label: "COMPRESSOR TYPES", value: "Digital Scroll, Inverter" },
      { label: "REFRIGERANT", value: "R410A, R134a, R32 compatible" },
      { label: "WARRANTY", value: "OEM Full replacement support" },
      { label: "DELIVERY SLA", value: "< 24 Hours priority" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "OEM Cooling Compressors",
    images: [
      { src: "/images/products/switchgear.png", alt: "Cooling Parts — Compressor units" }
    ],
    slaPlans: [
      { parameter: "Compressor dispatch", bronze: "Standard freight", silver: "Next-Day Air cargo", gold: "Next-flight-out express delivery" }
    ]
  },


  // ─── PREVENTIVE MAINTENANCE ───────────────────────────────────────────────
  {
    id: "preventive-maintenance-programme",
    categoryId: "preventive-maint",
    tag: "PREVENTIVE MAINTENANCE",
    title: "Preventive Maintenance Programme",
    scoreLabel: "PREVENTIVE INDEX",
    scorePercentage: 95,
    description: "Structured, periodic diagnostic visits by certified electrical and thermal engineers to identify hidden components drift, update firmware, and resolve issues before they trigger costly outages.",
    features: [
      "Fully customized maintenance schedules",
      "Infrared thermographic inspections of connections",
      "Comprehensive diagnostic reporting",
      "Firmware updates & calibrations",
      "Load bank testing execution"
    ],
    stats: [
      { label: "VISIT FREQUENCY", value: "Quarterly / Semi-Annual" },
      { label: "ENGINEERS", value: "OEM Certified" },
      { label: "COMPLIANCE", value: "IEEE 1188 / NFPA 70B" },
      { label: "REPORTS DELIVERED", value: "Within 48 Hours" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "Preventive Maintenance",
    images: [
      { src: "/images/products/ups.png", alt: "Maintenance — UPS Inspection" },
      { src: "/images/products/switchgear.png", alt: "Maintenance — Panel Check" },
      { src: "/images/products/cooling.png", alt: "Maintenance — Cooling Service" }
    ],
    slaPlans: [
      {
        parameter: "Diagnostic Audits",
        bronze: "1 Audit / Year",
        silver: "2 Audits / Year + Thermal Scan",
        gold: "4 Audits / Year + Full Diagnostics"
      },
      {
        parameter: "Emergency Response",
        bronze: "Next Business Day",
        silver: "Within 4 Hours",
        gold: "Within 2 Hours Guaranteed"
      },
      {
        parameter: "Calibration Services",
        bronze: "Basic checks only",
        silver: "Standard recalibrations",
        gold: "Precision tuning & firmware alignment"
      },
      {
        parameter: "Outage Warranty",
        bronze: "Not Included",
        silver: "Limited Coverage",
        gold: "100% Availability SLA Guarantee"
      }
    ]
  },

  // ─── PERFORMANCE OPTIMIZATION ──────────────────────────────────────────────
  {
    id: "power-cooling-efficiency-audit",
    categoryId: "performance-opt",
    tag: "PERFORMANCE OPTIMIZATION",
    title: "Power & Cooling Efficiency Audit",
    scoreLabel: "PUE REDUCTION RATE",
    scorePercentage: 94,
    description: "Telemetry-backed analytical review of data center PUE and efficiency, resolving airflow bottlenecks, load distribution offsets, and mechanical tuning configuration gaps.",
    features: [
      "Computational Fluid Dynamics (CFD) reports",
      "Real-time telemetry and data mining",
      "Harmonic distortion analysis",
      "PUE improvement action roadmap",
      "Variable-speed drive optimization"
    ],
    stats: [
      { label: "ESTIMATED PAYBACK", value: "< 12 Months" },
      { label: "DATA RETENTION", value: "14-Day Power logging" },
      { label: "AUDIT METHOD", value: "Non-Intrusive" },
      { label: "SAVINGS POTENTIAL", value: "Up to 25% Energy Load" }
    ],
    imageSrc: "/images/products/cooling.png",
    imageAlt: "Performance Optimization Services",
    images: [
      { src: "/images/products/cooling.png", alt: "Optimization — Thermal Audit" },
      { src: "/images/products/ups.png", alt: "Optimization — Power Analysis" },
      { src: "/images/products/switchgear.png", alt: "Optimization — Switchgear" }
    ],
    slaPlans: [
      {
        parameter: "PUE Tracking Tiers",
        bronze: "Static Annual Reports",
        silver: "Monthly Telemetry Dashboards",
        gold: "Continuous AI-Enabled Optimization"
      },
      {
        parameter: "Response to Anomalies",
        bronze: "Email Alert (48hr)",
        silver: "Phone/SMS Alert (2hr)",
        gold: "Automated Loop Deflection (< 5m)"
      },
      {
        parameter: "Power Audits",
        bronze: "Standard compliance",
        silver: "Harmonic & Thermal mapping",
        gold: "Full transient & load-profile analysis"
      }
    ]
  },

  // ─── REMOTE SERVICES ───────────────────────────────────────────────────────
  {
    id: "remote-life-monitoring-service",
    categoryId: "remote-services",
    tag: "REMOTE INFRASTRUCTURE MONITORING",
    title: "LIFE™ Remote Diagnostic Service",
    scoreLabel: "NOC UPTIME INDEX",
    scorePercentage: 99,
    description: "Continuous 24/7 NOC monitoring that provides real-time telemetry, detecting faults instantly and resolving up to 70% of alarms remotely without requiring physical dispatches.",
    features: [
      "24/7/365 continuous NOC eyes-on-glass",
      "Encrypted secure VPN network architecture",
      "Proactive warning and alarm management",
      "Remote diagnostics and firmware updates",
      "Weekly/Monthly availability reporting"
    ],
    stats: [
      { label: "NOC CENTER", value: "Dual Georedundant" },
      { label: "RESPONSE TIME", value: "< 15 Minutes" },
      { label: "REMOTE RESOLUTION", value: "Up to 70% of Alarms" },
      { label: "MONITORED METRICS", value: "Power, Temp, HVAC, Batteries" }
    ],
    imageSrc: "/images/products/cooling.png",
    imageAlt: "LIFE Remote Diagnostics",
    images: [
      { src: "/images/products/cooling.png", alt: "Remote — Monitoring Station" },
      { src: "/images/products/switchgear.png", alt: "Remote — Gateway Sensors" },
      { src: "/images/products/ups.png", alt: "Remote — Dashboard" }
    ],
    slaPlans: [
      {
        parameter: "NOC Dispatch Time",
        bronze: "Within 2 Hours",
        silver: "Within 30 Minutes",
        gold: "Immediate / < 10 Minutes"
      },
      {
        parameter: "Remote Diagnostics",
        bronze: "Basic Logs Review",
        silver: "Full State Telemetry Analyser",
        gold: "Real-time AI Anomaly Modeling"
      },
      {
        parameter: "Secure Tunneling",
        bronze: "IPsec Standard VPN",
        silver: "Multi-factor Vault VPN",
        gold: "Zero-Trust Private Encrypted Line"
      }
    ]
  },

  // ─── PROJECT & COMMISSIONING ───────────────────────────────────────────────
  {
    id: "installation-site-commissioning",
    categoryId: "project-commission",
    tag: "PROJECT & COMMISSIONING",
    title: "Installation & Site Commissioning",
    scoreLabel: "COMPLETION QUALITY RATE",
    scorePercentage: 98,
    description: "End-to-end electrical and thermal installation, testing, and commissioning, ensuring systems perform exactly to factory specifications upon handover.",
    features: [
      "Factory Acceptance Testing (FAT) coordination",
      "Site Acceptance Testing (SAT) execution",
      "As-built drawings and documentation drafting",
      "System integration and communication setup",
      "Detailed electrical load profile validation"
    ],
    stats: [
      { label: "TESTING LEVEL", value: "Level 1 to Level 5 Certified" },
      { label: "SAFETY ACCREDITATION", value: "OSHA compliant" },
      { label: "DOCUMENTATION", value: "Full CAD & PDF Handover" },
      { label: "PROJECT DURATION", value: "Milestone-Tracked" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Commissioning Services",
    images: [
      { src: "/images/products/switchgear.png", alt: "Commissioning — Site Setup" },
      { src: "/images/products/ups.png", alt: "Commissioning — Power Test" },
      { src: "/images/products/cooling.png", alt: "Commissioning — Thermal Verify" }
    ],
    slaPlans: [
      {
        parameter: "On-Site Supervision",
        bronze: "Daily Checkpoints",
        silver: "Dedicated Lead Engineer",
        gold: "24/7 Double-Shift Project Management"
      },
      {
        parameter: "Integration Level",
        bronze: "BMS dry contacts only",
        silver: "Modbus/BACnet mapping",
        gold: "Custom SCADA/MQTT Cloud Integrations"
      },
      {
        parameter: "Training Handover",
        bronze: "Basic Operator Manuals",
        silver: "4-Hour Classroom Session",
        gold: "8-Hour Hands-on Simulator Training"
      }
    ]
  },

  // ─── INDUSTRIAL MAINTENANCE ────────────────────────────────────────────────
  {
    id: "industrial-switchgear-motor-service",
    categoryId: "industrial-maint",
    tag: "INDUSTRIAL MAINTENANCE",
    title: "Industrial Switchgear & Motor Servicing",
    scoreLabel: "SAFETY QUALITY RATE",
    scorePercentage: 96,
    description: "Heavy-duty maintenance solutions for high-voltage (HV) switchgear panels, vacuum circuit breakers, and heavy industrial motor systems in demanding chemical and mining plants.",
    features: [
      "Contact resistance and insulation testing",
      "SF6 gas leak detection and filling",
      "Arc-flash protection alignment",
      "Industrial motor vibration analysis",
      "High-power switch gear alignment and calibration"
    ],
    stats: [
      { label: "VOLTAGE CAPACITY", value: "Up to 33 kV" },
      { label: "COMPLIANCE STATS", value: "NEMA / IEC standards" },
      { label: "TEST EQUIPMENT", value: "Megger / Fluke Industrial" },
      { label: "CRITICAL OUTAGES", value: "Zero Unplanned" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Industrial Switchgear Service",
    images: [
      { src: "/images/products/switchgear.png", alt: "Industrial — Switchgear Panel" },
      { src: "/images/products/ups.png", alt: "Industrial — UPS Maintenance" },
      { src: "/images/products/cooling.png", alt: "Industrial — HVAC Service" }
    ],
    slaPlans: [
      {
        parameter: "Intervention Window",
        bronze: "Next Business Day",
        silver: "Within 4 Hours",
        gold: "Within 2 Hours Guaranteed"
      },
      {
        parameter: "Diagnostic Depth",
        bronze: "Visual + Insulator check",
        silver: "Contact resistance & Gas analysis",
        gold: "Complete thermography + Arc-flash audit"
      },
      {
        parameter: "Spare Parts Priority",
        bronze: "Standard Lead-time",
        silver: "24-Hour Expedited Delivery",
        gold: "On-Site Hot-Spare Swap Stock"
      }
    ]
  },

  // ─── UPS & BATTERY SERVICES ────────────────────────────────────────────────
  {
    id: "battery-impedance-testing-lifecycle",
    categoryId: "ups-battery",
    tag: "UPS & BATTERY SERVICES",
    title: "Battery Impedance Testing & Replacement",
    scoreLabel: "BATTERY UPTIME RATE",
    scorePercentage: 97,
    description: "Comprehensive testing, cell capacity verification, and replacement of valve-regulated lead-acid (VRLA) or Lithium-Ion battery banks to preserve backup safety runtimes.",
    features: [
      "Cell impedance testing and charting",
      "Full load bank battery discharge checks",
      "Eco-friendly disposal and recycling audits",
      "Thermal runway monitoring configuration",
      "Spot replacement of degraded cells"
    ],
    stats: [
      { label: "MONITORED CELLS", value: "Up to 500 per String" },
      { label: "TEST STANDARDS", value: "IEEE 450 / IEEE 1188" },
      { label: "BATTERY TYPES", value: "VRLA, Ni-Cd, Lithium-Ion" },
      { label: "MEASUREMENT SPEED", value: "Instantaneous Digital Log" }
    ],
    imageSrc: "/images/products/ups.png",
    imageAlt: "UPS & Battery Services",
    images: [
      { src: "/images/products/ups.png", alt: "Battery — UPS System" },
      { src: "/images/products/switchgear.png", alt: "Battery — Testing Equipment" },
      { src: "/images/products/cooling.png", alt: "Battery — Climate Chamber" }
    ],
    slaPlans: [
      {
        parameter: "Testing Scope",
        bronze: "1 Annual Impedance Test",
        silver: "2 Tests/Year + Discharge Audit",
        gold: "4 Tests/Year + Constant Load Logging"
      },
      {
        parameter: "Emergency Replacement",
        bronze: "48-Hour Dispatch",
        silver: "24-Hour Delivery & Install",
        gold: "4-Hour Critical Swap-out"
      },
      {
        parameter: "Disposal Compliance",
        bronze: "Client Managed",
        silver: "EPA Certified Logistics",
        gold: "Full cradle-to-grave audit certificate"
      }
    ]
  },

  // ─── GENERATOR & SWITCHGEAR ────────────────────────────────────────────────
  {
    id: "diesel-generator-load-bank-testing",
    categoryId: "generator",
    tag: "GENERATOR & SWITCHGEAR SERVICES",
    title: "Diesel Generator Load Bank Testing",
    scoreLabel: "GENERATOR CRITICAL UPTIME",
    scorePercentage: 95,
    description: "Rigorous load testing under realistic active building loads to prevent 'wet stacking' in diesel generators, ensuring rapid automatic transfers during power grid failures.",
    features: [
      "Resistive/reactive load bank testing",
      "Fuel quality analysis and scrubbing",
      "Automatic Transfer Switch (ATS) functional checks",
      "Governor and voltage regulator adjustments",
      "Exhaust emission and safety checks"
    ],
    stats: [
      { label: "LOAD CAPACITY", value: "Up to 2.5 MW" },
      { label: "ATS TRANSITION", value: "< 10 Seconds" },
      { label: "FUEL ANALYSIS", value: "ASTM Standard Lab Test" },
      { label: "SAFETY ENVELOPE", value: "NFPA 110 Compliant" }
    ],
    imageSrc: "/images/products/switchgear.png",
    imageAlt: "Diesel Generator Load Testing",
    images: [
      { src: "/images/products/switchgear.png", alt: "Generator — Control Panel" },
      { src: "/images/products/ups.png", alt: "Generator — Power Transfer" },
      { src: "/images/products/cooling.png", alt: "Generator — Cooling System" }
    ],
    slaPlans: [
      {
        parameter: "Load Bank Testing",
        bronze: "1 Hour Load Test / Year",
        silver: "2 Hour Load Test + Fuel Scrub",
        gold: "4 Hour Full Step-Load Test + Lab Fuel"
      },
      {
        parameter: "ATS Functional Check",
        bronze: "Annual test",
        silver: "Semi-annual test",
        gold: "Quarterly non-disruptive tests"
      },
      {
        parameter: "Critical Dispatch",
        bronze: "Next Business Day",
        silver: "Within 4 Hours",
        gold: "Within 2 Hours Guaranteed"
      }
    ]
  },

  // ─── LIQUID COOLING SERVICES ───────────────────────────────────────────────
  {
    id: "liquid-cooling-loop-charging-care",
    categoryId: "liquid-cooling",
    tag: "LIQUID COOLING SERVICES",
    title: "Liquid Cooling Loop Charging & Care",
    scoreLabel: "COOLANT QUALITY RATE",
    scorePercentage: 99,
    description: "Specialized service managing coolant chemistry, leak detection, and pressure charging for advanced Direct Liquid Cooling (DLC) loops and secondary piping grids.",
    features: [
      "Coolant chemistry and biocides replenishment",
      "Pressure testing and vacuum bubble purge",
      "Secondary loop filter replacements",
      "Leak containment sensor diagnostics",
      "Pump flow calibration and performance tracing"
    ],
    stats: [
      { label: "FILTRATION LEVEL", value: "5 Micron Standard" },
      { label: "PRESSURE LEVEL", value: "Up to 6 Bar Static" },
      { label: "COOLANT ANALYSED", value: "DI Water, PG mixes" },
      { label: "CHEMISTRY COMPLIANCE", value: "ASHRAE TC 9.9" }
    ],
    imageSrc: "/images/products/cooling.png",
    imageAlt: "Liquid Cooling Services",
    images: [
      { src: "/images/products/cooling.png", alt: "Liquid Cooling — CDU Unit" },
      { src: "/images/products/switchgear.png", alt: "Liquid Cooling — Manifold" },
      { src: "/images/products/ups.png", alt: "Liquid Cooling — Rack Integration" }
    ],
    slaPlans: [
      {
        parameter: "Loop Inspections",
        bronze: "1 Visit / Year",
        silver: "2 Visits / Year + Leak Audit",
        gold: "4 Visits / Year + Chemistry Lab"
      },
      {
        parameter: "Biocide Replenishment",
        bronze: "Annual",
        silver: "Bi-Annual",
        gold: "Quarterly / On-Demand"
      },
      {
        parameter: "Leak Response Window",
        bronze: "Within 4 Hours",
        silver: "Within 2 Hours",
        gold: "Immediate Dispatch (< 1 Hour)"
      }
    ]
  }
];
