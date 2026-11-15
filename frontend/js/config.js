// =====================================================================
// KSRTC Local Bus Tracking System — Frontend Configuration
// =====================================================================

// Backend API Base Address
const API_BASE_URL = window.location.origin + '/api';

// Supabase Public Client Credentials
const SUPABASE_CONFIG = {
    url: 'https://qsmzvkyloxkvxfedpfab.supabase.co',
    anonKey: 'sb_publishable_iCJl5xOjQYvKkmn91nc9FA_Y0x7Tw_b'
};

// Hubballi–Dharwad Geographical Map Defaults
const MAP_CONFIG = {
    center: [15.4200, 75.0800], // Midpoint between Hubballi and Dharwad on Old PB Road
    defaultZoom: 12,
    minZoom: 10,
    maxZoom: 18,
    bounds: [
        [15.1500, 74.9500], // Southwest boundary
        [15.5500, 75.3000]  // Northeast boundary
    ],
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | KSRTC Local Fleet'
};

// Expose globally
window.KSRTC_CONFIG = {
    API_BASE_URL,
    SUPABASE_CONFIG,
    MAP_CONFIG
};
