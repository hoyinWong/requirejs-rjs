({
    paths: {
        'jquery': './src/js/jquery',
        'entry': './src/js/entry',
        'math': './src/js/math',
        'demo': './src/js/demo'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    },
    name: 'entry',
    out: './src/entry-build.js'
});

