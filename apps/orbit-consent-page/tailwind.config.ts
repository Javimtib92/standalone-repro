import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss/types/config";

const config: Config = {
  safelist: [
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
    "col-span-1",
    "col-span-2",
    "col-span-3",
    "col-span-4",
    "col-span-5",
    "col-span-6",
    "col-span-7",
    "col-span-8",
    "col-span-9",
    "col-span-10",
    "col-span-11",
    "col-span-12",
  ],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@ucbngw/ui/**/*.{tsx,jsx,ts,js}",
    "./node_modules/@ucbngw/ui-*/dist/**/*.{js,mjs,ts,tsx,html}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#3A3D41", // gray-600
            "--tw-prose-headings": "#3A3D41", // gray-600
            "--tw-prose-lead": "#3A3D41", // gray-600
            "--tw-prose-links": "#001489", // primary-600
            "--tw-prose-bold": "#3A3D41", // gray-600
          },
        },
        fullWidth: {
          css: {
            maxWidth: "100%",
          },
        },
      },
      maxWidth: { lg: "1216px", xl: "1440px" },
    },
    fontFamily: {
      sans: ["museo-sans", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      regular: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    fontSize: {
      "display-2xl": [
        "4.5rem",
        {
          lineHeight: "5.625rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-xl": [
        "3.75rem",
        {
          lineHeight: "4.5rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-lg": [
        "3rem",
        {
          lineHeight: "3.75rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-md": [
        "2.25rem",
        {
          lineHeight: "2.75rem",
          letterSpacing: "-0.02em",
        },
      ],
      "display-sm": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
          letterSpacing: "normal",
        },
      ],
      "display-xs": [
        "1.5rem",
        {
          lineHeight: "2rem",
          letterSpacing: "normal",
        },
      ],
      "copy-xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          letterSpacing: "normal",
        },
      ],
      "copy-lg": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "normal",
        },
      ],
      "copy-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "normal",
        },
      ],
      "copy-sm": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "normal",
        },
      ],
      "copy-xs": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          letterSpacing: "normal",
        },
      ],
      "text-xl": [
        "1.25rem",
        {
          lineHeight: "1.875rem",
          letterSpacing: "normal",
          fontWeight: "300",
        },
      ],
      "text-lg": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "normal",
        },
      ],
      "text-md": [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "normal",
        },
      ],
      "text-sm": [
        "0.875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "normal",
        },
      ],
      "text-xs": [
        "0.75rem",
        {
          lineHeight: "1.125rem",
          letterSpacing: "normal",
        },
      ],
    },
    lineHeight: { ...defaultTheme.lineHeight },
    colors: {
      ucbPrimaryToken: "hsl(var(--color-bg-primary) / <alpha-value>)",
      base: {
        white: "#ffffff",
        black: "#000000",
      },
      gray: {
        25: "#F8F9FA",
        50: "#F3F4F4",
        100: "#E8E9EA",
        200: "#DCDEDF",
        300: "#D0D3D4",
        400: "#697078",
        500: "#4B4F54",
        600: "#3A3D41",
        700: "#303336",
        800: "#26292B",
        900: "#131416",
      },
      primary: {
        25: "#F5F7FF",
        50: "#ECEFFF",
        100: "#DBE2F6",
        200: "#BFC4E1",
        300: "#8089C4",
        400: "#616FC1",
        500: "#404FA6",
        600: "#001489",
        700: "#1F2C72",
        800: "#1E2653",
        900: "#00072E",
      },
      error: {
        25: "#FFFBFA",
        50: "#FEF3F2",
        100: "#FEE4E2",
        200: "#FECDCA",
        300: "#FDA29B",
        400: "#F97066",
        500: "#F04438",
        600: "#D92D20",
        700: "#B42318",
        800: "#912018",
        900: "#7A271A",
      },
      warning: {
        25: "#FFFCF5",
        50: "#FFFAEB",
        100: "#FEF0C7",
        200: "#FEDF89",
        300: "#FEC84B",
        400: "#FDB022",
        500: "#F79009",
        600: "#DC6803",
        700: "#B54708",
        800: "#93370D",
        900: "#7A2E0E",
      },
      success: {
        25: "#F6FEF9",
        50: "#ECFDF3",
        100: "#D1FADF",
        200: "#A6F4C5",
        300: "#6CE9A6",
        400: "#32D583",
        500: "#12B76A",
        600: "#039855",
        700: "#027A48",
        800: "#05603A",
        900: "#054F31",
      },
      secondary: {
        salmon: {
          25: "#FFFAFA",
          50: "#FDE9E8",
          100: "#F4DAD8",
          200: "#EDCDCB",
          300: "#E4BEBC",
          400: "#DEB0AE",
          500: "#CE8986",
          600: "#BD625E",
          700: "#A84544",
          800: "#8F3231",
          900: "#81201F",
        },
        marigold: {
          25: "#FFF9F2",
          50: "#FBEEDF",
          100: "#F8E7D2",
          200: "#F1DDC0",
          300: "#F0D1AF",
          400: "#F3CD66",
          500: "#F1B466",
          600: "#ED9B33",
          700: "#D88D2E",
          800: "#B0752A",
          900: "#996017",
        },
        lavender: {
          25: "#FBF7FE",
          50: "#F7F1FB",
          100: "#F0E3F6",
          200: "#EBDCF3",
          300: "#DECCE8",
          400: "#CBB9D5",
          500: "#B296C1",
          600: "#9873AC",
          700: "#9269A9",
          800: "#9067A6",
          900: "#784E90",
        },
        lightlavender: {
          25: "#FFFAFD",
          50: "#FBF4F9",
          100: "#F3EBF3,",
          200: "#F3E9F0",
          300: "#EFE5EC",
          400: "#E9DFE6",
          500: "#DED0DA",
          600: "#D3C0CD",
          700: "#BA93AE",
          800: "#8C5B94",
          900: "#784E90",
        },
        skyblue: {
          25: "#F6FDFF",
          50: "#F1F7F9",
          100: "#EBF3F6,",
          200: "#D7EBF3",
          300: "#CAE8F4",
          400: "#B8E2F4",
          500: "#94D3EE",
          600: "#71C5E8",
          700: "#41A5CF",
          800: "#2182B5",
          900: "#005683",
        },
        teal: {
          25: "#DAEEF5",
          50: "#D2E9F1",
          100: "#C9E1EA,",
          200: "#BFD9E2",
          300: "#B4D0DA",
          400: "#9CBFCB",
          500: "#3A9FB1",
          600: "#387F97",
          700: "#26748E",
          800: "#11638E",
          900: "#005683",
        },
        turquoise: {
          25: "#F5FFFE",
          50: "#EBFBF9",
          100: "#DCF3F0,",
          200: "#D6F2EE",
          300: "#C6EBE5",
          400: "#B5E4DD",
          500: "#90D7CB",
          600: "#6BCABA",
          700: "#5BC6B4",
          800: "#1E9885",
          900: "#00816D",
        },
      },
    },
    borderRadius: { ...defaultTheme.borderRadius },
    spacing: {
      ...defaultTheme.spacing,
    },
  },
  corePlugins: {
    preflight: true,
  },
};
export default config;
