module.exports = {
    dist: {
        options: {
            optimizationLevel: 7
        },
        files: [{
            expand: true,
            cwd: 'app/images',
            src: '{,*/}*.{png,jpg}',
            dest: 'resources/images'
        }]
    },
};