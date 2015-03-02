// Generated on 2015-02-01 using generator-jekyllrb 1.4.1
'use strict';

// Directory reference:
//   css: css
//   compass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Load Tasks
  grunt.loadNpmTasks('grunt-modernizr');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-devcode');

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    responsive_images: {
      fullWidth: {
        options: {
          sizes: [{
            name        : 'w1920@1x',
            width       : 1920,
            quality     : 75
          }, {
            name        : 'w1440@2x',
            width       : 2880,
            quality     : 60
          }, {
            name        : 'w1440@1x',
            width       : 1440,
            quality     : 75
          }, {
            name        : 'w1280@2x',
            width       : 2560,
            quality     : 60
          }, {
            name        : 'w1280@1x',
            width       : 1280,
            quality     : 75
          }, {
            name        : 'w1024@2x',
            width       : 2048,
            quality     : 60
          }, {
            name        : 'w1024@1x',
            width       : 1024,
            quality     : 75
          }, {
            name        : 'w768@2x',
            width       : 1536,
            quality     : 60
          }, {
            name        : 'w768@1x',
            width       : 768,
            quality     : 75
          },{
            name        : 'w480@2x',
            width       : 960,
            quality     : 60
          }, {
            name        : 'w480@1x',
            width       : 480,
            quality     : 75
          }, {
            name        : 'w320@2x',
            width       : 640,
            quality     : 60
          }, {
            name        : 'w320@1x',
            width       : 320,
            quality     : 75
          }]
        },
        files: [{
          expand : true,
          src    : ['*.{jpg,gif,png}'],
          cwd    : '<%= yeoman.app %>/img/full-width/',
          dest   : '<%= yeoman.app %>/img/full-width/_responsive/'
        }]
      },
      logo: {
        options: {
          sizes: [{
            name        : '@2x',
            width       : 100,
            height      : 100,
            aspectRatio : false,
            quality     : 60
          }, {
            name        : '@1x',
            width       : 50,
            height      : 50,
            aspectRatio : false,
            quality     : 75
          }]
        },
        files: [{
          expand : true,
          src    : ['*.{jpg,gif,png}'],
          cwd    : '<%= yeoman.app %>/img/logo/',
          dest   : '<%= yeoman.app %>/img/logo/_responsive/'
        }]
      },
      retina: {
        options: {
          sizes: [{
            name        : '@2x',
            width       : '100%',
            quality     : 60
          }, {
            name        : '@1x',
            width       : '50%',
            quality     : 75
          }]
        },
        files: [{
          expand : true,
          src    : ['*.{jpg,gif,png}'],
          cwd    : '<%= yeoman.app %>/img/retina/',
          dest   : '<%= yeoman.app %>/img/retina/_responsive/'
        }]
      },
      regular: {
        options: {
          sizes: [{
            name        : 'w1024@2x',
            width       : 2048,
            quality     : 60
          }, {
            name        : 'w1024@1x',
            width       : 1024,
            quality     : 75
          }, {
            name        : 'w768@2x',
            width       : 1536,
            quality     : 60
          }, {
            name        : 'w768@1x',
            width       : 768,
            quality     : 75
          }, {
            name        : 'w480@2x',
            width       : 960,
            quality     : 60
          }, {
            name        : 'w480@1x',
            width       : 480,
            quality     : 75
          }, {
            name        : 'w320@2x',
            width       : 640,
            quality     : 60
          }, {
            name        : 'w320@1x',
            width       : 320,
            quality     : 75
          }]
        },
        files: [{
          expand : true,
          src    : ['*.{jpg,gif,png}'],
          cwd    : '<%= yeoman.app %>/img/regular/',
          dest   : '<%= yeoman.app %>/img/regular/_responsive/'
        }]
      }
    },
    modernizr: {
      dist: {
        devFile    : '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
        outputFile : '<%= yeoman.app %>/_bower_components/modernizr/modernizr.js',
        tests: [
          'csstransitions'
        ],
        files      : {
          src : [
            '<%= yeoman.app %>/js/{,*/}*.js',
            '<%= yeoman.app %>/_scss/{,*/}*.scss',
            '!<%= yeoman.app %>/js/plugins.js'
          ],
        },
        uglify     : true
      }
    },
    devcode: {
      options: {
        html: true,
        js: true,
        css: true,
        clean: true,
        block: {
          open: 'devcode',
          close: 'endcode'
        },
        dest: 'dist'
      },
      dist: {
        options: {
            source: 'dist/',
            dest: 'dist/',
            env: 'production'
        }
      }
    },
    watch: {
      compass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['compass:server']
      },
      autoprefixer: {
        files: ['.tmp/**/*.css'],
        tasks: ['autoprefixer:dist']
      },
      modernizr: {
        files: [
          '<%= yeoman.app %>/_scss/**/*.{scss,sass}',
          '<%= yeoman.app %>/js/**/*.js'
        ],
        tasks: ['modernizr']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '<%= yeoman.app %>/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              ".jekyll",
              //".tmp",
              "<%= yeoman.app %>"
            ]
          },
          watchTask: true
        }
      },
      dist: {
        options: {
          server: {
            baseDir: "<%= yeoman.dist %>"
          }
        }
      },
      test: {
        bsFiles: {
          src: [
            '.jekyll/**/*.html',
            '.tmp/css/**/*.css',
            '{.tmp,<%= yeoman.app %>}/js/**/*.js',
            '{<%= yeoman.app %>}/_bower_components/**/*.js',
            '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
          ]
        },
        options: {
          server: {
            baseDir: [
              ".jekyll",
              ".tmp",
              "<%= yeoman.app %>"
            ]
          },
          watchTask: true
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    compass: {
      options: {
        // If you're using global Sass gems, require them here.
        // require: ['singularity', 'jacket'],
        sassDir: '<%= yeoman.app %>/_scss',
        cssDir: '.tmp/css',
        imagesDir: '<%= yeoman.app %>/img',
        javascriptsDir: '<%= yeoman.app %>/js',
        relativeAssets: false,
        httpImagesPath: '/img',
        httpGeneratedImagesPath: '/img/generated',
        outputStyle: 'expanded',
        raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/img/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: '<%= yeoman.app %>/img/generated'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        expand: true,
        cwd: '.tmp',
        src: '**/{css,concat}/*.css',
        dest: '<%= yeoman.app %>'
      }
    },
    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/img']
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            //'_bower_components/jquery/jquery.min.js',
            'favicon.ico',
            'apple-touch*.png',
            'mstile*.png',
            'android-chrome*.{png,xml}',
            'browserconfig.xml',
            'crossdomain.xml',
            'humans.txt'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      //stageCss: {
      //  files: [{
      //    expand: true,
      //    dot: true,
      //    cwd: '<%= yeoman.app %>/css',
      //    src: '**/*.css',
      //    dest: '.tmp/css'
      //  }]
      //},
      responsive_images: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            'img/**/_responsive/**/*'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: '../',
          branch: 'gh-pages',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    // https://github.com/robwierzbowski/generator-jekyllrb/issues/106
    // scsslint: {
    //   // See https://www.npmjs.org/package/grunt-scss-lint for options.
    //   allFiles: [
    //     '<%= yeoman.app %>/_scss/**/*.scss'
    //   ]
    // },
    concurrent: {
      server: [
        'compass:server',
        'jekyll:server'
      ],
      dist: [
        'compass:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks

  // Generate responsive assets
  grunt.registerTask('generate-images', [
    'clean:responsive_images',
    'responsive_images'
  ]);

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'browserSync:dist']);
    }

    grunt.task.run([
      'clean:server',
      'responsive_images',
      'modernizr',
      'concurrent:server',
      'autoprefixer:dist',
      'browserSync:server',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'browserSync:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'compass:server',
    'jshint:all',
    'csslint:check'
    // 'scsslint'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'responsive_images',
    'copy:responsive_images',
    'concurrent:dist',
    'modernizr',
    'devcode:dist',
    'useminPrepare',
    'concat',
    'cssmin',
    'autoprefixer:dist',
    'uglify',
    'imagemin',
    'svgmin',
    // cant use filerev cause usemin doesnt yet support srcset
    //'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
