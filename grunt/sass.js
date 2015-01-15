module.exports = {
    dev: {
    options: {
            style: 'expanded',
            lineNumbers: true
        },
        files: [{
            expand: true,
            cwd: 'app/scss',
            src: '*.scss',
            dest: '.tmp/css/',
            ext: '.css'
        }]
    }
};
