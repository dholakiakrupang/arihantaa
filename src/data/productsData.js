// ─── Centralized Products Data ──────────────────────────────────────────────
// All four product sectors with their cards, used by the Products page.

export const productsData = [
  {
    id: 1,
    chapterNumber: "01",
    eyebrow: "Sector",
    title: "Critical Power",
    alignment: "left",
    description:
      "Robust power protection and distribution solutions engineered for mission-critical infrastructure, ensuring uninterrupted operations in the most demanding global environments.",
    cards: [
      {
        id: "cp-1",
        category: "Power Protection",
        title: "Uninterruptible Power Supplies (UPS)",
        description:
          "Enterprise-grade backup power solutions ensuring continuous operation for mission-critical infrastructure with double-conversion technology.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuACB_nPIyMtbri73PQQFAnG19b_BncnFu7KL58l_XfxMAJ9WXMs8Pp5p0LGYjznm_S8I-puIj7w21yeTOxB6BMHXKrzt_chCbKwL0ujiRVX4LSgub1RZ-wapC9p2M_yBYUZFXmTqDiTztB4Lvun0ghVdcHPhTbIyPsQhaEQ1J2d-tsuF5buopUFd-Ep4mlclGlyHOG7j-AOl-Efom9HPIk78mX9NTG6ZWcUT4slsCUGCw_47Pmwa3L221wYGI9D9bF2hCXkMy1Xukk",
        imageAlt: "Industrial UPS unit in server room",
      },
      {
        id: "cp-2",
        category: "Distribution",
        title: "DC Power Systems",
        description:
          "High-efficiency direct current power infrastructure designed for telecommunications and core network nodes requiring absolute continuity.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fzaE_1xaS6HiKy6_VQtAJuhg2xWOhgmQLfZ_VbwxJiV-Q5AI-k0qKPKhETM9Bny-A7WgLl8h-21Zi09FskaVDOJDj3CErWkCOxSUvp26RH6ptNORRj1PHFO9t7ANFIU89PdvEol9uqcl7tu2Kgu9Dys1mPhnajUT5dOvRsP3gpyqHWrnrerX5_qydr5cxR87uFlhiyWQBFEFvjpRExOtepJGPpq5fThaNjnn6A-ic8hQ6wOnppPXjKeWlksYiZCTLKHeg94n2iY",
        imageAlt: "DC power distribution panel",
      },
      {
        id: "cp-3",
        category: "Switchgear",
        title: "Power Transfer Switches",
        description:
          "Automated systems for seamless switching between utility and emergency generator power sources, minimising transition time to milliseconds.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCql5ltt4iUhUcf_P7ygD2dki1zAGnM0k1u1USqY4leFks2EmvlcnmICFeolzlX9dI9I3qVAdueIf8SjSD6dh-ALiW5C43_5n-Ui42RbErZn0J2Uye7FAxgeqCQZKKkL4WizAk3HNgvDTJCpAZdyoH9uaAWed1wvPJ28x3dg-5m2IyVCCW2LZPK_5F0rAEuQ2qn9t6rUb5WoOBtUFXXPmatKtArpHpbkl6Qad_RGrJr2OhUl4UFapov4OAFVBlcw7qYAiAoCN8G0nQ",
        imageAlt: "High-voltage transfer switchboard",
      },
    ],
  },
  {
    id: 2,
    chapterNumber: "02",
    eyebrow: "Sector",
    title: "Thermal Management",
    alignment: "right",
    description:
      "Advanced cooling systems engineered to optimise energy efficiency and maintain precise thermal conditions for high-density computational environments globally.",
    cards: [
      {
        id: "tm-1",
        category: "Room Cooling",
        title: "Perimeter Cooling Systems",
        description:
          "High-capacity computer room air conditioning (CRAC) units for optimal thermal regulation in large enterprise data centre facilities.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDlJNIGxcdbOZOJuEdLfFi4lf1vwyS_ME6J5x0SjsvFg0eE7uiMqMQvtPZOuvi5tHfiqT1k-W-CCx-aTUHi3OHzSwSyjNMJNBnbg8IuTtZHa7eeWtdFNG--wg_3glNKSx9QoqYOT8uxpW4v3LCKYrEllpFD-XSItW2jnMs90PUOxhdi6Neiaqcnh7SYAZnwGswo_ZYYxtvNK_VlJFdRm-z8WYNFGq1bD1e0GITVUXT4tJnV-i_mKPUyn5QfwZQZy7HemEl2vPyPgPQ",
        imageAlt: "Industrial cooling unit for data centres",
      },
      {
        id: "tm-2",
        category: "Row Cooling",
        title: "In-Row Cooling Units",
        description:
          "Targeted thermal management modules placed directly adjacent to heat loads for maximum efficiency and precision temperature control.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDs60H2LwEbUe4d3lFBmON7rl5LspJg86aH245mLCTcGOOE6S_c-YyKiU9J1P2kD-LTSZLb4s8WsOmdTGXqvp3pMgGmgpEZIY5XBMvV5t3mCAZ2olyKpVSJpf8VRwj8VNYkL6Hu-uOTekuFPniF4ieJ6JYeFLKrSn-KQFNnBkK9FwnvVBM5oWH8ar5nha_KCaMguk9vuai1pIWduZz2cnwUpAsGHHbM6vBhO17CYegt2nU4jh3JWdelEyt2EGY17dM1lXwWigajuyo",
        imageAlt: "In-row cooling manifolds between server racks",
      },
      {
        id: "tm-3",
        category: "Liquid Cooling",
        title: "Direct Liquid Cooling",
        description:
          "Next-generation direct liquid cooling infrastructure for ultra-high-density GPU and AI compute clusters, achieving PUE values below 1.1.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDlJNIGxcdbOZOJuEdLfFi4lf1vwyS_ME6J5x0SjsvFg0eE7uiMqMQvtPZOuvi5tHfiqT1k-W-CCx-aTUHi3OHzSwSyjNMJNBnbg8IuTtZHa7eeWtdFNG--wg_3glNKSx9QoqYOT8uxpW4v3LCKYrEllpFD-XSItW2jnMs90PUOxhdi6Neiaqcnh7SYAZnwGswo_ZYYxtvNK_VlJFdRm-z8WYNFGq1bD1e0GITVUXT4tJnV-i_mKPUyn5QfwZQZy7HemEl2vPyPgPQ",
        imageAlt: "Liquid cooling infrastructure for compute clusters",
      },
    ],
  },
  {
    id: 3,
    chapterNumber: "03",
    eyebrow: "Sector",
    title: "Racks & Enclosures",
    alignment: "left",
    description:
      "Precision-engineered physical infrastructure that provides the structural foundation for mission-critical deployments — from open-frame server racks to high-security, climate-controlled enclosures.",
    cards: [
      {
        id: "re-1",
        category: "Server Infrastructure",
        title: "Open-Frame Server Racks",
        description:
          "Modular, high-load-capacity server racks designed for maximum airflow and rapid deployment in enterprise data centre environments.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuACB_nPIyMtbri73PQQFAnG19b_BncnFu7KL58l_XfxMAJ9WXMs8Pp5p0LGYjznm_S8I-puIj7w21yeTOxB6BMHXKrzt_chCbKwL0ujiRVX4LSgub1RZ-wapC9p2M_yBYUZFXmTqDiTztB4Lvun0ghVdcHPhTbIyPsQhaEQ1J2d-tsuF5buopUFd-Ep4mlclGlyHOG7j-AOl-Efom9HPIk78mX9NTG6ZWcUT4slsCUGCw_47Pmwa3L221wYGI9D9bF2hCXkMy1Xukk",
        imageAlt: "Open-frame server racks in data centre",
      },
      {
        id: "re-2",
        category: "Secure Enclosures",
        title: "IP-Rated Industrial Cabinets",
        description:
          "IP54–IP66 rated enclosures for harsh industrial environments, providing robust protection against dust, water ingress, and physical tampering.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCql5ltt4iUhUcf_P7ygD2dki1zAGnM0k1u1USqY4leFks2EmvlcnmICFeolzlX9dI9I3qVAdueIf8SjSD6dh-ALiW5C43_5n-Ui42RbErZn0J2Uye7FAxgeqCQZKKkL4WizAk3HNgvDTJCpAZdyoH9uaAWed1wvPJ28x3dg-5m2IyVCCW2LZPK_5F0rAEuQ2qn9t6rUb5WoOBtUFXXPmatKtArpHpbkl6Qad_RGrJr2OhUl4UFapov4OAFVBlcw7qYAiAoCN8G0nQ",
        imageAlt: "IP-rated industrial cabinets",
      },
      {
        id: "re-3",
        category: "Edge Computing",
        title: "Micro-Data Centre Pods",
        description:
          "Self-contained, prefabricated micro-data centre units for rapid edge deployment — complete with integrated power, cooling, and security.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB_fzaE_1xaS6HiKy6_VQtAJuhg2xWOhgmQLfZ_VbwxJiV-Q5AI-k0qKPKhETM9Bny-A7WgLl8h-21Zi09FskaVDOJDj3CErWkCOxSUvp26RH6ptNORRj1PHFO9t7ANFIU89PdvEol9uqcl7tu2Kgu9Dys1mPhnajUT5dOvRsP3gpyqHWrnrerX5_qydr5cxR87uFlhiyWQBFEFvjpRExOtepJGPpq5fThaNjnn6A-ic8hQ6wOnppPXjKeWlksYiZCTLKHeg94n2iY",
        imageAlt: "Micro-data centre pod for edge deployment",
      },
    ],
  },
  {
    id: 4,
    chapterNumber: "04",
    eyebrow: "Sector",
    title: "Monitoring & Management",
    alignment: "right",
    description:
      "Intelligent software and hardware platforms that provide real-time visibility, predictive analytics, and centralised control over your entire critical infrastructure portfolio.",
    cards: [
      {
        id: "mm-1",
        category: "DCIM",
        title: "Data Centre Infrastructure Management",
        description:
          "Enterprise DCIM platforms delivering unified visibility across power, cooling, space, and assets — with AI-driven capacity planning and anomaly detection.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCYzfnwnCVP9iBzA35pvF58Zbv6LpPN4QoLV5M6fqU1BLNzLEsmSLu5HPVPYfz9mcxzArrBz3WVniGQmCb9ZQPmx3f2D2kjq5mVNYoOEymJvHHxw9rVSgRQ_RV3cHYfVTj2AqyeRlyZAGRQL66qPukbhEn2gxpX51lEy0C52lkBz_V7d9k9FEZQuOcqj0S_hGjrzXgGpOZ_VWYQM-FfNCo-3M2-H-MOu2-sybDSu37IxEPxyE1S4HjBT79U9MMqnEiV0FoptlnVL50",
        imageAlt: "DCIM dashboard monitoring infrastructure",
      },
      {
        id: "mm-2",
        category: "Remote Monitoring",
        title: "Intelligent PDUs & Smart Sensors",
        description:
          "Outlet-level power monitoring with integrated environmental sensors for temperature, humidity, and airflow — enabling proactive fault prevention.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuACB_nPIyMtbri73PQQFAnG19b_BncnFu7KL58l_XfxMAJ9WXMs8Pp5p0LGYjznm_S8I-puIj7w21yeTOxB6BMHXKrzt_chCbKwL0ujiRVX4LSgub1RZ-wapC9p2M_yBYUZFXmTqDiTztB4Lvun0ghVdcHPhTbIyPsQhaEQ1J2d-tsuF5buopUFd-Ep4mlclGlyHOG7j-AOl-Efom9HPIk78mX9NTG6ZWcUT4slsCUGCw_47Pmwa3L221wYGI9D9bF2hCXkMy1Xukk",
        imageAlt: "Intelligent PDU and smart sensors",
      },
      {
        id: "mm-3",
        category: "Network Management",
        title: "Building Management Systems",
        description:
          "Integrated BMS platforms that orchestrate HVAC, electrical, fire suppression, and access control into a single, cohesive operational layer.",
        imageSrc:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDlJNIGxcdbOZOJuEdLfFi4lf1vwyS_ME6J5x0SjsvFg0eE7uiMqMQvtPZOuvi5tHfiqT1k-W-CCx-aTUHi3OHzSwSyjNMJNBnbg8IuTtZHa7eeWtdFNG--wg_3glNKSx9QoqYOT8uxpW4v3LCKYrEllpFD-XSItW2jnMs90PUOxhdi6Neiaqcnh7SYAZnwGswo_ZYYxtvNK_VlJFdRm-z8WYNFGq1bD1e0GITVUXT4tJnV-i_mKPUyn5QfwZQZy7HemEl2vPyPgPQ",
        imageAlt: "Building management system control interface",
      },
    ],
  },
];

export const trustStats = [
  { value: "40+", label: "Years Experience" },
  { value: "500+", label: "Products" },
  { value: "98.9%", label: "Uptime Reliability" },
  { value: "120+", label: "Countries Served" },
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
