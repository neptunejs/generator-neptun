'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the prime ' + chalk.red('generator-neptun react component') + ' generator!'
    ));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('src'),
      this.destinationPath('src')
    );
  },

  install: function () {
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
  }
});
