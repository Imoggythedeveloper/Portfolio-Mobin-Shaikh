import formsPlugin from '@tailwindcss/forms';
import containerQueriesPlugin from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "precision-blue": "#013A58",
        "primary-container": "#1b2b3a",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed-dim": "#d9c75f",
        "primary": "#051625",
        "safety-yellow": "#F2DF74",
        "clinical-white": "#FFFFFF",
        "on-secondary-fixed-variant": "#1b4b69",
        "error": "#ba1a1a",
        "primary-fixed": "#d3e4f8",
        "on-error-container": "#93000a",
        "tertiary": "#6b5f00",
        "error-container": "#ffdad6",
        "tertiary-container": "#bdac47",
        "surface-container-low": "#eff4ff",
        "on-secondary-container": "#34607f",
        "machine-gray": "#EFEFEF",
        "secondary-container": "#aed9fe",
        "inverse-surface": "#233144",
        "inverse-primary": "#b8c8dc",
        "secondary": "#376282",
        "on-tertiary-fixed": "#201c00",
        "surface-variant": "#d5e3fd",
        "on-tertiary-fixed-variant": "#514700",
        "on-tertiary": "#ffffff",
        "outline": "#74777c",
        "secondary-fixed-dim": "#a0cbf0",
        "on-primary-fixed-variant": "#384858",
        "inverse-on-surface": "#ebf1ff",
        "on-primary-fixed": "#0c1d2b",
        "secondary-fixed": "#cbe6ff",
        "industrial-navy": "#1B2B3A",
        "surface-container-highest": "#d5e3fd",
        "on-error": "#ffffff",
        "on-background": "#0d1c2f",
        "on-surface-variant": "#43474c",
        "on-primary": "#ffffff",
        "surface": "#f8f9ff",
        "surface-dim": "#ccdbf4",
        "on-primary-container": "#8292a5",
        "on-surface": "#0d1c2f",
        "primary-fixed-dim": "#b8c8dc",
        "surface-bright": "#f8f9ff",
        "background": "#f8f9ff",
        "surface-container-high": "#dde9ff",
        "surface-container": "#e6eeff",
        "surface-tint": "#506071",
        "on-tertiary-container": "#493f00",
        "on-secondary": "#ffffff",
        "outline-variant": "#c4c6cc",
        "on-secondary-fixed": "#001e30",
        "tertiary-fixed": "#f7e478"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "baseline": "4px",
        "margin-mobile": "8px",
        "margin-desktop": "32px",
        "gutter": "24px",
        "container-max": "1400px"
      },
      fontFamily: {
        "label-sm": [
          "JetBrains Mono",
          "monospace"
        ],
        "body-md": [
          "Inter",
          "sans-serif"
        ],
        "headline-lg-mobile": [
          "IBM Plex Sans",
          "sans-serif"
        ],
        "headline-lg": [
          "IBM Plex Sans",
          "sans-serif"
        ],
        "headline-md": [
          "IBM Plex Sans",
          "sans-serif"
        ],
        "body-lg": [
          "Inter",
          "sans-serif"
        ],
        "label-md": [
          "JetBrains Mono",
          "monospace"
        ]
      },
      fontSize: {
        "label-sm": [
          "12px",
          {
            "lineHeight": "1.4",
            "letterSpacing": "0.05em",
            "fontWeight": "500"
          }
        ],
        "body-md": [
          "16px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400"
          }
        ],
        "headline-lg-mobile": [
          "32px",
          {
            "lineHeight": "1.2",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "40px",
          {
            "lineHeight": "1.2",
            "letterSpacing": "-0.02em",
            "fontWeight": "600"
          }
        ],
        "headline-md": [
          "24px",
          {
            "lineHeight": "1.3",
            "fontWeight": "600"
          }
        ],
        "body-lg": [
          "18px",
          {
            "lineHeight": "1.6",
            "fontWeight": "400"
          }
        ],
        "label-md": [
          "14px",
          {
            "lineHeight": "1.4",
            "letterSpacing": "0.05em",
            "fontWeight": "500"
          }
        ]
      }
    },
  },
  plugins: [
    formsPlugin,
    containerQueriesPlugin,
  ],
};
