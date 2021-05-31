module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      ['styled-components', { ssr: true, displayName: true }],
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      ['@babel/plugin-proposal-optional-chaining'],
    ],
  };
};
