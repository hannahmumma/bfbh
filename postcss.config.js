const cssnano = require("cssnano");

module.exports = {
    plugins: [
        require("autoprefixer"),
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("postcss-preset-env"),
        require("postcss-sorting"),
        require("tailwindcss"),
        cssnano({
            preset: "default",
        }),
    ],
};
