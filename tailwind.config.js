/**
 * Tailwind config
 * Usage comments are ABOVE each property
 * @see postcss.config.js for additional configs
 */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

const commonPixelSizes = null;

module.exports = {
    // purge
    content: ["./assets/dev/**/*.{css, js}", "./views/**/*.{twig, html}"],
    mode: "jit",
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/aspect-ratio"),
        plugin(({ addComponents, theme }) => {
            addComponents({
                ".container": {
                    maxWidth: theme("maxWidth.1440"),
                    marginTop: theme("margin.0"),
                    marginRight: theme("margin.auto"),
                    marginBottom: theme("margin.0"),
                    marginLeft: theme("margin.auto"),
                    width: "100%",
                },
            });
        }),
    ],
    theme: {
        // extend default tailwind theme config
        extend: {
            // bg-{ value } bg-gray
            backgroundColor: (defaultTheme) => defaultTheme("colors"),
            // rounded-{ value } rounded-0, use `rounded` for default
            borderRadius: {
                0: "0",
                2: "2px",
                DEFAULT: "4px",
                6: "6px",
                8: "8px",
                10: "10px",
                16: "16px",
            },
            // border-{ value } border-1
            borderWidth: {
                0: "0",
                1: "1px",
                2: "2px",
                4: "4px",
                6: "6px",
                8: "8px",
                10: "10px",
            },
            // use `shadow` for default
            boxShadow: {
                DEFAULT:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            },
            // text-{ value }, bg-gray
            colors: {
                "light-fuchsia": "#de1898",
                "royal-fuchsia": "#ca2c92",
                "dark-fuchsia": "#8b1e65",

                "light-pink": "#fae8ef",
                "light-gold": "#FFED8A",
                "metalic-gold": "#d4af37",

                turquoise: "#3accdd",
                "sky-blue": "#329ae5",

                "light-gray": "#f5f5f5",
                gray: "#dddddd",
                "dark-gray": "#7f7f7f",

                "blue-black": "#2d2d39",
            },
            // use for multiple objects - use for font sizes, line heights
            commonPixelSizes: {
                12: "12px",
                14: "14px",
                16: "16px",
                18: "18px",
                20: "20px",
                22: "22px",
                24: "24px",
                26: "26px",
                28: "28px",
                30: "30px",
                32: "32px",
                34: "34px",
                36: "36px",
                38: "38px",
                40: "40px",
                42: "42px",
                44: "44px",
                46: "46px",
                48: "48px",
                50: "50px",
                52: "52px",
                54: "54px",
                56: "56px",
                58: "58px",
                60: "60px",
            },
            // font-sans, font-serif, font-mono
            fontFamily: {
                sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
                serif: [
                    "Vladimir Script Regular",
                    ...defaultTheme.fontFamily.serif,
                ],
                mono: [
                    "Walbaum Display Regular",
                    ...defaultTheme.fontFamily.mono,
                ],
            },
            // text-{ value }, text-16
            fontSize: (defaultTheme) => defaultTheme("commonPixelSizes"),
            // font-{ value }, font-100
            fontWeight: {
                100: "100", // thin
                200: "200", // extra light
                300: "300", // light
                400: "400", // normal
                500: "500", // medium
                600: "600", // semibold
                700: "700", // bold
                800: "800", // extra bold
                900: "900", // black
            },
            // gap-{ value }
            gap: (defaultTheme) => defaultTheme("commonPixelSizes"),
            // leading-{ value }, leading-18
            lineHeight: (defaultTheme) => defaultTheme("commonPixelSizes"),
            // m-{ value }, m-20
            margin: (defaultTheme) => defaultTheme("spacing"),
            // max-w-{ value }, max-w-1440
            maxWidth: {
                auto: "auto",
                1440: "1440px",
            },
            // p-{ value }, p-20
            padding: (defaultTheme) => defaultTheme("spacing"),
            // screen-320
            screens: {
                xxs: "320px",
                xs: "375px",
                sm: "480px",
                md: "768px",
                lg: "1024px",
                xl: "1240px",
                xxl: "1600px",
            },
            // px -> REM
            spacing: {
                px: "1px",
                0: "0",
                2: "0.125rem",
                4: "0.25rem",
                6: "0.375rem",
                8: "0.5rem",
                10: "0.625rem",
                12: "0.75rem",
                14: "0.875rem",
                16: "1rem",
                18: "1.125rem",
                20: "1.25rem",
                22: "1.375rem",
                24: "1.5rem",
                28: "1.75rem",
                32: "2rem",
                36: "2.25rem",
                40: "2.5rem",
                44: "2.75rem",
                48: "3rem",
                52: "3.25rem",
                56: "3.5rem",
                60: "3.75rem",
                64: "4rem",
                68: "4.25rem",
                72: "4.5rem",
                76: "4.75rem",
                80: "5rem",
                88: "5.5rem",
                96: "6rem",
                100: "6.25rem",
                "9/20": "45%",
            },
        },
    },
    corePlugins: {
        container: false,
    },
};
