module.exports = {
  plugins: {
    "@fullhuman/postcss-purgecss": {
      content: [
        "./assets/js/*.js",
        "./content/*.md",
        "./layouts/**/*.html",
        "./static/js/*.js",
        "./resources/**/*.content"
      ],
      safelist: [
        "arrow",
        "tooltip",
        "tooltip-arrow",
        "tooltip-inner",
        "webmentions",
      ],
      blocklist: [
        "btn-group"
      ],
    },
  },
};
