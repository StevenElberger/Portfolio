module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["dist"],
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'style.scss'
            }
        }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['*.png'], dest: 'dist/'},
          {expand: true, src: ['*.jpg'], dest: 'dist/'},
          {expand: true, src: ['*.html'], dest: 'dist/'},
          {expand: true, src: ['*.css'], dest: 'dist/'}
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'sass', 'copy']);

};