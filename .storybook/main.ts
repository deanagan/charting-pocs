// .storybook/main.js or main.ts
module.exports = {
  stories: ['../src/**/stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  features: {
    storyStoreV7: true,
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
