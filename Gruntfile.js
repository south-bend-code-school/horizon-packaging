module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'src/**/*.pug', 'src/**/*.less'],
      tasks: ['pug', 'less', 'jshint:all', 'uglify'],
      options: {
        spawn: false,
        reload: true,
      }
    },

    pug: {
      compile: {
        options: {
            client: false,
            pretty: true
        },
        files: [{
          cwd: "./src/views/",
          src: "*.pug",
          dest: "build/views",
          expand: true,
          ext: ".html"
        }]
      },
    },

    less: {
      compile: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [{
          cwd: "./src/stylesheets/",
          src: "*.less",
          dest: "build/stylesheets",
          expand: true,
          ext: ".css"
        }]
      }
    },

    jshint: {
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        },
        reporter: require('jshint-stylish-cool')
      },
      all: [
        'Gruntfile.js',
        'src/**/*.js'
      ]
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      build: {
        files: [{
          expand: true,
          cwd: './src/js/',
          src: '*.js',
          dest: './build/js/',
          ext: '.min.js',
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default',['pug', 'less', 'jshint', 'uglify', 'watch']);
};
