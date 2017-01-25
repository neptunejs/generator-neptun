'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
    initializing() {
        this.log(yosay(
            'Welcome to the prime ' + chalk.red('generator-neptun react component') + ' generator!'
        ));
    },

    default() {
        this.fs.copy(
            this.templatePath('./**'),
            this.destinationPath('.'),
            {
                globOptions: {
                    dot: true
                }
            }
        );

        this.composeWith(require.resolve('generator-node/generators/app'), {
            babel: false,
            boilerplate: false,
            projectRoot: './',
            skipInstall: true,
            gulp: false,
            travis: false,
            git: true,
            githubAccount: 'neptunjs',
            eslint: false,
            editorconfig: false
        });
    },


    install () {


        this.yarnInstall([
            'babel-core',
            'babel-loader',
            'babel-preset-env',
            'babel-preset-react',
            'eslint',
            'eslint-config-cheminfo',
            'eslint-plugin-no-only-tests',
            'eslint-plugin-react',
            'jest-cli',
            'npm-run-all',
            'react',
            'react-dom',
            'react-test-renderer',
            'webpack',
            'webpack-dev-server'
        ], {dev: true});

        this.yarnInstall([
            'react',
            'react-dom'
        ], {peer: true});
    }
});
