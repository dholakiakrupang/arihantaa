// ── Project Details Dynamic Database ──────────────────────────────────────────
// Detailed profiles for all 8 projects and flagships

const details = {
  p1: {
    id: "p1",
    title: "Global Data Center Park",
    location: "Navi Mumbai, Maharashtra",
    categoryLabel: "Data Center",
    client: "TechCorp MegaDC",
    value: "₹120.50 Cr",
    hero: {
      tag: "DATA CENTER · IN PROGRESS",
      titleLines: ["Engineering", "India's Next-Gen", "Hyper-scale", "Data Center Park."],
      desc: "Turnkey electrical infrastructure, high-security ELV grids, and advanced HVAC cooling solutions for a Tier IV data center facility in Navi Mumbai. Engineered to sustain continuous uptime for mission-critical digital systems.",
      metaData: [
        { label: 'CLIENT', value: 'TechCorp MegaDC' },
        { label: 'LOCATION', value: 'Navi Mumbai, Maharashtra' },
        { label: 'CONTRACT VALUE', value: '₹120.50 Crore' },
        { label: 'SCOPE', value: 'HT/LT Power · Chilled Cooling · ELV' },
        { label: 'DURATION', value: '24 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Data Center & IT' },
        { label: 'OUR ROLE', value: 'Lead MEP Contractor' }
      ]
    },
    stats: [
      { to: 120.50, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 24, suffix: " Months", label: "Stipulated Duration" },
      { value: "Tier IV", label: "Reliability Standard" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "A computational hub engineered for digital scale.",
        p1: "The Navi Mumbai Global Data Center Park stands as a cornerstone of India's digital core — a greenfield hyper-scale data facility constructed to support the compute demand of major cloud systems. The project encompasses a primary server building block, dedicated HT transformer sub-stations, diesel generator halls, and complex chilled water ventilation corridors.",
        p2: "Arihantaa Powertech was appointed as the prime MEP execution contractor, taking charge of the complete electrical distribution, fire protection networks, CCTV/security integration, and structural HVAC systems. With a project budget of ₹120.50 Crore and a tight 24-month schedule, it showcases our engineering capabilities in hyper-critical environments.",
        quote: "Designing hyper-scale facilities requires redundant systems that ensure 99.999% reliability at every single load node.",
        watermark: "₹120.5Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Sustaining high-density server configurations with absolute thermal and power stability.",
        desc: "Building a Tier IV facility leaves no margin for operational slips. The site demands continuous multi-megawatt power intake, complex harmonics management, and high-efficiency chilled water distribution with fail-safe automatic switchovers.",
        items: [
          { num: "01", title: "Harmonics & Power Quality", desc: "Server nodes create massive non-linear electrical loads, requiring clean harmonic filter panels and active power corrective systems to protect delicate assets.", iconId: "bolt" },
          { num: "02", title: "Thermal Stabilization", desc: "Data floors demand absolute ambient climate containment, managed through redundant chillers, smart AHUs, and automated air dampers.", iconId: "fan" },
          { num: "03", title: "Multi-Tiered Access Control", desc: "Highly secure zones integrate CCTV networks, biometric locks, intrusion indicators, and smart fire suppression loops.", iconId: "nodes" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Comprehensive MEP engineering.",
        desc: "Our scope spans the complete procurement, installation, and commission of HT, LT, ELV, and HVAC systems across the data campus.",
        blocks: [
          {
            code: "DC-ELEC",
            title: "Power Distribution Systems",
            desc: "Complete HT substation assembly, dual transformer configurations, heavy busduct routing, and automated diesel sync panels.",
            points: ["110KV Switchyard & Transformer setup", "Active Harmonic Filtering installation", "Heavy copper Busduct installations", "UPS & Battery backup configurations", "DG sync & automatic transfer boards"]
          },
          {
            code: "DC-ELV",
            title: "Security & Connectivity Networks",
            desc: "High-speed structured fiber paths and integrated site surveillance to meet security protocols.",
            points: ["Fiber optic high-speed backbones", "Integrated IP CCTV & Access logs", "Automatic gas-based Fire Suppression", "Very Early Smoke Detection (VESDA)", "Building Management System (BMS) controls"]
          },
          {
            code: "DC-HVAC",
            title: "Critical Air Conditioning",
            desc: "Precision cooling systems designed to maintain specific temperature bounds in server halls.",
            points: ["Water-cooled Chiller plant integration", "Precision Air Conditioning (PAC) units", "Chilled water piping and insulation", "Automated variable air flow dampers", "Thermal profiling and sensor setups"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Methodical deployment phases.",
        desc: "We utilized a staggered construction path to speed up critical path delivery and guarantee QA checks.",
        steps: [
          { phase: "PHASE 01", title: "Comprehensive 3D BIM Routing", desc: "Integrated spatial layouts in Navisworks to coordinate heavy cable tray pathways, busduct systems, and chilled water pipes to prevent site clashes.", tags: ["3D BIM", "Navisworks", "Clash-Free Layouts"] },
          { phase: "PHASE 02", title: "Pre-Shipment Factory Acceptance", desc: "All massive components (transformers, heavy breakers, PAC units) were checked at manufacturer locations to prevent delays.", tags: ["FAT Audits", "Asset Sourcing", "QA Testing"] },
          { phase: "PHASE 03", title: "Modular Equipment Rigging", desc: "Executed critical lift strategies to position heavy transformers and chillers onto roof decks and basement spaces with zero safety incidents.", tags: ["Heavy Rigging", "Site Management", "Safety Compliance"] },
          { phase: "PHASE 04", title: "System Loop Integrity Checks", desc: "Executed load-bank testing, thermal scan evaluations, and BMS signaling tests to secure final Tier IV compliance audits.", tags: ["Load-Bank Runs", "Tier IV Audit", "Handover Documentation"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Engineering metrics achieved.",
        desc: "Strict standards and engineering depth delivered high reliability metrics for TechCorp's digital park.",
        metrics: [
          { value: "99.999%", label: "FACILITY POWER UPTIME", desc: "Configured dual-source feeds and automatic bus transfer systems to sustain continuous compute operations without dropouts." },
          { value: "1.25 PUE", label: "POWER USAGE EFFECTIVENESS", desc: "Smart PAC controls and water-cooled chiller loop optimizations achieved a highly efficient Power Usage Effectiveness index." },
          { value: "50%+", label: "BANDWIDTH SCALABILITY SIZING", desc: "Structured cabling backbones designed with 50% extra conduit room to simplify future fiber upgrades." },
          { value: "12MW", label: "POWER INTAKE MANAGED", desc: "Turnkey commissioning of a dedicated 12MW substation feed with integrated protective relays." }
        ]
      }
    }
  },
  p2: {
    id: "p2",
    title: "Haridwar Medical Campus",
    location: "Haridwar, Uttarakhand",
    categoryLabel: "Healthcare",
    client: "Govt. of Uttarakhand",
    value: "₹97.53 Cr",
    hero: {
      tag: "HOSPITAL & HEALTHCARE · IN PROGRESS",
      titleLines: ["Powering", "Uttarakhand's", "Largest Government", "Medical Campus."],
      desc: "A complete MEP package — Electrical, ELV, and HVAC — for a new government medical college and hospital campus in Haridwar. At ₹97.53 Crore, this is Arihantaa's single largest electrical contract. Executed under Yashnand Engineering & Contractors Pvt. Ltd. with a 30-month delivery window.",
      metaData: [
        { label: 'CLIENT', value: 'Yashnand Engineering & Contractors Pvt. Ltd.' },
        { label: 'LOCATION', value: 'Haridwar, Uttarakhand' },
        { label: 'CONTRACT VALUE', value: '₹97.53 Crore' },
        { label: 'SCOPE', value: 'Electrical · ELV · HVAC' },
        { label: 'DURATION', value: '30 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Hospital & Healthcare' },
        { label: 'OUR ROLE', value: 'Sub-contractor — Core MEP Execution' }
      ]
    },
    stats: [
      { to: 97.53, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 30, suffix: " Months", label: "Stipulated Duration" },
      { value: "MEP", label: "Electrical · ELV · HVAC Scope" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "A hospital campus built for an entire state.",
        p1: "The Haridwar Government Medical College and Hospital Campus is one of Uttarakhand's most significant public health infrastructure investments — a full-scale greenfield medical campus designed to serve the healthcare needs of an entire region. The project encompasses a medical college building, multi-specialty hospital blocks, residential quarters, and all associated utility and services infrastructure.",
        p2: "Arihantaa Powertech was engaged as the MEP sub-contractor under Yashnand Engineering & Contractors Pvt. Ltd., Ahmedabad — one of our long-standing delivery partners — to execute the complete Electrical, ELV, and HVAC package across the entire campus. With a contract value of ₹97.53 Crore and a 30-month execution window, this represents the single largest project in our 30-year history.",
        quote: "At ₹97.53 Crore, this represents the largest single MEP and electrical package in Arihantaa's 30-year operational history.",
        watermark: "₹97.53Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Powering a mission-critical hospital campus with absolute zero tolerance for supply interruption.",
        desc: "A government hospital campus of this scale presents electrical challenges that go well beyond standard commercial construction. Every system — from HT substation to final socket — must be engineered for 100% uptime. Surgical theatres, ICUs, diagnostic imaging, and life support equipment cannot tolerate a single moment of supply interruption.",
        items: [
          { num: "01", title: "Mission-Critical Power", desc: "Clinical areas required fully redundant, UPS-backed supply systems with instantaneous automated switchovers.", iconId: "bolt" },
          { num: "02", title: "Clinical HVAC Zoning", desc: "Surgical, isolation, and general wards demanded independent climate control, duct routing, and pressurization.", iconId: "fan" },
          { num: "03", title: "Massive ELV Network", desc: "Seamless integration of CCTV, fire detection, PA, nurse call, and data cabling across 15+ campus buildings.", iconId: "nodes" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Engineering delivery scope.",
        desc: "Our scope covers three complete MEP disciplines across all campus buildings — medical college, hospital blocks, OPDs, operation theatres, ICUs, residential quarters, utility buildings, and external site infrastructure.",
        blocks: [
          {
            code: "MEP-ELEC",
            title: "Electrical Infrastructure",
            desc: "Complete HT and LT electrical infrastructure from utility intake to final load point across all campus buildings.",
            points: ["HT substation and transformer erection", "Main LT panels and MCCs", "Floor-wise DB and sub-DB installation", "Cable laying, gland, and IS-standard termination", "Earthing, lightning protection, and DG integration"]
          },
          {
            code: "MEP-ELV",
            title: "Intelligent Systems",
            desc: "Low-voltage intelligent building systems across all clinical, administrative, and residential zones.",
            points: ["Structured data cabling and fibre backbone", "CCTV surveillance and access control", "Public address and nurse call systems", "Fire detection and alarm network", "BMS integration for critical zones"]
          },
          {
            code: "MEP-HVAC",
            title: "Mechanical & Climate",
            desc: "Climate control systems designed to meet clinical environment standards — including surgical, isolation, and general wards.",
            points: ["AHU and FCU supply and installation", "Ducting and insulation across all zones", "Chiller plant and cooling tower integration", "Ventilation for OTs and ICUs to NABH standards", "BMS-linked zone control and monitoring"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Methodical delivery.",
        desc: "We managed the 30-month timeline across 15+ campus structures using a four-stage phased delivery framework, guaranteeing quality and zero coordination clashes.",
        steps: [
          { phase: "PHASE 01", title: "Integrated 3D BIM Clash-Detection", desc: "Before launching physical conduit or duct laying, our engineering division modeled all MEP systems in Navisworks. This resolved over 1,200 potential interferences between structural beams and HVAC trunks in the digital stage.", tags: ["3D Modeling", "Clash-Analysis", "Revit BIM"] },
          { phase: "PHASE 02", title: "Long-Lead Factory Acceptance Testing (FAT)", desc: "Heavy assets — including the 11KV transformers, chillers, and main LT boards — were subjected to thorough factory inspections by our quality managers. This ensured OEM compliance before dispatch and zero site delay.", tags: ["FAT Audits", "OEM Verification", "Procurement QC"] },
          { phase: "PHASE 03", title: "Asymmetrical Resource Allocation", desc: "To maximize speed, we divided site teams into modular squads, focusing peak labor forces dynamically on critical clinical zones (OT blocks, ICU zones, utility centers) to accelerate the project path.", tags: ["Labor Leveling", "Critical Path", "Logistics Ops"] },
          { phase: "PHASE 04", title: "Integrated Loop Commissioning & NABH Approval", desc: "Complete electrical continuity tests, loop monitoring, duct leakage inspections, and detailed HEPA air balance runs were carried out, facilitating direct NABH validation and state utility sync.", tags: ["System Balancing", "NABH Handover", "Statutory Clearance"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Performance realized.",
        desc: "The application of strict engineering guidelines and high-quality parts translates to highly-resilient, compliant healthcare infrastructure for Uttarakhand.",
        metrics: [
          { value: "100%", label: "CLINICAL POWER REDUNDANCY", desc: "Dual-feed utility substations and automatic source transfer switches ensure surgical suites and ICU equipment maintain continuous supply in utility outages." },
          { value: "Class 10k", label: "STERILE AIR CLEANROOM COMPLIANCE", desc: "Our specialized ventilation and HEPA filter configurations achieved Class 10,000 cleanroom cleanliness ratings in major Operation Theatres, passing NABH checks." },
          { value: "40%+", label: "COMMUNICATION NETWORK HEADROOM", desc: "Structured fiber optic and copper communication backbones are designed with 40% spare capacity, paving the way for future medical imaging expansion." },
          { value: "18%", label: "ANNUAL OPERATIONAL ENERGY SAVINGS", desc: "Installation of high-efficiency green transformers and BMS-guided zone climate dampers limits idle energy draw, decreasing operating costs by 18%." }
        ]
      }
    }
  },
  p3: {
    id: "p3",
    title: "Rajkot Greenfield Airport",
    location: "Rajkot, Gujarat",
    categoryLabel: "Aviation",
    client: "Airport Authority of India",
    value: "₹63.62 Cr",
    hero: {
      tag: "AVIATION & INFRASTRUCTURE · IN PROGRESS",
      titleLines: ["Illuminating", "Gujarat's New", "Greenfield International", "Aviation Hub."],
      desc: "Complete Airfield Ground Lighting (AGL), terminal power, and HVAC ventilation layout for the prestigious Rajkot Greenfield International Airport. Engineered to meet strict international civil aviation guidelines.",
      metaData: [
        { label: 'CLIENT', value: 'Airport Authority of India (AAI)' },
        { label: 'LOCATION', value: 'Rajkot, Gujarat' },
        { label: 'CONTRACT VALUE', value: '₹63.62 Crore' },
        { label: 'SCOPE', value: 'Airfield Ground Lighting · Power · HVAC' },
        { label: 'DURATION', value: '24 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Aviation & Transport' },
        { label: 'OUR ROLE', value: 'Specialized Sub-contractor' }
      ]
    },
    stats: [
      { to: 63.62, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 24, suffix: " Months", label: "Stipulated Duration" },
      { value: "CAT I", label: "AGL Certification" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "A gateway built for industrial scaling.",
        p1: "The Rajkot Greenfield International Airport is one of western India's largest infrastructure investments — an airport built to relieve air traffic demands and connect Saurashtra to global routes. The scope covers the 3,000-meter runway, passenger terminal blocks, technical buildings, and radar control rooms.",
        p2: "Arihantaa Powertech was chosen to deliver the complete Airfield Ground Lighting (AGL) packages and internal MEP systems. At a contract size of ₹63.62 Crore, this project demonstrates our precision in high-compliance aviation standards, working under strict regulatory audits.",
        quote: "Airfield lighting leaves zero room for error; runway circuits must transition within milliseconds under all weather conditions.",
        watermark: "₹63.62Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Installing airfield lighting circuits across active civil structures with zero deviation.",
        desc: "Runway lighting requires complex Constant Current Regulator (CCR) substations, high-voltage series circuits, and weather-proof fittings that must withstand extreme heat and monsoon water logs.",
        items: [
          { num: "01", title: "Constant Current Regulations", desc: "Runway series loops require high-voltage CCR controls to maintain uniform intensity across hundreds of lights.", iconId: "bolt" },
          { num: "02", title: "Runway Cable Integrity", desc: "Laying specialized 5KV aviation primary cables across thousands of meters without single insulation damage.", iconId: "nodes" },
          { num: "03", title: "IP68 Weatherproofing", desc: "Fixtures installed directly in runway pavements must stay completely water-tight and resist jet-blast stresses.", iconId: "fan" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Specialized aviation MEP infrastructure.",
        desc: "Our scope covers runway light assemblies, substation equipment, and terminal building electrical layouts.",
        blocks: [
          {
            code: "AV-AGL",
            title: "Airfield Ground Lighting",
            desc: "Precision installation of runway centerline, touchdown zone, approach lights, and taxiway markers.",
            points: ["Approach lighting systems setup", "Pavement-inset LED light fittings", "Constant Current Regulator (CCR) panels", "5KV series loop cable installation", "ALCMS computer control integrations"]
          },
          {
            code: "AV-ELEC",
            title: "Terminal Power Distribution",
            desc: "Main switchboards, emergency DG back-up, and distribution networks within passenger blocks.",
            points: ["11KV Main Substation erection", "Automatic DG synchronization", "LT Distribution panels & DB boards", "UPS back-up for ATC systems", "Terminal architectural lighting grids"]
          },
          {
            code: "AV-HVAC",
            title: "Terminal Air Control",
            desc: "High-volume air conditioning and ventilation loops designed for heavy passenger occupancy.",
            points: ["Central Chilled Water piping", "Air Handling Units (AHU) positioning", "Terminal ducting & diffuser layouts", "Exhaust systems for parking and services", "Building automation controls"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Phased engineering workflows.",
        desc: "We deployed specialized airfield lighting engineers to execute work in sync with civil paving runs.",
        steps: [
          { phase: "PHASE 01", title: "Civil Base Core-Drilling", desc: "Drilled and cast precise concrete bases for light fittings along the runway centerline, ensuring sub-millimeter level alignment.", tags: ["Precision Drilling", "Base Casting", "Optical Survey"] },
          { phase: "PHASE 02", title: "Aviation Series Cable Laying", desc: "Pulled 5KV primary cables in reinforced HDPE conduits alongside the runway, maintaining rigid insulation values.", tags: ["5KV Cables", "HDPE Conduits", "Insulation Checks"] },
          { phase: "PHASE 03", title: "Substation Assembly", desc: "Installed the AGL sub-station containing CCR units, isolation transformers, and automated remote control loops.", tags: ["CCR Substation", "Isolation Units", "Switchgear Setup"] },
          { phase: "PHASE 04", title: "Integrated Flight-Testing System", desc: "Simulated aircraft landing visibility sequences to test lighting control loops and secure final DGCA certificates.", tags: ["DGCA Approvals", "Visibility Testing", "Commissioning"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Aviation milestones achieved.",
        desc: "Our precision layout helps Rajkot International sustain commercial landings in low-visibility environments.",
        metrics: [
          { value: "CAT I", label: "LANDING CAPABILITY MET", desc: "Runway illumination and approach patterns configured to support Category I instrument landings in dense fog." },
          { value: "0.2s", label: "BACKUP TRANSFER TIME", desc: "Specialized switchgear triggers power switchovers in less than 200 milliseconds to keep runway lights active." },
          { value: "100%", label: "DGCA STANDARDS COMPLIANCE", desc: "All installations cleared audits by the Directorate General of Civil Aviation with zero corrections." },
          { value: "1,400+", label: "LED FIXTURES ERECTED", desc: "Turnkey layout of low-energy pavement and elevated runway lights across the 3.0km field." }
        ]
      }
    }
  },
  p4: {
    id: "p4",
    title: "GMERS Sola Super Specialty",
    location: "Ahmedabad, Gujarat",
    categoryLabel: "Healthcare",
    client: "PIU, Gujarat",
    value: "₹69.19 Cr",
    hero: {
      tag: "HOSPITAL & HEALTHCARE · COMPLETED",
      titleLines: ["Turnkey", "MEP Delivery For", "GMERS Sola", "Super Specialty."],
      desc: "Comprehensive engineering, procurement, and execution of internal electrical, HVAC, and low-voltage networks for the new super specialty block at Sola Civil Hospital, Ahmedabad. Fully operational and compliant with state medical guidelines.",
      metaData: [
        { label: 'CLIENT', value: 'Project Implementation Unit (PIU), Gujarat' },
        { label: 'LOCATION', value: 'Ahmedabad, Gujarat' },
        { label: 'CONTRACT VALUE', value: '₹69.19 Crore' },
        { label: 'SCOPE', value: 'Electrical · HVAC · ELV Networks' },
        { label: 'DURATION', value: '24 Months' },
        { label: 'STATUS', value: 'Completed' },
        { label: 'SECTOR', value: 'Healthcare & Clinical' },
        { label: 'OUR ROLE', value: 'Lead MEP Contractor' }
      ]
    },
    stats: [
      { to: 69.19, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 24, suffix: " Months", label: "Project Duration" },
      { value: "NABH", label: "Clinical Compliance" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "A super specialty block built for public health.",
        p1: "The GMERS Sola Super Specialty Block is a crucial addition to Ahmedabad's healthcare network, bringing advanced cardiology, neurology, and critical care infrastructure to public access. The block features eight modern Operation Theatres, a 60-bed ICU department, and specialized diagnostic wards.",
        p2: "Arihantaa Powertech undertook the turnkey MEP package, delivering robust power distribution, medical gas panel connections, clinical air handling, and dynamic ELV systems. Completed in 24 months, the project highlights our capacity to deliver high-quality, high-spec clinical spaces.",
        quote: "Delivering healthcare infrastructure is about installing active, responsive life-support environments that keep patients safe.",
        watermark: "₹69.19Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Installing intricate clinical duct networks within a compact architectural layout.",
        desc: "Super specialty hospital blocks house high volumes of utilities. Fitting heavy HVAC ducts, cable trays, water lines, and medical gas pipes in tight ceiling areas required precision planning and coordination.",
        items: [
          { num: "01", title: "OT Cleanroom Airflows", desc: "Operation theaters require laminar airflow systems to ensure sterile, dust-free conditions during surgeries.", iconId: "fan" },
          { num: "02", title: "Uninterrupted ICU Supply", desc: "ICU beds need absolute electrical safety with local isolation transformers to prevent current leakages.", iconId: "bolt" },
          { num: "03", title: "Integrated Fire Integration", desc: "Solenoid fire dampers and smoke exhaust fans must connect to the central alarm system to isolate zones during fire emergencies.", iconId: "nodes" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Complete clinical engineering package.",
        desc: "Our scope covered complete design coordination, installation, and commissioning of electrical, mechanical, and safety grids.",
        blocks: [
          {
            code: "GM-ELEC",
            title: "Power & Backup Grids",
            desc: "Erection of 11KV substations, automated DG back-up, and isolated medical power panels.",
            points: ["11KV double-pole structure substation", "2000KVA Transformer installations", "Hospital-grade isolation panels", "Main LT switchboard panels", "Emergency DG synchronizations"]
          },
          {
            code: "GM-HVAC",
            title: "Clinical Air Infrastructure",
            desc: "Laminar flow units for OTs, HEPA filter boxes, and central chiller distribution grids.",
            points: ["Laminar flow ceilings for OTs", "Water-cooled Chiller plant erection", "AHUs with HEPA filtration stages", "GI ducting with insulation layers", "Smart temperature and pressure controls"]
          },
          {
            code: "GM-ELV",
            title: "Integrated Safety Systems",
            desc: "Integrated nurse call panels, data cabling, public address, and fire protection systems.",
            points: ["Nurse Call systems at all beds", "IP CCTV & Access controllers", "Addressable Fire Alarm setup", "Public Address and announcement hubs", "Central BMS monitoring terminal"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Coordination-led workflows.",
        desc: "We used 3D BIM models to coordinate services in tight ceiling voids, minimizing site changes.",
        steps: [
          { phase: "PHASE 01", title: "Ceiling Space Modeling", desc: "Modeled all utility pathways in 3D to optimize routing order: medical gas pipes first, followed by ducts and cable trays.", tags: ["Utility Routing", "3D Coordination", "Space Optimization"] },
          { phase: "PHASE 02", title: "OT Cleanroom Shell Construction", desc: "Built cleanroom walls, structured ceiling grids, and installed laminar air terminal boxes with integrated HEPA filters.", tags: ["Laminar Air", "HEPA Boxes", "Cleanroom Shell"] },
          { phase: "PHASE 03", title: "Electrical Substation Commissioning", desc: "Installed the transformer, laid HT feed cables, and connected key distribution boards for clean power delivery.", tags: ["HT Cabling", "Substation Erection", "Switchgear Panels"] },
          { phase: "PHASE 04", title: "NABH Validation & Handover", desc: "Performed particle counts, air changes, and room pressure checks to verify NABH standard readiness before handing over.", tags: ["Air Validation", "NABH Certification", "Final Handover"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Clinical benchmarks achieved.",
        desc: "Sola Super Specialty Block operates with high MEP efficiency, supporting critical surgeries daily.",
        metrics: [
          { value: "100%", label: "OT STERILITY RATING", desc: "All eight Operation Theaters met national sterilization standards, securing immediate NABH clinical certifications." },
          { value: "24 Weeks", label: "TIMELINE ACCELERATION", desc: "BIM clash coordination reduced site re-works, completing the project ahead of the planned construction schedule." },
          { value: "0% Leak", label: "MEDICAL GAS SAFETY", desc: "Pressure testing of medical gas pipelines passed all inspections, confirming zero trace leaks." },
          { value: "1.5 MW", label: "STABLE LOAD SECURED", desc: "Successfully commissioned a stable power feed with integrated auto-transfer switches for patient security." }
        ]
      }
    }
  },
  p5: {
    id: "p5",
    title: "Surat Metro Rail Depot",
    location: "Surat, Gujarat",
    categoryLabel: "Transport",
    client: "GMRC",
    value: "₹42.10 Cr",
    hero: {
      tag: "TRANSPORT & RAIL · IN PROGRESS",
      titleLines: ["Powering", "Surat's Mass", "Transit Maintenance", "Depot Yard."],
      desc: "Turnkey electrical infrastructure, workshop lighting, and safety networks for the GMRC Metro Rail Depot in Surat. Engineered to support heavy rail maintenance and vehicle power feeds.",
      metaData: [
        { label: 'CLIENT', value: 'Gujarat Metro Rail Corporation (GMRC)' },
        { label: 'LOCATION', value: 'Surat, Gujarat' },
        { label: 'CONTRACT VALUE', value: '₹42.10 Crore' },
        { label: 'SCOPE', value: 'Depot Power · HVAC Ventilation · ELV Systems' },
        { label: 'DURATION', value: '18 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Mass Transit & Infrastructure' },
        { label: 'OUR ROLE', value: 'Prime Electrical Contractor' }
      ]
    },
    stats: [
      { to: 42.10, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 18, suffix: " Months", label: "Stipulated Duration" },
      { value: "Depot", label: "Maintenance Scope" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "A maintenance hub built for transit scaling.",
        p1: "The Surat Metro Rail Depot is the operational core of the city's mass transit network, containing maintenance sheds, washing tracks, administrative offices, and high-voltage power centers. The facility serves as the service hub for Surat's entire metro train fleet.",
        p2: "Arihantaa Powertech was awarded the complete depot MEP package. Valued at ₹42.10 Crore, our scope covers substation installation, high-bay workshop lighting, industrial smoke ventilation, and integrated CCTV safety networks across the depot yard.",
        quote: "Transit maintenance depots require robust, industrial-grade power links designed to withstand high operational wear.",
        watermark: "₹42.10Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Distributing high-voltage lines across vast, open depot spaces safely.",
        desc: "Depot yards have large layouts and high ceiling clearances. Installing overhead power connections, cable trays, and lighting fixtures requires specialized rigging equipment and close coordination with track laying teams.",
        items: [
          { num: "01", title: "High-Bay Illuminations", desc: "Installing heavy LED fixtures on high workshop ceilings while maintaining even lighting on train maintenance tracks.", iconId: "fan" },
          { num: "02", title: "Heavy Substation Loads", desc: "Erecting robust substation boards designed to handle surge loads from metro train trials and maintenance tools.", iconId: "bolt" },
          { num: "03", title: "Outdoor Yard Cable Routing", desc: "Laying underground power and control cables across busy rail tracks without disturbing train movement schedules.", iconId: "nodes" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Industrial MEP installation.",
        desc: "Our scope spans the complete setup of power, ventilation, and security networks across the depot facility.",
        blocks: [
          {
            code: "MT-ELEC",
            title: "Depot Power Distribution",
            desc: "HT substations, main LT distribution boards, emergency backup systems, and lighting systems.",
            points: ["33KV / 415V Substation installation", "Main LT Distribution boards & Switchgear", "Emergency diesel generator sync setup", "High-efficiency LED high-bay lighting", "Yard lighting masts & cabling runs"]
          },
          {
            code: "MT-HVAC",
            title: "Industrial Ventilation",
            desc: "Smoke exhaust layouts and cooling ventilation systems for depot sheds and administrative offices.",
            points: ["Industrial exhaust fans for sheds", "VRF cooling systems for office areas", "Smoke extraction ducting paths", "Cooling ventilation for electrical rooms", "Air distribution grill networks"]
          },
          {
            code: "MT-ELV",
            title: "Depot Safety & Security",
            desc: "Security systems, access logs, fire alerts, and communication networks.",
            points: ["IP-based CCTV for yard monitoring", "Access Control systems for critical rooms", "Addressable Fire Alarm setup", "Public Address / Voice Alarm layout", "High-speed optical fiber backbone"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Structured engineering phases.",
        desc: "We used a phased layout approach, coordinating closely with GMRC track-laying and civil teams.",
        steps: [
          { phase: "PHASE 01", title: "BIM Layout Design Coordination", desc: "Prepared 3D utility routing models to prevent clashes with overhead crane rails and high-voltage traction systems.", tags: ["BIM Coordination", "Crane Rails", "High-Bay Design"] },
          { phase: "PHASE 02", title: "Substation Foundation & Building Erection", desc: "Constructed concrete bases and installed the 33KV substation panels, transformers, and HT switchgear.", tags: ["33KV Substation", "Transformer Base", "HT Switchboards"] },
          { phase: "PHASE 03", title: "Overhead System Fitting", desc: "Mounted high-bay LED fixtures, industrial ventilation ducts, and cable trays using scissor lifts and specialized platforms.", tags: ["High-Bay Fittings", "Scissor Lifts", "Industrial Ducting"] },
          { phase: "PHASE 04", title: "Yard Cable Laying & System Testing", desc: "Completed trenching, laid yard power cables, and tested protective relays before commissioning.", tags: ["Cable Trenching", "Yard Cabling", "Relay Testing"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Engineering metrics delivered.",
        desc: "Depot operations are supported by a stable, efficient, and safe utility framework.",
        metrics: [
          { value: "33 KV", label: "HIGH VOLTAGE COMMISSIONED", desc: "Successfully energized the main depot substation, providing stable power for transit maintenance operations." },
          { value: "350+", label: "LED BAY FIXTURES POSITIONED", desc: "High-efficiency LED high-bays installed, providing clear visibility in workshops while reducing energy use." },
          { value: "IP67", label: "YARD LIGHTING INTEGRITY", desc: "High-mast yard light installations sealed to IP67 standards, ensuring reliable outdoor lighting in monsoon conditions." },
          { value: "100%", label: "SAFETY ALERTS SYNCED", desc: "Integrated depot fire alarm and security loops with GMRC's central command station for instant emergency signaling." }
        ]
      }
    }
  },
  p6: {
    id: "p6",
    title: "Civil Hospital, Ahmedabad",
    location: "Ahmedabad, Gujarat",
    categoryLabel: "Healthcare",
    client: "PIU",
    value: "₹28.45 Cr",
    hero: {
      tag: "HOSPITAL & HEALTHCARE · IN PROGRESS",
      titleLines: ["Upgrading", "Ahmedabad Civil", "Hospital's Critical", "MEP Networks."],
      desc: "Complete electrical modernization, clinical HVAC upgrades, and fire protection systems for the addition of new wards at Civil Hospital, Ahmedabad. Engineered to integrate with existing hospital grids.",
      metaData: [
        { label: 'CLIENT', value: 'Project Implementation Unit (PIU)' },
        { label: 'LOCATION', value: 'Ahmedabad, Gujarat' },
        { label: 'CONTRACT VALUE', value: '₹28.45 Crore' },
        { label: 'SCOPE', value: 'Substation upgrade · HVAC loops · Fire alerts' },
        { label: 'DURATION', value: '24 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Healthcare & Public Infra' },
        { label: 'OUR ROLE', value: 'Prime MEP Contractor' }
      ]
    },
    stats: [
      { to: 28.45, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 24, suffix: " Months", label: "Stipulated Duration" },
      { value: "Upgrade", label: "Grid Integration Scope" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "Modernizing utilities in one of India's largest healthcare campuses.",
        p1: "Ahmedabad Civil Hospital is a major public healthcare hub. The addition of new multi-specialty wards requires a major expansion of the campus electrical grid, backup generators, and clean air systems to support high patient volumes.",
        p2: "Arihantaa Powertech was selected to deliver the ₹28.45 Crore utility upgrade package. Our scope covers replacing main LT panels, installing new HVAC air handling units for sterile zones, and connecting integrated fire alarm networks.",
        quote: "Upgrading active healthcare environments requires precise planning to prevent any disruption to critical patient care.",
        watermark: "₹28.45Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Working in active hospital zones without disturbing clinical operations.",
        desc: "Replacing primary switchgear and utility lines in a busy medical campus requires careful planning. Power cutovers must be scheduled in tight windows, using backup generators to ensure constant power supply.",
        items: [
          { num: "01", title: "Active Crossover Cuts", desc: "Main LT panel switchovers must be scheduled during low-demand night hours, keeping critical areas powered via backup systems.", iconId: "bolt" },
          { num: "02", title: "Clean Air Upgrades", desc: "Connecting new clinical AHUs and HEPA filter modules to live chilled water pipes without leakage risks.", iconId: "fan" },
          { num: "03", title: "System Safety Sync", desc: "Linking new ward fire alarm lines with the hospital's central warning system to ensure campus-wide coordination.", iconId: "nodes" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Targeted clinical utilities upgrade.",
        desc: "Our scope covers power modernization, HVAC clean air layouts, and security network additions.",
        blocks: [
          {
            code: "CH-ELEC",
            title: "Power Grid Modernization",
            desc: "Upgrading primary LT panels, installing backup switchboards, and connecting sub-distribution boards.",
            points: ["Main LT switchboard upgrades", "Emergency backup DG connections", "Automatic source transfer setups", "Isolated power panels for critical rooms", "Cable tray upgrades & rewiring"]
          },
          {
            code: "CH-HVAC",
            title: "Ward Air Upgrades",
            desc: "Cleanroom ventilation systems, air handling loops, and fresh air exchanges.",
            points: ["Clinical AHUs with HEPA filtration", "Chilled water loop integrations", "GI ducting paths with insulation", "Air balancing across new rooms", "Zone-based temperature regulators"]
          },
          {
            code: "CH-ELV",
            title: "Safety & Warning Loops",
            desc: "Addressable fire alarms, public address systems, and emergency nurse call links.",
            points: ["Addressable Fire Alarm loop upgrades", "Public Announcement systems setup", "Emergency Nurse Call integrations", "IP CCTV network expansion", "Emergency backup control panels"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Carefully planned phase steps.",
        desc: "We used a phased execution approach, scheduling utility changes during low-activity windows.",
        steps: [
          { phase: "PHASE 01", title: "Existing Grid Mapping", desc: "Mapped all existing cable paths, water pipes, and utility lines to identify integration points and prevent accidental cutoffs.", tags: ["Utility Mapping", "Grid Analysis", "Integration Check"] },
          { phase: "PHASE 02", title: "New Equipment Installation", desc: "Assembled new LT boards and HVAC equipment in parallel, keeping existing services active.", tags: ["Parallel Assembly", "LT Panels Erection", "AHU Positioning"] },
          { phase: "PHASE 03", title: "Scheduled Night Crossovers", desc: "Executed critical power crossovers during low-activity night shifts, using diesel generator units to back up surgical wards.", tags: ["Night Crossovers", "Generator Backup", "Power Crossover"] },
          { phase: "PHASE 04", title: "Balanced commissioning", desc: "Commissioned the upgraded loops, verified cleanroom air changes, and verified fire warning links.", tags: ["Loop Validation", "Air Balancing", "System Sign-Off"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Upgrades verified.",
        desc: "Upgraded utility networks are fully active, supporting clinical care with high efficiency.",
        metrics: [
          { value: "0 hours", label: "CRITICAL POWER DOWN-TIME", desc: "Executed primary LT board crossovers with zero power interruptions to operating theaters and ICU beds." },
          { value: "2,500m", label: "LT POWER CABLE ROUTED", desc: "Installed heavy-duty LT power cables across the new wards, improving power supply stability." },
          { value: "Class 100k", label: "WARD AIR STERILITY", desc: "New clinical air handling loops achieved Class 100,000 cleanroom ratings in public patient wards." },
          { value: "100%", label: "SAFETY NETWORK SYNCED", desc: "Connected new ward fire warning loops to the hospital's central safety desk, enabling quick response." }
        ]
      }
    }
  },
  p7: {
    id: "p7",
    title: "GIDC Industrial Estate Power",
    location: "Sanand, Gujarat",
    categoryLabel: "Industrial",
    client: "GIDC",
    value: "₹45.20 Cr",
    hero: {
      tag: "INDUSTRIAL · IN PROGRESS",
      titleLines: ["Erecting", "Sanand Industrial", "Estate High-Voltage", "Power Infrastructure."],
      desc: "Turnkey design, supply, and installation of external overhead lines, heavy substation networks, and industrial pump panels for the GIDC Estate in Sanand. Engineered to supply industrial power to manufacturing units.",
      metaData: [
        { label: 'CLIENT', value: 'Gujarat Industrial Development Corporation (GIDC)' },
        { label: 'LOCATION', value: 'Sanand, Gujarat' },
        { label: 'CONTRACT VALUE', value: '₹45.20 Crore' },
        { label: 'SCOPE', value: 'Substations · External lines · Pump boards' },
        { label: 'DURATION', value: '18 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Industrial Infrastructure' },
        { label: 'OUR ROLE', value: 'Lead Infrastructure Contractor' }
      ]
    },
    stats: [
      { to: 45.20, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 18, suffix: " Months", label: "Stipulated Duration" },
      { value: "66 KV", label: "Transmission Rating" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "High-capacity power links built for manufacturing growth.",
        p1: "The Sanand GIDC Industrial Estate is a major manufacturing hub in western India. To support new manufacturing units, GIDC launched a major expansion of the estate's high-voltage electrical grid, including a dedicated 66KV substation and distribution lines.",
        p2: "Arihantaa Powertech was selected to deliver the turnkey power infrastructure package. Valued at ₹45.20 Crore, our scope covers substation erection, overhead transmission lines, underground distribution cabling, and automated water-pump control panels.",
        quote: "Industrial grids demand heavy-duty, weather-proof components designed to supply stable power to manufacturing plants.",
        watermark: "₹45.20Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Laying high-voltage lines across varying terrain conditions.",
        desc: "Installing transmission towers and laying heavy underground cables requires careful planning. Working across active roadways and industrial plots demands close coordination with local authorities and land owners.",
        items: [
          { num: "01", title: "Transmission Tower Foundations", desc: "Casting reinforced concrete bases for transmission towers in variable soil conditions.", iconId: "bolt" },
          { num: "02", title: "Underground HT Cabling", desc: "Laying 66KV insulated underground cables along GIDC roads without disturbing utility lines.", iconId: "nodes" },
          { num: "03", title: "Outdoor Substation Erection", desc: "Erecting transformers, circuit breakers, and isolators in an open switchyard built to withstand harsh weather.", iconId: "fan" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Turnkey industrial power infrastructure.",
        desc: "Our scope covers design, procurement, erection, and testing of transmission systems, substations, and local distribution boards.",
        blocks: [
          {
            code: "GD-ELEC",
            title: "Substation & Switchyard",
            desc: "Erecting a 66KV outdoor switchyard, power transformers, SF6 circuit breakers, and control panels.",
            points: ["66/11KV Power Transformer setup", "SF6 Gas Circuit Breakers installation", "Substation control & relay boards", "Substation earthing & lightning safety", "Busbar structures & gantries installation"]
          },
          {
            code: "GD-LINE",
            title: "Transmission & Cabling",
            desc: "Installing overhead transmission towers and laying underground HT feeder cables.",
            points: ["Overhead transmission line towers erection", "HT conductor stringing works", "Underground 66KV XLPE cable laying", "Cable jointing & terminations", "Road crossing trenching & safety ducts"]
          },
          {
            code: "GD-PUMP",
            title: "Pumping Station Controls",
            desc: "Electrical distribution panels, motor starter boards, and automated pumps control panels.",
            points: ["Motor Control Center (MCC) panels", "Variable Frequency Drive (VFD) setups", "Pumping station power cabling", "BMS-linked pumping telemetry", "Backup generator auto-switches"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Structured engineering phases.",
        desc: "We used a phased execution approach, coordinating closely with GIDC engineers and land departments.",
        steps: [
          { phase: "PHASE 01", title: "Soil Analysis & Tower Survey", desc: "Performed detailed soil testing and surveys to optimize tower foundation designs for varying load capacities.", tags: ["Soil Surveys", "Tower Foundations", "Route Design"] },
          { phase: "PHASE 02", title: "Substation Switchyard Construction", desc: "Completed concrete switchyard foundations, mounted transformers, and installed high-voltage switchgear panels.", tags: ["Switchyard Setup", "66KV Transformers", "SF6 Breakers"] },
          { phase: "PHASE 03", title: "Overhead Line Erection", desc: "Erected transmission towers and completed conductor stringing under strict safety protocols.", tags: ["Tower Erection", "Conductor Stringing", "Overhead Safety"] },
          { phase: "PHASE 04", title: "Underground Cabling & Testing", desc: "Completed trenching, laid underground HT cables, and completed loop testing before commissioning the substation.", tags: ["Cable Trenching", "HT Jointing", "Substation Handover"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Grid milestones delivered.",
        desc: "Sanand GIDC operates with a stable, high-capacity electrical grid, supporting industrial operations.",
        metrics: [
          { value: "66 KV", label: "SUBSTATION ENERGIZED", desc: "Successfully commissioned the primary GIDC substation, supplying stable power to the estate grid." },
          { value: "8.5 km", label: "TRANSMISSION LINE ERECTED", desc: "Completed overhead transmission line installations, connecting the substation to the state grid." },
          { value: "100%", label: "OVERHEAD SAFETY CLEARANCE", desc: "Overhead line installations met all statutory safety clearances, ensuring reliable power supply." },
          { value: "12 units", label: "PUMPING PANELS INSTALLED", desc: "Turnkey setup of motor control panels at industrial pumping stations, ensuring reliable water supply." }
        ]
      }
    }
  },
  p8: {
    id: "p8",
    title: "Kadana Dam Illumination",
    location: "Mahisagar, Gujarat",
    categoryLabel: "Industrial",
    client: "SSNNL",
    value: "₹15.20 Cr",
    hero: {
      tag: "INDUSTRIAL & INFRASTRUCTURE · IN PROGRESS",
      titleLines: ["Architectural", "Illumination For", "Kadana Dam", "Reservoir Campus."],
      desc: "Turnkey design, supply, and installation of specialized high-mast lighting, color-changing LED architectural arrays, and remote SCADA control networks for Kadana Dam. Engineered for safety and aesthetic appeal.",
      metaData: [
        { label: 'CLIENT', value: 'Sardar Sarovar Narmada Nigam Ltd. (SSNNL)' },
        { label: 'LOCATION', value: 'Mahisagar, Gujarat' },
        { label: 'CONTRACT VALUE', value: '₹15.20 Crore' },
        { label: 'SCOPE', value: 'Architectural lighting · Cable runs · SCADA controls' },
        { label: 'DURATION', value: '12 Months' },
        { label: 'STATUS', value: 'In Progress' },
        { label: 'SECTOR', value: 'Infrastructure & Public Spaces' },
        { label: 'OUR ROLE', value: 'Lead Illumination Contractor' }
      ]
    },
    stats: [
      { to: 15.20, prefix: "₹", suffix: " Cr", label: "Total Contract Value", decimals: 2 },
      { to: 12, suffix: " Months", label: "Stipulated Duration" },
      { value: "SCADA", label: "Lighting Controls" }
    ],
    editorial: {
      overview: {
        badge: "Project Context",
        headline: "Illuminating a major reservoir structure.",
        p1: "Kadana Dam is a crucial water reservoir in Gujarat. The illumination project aims to improve security around the dam structure while creating a beautiful public space through specialized architectural lighting along the dam crest and spillways.",
        p2: "Arihantaa Powertech was selected to deliver the ₹15.20 Crore turnkey illumination package. Our scope covers installing high-mast towers, color-changing LED fixtures, water-tight conduits, and a centralized SCADA system for automated control.",
        quote: "Dam illumination requires specialized, water-tight installations built to withstand high moisture and weather exposure.",
        watermark: "₹15.20Cr"
      },
      challenge: {
        badge: "The Challenge",
        headline: "Installing lighting fixtures on steep concrete spillway structures safely.",
        desc: "Working on high dam faces and spillways requires strict safety protocols. Fixtures and cabling must be anchored securely to concrete surfaces, using water-tight conduits to prevent moisture ingress.",
        items: [
          { num: "01", title: "Spillway Face Anchoring", desc: "Installing heavy LED floodlights on steep concrete spillway walls using specialized rigging systems.", iconId: "fan" },
          { num: "02", title: "Water-Tight Cable Runs", desc: "Routing power and control cables in weather-proof, rust-resistant conduits along the dam structure.", iconId: "nodes" },
          { num: "03", title: "Centralized SCADA Sync", desc: "Connecting color-changing LED controllers to a central SCADA computer for automated lighting programs.", iconId: "bolt" }
        ]
      },
      scope: {
        badge: "Scope of Work",
        headline: "Specialized dam lighting systems.",
        desc: "Our scope covers high-mast lighting, LED installation, cabling runs, and automation systems.",
        blocks: [
          {
            code: "KD-LITE",
            title: "Architectural Lighting",
            desc: "Color-changing LED floodlights, linear light profiles, and high-mast lighting towers.",
            points: ["Color-changing LED floodlights setup", "Crest linear LED light profiles", "High-mast lighting towers erection", "LED controller panel assemblies", "Substation utility connections"]
          },
          {
            code: "KD-CABLE",
            title: "Weather-Proof Cabling",
            desc: "Armored power cabling, water-tight conduits, and outdoor distribution boards.",
            points: ["Armored power cable installations", "Weather-proof GI conduits routing", "IP66 outdoor distribution boards", "Substation utility cabling runs", "Earthing & lightning protection loops"]
          },
          {
            code: "KD-CTRL",
            title: "Centralized SCADA System",
            desc: "SCADA automation software, network controllers, and wireless telemetry links.",
            points: ["SCADA automation software integration", "DMX controller programming", "Wireless control telemetry setups", "Operator workstation console", "Automated scheduling program setup"]
          }
        ]
      },
      execution: {
        badge: "Execution Approach",
        headline: "Specialized engineering workflows.",
        desc: "We used a phased execution approach, using specialized climbers and rigging teams for high-altitude concrete work.",
        steps: [
          { phase: "PHASE 01", title: "Structural Survey & Rigging Setup", desc: "Performed detailed structural surveys and installed safety anchors along the dam spillway crest.", tags: ["Safety Rigging", "Structural Survey", "Anchor Setup"] },
          { phase: "PHASE 02", title: "Conduit & Cable Routing", desc: "Installed weather-proof GI conduits and pulled armored power cables along the dam gallery.", tags: ["GI Conduits", "Armored Cabling", "Gallery Routing"] },
          { phase: "PHASE 03", title: "LED Fixture Erection", desc: "Mounted and aligned LED floodlights on the spillway face using specialized rope-access teams.", tags: ["LED Mounting", "Rope Access", "Fixture Alignment"] },
          { phase: "PHASE 04", title: "SCADA Sync & Commissioning", desc: "Configured lighting control programs and completed automated system dry-runs before final handover.", tags: ["SCADA Integration", "DMX Programming", "System Handover"] }
        ]
      },
      outcomes: {
        badge: "Key Outcomes",
        headline: "Illumination verified.",
        desc: "Kadana Dam is illuminated by a stable, energy-efficient, and automated lighting system.",
        metrics: [
          { value: "850+", label: "LED FIXTURES INSTALLED", desc: "High-efficiency architectural LED fixtures installed, providing bright, color-changing illumination." },
          { value: "4.2 km", label: "WEATHER-PROOF CONDUIT LAID", desc: "Water-tight GI conduit runs installed, protecting cables from high moisture and weathering." },
          { value: "100%", label: "SCADA AUTOMATION ACTIVE", desc: "Centralized lighting control system fully operational, supporting automated schedules." },
          { value: "30 kW", label: "EFFICIENT POWER DRAW", desc: "Specialized low-power LED systems limit energy draw, minimizing operational energy costs." }
        ]
      }
    }
  }
};

// Aliases mapping flagships (fp) to primary project records (p)
details.fp1 = details.p2; // Haridwar Medical Campus
details.fp2 = details.p3; // Rajkot Greenfield Airport
details.fp3 = details.p4; // GMERS Sola Super Specialty

export default details;
export { details as projectDetailsData };
