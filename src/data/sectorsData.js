// Centralized Sectors Data for Arihantaa Powertech
// Contains rich copy and specs for the 4 core industrial sectors.

export const sectorsData = {
  'critical-power': {
    title: 'Critical Power Infrastructure',
    heroTitle: 'Powering Every Layer.',
    heroDescription: 'Arihantaa Powertech delivers industrial-grade electrical infrastructure for India’s most critical environments. We specialize in high-voltage distribution, zero-downtime backup systems, and integrated power intelligence that ensures operational continuity where failure is not an option.',
    stats: [
      { label: 'Largest Contract', value: '₹97.53 Cr' },
      { label: 'Experience', value: '30 Yrs' }
    ],
    capabilities: [
      {
        number: '01',
        title: 'Uninterruptible Power & Backup',
        items: [
          { boldText: 'Design and commission turnkey', restText: 'UPS systems from 1kVA to MW-scale.' },
          { boldText: 'Provide engineering that ensures', restText: 'highly resilient Flywheel storage solutions.' },
          { boldText: 'Install Battery Energy Storage Systems (BESS)', restText: 'and advanced Battery monitoring.' }
        ]
      },
      {
        number: '02',
        title: 'Distribution & Switching',
        items: [
          { boldText: 'Deploy high-reliability Switchgear', restText: 'for critical infrastructure applications.' },
          { boldText: 'Install Busway systems', restText: 'for efficient, high-density power delivery.' },
          { boldText: 'Integrate Static Transfer Switches', restText: 'for zero-latency power transitions.' }
        ]
      },
      {
        number: '03',
        title: 'DC & Industrial Power',
        items: [
          { boldText: 'Deliver specialized DC power systems', restText: 'designed for Telecom, Rail, and core utilities.' },
          { boldText: 'Implement Industrial AC/DC conversion', restText: 'with ruggedized components.' }
        ]
      },
      {
        number: '04',
        title: 'Control & Monitoring',
        items: [
          { boldText: 'Provide real-time power quality monitoring', restText: 'to preemptively address anomalies.' },
          { boldText: 'Ensure seamless SCADA integration', restText: 'across your entire facility footprint.' },
          { boldText: 'Deliver proactive lifecycle management', restText: 'through intelligent systems.' }
        ]
      }
    ],
    zones: [
      {
        label: 'Zone 1',
        title: 'Facility Level',
        icon: 'domain',
        description: 'High-voltage Switchgear, Busway distribution, Switchboards, and large-scale Solar PV integration.'
      },
      {
        label: 'Zone 2',
        title: 'Room & Rack',
        icon: 'dns',
        description: 'UPS Systems, Battery Energy Storage (BESS), smart PDUs, and high-speed Static Transfer Switches.'
      },
      {
        label: 'Zone 3',
        title: 'DC Power',
        icon: 'electrical_services',
        description: 'Specialized industrial DC Power Systems, Rectifiers, Inverters, and custom DC Distribution networks.'
      },
      {
        label: 'Zone 4',
        title: 'Intelligence',
        icon: 'online_prediction',
        description: 'Power Control & Automation, real-time power quality monitoring, SCADA suites, and BMS interfaces.'
      }
    ],
    projects: [
      {
        title: 'GMERS Sola (Hospital Block)',
        cost: '₹97.53 Cr',
        description: 'Execution of comprehensive hospital power, backup UPS networks, and high-voltage substation switchgear.'
      },
      {
        title: 'Ahmedabad Metro Rail Phase-2',
        cost: '₹45.10 Cr',
        description: 'Delivered robust elevated station power distribution, emergency backup system engineering, and cabling.'
      },
      {
        title: 'Haridwar Medical Campus',
        cost: '₹34.20 Cr',
        description: 'Provided primary electrical backbone infrastructure for massive medical academy and hospital facilities.'
      },
      {
        title: 'GIFT City (Zone-1)',
        cost: '₹22.80 Cr',
        description: 'Integrated high-rise commercial electrical distribution, transformer sub-stations, and zero-latency switching.'
      }
    ]
  },
  'thermal-management': {
    title: 'Thermal Management & Cooling',
    heroTitle: 'Precision Climate Control.',
    heroDescription: 'Arihantaa Powertech deploys state-of-the-art thermal engineering to keep high-density computing clusters running at peak efficiency. From containment solutions to high-capacity chilled water networks and direct-to-chip liquid loops, we eliminate thermal risks.',
    stats: [
      { label: 'Cooling Efficiency', value: '35% Boost' },
      { label: 'Average PUE Target', value: '< 1.15' }
    ],
    capabilities: [
      {
        number: '01',
        title: 'Perimeter & Room Cooling',
        items: [
          { boldText: 'Deploy high-capacity CRAC units', restText: 'for uniform airflow regulation in large server rooms.' },
          { boldText: 'Configure intelligent containment', restText: 'for hot/cold aisle physical isolation.' },
          { boldText: 'Implement high-efficiency EC fans', restText: 'for precise motor speed control and reduced power draw.' }
        ]
      },
      {
        number: '02',
        title: 'Row-Based Management',
        items: [
          { boldText: 'Install targeted in-row cooling', restText: 'placed directly adjacent to server heat loads.' },
          { boldText: 'Enable dynamic capacity scaling', restText: 'to automatically adjust cooling based on real-time server stress.' }
        ]
      },
      {
        number: '03',
        title: 'Direct Liquid Cooling',
        items: [
          { boldText: 'Design direct-to-chip liquid loops', restText: 'for high-density GPU and AI compute configurations.' },
          { boldText: 'Build secondary heat rejection circuits', restText: 'with robust Coolant Distribution Units (CDUs).' }
        ]
      },
      {
        number: '04',
        title: 'Thermal SCADA & Analytics',
        items: [
          { boldText: 'Deploy dense temperature probe arrays', restText: 'for real-time tracking of thermal distribution.' },
          { boldText: 'Integrate predictive cooling management', restText: 'within the facility SCADA framework to stop hotspots.' }
        ]
      }
    ],
    zones: [
      {
        label: 'Zone 1',
        title: 'Heat Rejection',
        icon: 'ac_unit',
        description: 'High-reliability Chillers, Cooling Towers, Dry Coolers, and secondary Heat Exchangers.'
      },
      {
        label: 'Zone 2',
        title: 'Room Cooling',
        icon: 'wind_power',
        description: 'Perimeter CRAC/CRAH systems, underfloor plenum designs, and large-scale room air handlers.'
      },
      {
        label: 'Zone 3',
        title: 'In-Row / Rack',
        icon: 'table_rows',
        description: 'In-Row localized units, Rear Door Heat Exchangers (RDHx), and closed-loop cabinet cooling.'
      },
      {
        label: 'Zone 4',
        title: 'Fluid Controls',
        icon: 'water_drop',
        description: 'Coolant Distribution Units (CDUs), smart manifold valves, and fluid leak detection loops.'
      }
    ],
    projects: [
      {
        title: 'Nxtra Data Center, Pune',
        cost: '₹58.40 Cr',
        description: 'Designed and commissioned high-efficiency perimeter chilled water systems with smart aisle containment.'
      },
      {
        title: 'Adani Data Center, Chennai',
        cost: '₹82.60 Cr',
        description: 'Full-scale row cooling integration and primary chilled water loop pumping infrastructure.'
      },
      {
        title: 'SBI Global IT Center',
        cost: '₹26.50 Cr',
        description: 'Overhaul of critical room cooling systems utilizing energy-saving EC fans and smart controls.'
      },
      {
        title: 'IIT Bombay Supercomputer Lab',
        cost: '₹14.20 Cr',
        description: 'State-of-the-art direct liquid cooling integration for high-performance AI GPU nodes.'
      }
    ]
  },
  'racks-enclosures': {
    title: 'Racks & Physical Enclosures',
    heroTitle: 'Structural Physical Foundation.',
    heroDescription: 'Our server frames and industrial cabinets provide the physical security, organization, and airflow optimization needed to house critical systems. Built for extreme load capabilities and rugged environmental resistance, we safeguard your hardware.',
    stats: [
      { label: 'Cabinet IP Ratings', value: 'IP54 - IP66' },
      { label: 'Load Support', value: '2,000 kg' }
    ],
    capabilities: [
      {
        number: '01',
        title: 'Open-Frame & Server Racks',
        items: [
          { boldText: 'Supply modular 42U/48U racks', restText: 'optimized for high-volume structured cabling.' },
          { boldText: 'Provide ultra-heavy-duty frames', restText: 'suitable for dense server stacks and blade arrays.' }
        ]
      },
      {
        number: '02',
        title: 'Industrial Protective Cabinets',
        items: [
          { boldText: 'Fabricate IP-rated enclosures', restText: 'designed to keep out moisture, dust, and particulate matter.' },
          { boldText: 'Deploy corrosion-resistant materials', restText: 'for marine, outdoor, and heavy industrial settings.' }
        ]
      },
      {
        number: '03',
        title: 'Micro Data Center Pods',
        items: [
          { boldText: 'Design self-contained edge pods', restText: 'equipped with pre-integrated mini UPS and cooling.' },
          { boldText: 'Standardize edge deployments', restText: 'across warehouses, transportation depots, and smart nodes.' }
        ]
      },
      {
        number: '04',
        title: 'Physical Security & Access',
        items: [
          { boldText: 'Integrate biometric handles', restText: 'and RFID locking mechanisms on server cabinets.' },
          { boldText: 'Deploy electronic latch tracking', restText: 'that alerts building security (BMS) of unauthorized access.' }
        ]
      }
    ],
    zones: [
      {
        label: 'Zone 1',
        title: 'Server Frames',
        icon: 'grid_view',
        description: 'Standard 42U-48U network frames, vertical cable managers, and sliding rail assemblies.'
      },
      {
        label: 'Zone 2',
        title: 'Tough Enclosures',
        icon: 'shield',
        description: 'IP-rated steel and aluminum cabinets, dust-proof panels, and outdoor distribution kiosks.'
      },
      {
        label: 'Zone 3',
        title: 'Edge Pods',
        icon: 'smart_toy',
        description: 'Integrated micro data center enclosures, sound-proof racks, and outdoor utility enclosures.'
      },
      {
        label: 'Zone 4',
        title: 'Locking Systems',
        icon: 'lock',
        description: 'Smart biometric and RFID handles, remote latch release mechanisms, and door open/closed sensors.'
      }
    ],
    projects: [
      {
        title: 'Reliance Industrial Park, Jamnagar',
        cost: '₹41.50 Cr',
        description: 'IP65-certified outdoor electrical panels and cabinets designed for highly corrosive industrial environments.'
      },
      {
        title: 'Tata Steel Plant, Kalinganagar',
        cost: '₹29.10 Cr',
        description: 'Heat-insulated and dust-protected industrial control enclosures deployed near furnace floors.'
      },
      {
        title: 'Surat Smart City Command Center',
        cost: '₹12.80 Cr',
        description: 'Modular high-density server rack infrastructure, integrated ladder racks, and basket routing.'
      },
      {
        title: 'Vadodara Transit Node',
        cost: '₹8.40 Cr',
        description: 'Prefabricated micro-data center pods at trackside substations supporting signaling systems.'
      }
    ]
  },
  'monitoring-management': {
    title: 'Monitoring & Intelligent Infrastructure',
    heroTitle: 'Unified Operational Visibility.',
    heroDescription: 'Arihantaa Powertech bridges hardware and software to create responsive, automated facilities. Through enterprise-grade DCIM, real-time sensor networks, and out-of-band management, we provide total oversight.',
    stats: [
      { label: 'Monitored Data Nodes', value: '100k+ Live' },
      { label: 'Emergency Alert Lag', value: '< 50ms' }
    ],
    capabilities: [
      {
        number: '01',
        title: 'DCIM Suite Deployment',
        items: [
          { boldText: 'Deploy comprehensive DCIM systems', restText: 'for unified tracking of power usage, cooling efficiency, and space.' },
          { boldText: 'Implement AI capacity planning', restText: 'to predict battery exhaustion and cooling load spikes.' }
        ]
      },
      {
        number: '02',
        title: 'Smart PDU & Sensor Webs',
        items: [
          { boldText: 'Configure outlet-level switched PDUs', restText: 'for remote server power cycling and granular billing.' },
          { boldText: 'Install environmental sensor chains', restText: 'for real-time monitoring of cabinet intake temperature and leaks.' }
        ]
      },
      {
        number: '03',
        title: 'SCADA & BMS Integration',
        items: [
          { boldText: 'Interface diverse plant machinery', restText: 'into central SCADA platforms for direct control.' },
          { boldText: 'Orchestrate facility response protocols', restText: 'linking fire suppression, HVAC, and power routing.' }
        ]
      },
      {
        number: '04',
        title: 'Out-of-Band & Console Access',
        items: [
          { boldText: 'Deploy secure KVM console switches', restText: 'to allow remote BIOS-level management of computing nodes.' },
          { boldText: 'Set up cellular out-of-band networks', restText: 'to ensure control path accessibility even during core network dropouts.' }
        ]
      }
    ],
    zones: [
      {
        label: 'Zone 1',
        title: 'Analytics Software',
        icon: 'analytics',
        description: 'DCIM dashboard suites, PUE tracking tools, and automated service SLA reports.'
      },
      {
        label: 'Zone 2',
        title: 'Intelligent Hardware',
        icon: 'developer_board',
        description: 'Switched/metered PDUs, automated transfer control units, and KVM console switches.'
      },
      {
        label: 'Zone 3',
        title: 'Sensors Grid',
        icon: 'sensors',
        description: 'Intelligent temperature, humidity, airflow, static pressure, and liquid leak sensors.'
      },
      {
        label: 'Zone 4',
        title: 'BMS controllers',
        icon: 'settings_input_component',
        description: 'Remote Terminal Units (RTUs), programmable logic controllers (PLCs), and Modbus/BACnet interfaces.'
      }
    ],
    projects: [
      {
        title: 'HDFC Bank Data Hub, Mumbai',
        cost: '₹31.40 Cr',
        description: 'Integrated enterprise DCIM suite monitoring over 1,200 server racks and auto-routing power failures.'
      },
      {
        title: 'Mundra Port Terminal Node',
        cost: '₹22.10 Cr',
        description: 'High-security out-of-band console server network protecting marine container routing servers.'
      },
      {
        title: 'Torrent Power Substation',
        cost: '₹19.60 Cr',
        description: 'Deploying high-reliability SCADA remote terminal units for automated high-voltage switchgear monitoring.'
      },
      {
        title: 'ONGC Corporate Office, Delhi',
        cost: '₹15.20 Cr',
        description: 'Complete Building Management System (BMS) orchestrating central HVAC systems and access control gates.'
      }
    ]
  }
};

export const sectorExperts = [
  {
    name: 'Kaushik D. Jariwala',
    role: 'Managing Partner',
    avatar: 'person'
  },
  {
    name: 'Lilam K. Lalka',
    role: 'Technical Partner',
    avatar: 'person'
  }
];
