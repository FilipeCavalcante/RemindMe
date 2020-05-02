module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'plugin:prettier/recommended',
        'prettier/standard',
    ],
    plugins: ['prettier'],
    rules: {
        'object-curly-spacing': 0,
        'no-inline-styles': 0,
    },
};
