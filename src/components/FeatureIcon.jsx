import React from 'react';

// Reusable SVG feature icons for product detail pages
// Each icon uses the page's accent color via the `color` prop

const icons = {
  // E-Commerce
  'product-catalog': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="8" y="6" width="32" height="36" rx="2" />
      <path d="M16 14h16M16 22h16M16 30h10" />
      <circle cx="34" cy="34" r="6" fill={c} opacity="0.2" />
      <path d="M31 34h6M34 31v6" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  'payment-gateway': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <path d="M6 20h36" />
      <rect x="12" y="28" width="8" height="4" rx="1" fill={c} opacity="0.25" />
    </svg>
  ),
  'inventory': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="8" y="8" width="14" height="14" rx="2" />
      <rect x="26" y="8" width="14" height="14" rx="2" />
      <rect x="8" y="26" width="14" height="14" rx="2" />
      <rect x="26" y="26" width="14" height="14" rx="2" fill={c} opacity="0.15" />
      <path d="M30 30l4 4 4-4" />
    </svg>
  ),
  'order-pipeline': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M12 8l-4 12h32l-4-12H12z" />
      <rect x="10" y="20" width="28" height="20" rx="2" />
      <path d="M20 28h8M24 24v8" stroke={c} strokeWidth="1.5" />
    </svg>
  ),
  'revenue-analytics': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="8" y="28" width="6" height="14" rx="1" fill={c} opacity="0.2" />
      <rect x="18" y="20" width="6" height="22" rx="1" fill={c} opacity="0.3" />
      <rect x="28" y="14" width="6" height="28" rx="1" fill={c} opacity="0.4" />
      <path d="M8 12l10 8 10-6 12 4" />
      <circle cx="38" cy="18" r="3" fill={c} opacity="0.5" />
    </svg>
  ),
  'customer-mgmt': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="24" cy="16" r="8" />
      <path d="M10 40c0-8 6-14 14-14s14 6 14 14" />
      <circle cx="36" cy="12" r="5" fill={c} opacity="0.2" />
      <circle cx="12" cy="12" r="5" fill={c} opacity="0.2" />
    </svg>
  ),

  // HR Management
  'employee-dir': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="24" cy="14" r="8" />
      <path d="M12 38c0-7 5-12 12-12s12 5 12 12" />
      <rect x="32" y="6" width="10" height="12" rx="1" fill={c} opacity="0.2" />
    </svg>
  ),
  'payroll': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="32" rx="3" />
      <path d="M24 16v16M20 20h8M18 28h12" />
      <circle cx="24" cy="24" r="10" fill={c} opacity="0.1" />
    </svg>
  ),
  'leave-mgmt': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="32" rx="3" />
      <path d="M8 18h32" />
      <circle cx="20" cy="28" r="4" fill={c} opacity="0.3" />
      <path d="M28 26l3 3 5-5" />
    </svg>
  ),
  'performance': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <polygon points="24,6 28,18 40,18 30,26 34,38 24,30 14,38 18,26 8,18 20,18" fill={c} opacity="0.15" />
      <polygon points="24,6 28,18 40,18 30,26 34,38 24,30 14,38 18,26 8,18 20,18" />
    </svg>
  ),
  'recruitment': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="20" cy="20" r="12" />
      <path d="M28 28l12 12" strokeWidth="2.5" />
      <circle cx="20" cy="16" r="4" fill={c} opacity="0.2" />
      <path d="M14 26c0-3 3-5 6-5s6 2 6 5" />
    </svg>
  ),
  'hr-analytics': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 6v18l12 10" />
      <path d="M24 24L12 34" fill={c} opacity="0.2" />
    </svg>
  ),

  // Booking Engine
  'smart-calendar': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="6" y="10" width="36" height="32" rx="3" />
      <path d="M6 20h36" />
      <path d="M16 6v8M32 6v8" />
      <rect x="14" y="26" width="8" height="6" rx="1" fill={c} opacity="0.3" />
      <rect x="26" y="26" width="8" height="6" rx="1" fill={c} opacity="0.15" />
    </svg>
  ),
  'notifications': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M24 4c-8 0-14 6-14 14v10l-4 6h36l-4-6V18c0-8-6-14-14-14z" />
      <path d="M20 38c0 2 2 4 4 4s4-2 4-4" />
      <circle cx="34" cy="10" r="5" fill={c} opacity="0.4" />
    </svg>
  ),
  'payment-integration': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="6" y="12" width="36" height="24" rx="3" />
      <path d="M6 20h36" />
      <circle cx="34" cy="30" r="4" fill={c} opacity="0.3" />
      <path d="M12 30h10" />
    </svg>
  ),
  'client-mgmt': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="18" cy="16" r="7" />
      <path d="M8 36c0-6 4-10 10-10s10 4 10 10" />
      <circle cx="34" cy="16" r="5" fill={c} opacity="0.2" />
      <path d="M28 34c0-4 3-8 6-8" />
    </svg>
  ),
  'booking-analytics': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M8 40L16 28L24 32L32 18L40 8" />
      <circle cx="32" cy="18" r="3" fill={c} opacity="0.3" />
      <path d="M8 40h32" />
    </svg>
  ),
  'embed-share': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M16 14L6 24l10 10" />
      <path d="M32 14l10 10-10 10" />
      <path d="M28 8L20 40" />
    </svg>
  ),

  // CRM
  'lead-pipeline': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="10" fill={c} opacity="0.15" />
      <circle cx="24" cy="24" r="4" fill={c} opacity="0.4" />
      <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
    </svg>
  ),
  'comm-hub': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M8 10h24v20H16l-8 6V10z" />
      <rect x="20" y="18" width="20" height="14" rx="2" fill={c} opacity="0.15" />
      <path d="M16 18h8M16 24h4" />
    </svg>
  ),
  'sales-analytics': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M8 40V20l8-4 8 8 8-12 8 6v22H8z" fill={c} opacity="0.1" />
      <path d="M8 20l8-4 8 8 8-12 8 6" />
      <path d="M8 40h32" />
    </svg>
  ),
  'contact-mgmt': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="10" y="6" width="28" height="36" rx="3" />
      <circle cx="24" cy="20" r="6" fill={c} opacity="0.2" />
      <path d="M16 34c0-4 4-7 8-7s8 3 8 7" />
      <path d="M16 12h16" />
    </svg>
  ),
  'deal-tracking': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M12 14h10v10H12z" fill={c} opacity="0.2" />
      <path d="M26 14h10v10H26z" fill={c} opacity="0.15" />
      <path d="M12 28h10v10H12z" fill={c} opacity="0.1" />
      <path d="M26 28h10v10H26z" fill={c} opacity="0.3" />
      <path d="M22 19h4M22 33h4M17 24v4M31 24v4" />
    </svg>
  ),
  'email-campaigns': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="6" y="10" width="36" height="28" rx="3" />
      <path d="M6 14l18 12 18-12" />
      <circle cx="36" cy="14" r="6" fill={c} opacity="0.3" />
    </svg>
  ),

  // AI Support Bot
  'intelligent-chat': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="8" y="8" width="32" height="24" rx="4" />
      <path d="M16 38l8-6h16" />
      <circle cx="18" cy="20" r="2" fill={c} opacity="0.5" />
      <circle cx="24" cy="20" r="2" fill={c} opacity="0.5" />
      <circle cx="30" cy="20" r="2" fill={c} opacity="0.5" />
    </svg>
  ),
  'document-analysis': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M12 6h16l10 10v26H12V6z" />
      <path d="M28 6v10h10" />
      <path d="M18 22h14M18 28h14M18 34h8" />
      <circle cx="36" cy="36" r="6" fill={c} opacity="0.2" />
    </svg>
  ),
  'auto-replies': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <path d="M6 24c0-10 8-18 18-18s18 8 18 18-8 18-18 18" />
      <path d="M24 14v12l8 4" />
      <path d="M6 36l6-6 6 6" fill={c} opacity="0.2" />
    </svg>
  ),
  'smart-recommend': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="24" cy="20" r="14" />
      <path d="M18 36h12v6H18v-6z" fill={c} opacity="0.2" />
      <path d="M24 12v10M20 18l4 4 4-4" />
      <circle cx="24" cy="20" r="6" fill={c} opacity="0.1" />
    </svg>
  ),
  'ai-analytics': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <rect x="6" y="6" width="36" height="28" rx="3" />
      <path d="M6 14h36" />
      <rect x="12" y="20" width="6" height="8" rx="1" fill={c} opacity="0.3" />
      <rect x="22" y="18" width="6" height="10" rx="1" fill={c} opacity="0.4" />
      <rect x="32" y="16" width="6" height="12" rx="1" fill={c} opacity="0.5" />
      <path d="M16 40h16" />
    </svg>
  ),
  'multi-channel': (c) => (
    <svg viewBox="0 0 48 48" fill="none" stroke={c} strokeWidth="1.5">
      <circle cx="24" cy="24" r="6" fill={c} opacity="0.3" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="36" cy="12" r="4" />
      <circle cx="12" cy="36" r="4" />
      <circle cx="36" cy="36" r="4" />
      <path d="M18 18l-4-4M30 18l4-4M18 30l-4 4M30 30l4 4" />
    </svg>
  ),
};

export default function FeatureIcon({ name, color = '#FF4D00' }) {
  const renderIcon = icons[name];
  if (!renderIcon) return <span style={{ fontSize: '2rem' }}>⚙</span>;
  return renderIcon(color);
}
