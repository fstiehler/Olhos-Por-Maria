const isProduction = process.env.REACT_APP_NODE_ENV === 'production';

module.exports = {
  styledComponents: {
    pure: true,
    meaninglessFileNames: ['index', 'style'],
    displayName: !isProduction,
  },
};
