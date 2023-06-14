module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-styling',
    'themeprovider-storybook/register',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: '@storybook/react-webpack5',
};
