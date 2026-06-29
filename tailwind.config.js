import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "tertiary-container": "#007dad",
        "on-tertiary-fixed-variant": "#004c6b",
        "tertiary-fixed": "#c6e7ff",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#a73a00",
        "on-error": "#ffffff",
        "outline-variant": "#c8a698",
        "secondary-fixed": "#e5e2e1",
        "on-background": "#1a1c1c",
        "on-primary-fixed": "#370e00",
        "on-secondary": "#ffffff",
        "primary-fixed": "#ffdbce",
        "on-secondary-fixed-variant": "#474746",
        "on-tertiary-container": "#fcfcff",
        "inverse-primary": "#ffb599",
        "on-secondary-fixed": "#1c1b1b",
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#82cfff",
        "inverse-on-surface": "#f1f1f1",
        "secondary": "#5f5e5e",
        "on-surface-variant": "#584239",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-container": "#eeeeee",
        "surface-container-highest": "#e2e2e2",
        "surface": "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "primary-fixed-dim": "#ffb599",
        "on-tertiary": "#ffffff",
        "outline": "#8c7167",
        "on-primary": "#ffffff",
        "tertiary": "#006389",
        "surface-dim": "#dadada",
        "error": "#ba1a1a",
        "primary": "#a33800",
        "on-secondary-container": "#636262",
        "surface-container-high": "#e8e8e8",
        "surface-container-low": "#f3f3f3",
        "secondary-container": "#e2dfde",
        "on-surface": "#1a1c1c",
        "on-primary-fixed-variant": "#7f2a00",
        "inverse-surface": "#2f3131",
        "on-primary-container": "#fffbff",
        "primary-container": "#c84d12",
        "error-container": "#ffdad6",
        "surface-variant": "#e2e2e2",
        "on-tertiary-fixed": "#001e2d",
        "background": "#f9f9f9",
        "accent": "#E9652B",
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "spacing": {
        "overlap-offset": "-40px",
        "section-margin": "120px",
        "gutter": "32px",
        "container-max": "1440px"
      },
      "fontFamily": {
        "headline-lg": ["Montserrat", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "headline-md": ["Montserrat", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "display-xl": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline": ["Montserrat", "sans-serif"],
        "body": ["Inter", "sans-serif"]
      },
      "letterSpacing": {
        "tightest": "-0.04em",
        "tighter": "-0.02em",
        "eyebrow": "0.15em"
      },
      "fontSize": {
        "headline-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "label-caps": ["12px", {"lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600"}],
        "headline-md": ["32px", {"lineHeight": "1.2", "fontWeight": "600"}],
        "body-md": ["16px", {"lineHeight": "1.7", "fontWeight": "400"}],
        "display-xl": ["120px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}],
        "headline-lg-mobile": ["40px", {"lineHeight": "1.2", "fontWeight": "700"}],
        "body-lg": ["20px", {"lineHeight": "1.8", "fontWeight": "400"}]
      },
      "keyframes": {
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(233, 101, 43, 0.7)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 10px rgba(233, 101, 43, 0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(233, 101, 43, 0)" }
        }
      },
      "theme": {
      },
      "animation": {
        "marquee": "marquee 40s linear infinite",
        "pulse-ring": "pulse-ring 2s infinite"
      }
    },
  },
  plugins: [
    containerQueries
  ],
}
