module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! application.js <%= grunt.template.today("yyyy-mm-dd hh:MM") %> */\n',
      },
      build: {
        src: 'ember/assets/application.js',
        dest: 'public/assets/application.min.js'
      }
    },

    cssmin: {
      dist: {
        files: {
          'public/assets/application.min.css': [
            'ember/assets/application.css',
          ]
        },
        options: {
          keepSpecialComments: 0,
          report: 'min'
        }
      }
    },

    watch: {
      application: {
        files: ['ember/assets/application.js', 'ember/assets/application.css'],
        tasks: ['compress']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-watch');

  // Listen for events when files are modified
  grunt.event.on('watch', function(action, filepath) {
    grunt.log.writeln(filepath + ' has ' + action);
    // console.log('mudou');
  });

  // Default task(s).
  grunt.registerTask('default', ['watch']);

  grunt.registerTask('compress', ['cssmin','uglify']);
};
