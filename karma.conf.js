'use strict';

module.exports = function (config) {
    config.set({

        files: [
	        './node_modules/phantomjs-polyfill/bind-polyfill.js',
	        {pattern: 'app/!(jspm_packages)**/*.js', included: false}
        ],

        preprocessors: {
            'app/!(jspm_packages)/**/!(*.spec).js': ['babel', 'coverage']
        },

	    jspm: {
		    config: "jspm.config.js",
		    loadFiles: [
			    'app/!(jspm_packages)/**/*.spec.js'
		    ],
		    serveFiles: [
			    'app/**/!(*spec).js'
		    ],
		    paths: {
			    "github:*": "/base/app/jspm_packages/github/*",
			    "npm:*": "/base/app/jspm_packages/npm/*",
			    'app/*': '/base/app/*'
		    }
	    },

        autoWatch: true,

        frameworks: ['jasmine', 'jspm'],

        browsers: ['PhantomJS'],

        reporters: ['progress', 'coverage', 'junit'],

        phantomjsLauncher: {
            exitOnResourceError: true
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            }
        },

        coverageReporter: {
            instrumenters: {isparta: require('isparta')},
            instrumenter: {
                '/app/**/*.js': 'isparta'
            },
            reporters: [
                {type: 'html', dir: 'test_results/coverage/', subdir: 'html'},
                {type: 'text-summary'},
                {type: 'cobertura', dir: 'test_results/coverage/', subdir: 'cobertura'},
                {type: 'json', dir: 'test_results/coverage/', subdir: 'json'},
                {type: 'lcov', dir: 'test_results/coverage/', subdir: 'lcov'}
            ]
        },

        junitReporter: {
            outputDir: 'test_results/unit',
            suite: 'unit'
        },

	    logLevel: config.LOG_DEBUG
    });
};