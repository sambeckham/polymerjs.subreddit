module.exports = {
    dev: {
        files: [{
            expand: true,
            dot: true,
            cwd: 'app',
            dest: '.tmp',
            src: ['**/*.{js,css,png,jpg,jpeg,gif,svg,html}']
        }]
    }
};