// ─── Data Schema Constants ──────────────────────────────────────────────────
// Single source of truth for all category IDs, human-readable names, and icons.
// When WordPress backend integration happens, this file becomes the
// field-mapping layer between WP REST API responses and frontend data shapes.
// ────────────────────────────────────────────────────────────────────────────

// ─── Product Categories ─────────────────────────────────────────────────────
export const PRODUCT_CATEGORIES = {
  'ups':                    { name: 'Uninterruptible Power Supplies (UPS)', icon: 'battery_charging_full', sector: 'Critical Power' },
  'lt-tta-panel':           { name: 'L&T TTA Panel',                       icon: 'electric_bolt',         sector: 'Critical Power' },
  'lucy-rmu':               { name: 'Lucy Electric RMU',                   icon: 'hub',                   sector: 'Critical Power' },
  'lucy-css':               { name: 'Lucy Electric CSS',                   icon: 'domain',                sector: 'Critical Power' },
  'enclosure-cooling':      { name: 'Enclosure Cooling',                   icon: 'mode_cool',             sector: 'Thermal Management' },
  'integrated-solutions':   { name: 'Integrated Solutions',                icon: 'developer_board',       sector: 'Racks & Enclosures' },
  'digital-infrastructure': { name: 'Digital Infrastructure Solutions',    icon: 'monitoring',            sector: 'Monitoring & Management' },
  'capital-goods':          { name: 'Capital Goods & Solutions',           icon: 'settings',              sector: 'Capital Goods' },
};

export const SERVICE_CATEGORIES = {
  'vertiv-partner':    { name: 'Vertiv Channel Partner',      icon: 'verified' },
  'capital-goods':     { name: 'Capital Goods Supply',        icon: 'settings' },
  'epc-mepf':          { name: 'EPC & MEPF Solutions',        icon: 'engineering' },
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
