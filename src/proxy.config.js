const proxy = [
    {
      context: '/',
      target: 'http://localhost:6060',
      pathRewrite: {'^/' : ''}
    }
  ];
  module.exports = proxy;