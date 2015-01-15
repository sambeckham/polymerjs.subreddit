module.exports = {
    options: {
        livereload: true
    },
    pages: {
        files: ['app/*.html'],
        tasks: ['copy']
    },
    css: {
        files: ['app/scss/{,*/}*.scss'],
        tasks: ['sass']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
