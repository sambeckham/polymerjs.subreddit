module.exports = {
    options: {
        livereload: true
    },
    css: {
        files: ['app/scss/{,*/}*.scss'],
        tasks: ['sass']
    },
    images: {
        files: ['app/images/{,*/}*.{png,jpg}'],
        tasks: ['copy:images']
    },
    pages: {
        files: ['app/*.html'],
        tasks: ['copy']
    },
    configFiles: {
        files: ['gruntfile.js', 'grunt/*.{js,yaml}'],
        options: {
            reload: true
        }
    },
};
