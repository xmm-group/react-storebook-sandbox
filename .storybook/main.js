module.exports = {
  "stories": [
    "../src/_common/ui/**/*.stories.mdx",
    "../src/_common/ui/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ]
}