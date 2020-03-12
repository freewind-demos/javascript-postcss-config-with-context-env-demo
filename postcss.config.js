module.exports = (context) => {
  return {
    plugins: [
      require('precss'),
      ...(context.env === 'hash' ? [
        require('postcss-hash')({
          algorithm: 'md5',
        })
      ] : [])
    ]
  }
}
