module.exports = function developmentStyleLoaderFactory() {
    return {
        test: /\.(css|less)$/,
        loaders: ['style', 'css', 'less']
    };
};
