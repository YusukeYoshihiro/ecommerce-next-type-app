module.exports = {
    plugins: {
        "postcss-import": {},
        "tailwindcss/nesting": "postcss-nesting",
        tailwindcss: {},
        autoprefixer: {},
    },
}

// module.exports = {
//     plugins: [
//         "tailwindcss",
//         "postcss-nesting",
//         "autoprefixer"
//     ],
// }

/**
 * just for testing
 */
// module.exports = {
//     plugins: [
//         require("tailwindcss"),
//         require("autoprefixer"),
//         // require('postcss-nested'),
//     ],
// }


