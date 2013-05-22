'use strict';
module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      jade: {
        files: [
          'jade/{,*/}*.jade'
        ],
        tasks: ['jade']
      },
      compass: {
        files: [
          'doc/styles/scss/{,*/}*.scss'
        ],
        tasks: ['compass']
      }
    },
    jade: {
      html: {
        src: ['jade/*.jade'],
        dest: '',
        options: {
          client: false,
          compileDebug: true,
          pretty: true
        }
      }
    },
    compass: {
      options: {
        sassDir: 'doc/styles/scss',
        cssDir: 'doc/styles'
      },
      dist: {},
      server: {}
    },
    bower: {
      install: {
        options: {
          targetDir: './components'
//          layout: 'byType',
//          install: true,
//          verbose: false,
//          cleanTargetDir: false,
//          cleanBowerDir: false
        }
      }
    },
    coffee: {
      compile: {
        files: {
          'doc/app.js': 'doc/app.coffee'
        }
      }
    }

  });

  grunt.registerTask('build', [
    'bower',
    'compass',
    'jade'
  ]);

  grunt.renameTask('regarde', 'watch');
};
