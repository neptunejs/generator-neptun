'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fs = require('fs');

module.exports = Generator.extend({
    initializing() {
        this.log(yosay(
            'Welcome to the prime ' + chalk.red('generator-neptun react component') + ' generator!'
        ));
    },

    default() {
        this.fs.copy(
            this.templatePath('./root/**'),
            this.destinationPath('.'),
            {
                globOptions: {
                    dot: true
                }
            }
        );

        this.fs.copy(
            this.templatePath('./package.template.json'),
            this.destinationPath('./package.json')
        );

        this.fs.copy(
            this.templatePath('./gitignore.template'),
            this.destinationPath('./.gitignore')
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
            'babel-cli',
            'babel-core',
            'babel-loader',
            'babel-preset-env',
            'babel-preset-react',
            'eslint',
            'eslint-config-cheminfo',
            'eslint-config-neptun-react',
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
    },

    end() {
        // remove generator-node's eslint config and dependencies
        const pkgPath = this.destinationPath('.', 'package.json');
        const pkg = JSON.parse(fs.readFileSync(pkgPath));
        delete pkg.eslintConfig;
        delete pkg.devDependencies['eslint-config-xo-space'];
        fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, '    '));

        // remove useless files
        fs.unlinkSync(this.destinationPath('.gitattributes'));
        fs.unlinkSync(this.destinationPath('.editorconfig'));
    }
});
