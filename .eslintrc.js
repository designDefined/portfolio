module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["airbnb", "prettier"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
