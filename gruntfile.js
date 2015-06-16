module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            compile: {
                options: {
                    style: 'expanded',
                    cache: false

                },
                files: [
                    {
                        expand: true,
                        cwd: 'compile/sass',
                        src: ['**/*.sass'],
                        dest: 'public/stylesheets',
                        ext: '.css'
                    }
                ]
            }
        },

        coffee: {
            compile: {
                expand: true,
                cwd: 'compile/coffeescripts',
                src: ['**/*.coffee'],
                dest: 'public/javascripts',
                ext: '.js',
                options: {
                    bare: true,
                    preserve_dirs: true
                }
            }
        },
        watch: {
            html: {
                files: ['**/*.html']
            },
            sass: {
                files: '<%= sass.compile.files[0].src %>',
                tasks: ['sass']
            },
            coffee: {
                files: '<%= coffee.compile.src %>',
                tasks: ['coffee']
            },
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks ('grunt-contrib-sass');
    grunt.loadNpmTasks ('grunt-contrib-coffee');
    grunt.loadNpmTasks ('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'coffee', 'watch']);
};
