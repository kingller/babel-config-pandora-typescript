module.exports = {
    presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                // https://babeljs.io/docs/en/babel-preset-env
                corejs: '3.22.5',
                useBuiltIns: 'entry',
            },
        ],
        'mobx',
    ],
    plugins: [
        ['@babel/plugin-transform-typescript', { allowNamespaces: true }],

        // Stage 0
        '@babel/plugin-proposal-function-bind',

        // Stage 1
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-logical-assignment-operators',
        ['@babel/plugin-proposal-optional-chaining', { loose: false }],
        ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
        ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
        '@babel/plugin-proposal-do-expressions',

        // Stage 2
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-function-sent',
        '@babel/plugin-proposal-export-namespace-from',
        // '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-proposal-object-rest-spread',

        // Stage 3
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
        // '@babel/plugin-proposal-json-strings',

        // Other
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-modules-commonjs',
        'jsx-control-statements',
    ],
};
