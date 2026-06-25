// ─── Centralized Products Data ──────────────────────────────────────────────
// Five product families with their featured product cards, used by the Products page.
// Routing matches mega menu: /products/:categoryId for family, /products/:categoryId/:productId for specific product

export const productsData = [
  {
    id: 1,
    chapterNumber: "01",
    eyebrow: "Product Family",
    title: "L&T TTA Switchgear Panels",
    alignment: "left",
    familyLink: "/products/lt-tta-panel",
    description:
      "Authorized source for Larsen & Toubro (L&T) Type Tested Assembly (TTA) switchgear panels, supplied via our Virtual JV with Synchro Electricals Pvt. Ltd. — engineered for maximum safety and uninterrupted power transfer under high-current loads.",
    cards: [
      {
        id: "lt-tta-630",
        categoryId: "lt-tta-panel",
        category: "Switchgear",
        title: "TTA-630 Switchgear Panel",
        description:
          "Reliable TTA-630 automatic transfer switch panel from L&T — engineered for automatic power changeover under 630A loads in hospitals and critical utilities.",
        imageSrc: "/images/products/switchgear.png",
        imageAlt: "TTA-630 Switchgear Panel",
      },
      {
        id: "lt-tta-1600",
        categoryId: "lt-tta-panel",
        category: "Switchgear",
        title: "TTA-1600 Switchgear Panel",
        description:
          "Advanced TTA-1600 automatic transfer switch panel — configured for seamless power changeover under 1600A loads in core telecom hubs and high-rise commercial structures.",
        imageSrc: "/images/products/switchgear.png",
        imageAlt: "TTA-1600 Switchgear Panel",
      },
      {
        id: "lt-tta-4000",
        categoryId: "lt-tta-panel",
        category: "Switchgear",
        title: "TTA-4000 Switchgear Panel",
        description:
          "Industrial-grade heavy-duty TTA-4000 automatic transfer switch panel — engineered for massive B2B power transfer configurations up to 4000A in manufacturing complexes.",
        imageSrc: "/images/products/switchgear.png",
        imageAlt: "TTA-4000 Switchgear Panel",
      },
    ],
  },
  {
    id: 2,
    chapterNumber: "02",
    eyebrow: "Product Family",
    title: "Lucy Electric Ring Main Units",
    alignment: "right",
    familyLink: "/products/lucy-rmu",
    description:
      "Compact, sealed-for-life, and completely maintenance-free medium voltage Ring Main Units (RMU) from Lucy Electric — engineered to withstand harsh environments while delivering safe, smart, and highly reliable medium voltage switching (11kV to 33kV).",
    cards: [
      {
        id: "lucy-sabre-vrn2a",
        categoryId: "lucy-rmu",
        category: "Medium Voltage",
        title: "Sabre VRN2a RMU",
        description:
          "Lucy Electric Sabre VRN2a Ring Main Unit for compact, sealed, maintenance-free medium voltage switchgear — ideal for urban and industrial power distribution networks.",
        imageSrc: "/images/products/lucy-rmu.png",
        imageAlt: "Lucy Electric Sabre VRN2a RMU",
      },
      {
        id: "lucy-aegis-36",
        categoryId: "lucy-rmu",
        category: "Medium Voltage",
        title: "Aegis 36 RMU",
        description:
          "Lucy Electric Aegis 36 Ring Main Unit (33kV) for medium voltage grids — built for smart switching safety and high performance under harsh climatic situations.",
        imageSrc: "/images/products/lucy-rmu.png",
        imageAlt: "Lucy Electric Aegis 36 RMU",
      },
      {
        id: "lucy-sabre-vrn3a",
        categoryId: "lucy-rmu",
        category: "Medium Voltage",
        title: "Sabre VRN3a RMU",
        description:
          "Lucy Electric Sabre VRN3a RMU for 24kV operations — offering enhanced multi-way switching designs for urban township power distribution grids.",
        imageSrc: "/images/products/lucy-rmu.png",
        imageAlt: "Lucy Electric Sabre VRN3a RMU",
      },
    ],
  },
  {
    id: 3,
    chapterNumber: "03",
    eyebrow: "Product Family",
    title: "Lucy Electric Compact Substations",
    alignment: "left",
    familyLink: "/products/lucy-css",
    description:
      "All-in-one factory-assembled Compact Secondary Substations (CSS) from Lucy Electric — integrating MV switchgear, power distribution transformer, and LV distribution board in a single weatherproof enclosure designed for rapid deployment.",
    cards: [
      {
        id: "lucy-css-500",
        categoryId: "lucy-css",
        category: "Substation",
        title: "CSS-500 Substation",
        description:
          "CSS-500 (500 kVA) Compact Secondary Substation from Lucy Electric — integrating MV switchgear, transformer, and LV board in a single weatherproof container.",
        imageSrc: "/images/products/lucy-css.png",
        imageAlt: "Lucy Electric CSS-500 Substation",
      },
      {
        id: "lucy-css-1000",
        categoryId: "lucy-css",
        category: "Substation",
        title: "CSS-1000 Substation",
        description:
          "CSS-1000 (1000 kVA) Compact Secondary Substation — robust weatherproof integration engineered for reliable power transfer under 1000 kVA capacities.",
        imageSrc: "/images/products/lucy-css.png",
        imageAlt: "Lucy Electric CSS-1000 Substation",
      },
      {
        id: "lucy-css-2500",
        categoryId: "lucy-css",
        category: "Substation",
        title: "CSS-2500 Substation",
        description:
          "CSS-2500 (2500 kVA) Compact Secondary Substation — high capacity turnkey power package for large heavy industrial zone grids.",
        imageSrc: "/images/products/lucy-css.png",
        imageAlt: "Lucy Electric CSS-2500 Substation",
      },
    ],
  },
  {
    id: 4,
    chapterNumber: "04",
    eyebrow: "Product Family",
    title: "Vertiv™ Liebert® UPS Systems",
    alignment: "right",
    familyLink: "/products/ups",
    description:
      "Enterprise-grade online double-conversion uninterruptible power supplies (UPS) from Vertiv — offering premium power continuity and active harmonic correction for high-density compute, data centers, telecom hubs, and critical infrastructure.",
    cards: [
      {
        id: "vertiv-liebert-exl-s1-1200kw",
        categoryId: "ups",
        category: "Large UPS",
        title: "Liebert® EXL S1 UPS 1200kW",
        description:
          "The Liebert® EXL S1 delivers secure power and first-class load protection, maximizing energy savings for medium-to-large data centers and mission-critical applications.",
        imageSrc: "https://www.vertiv.com/49841c/globalassets/products/critical-power/uninterruptible-power-supplies-ups/vertiv-liebert-exl-s1-ups/cp-ups-na-508x635-42362-exl-s1-ups.jpg",
        imageAlt: "Vertiv Liebert EXL S1 UPS 1200kW",
      },
      {
        id: "vertiv-liebert-exm2-250kw",
        categoryId: "ups",
        category: "Mid-Range UPS",
        title: "Liebert® EXM2 UPS 250kW",
        description:
          "Monolithic, high-efficiency UPS designed for mid-size applications — incorporating next-generation cooling technologies and internal diagnostics for maximum power reliability.",
        imageSrc: "https://www.vertiv.com/492dc0/globalassets/products/critical-power/uninterruptible-power-supplies-ups/liebert-exm2-100-250kw/exm2-100-250kw-front.png",
        imageAlt: "Vertiv Liebert EXM2 UPS 250kW",
      },
      {
        id: "vertiv-liebert-apm2-600kw",
        categoryId: "ups",
        category: "Modular UPS",
        title: "Liebert® APM2 Modular UPS 600kW",
        description:
          "High-density, modular, and scalable UPS designed to support critical infrastructure including variable frequency drive pumps and mechanical cooling systems in data centers.",
        imageSrc: "https://www.vertiv.com/49841c/globalassets/products/critical-power/uninterruptible-power-supplies-ups/vertiv-liebert-exl-s1-ups/cp-ups-na-508x635-42362-exl-s1-ups.jpg",
        imageAlt: "Vertiv Liebert APM2 Modular UPS 600kW",
      },
    ],
  },
  {
    id: 5,
    chapterNumber: "05",
    eyebrow: "Product Family",
    title: "Capital Goods & Solutions",
    alignment: "left",
    familyLink: "/products/capital-goods",
    description:
      "A comprehensive portfolio of secondary capital goods and support infrastructure — including thermal management, modular IT racks, enclosures, digital infrastructure monitoring (DCIM) platforms, and building management integrations. One vendor, one purchase order.",
    cards: [
      {
        id: "thermal-cooling",
        categoryId: "enclosure-cooling",
        category: "Thermal Management",
        title: "Thermal & Cooling Systems",
        description:
          "Precision cooling and thermal management solutions for data centres and industrial environments — perimeter cooling, in-row units, and direct liquid cooling.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDlJNIGxcdbOZOJuEdLfFi4lf1vwyS_ME6J5x0SjsvFg0eE7uiMqMQvtPZOuvi5tHfiqT1k-W-CCx-aTUHi3OHzSwSyjNMJNBnbg8IuTtZHa7eeWtdFNG--wg_3glNKSx9QoqYOT8uxpW4v3LCKYrEllpFD-XSItW2jnMs90PUOxhdi6Neiaqcnh7SYAZnwGswo_ZYYxtvNK_VlJFdRm-z8WYNFGq1bD1e0GITVUXT4tJnV-i_mKPUyn5QfwZQZy7HemEl2vPyPgPQ",
        imageAlt: "Thermal cooling systems",
      },
      {
        id: "racks-enclosures",
        categoryId: "integrated-solutions",
        category: "Infrastructure",
        title: "Racks & IT Enclosures",
        description:
          "Modular server racks, IP-rated industrial cabinets, and micro-data centre pods for mission-critical deployments.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuACB_nPIyMtbri73PQQFAnG19b_BncnFu7KL58l_XfxMAJ9WXMs8Pp5p0LGYjznm_S8I-puIj7w21yeTOxB6BMHXKrzt_chCbKwL0ujiRVX4LSgub1RZ-wapC9p2M_yBYUZFXmTqDiTztB4Lvun0ghVdcHPhTbIyPsQhaEQ1J2d-tsuF5buopUFd-Ep4mlclGlyHOG7j-AOl-Efom9HPIk78mX9NTG6ZWcUT4slsCUGCw_47Pmwa3L221wYGI9D9bF2hCXkMy1Xukk",
        imageAlt: "Server racks and enclosures",
      },
      {
        id: "monitoring-dcim",
        categoryId: "digital-infrastructure",
        category: "Digital Infrastructure",
        title: "Monitoring & DCIM Platforms",
        description:
          "Enterprise DCIM, intelligent PDUs, smart sensors, and building management systems for centralised oversight and control.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCYzfnwnCVP9iBzA35pvF58Zbv6LpPN4QoLV5M6fqU1BLNzLEsmSLu5HPVPYfz9mcxzArrBz3WVniGQmCb9ZQPmx3f2D2kjq5mVNYoOEymJvHHxw9rVSgRQ_RV3cHYfVTj2AqyeRlyZAGRQL66qPukbhEn2gxpX51lEy0C52lkBz_V7d9k9FEZQuOcqj0S_hGjrzXgGpOZ_VWYQM-FfNCo-3M2-H-MOu2-sybDSu37IxEPxyE1S4HjBT79U9MMqnEiV0FoptlnVL50",
        imageAlt: "DCIM monitoring platform",
      },
    ],
  },
];

export const trustStats = [
  { value: "500+", label: "Products" },
  { value: "98.9%", label: "Uptime Reliability" },
  { value: "Pan-India", label: "Project Reach" },
];

export const industries = [
  "Data Centres",
  "Healthcare",
  "Manufacturing",
  "Telecommunications",
  "Transportation",
  "Finance & Banking",
  "Government",
];
