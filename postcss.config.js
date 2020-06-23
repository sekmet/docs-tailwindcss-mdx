module.exports = {
  plugins: [
    //require("postcss-easy-import")({ prefix: "_" }),
    require("tailwindcss")("./tailwind.config.js"),
    require("cssnano")({
      discardComments: false, mergeRules: false
    }),
    //require("autoprefixer")({}),
    //require("tailwindcss")("./tailwind.config.js"),

  ]
};
