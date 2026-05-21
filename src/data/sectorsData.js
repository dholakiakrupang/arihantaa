export const sectorsData = {
  'critical-power': {
    tag: 'CRITICAL POWER',
    title: 'Critical Power Infrastructure',
    heroHeadline: {
      line1: 'When Power Fails,',
      line2: 'Everything Fails.',
      line3: 'We Ensure It Doesn\'t.',
      orangeWord: 'Uninterrupted' // We'll inject this dynamically in the component or handle it manually
    },
    heroDescription: 'Critical power infrastructure is the backbone of every facility where downtime carries human, financial, or operational consequences — hospitals, data centres, airports, industrial plants, and government complexes. Arihantaa Powertech designs, installs, and maintains the complete critical power chain: from utility intake and HT switching to UPS systems, battery banks, static transfer switches, and precision distribution — with 30 years of proven execution across India\'s most demanding environments.',
    contextStats: [
      { value: '₹97.53 Cr', label: 'SINGLE LARGEST ELECTRICAL CONTRACT' },
      { value: '22+', label: 'CRITICAL POWER PROJECTS ACTIVE' },
      { value: '30 YRS', label: 'IN HIGH-STAKES ELECTRICAL EXECUTION' },
      { value: '7 Cr', label: 'BANK SOLVENCY — FINANCIALLY BACKED' }
    ],
    problemHeader: {
      headline: 'Critical power environments have zero tolerance for error.',
      subhead: 'These are the failure points we are specifically equipped to prevent.'
    },
    problems: [
      {
        icon: 'bolt',
        title: 'Unplanned Power Outages',
        description: 'A single unplanned outage in an ICU, data centre, or airport control room can cost lives, corrupt irreplaceable data, or ground an entire operation. Most failures trace back to undersized UPS systems, aging batteries, or missing bypass redundancy.'
      },
      {
        icon: 'warning',
        title: 'Undersized or Misconfigured UPS Systems',
        description: 'Facilities often inherit UPS systems sized for original loads that have since grown 3× with equipment additions. Overloaded UPS units fail silently — until the grid drops and the backup isn\'t there.'
      },
      {
        icon: 'cable',
        title: 'Poor Cable Infrastructure and Termination',
        description: 'Loose terminations, undersized cables, and incorrect gland sizes create heat buildup, tripping, and fire risk in high-load environments. This is the most underdiagnosed failure cause in Indian critical infrastructure.'
      },
      {
        icon: 'sync_alt',
        title: 'Single-Source Power Feed Dependency',
        description: 'Facilities running on a single utility feed with no static transfer switch or second source incur full outages on every grid fault — even momentary ones. In critical environments, even 20ms of interruption can crash systems.'
      },
      {
        icon: 'battery_alert',
        title: 'Battery Bank Neglect and Premature Failure',
        description: 'Battery strings degrade silently. Without regular impedance testing, equalisation, and temperature monitoring, a battery bank rated for 30 minutes may deliver 4. Most facility teams discover this only during an actual outage.'
      },
      {
        icon: 'sensors',
        title: 'Lack of Real-Time Power Monitoring',
        description: 'Without SCADA or BMS integration, abnormal load patterns, phase imbalances, and harmonic distortions go undetected until they cause equipment failure or regulatory non-compliance. Visibility is not optional in critical power.'
      }
    ],
    solutionHeader: {
      headline: 'End-to-end critical power solutions. Designed, built, and maintained by one firm.',
      subhead: 'No split accountability. No subcontracted core scope. One firm from design to DLP.'
    },
    solutions: [
      {
        tag: 'POWER CONTINUITY SYSTEMS',
        title: 'Uninterrupted supply from grid to last load point.',
        description: 'We design and install the complete power continuity chain — from HT intake and main LT distribution to UPS systems, static transfer switches, and battery banks — ensuring that when the grid falters, your facility doesn\'t notice.',
        deliverables: [
          'Complete HT/LT substation design and erection',
          'UPS system sizing, supply, and SITC',
          'Battery bank installation and commissioning',
          'Static transfer switch (STS) integration',
          'AMF panels and DG set synchronisation'
        ]
      },
      {
        tag: 'DISTRIBUTION & PROTECTION',
        title: 'Precision distribution to every critical load.',
        description: 'We engineer the distribution layer from main LT panels through sub-distribution boards to final load points — with correct cable sizing, protective relay settings, and grounding systems that prevent faults from cascading.',
        deliverables: [
          'LT panel and MCC fabrication and installation',
          'Bus duct and cable tray systems',
          'Floor-wise DB and sub-DB with circuit protection',
          'Cable laying, gland, and IS-standard termination',
          'Earthing, lightning protection, and surge suppression'
        ]
      },
      {
        tag: 'MONITORING, INTELLIGENCE & O&M',
        title: 'Visibility, compliance, and long-term reliability.',
        description: 'We integrate power monitoring, BMS connectivity, and SCADA systems so that abnormal conditions are detected in real time — not post-failure. Our O&M contracts ensure the system performs at specification for its full operational life.',
        deliverables: [
          'SCADA and BMS integration for power systems',
          'Real-time load and power quality monitoring',
          'Comprehensive AMC with committed response SLA',
          'DLP period support with dedicated site engineers',
          '5-year O&M contracts with performance reporting'
        ]
      }
    ],
    powerChain: [
      { icon: 'electrical_services', title: 'UTILITY INTAKE', examples: ['HT Metering Panel', 'Transformer', 'Outdoor Switchgear'] },
      { icon: 'account_tree', title: 'LT DISTRIBUTION', examples: ['Main LT Panel', 'MCC', 'Bus Duct'] },
      { icon: 'battery_charging_full', title: 'BACKUP & CONTINUITY', examples: ['UPS System', 'Battery Bank', 'STS'] },
      { icon: 'cable', title: 'FINAL DISTRIBUTION', examples: ['Sub-DB', 'PDU', 'Load Circuits'] },
      { icon: 'hub', title: 'MONITORING', examples: ['SCADA Terminal', 'BMS Node', 'Power Analyser'] }
    ],
    productCategories: [
      { icon: 'bolt', title: 'HT Switchgear & Substations', environments: 'Hospitals · Airports · Industrial', desc: 'Primary power reception and switching.' },
      { icon: 'account_tree', title: 'LT Panels & MCCs', environments: 'All Sectors', desc: 'Custom built main distribution panels.' },
      { icon: 'battery_charging_full', title: 'UPS Systems (1 kVA – 800 kVA)', environments: 'Hospitals · Data Centres · Airports', desc: 'Zero-downtime backup power systems.' },
      { icon: 'battery_alert', title: 'Battery Banks & BESS', environments: 'Critical Facilities · Solar Integration', desc: 'Energy storage for sustained continuity.' },
      { icon: 'sync_alt', title: 'Static Transfer Switches', environments: 'Data Centres · Airports · Defence', desc: 'Seamless switching between power sources.' },
      { icon: 'cable', title: 'Bus Duct & Cable Tray Systems', environments: 'Industrial · Commercial · Metro', desc: 'High capacity power routing infrastructure.' },
      { icon: 'electrical_services', title: 'Power Distribution Units (PDUs)', environments: 'Data Centres · Server Rooms', desc: 'Rack-level power distribution.' },
      { icon: 'hub', title: 'SCADA & BMS Power Integration', environments: 'Hospitals · Smart Cities · Industrial', desc: 'Centralized monitoring and control.' },
      { icon: 'solar_power', title: 'Solar PV with Grid Tie & Backup', environments: 'Government · Commercial · Heritage', desc: 'Sustainable energy integration.' }
    ],
    executionSteps: [
      {
        number: '01',
        title: 'ENGINEERING',
        activities: ['Load study and single-line design', 'Equipment sizing and BOM', 'Drawing submission and approval']
      },
      {
        number: '02',
        title: 'PROCUREMENT',
        activities: ['Vendor qualification and PO', 'Panel fabrication at certified workshop', 'Material delivery with QA documentation']
      },
      {
        number: '03',
        title: 'INSTALLATION',
        activities: ['Site mobilisation and crew deployment', 'Cable laying, gland, and termination', 'Panel erection and busbar connection']
      },
      {
        number: '04',
        title: 'TESTING & COMMISSIONING',
        activities: ['Protective relay calibration', 'Load bank and UPS acceptance test', 'Final SITC sign-off with client']
      },
      {
        number: '05',
        title: 'O&M & DLP',
        activities: ['DLP period site support', 'Preventive maintenance schedule', 'Annual AMC with response SLA']
      }
    ],
    flagshipProject: {
      name: 'Haridwar Government Medical College & Hospital Campus',
      client: 'YASHNAND ENGINEERING & CONTRACTORS PVT. LTD., AHMEDABAD',
      scope: 'Complete Electrical, ELV, and HVAC systems for a full government medical college and hospital campus in Uttarakhand — covering HT substation, LT distribution, UPS systems, HVAC integration, and ELV networks across the entire campus.',
      stats: [
        { value: '₹97.53 Cr', label: 'CONTRACT VALUE' },
        { value: '30 MONTHS', label: 'STIPULATED DURATION' },
        { value: 'UTTARAKHAND', label: 'LOCATION' }
      ]
    },
    supportingProjects: [
      { tag: 'HEALTHCARE', location: 'AHMEDABAD', name: 'GMERS Sola Super Specialty Hospital', client: 'Shreeji Krupa', cost: '₹69.19 Cr', durationLabel: '24 Months', durationPercent: '100%' },
      { tag: 'INFRASTRUCTURE', location: 'RAJKOT', name: 'Rajkot Greenfield Airport Terminal', client: 'Yashnand Engineering', cost: '₹63.62 Cr', durationLabel: '24 Months', durationPercent: '100%' },
      { tag: 'TRANSPORT', location: 'SURAT', name: 'Surat Metro Rail Bhesan Depot', client: 'Rail Vikas Nigam Limited', cost: '₹32.22 Cr', durationLabel: '15 Months', durationPercent: '100%' },
      { tag: 'HEALTHCARE', location: 'AHMEDABAD', name: 'Shardaben General Hospital Electrical Revamp', client: 'AMC', cost: '₹2.55 Cr', durationLabel: '24 Months', durationPercent: '100%' },
      { tag: 'HEALTHCARE', location: 'AHMEDABAD', name: 'Narendra Modi Medical College O&M', client: 'AMC', cost: '₹1.73 Cr', durationLabel: '24 Months', durationPercent: '100%' },
      { tag: 'HEALTHCARE', location: 'SILVASSA', name: 'Silvassa Multispecialty Hospital MEP', client: 'Malani Construction', cost: '₹9.40 Cr', durationLabel: '12 Months', durationPercent: '100%' },
      { tag: 'HEALTHCARE', location: 'AHMEDABAD', name: 'IKDRC Kidney Disease Research Centre', client: 'Malani Construction', cost: 'Confidential', durationLabel: '18 Months', durationPercent: '100%' },
      { tag: 'HEALTHCARE', location: 'AHMEDABAD', name: 'Sola Civil Hospital OPD Building', client: 'Direct', cost: 'Confidential', durationLabel: '23 Months', durationPercent: '100%' }
    ],
    differentiators: [
      {
        number: '01',
        title: 'Single-Firm Accountability',
        description: 'Arihantaa does not subcontract core electrical work. From panel fabrication to final commissioning, our own certified engineers execute every scope item — giving you one throat to hold and one team to trust.'
      },
      {
        number: '02',
        title: 'Multi-State Licensed & Compliant',
        description: 'We carry active GST registrations across 7 states, an Electrical Contractor License GBC/1909, PF registration, and ISO 9001:2015 certification — making us immediately compliant for government and PSU tenders across India.'
      },
      {
        number: '03',
        title: 'Proven at Scale — ₹97 Cr Single Contract',
        description: 'Our largest single contract is ₹97.53 Crore — the Haridwar Government Medical Campus MEP package. We have executed contracts at every scale from ₹28 Lakh to ₹97 Crore without performance failures at the upper end.'
      },
      {
        number: '04',
        title: 'O&M Capability Beyond SITC',
        description: 'We hold active 5-year O&M contracts for heritage illumination, dam lighting, and solar systems — demonstrating post-commissioning accountability that most electrical contractors cannot offer.'
      },
      {
        number: '05',
        title: 'Financially Backed & Solvency Certified',
        description: 'With a bank solvency of ₹7 Crore across Federal Bank and Bank of Baroda, we meet the financial pre-qualification criteria for large government and institutional tenders without exception.'
      }
    ]
  },
  
  // ============================================================================
  // PLACEHOLDER / FALLBACK DATA FOR OTHER SECTORS TO PREVENT CRASHES
  // Mapped to the new 7-section schema.
  // ============================================================================
  
  'thermal-management': {
    tag: 'THERMAL MANAGEMENT',
    title: 'Thermal Management & Cooling',
    heroHeadline: { line1: 'Keep Computing Clusters', line2: 'Running at', line3: 'Peak Efficiency.', orangeWord: 'Peak' },
    heroDescription: 'Arihantaa Powertech deploys state-of-the-art thermal engineering to keep high-density computing clusters running at peak efficiency. From containment solutions to high-capacity chilled water networks and direct-to-chip liquid loops, we eliminate thermal risks.',
    contextStats: [
      { value: '35%', label: 'COOLING EFFICIENCY BOOST' },
      { value: '< 1.15', label: 'AVERAGE PUE TARGET' },
      { value: '24/7', label: 'THERMAL MONITORING' },
      { value: 'Tier IV', label: 'READY DEPLOYMENTS' }
    ],
    problemHeader: { headline: 'Heat is the enemy of performance.', subhead: 'We eliminate the thermal bottlenecks that limit your infrastructure.' },
    problems: [
      { icon: 'thermostat', title: 'Hotspots & Uneven Cooling', description: 'Improper airflow management creates localized hotspots, leading to thermal throttling and hardware degradation.' },
      { icon: 'water_drop', title: 'Coolant Leaks', description: 'Poorly installed liquid loops risk catastrophic hardware damage if leaks are not detected and contained immediately.' },
      { icon: 'power', title: 'High Energy Consumption', description: 'Inefficient cooling systems are the largest drain on facility power, severely impacting operating margins and PUE.' },
      { icon: 'ac_unit', title: 'Inadequate Capacity Planning', description: 'Facilities often lack the thermal headroom to support the deployment of high-density AI and GPU clusters.' },
      { icon: 'sensors', title: 'Lack of Environmental Visibility', description: 'Without granular temperature and humidity monitoring, facility managers cannot optimize cooling delivery.' },
      { icon: 'warning', title: 'Component Failure', description: 'Continuous exposure to high temperatures drastically reduces the lifespan of critical IT components.' }
    ],
    solutionHeader: { headline: 'Precision climate control for critical environments.', subhead: 'From perimeter to direct-to-chip, we manage heat at every level.' },
    solutions: [
      { tag: 'ROOM LEVEL COOLING', title: 'Optimized ambient conditions.', description: 'We design and deploy high-capacity CRAC/CRAH systems to maintain consistent temperature and humidity across the facility.', deliverables: ['CRAC/CRAH installation', 'Underfloor air distribution', 'Hot/Cold aisle containment', 'EC fan upgrades'] },
      { tag: 'RACK LEVEL COOLING', title: 'Targeted heat removal.', description: 'For high-density deployments, we implement in-row cooling and rear-door heat exchangers to remove heat directly at the source.', deliverables: ['In-Row cooling units', 'Rear Door Heat Exchangers (RDHx)', 'Liquid-to-air heat exchangers', 'Rack-level airflow management'] },
      { tag: 'DIRECT LIQUID COOLING', title: 'Next-generation thermal management.', description: 'We integrate advanced direct-to-chip and immersion cooling solutions for the most demanding compute workloads.', deliverables: ['Coolant Distribution Units (CDUs)', 'Direct-to-chip cold plates', 'Immersion cooling tanks', 'Secondary heat rejection loops'] }
    ],
    powerChain: [
      { icon: 'wind_power', title: 'HEAT REJECTION', examples: ['Chillers', 'Cooling Towers', 'Dry Coolers'] },
      { icon: 'ac_unit', title: 'ROOM COOLING', examples: ['CRAC/CRAH', 'Containment'] },
      { icon: 'table_rows', title: 'RACK COOLING', examples: ['In-Row Units', 'RDHx'] },
      { icon: 'water_drop', title: 'LIQUID COOLING', examples: ['CDUs', 'Cold Plates'] },
      { icon: 'thermostat', title: 'MONITORING', examples: ['Thermal Sensors', 'BMS'] }
    ],
    productCategories: [
      { icon: 'wind_power', title: 'Chillers & Heat Rejection', environments: 'Data Centres · Industrial', desc: 'Primary heat rejection systems.' },
      { icon: 'ac_unit', title: 'CRAC / CRAH Units', environments: 'Data Centres · Server Rooms', desc: 'Precision room cooling.' },
      { icon: 'table_rows', title: 'In-Row Cooling', environments: 'High-Density Racks', desc: 'Targeted rack cooling.' }
    ],
    executionSteps: [
      { number: '01', title: 'THERMAL MODELING', activities: ['CFD Analysis', 'Heat Load Calculation', 'System Design'] },
      { number: '02', title: 'PROCUREMENT', activities: ['Equipment Sourcing', 'Piping Fabrication', 'Quality Assurance'] },
      { number: '03', title: 'INSTALLATION', activities: ['Piping & Insulation', 'Equipment Rigging', 'Containment Erection'] },
      { number: '04', title: 'COMMISSIONING', activities: ['Pressure Testing', 'System Flushing', 'Performance Validation'] },
      { number: '05', title: 'MAINTENANCE', activities: ['Filter Changes', 'Fluid Analysis', 'Preventive Maintenance'] }
    ],
    flagshipProject: {
      name: 'Nxtra Data Center Cooling Upgrade',
      client: 'Nxtra by Airtel',
      scope: 'Comprehensive overhaul of chilled water systems and implementation of smart aisle containment for a 5MW data center.',
      stats: [ { value: '₹58.40 Cr', label: 'CONTRACT VALUE' }, { value: '18 MONTHS', label: 'DURATION' }, { value: 'PUNE', label: 'LOCATION' } ]
    },
    supportingProjects: [],
    differentiators: [
      { number: '01', title: 'Advanced CFD Capabilities', description: 'We utilize computational fluid dynamics to ensure our designs optimize airflow and eliminate hotspots before installation begins.' }
    ]
  },
  
  'racks-enclosures': {
    tag: 'RACKS & ENCLOSURES',
    title: 'Racks & Physical Enclosures',
    heroHeadline: { line1: 'The Structural', line2: 'Physical Foundation.', line3: 'Built to Last.', orangeWord: 'Foundation' },
    heroDescription: 'Our server frames and industrial cabinets provide the physical security, organization, and airflow optimization needed to house critical systems.',
    contextStats: [ { value: 'IP54-IP66', label: 'CABINET RATINGS' } ],
    problemHeader: { headline: 'Physical infrastructure cannot be an afterthought.', subhead: 'We provide the secure, structured environments your equipment requires.' },
    problems: [ { icon: 'grid_view', title: 'Poor Cable Management', description: 'Unstructured cabling impedes airflow and complicates maintenance.' } ],
    solutionHeader: { headline: 'Robust enclosures for every environment.', subhead: 'From pristine data centers to harsh industrial floors.' },
    solutions: [ { tag: 'SERVER RACKS', title: 'Data Center Infrastructure', description: 'Standard and custom racks optimized for high-density computing.', deliverables: ['42U/48U Racks', 'Cable Management', 'Blanking Panels'] } ],
    powerChain: [ { icon: 'grid_view', title: 'FRAMES', examples: ['Server Racks', 'Network Cabinets'] } ],
    productCategories: [ { icon: 'grid_view', title: 'Server Racks', environments: 'Data Centers', desc: 'Standard IT enclosures.' } ],
    executionSteps: [ { number: '01', title: 'DESIGN', activities: ['Layout Planning', 'Custom Fabrication', 'Accessory Selection'] } ],
    flagshipProject: { name: 'Reliance Industrial Park Enclosures', client: 'Reliance Industries', scope: 'Deployment of IP65-certified outdoor electrical panels.', stats: [ { value: '₹41.50 Cr', label: 'VALUE' } ] },
    supportingProjects: [],
    differentiators: [ { number: '01', title: 'Custom Fabrication', description: 'We can design and build custom enclosures to meet unique dimensional or environmental requirements.' } ]
  },
  
  'monitoring-management': {
    tag: 'MONITORING & MANAGEMENT',
    title: 'Monitoring & Intelligent Infrastructure',
    heroHeadline: { line1: 'Unified', line2: 'Operational', line3: 'Visibility.', orangeWord: 'Visibility' },
    heroDescription: 'Arihantaa Powertech bridges hardware and software to create responsive, automated facilities.',
    contextStats: [ { value: '100k+', label: 'DATA NODES MONITORED' } ],
    problemHeader: { headline: 'You cannot manage what you cannot see.', subhead: 'We illuminate your critical infrastructure.' },
    problems: [ { icon: 'visibility_off', title: 'Blind Spots', description: 'Lack of centralized monitoring leaves facilities vulnerable to unnoticed failures.' } ],
    solutionHeader: { headline: 'Comprehensive DCIM and SCADA integration.', subhead: 'Total oversight of power, cooling, and space.' },
    solutions: [ { tag: 'DCIM', title: 'Data Center Infrastructure Management', description: 'Software platforms for holistic facility monitoring.', deliverables: ['Software Deployment', 'Sensor Integration', 'Alert Configuration'] } ],
    powerChain: [ { icon: 'analytics', title: 'SOFTWARE', examples: ['DCIM', 'BMS'] } ],
    productCategories: [ { icon: 'analytics', title: 'DCIM Software', environments: 'Data Centers', desc: 'Management platforms.' } ],
    executionSteps: [ { number: '01', title: 'INTEGRATION', activities: ['Network Setup', 'Sensor Placement', 'Software Configuration'] } ],
    flagshipProject: { name: 'HDFC Bank Data Hub DCIM', client: 'HDFC Bank', scope: 'Integration of enterprise DCIM suite monitoring over 1,200 server racks.', stats: [ { value: '₹31.40 Cr', label: 'VALUE' } ] },
    supportingProjects: [],
    differentiators: [ { number: '01', title: 'Vendor-Neutral Integration', description: 'We seamlessly integrate hardware from diverse manufacturers into a single pane of glass.' } ]
  }
};

export const sectorExperts = [
  { name: 'Kaushik D. Jariwala', role: 'Managing Partner', avatar: 'KJ' },
  { name: 'Lilam K. Lalka', role: 'Technical Partner', avatar: 'LL' }
];
