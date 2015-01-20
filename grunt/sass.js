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
    },
    dist: {
        options: {
            style: 'compressed',
            noCache: true,
            sourcemap: 'none'
        },
        files: [{
            expand: true,
            cwd: 'app/scss',
            src: '*.scss',
            dest: 'resources',
            ext: '.css'
        }]
    }
};
