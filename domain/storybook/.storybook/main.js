module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../apps/**/src/components/**/*.stories.mdx",
    "../../../apps/**/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../features/**/src/components/**/*.stories.mdx",
    "../../../features/**/src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../../../packages/**/components/**/stories/*.stories.mdx",
    "../../../packages/**/components/**/stories/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    { name: "@storybook/addon-essentials", options: { actions: false } },
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
  ],
  framework: "@storybook/react",
  features: {
    interactionsDebugger: true,
    features: { buildStoriesJson: true },
  },
};
