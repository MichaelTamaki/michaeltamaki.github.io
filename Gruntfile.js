const sass = require('node-sass');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserSync: {
      bsFiles: {
        src: 'dist/*'
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './dist'
        }
      }
    },
    clean: ['dist/'],
    copy: {
      main: {
        src: 'node_modules/normalize.css/normalize.css',
        dest: 'dist/normalize.css'
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          removeComments: true
        },
        files: {
          'dist/index.html': 'src/html/index.html',
        }
      }
    },
    sass: {
      options: {
        implementation: sass,
        sourceMap: true,
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'dist/index.css': 'src/scss/index.scss'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['src/html/index.html'],
        tasks: ['htmlmin']
      },
      style: {
        files: ['src/scss/index.scss'],
        tasks: ['sass']
      },
    },
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['clean', 'copy', 'htmlmin', 'sass', 'browserSync', 'watch']);
  grunt.registerTask('build', ['clean', 'copy', 'htmlmin', 'sass'])
};
