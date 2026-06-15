// ─── Data Schema Constants ──────────────────────────────────────────────────
// Single source of truth for all category IDs, human-readable names, and icons.
// When WordPress backend integration happens, this file becomes the
// field-mapping layer between WP REST API responses and frontend data shapes.
// ────────────────────────────────────────────────────────────────────────────

// ─── Product Categories ─────────────────────────────────────────────────────
export const PRODUCT_CATEGORIES = {
  'ups':                    { name: 'Uninterruptible Power Supplies (UPS)', icon: 'battery_charging_full', sector: 'Critical Power' },
  'dc-power':               { name: 'DC Power Systems',                    icon: 'bolt',                  sector: 'Critical Power' },
  'power-distribution':     { name: 'Power Distribution',                  icon: 'grid_view',             sector: 'Critical Power' },
  'industrial-ac-dc':       { name: 'Industrial AC & DC Systems',          icon: 'electrical_services',   sector: 'Critical Power' },
  'enclosure-cooling':      { name: 'Enclosure Cooling',                   icon: 'mode_cool',             sector: 'Thermal Management' },
  'liquid-cooling':         { name: 'Liquid Cooling Solutions',            icon: 'ac_unit',               sector: 'Thermal Management' },
  'integrated-solutions':   { name: 'Integrated Solutions',                icon: 'developer_board',       sector: 'Racks & Enclosures' },
  'digital-infrastructure': { name: 'Digital Infrastructure Solutions',    icon: 'monitoring',            sector: 'Monitoring & Management' },
};

// ─── Service Categories ─────────────────────────────────────────────────────
export const SERVICE_CATEGORIES = {
  'spare-parts':       { name: 'Spare Parts & Management',    icon: 'settings' },
  'preventive-maint':  { name: 'Preventive Maintenance',      icon: 'verified_user' },
  'performance-opt':   { name: 'Performance Optimization',    icon: 'speed' },
  'remote-services':   { name: 'Remote Services',             icon: 'support_agent' },
  'project-commission':{ name: 'Project & Commissioning',     icon: 'engineering' },
  'industrial-maint':  { name: 'Industrial Maintenance',      icon: 'build' },
  'ups-battery':       { name: 'UPS & Battery Services',      icon: 'battery_charging_full' },
  'generator':         { name: 'Generator & Switchgear',      icon: 'bolt' },
  'liquid-cooling':    { name: 'Liquid Cooling Services',     icon: 'ac_unit' },
  'mepf':              { name: 'MEPF Consultancy',            icon: 'architecture' },
};

// ─── Sector Definitions ─────────────────────────────────────────────────────
export const SECTORS = {
  'critical-power':        { name: 'Critical Power',           icon: 'bolt' },
  'thermal-management':    { name: 'Thermal Management',       icon: 'thermostat' },
  'racks-enclosures':      { name: 'Racks & Enclosures',       icon: 'dns' },
  'monitoring-management': { name: 'Monitoring & Management',  icon: 'monitor_heart' },
};

// ─── Search Type Metadata ───────────────────────────────────────────────────
export const SEARCH_TYPE_META = {
  product:  { label: 'Product',  icon: 'category' },
  service:  { label: 'Service',  icon: 'build' },
  sector:   { label: 'Sector',   icon: 'hub' },
  project:  { label: 'Project',  icon: 'apartment' },
};

// ─── Helper: get product category name by ID ────────────────────────────────
export function getProductCategoryName(categoryId) {
  return PRODUCT_CATEGORIES[categoryId]?.name || categoryId;
}

// ─── Helper: get service category name by ID ────────────────────────────────
export function getServiceCategoryName(categoryId) {
  return SERVICE_CATEGORIES[categoryId]?.name || categoryId;
}

// ─── Helper: get category icon by ID (product or service) ───────────────────
export function getCategoryIcon(categoryId) {
  return PRODUCT_CATEGORIES[categoryId]?.icon
    || SERVICE_CATEGORIES[categoryId]?.icon
    || 'settings_input_component';
}
