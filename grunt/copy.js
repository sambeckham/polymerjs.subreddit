module.exports = {
    pages: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'app',
            dest: '.tmp',
            src: '*.html'
        }]
    },
    images: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'app/images',
            dest: '.tmp/images',
            src: '*.{png,jpg}'
        }]
    }
};