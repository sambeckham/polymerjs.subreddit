module.exports = {
    imageReferences: {
        src: 'resources/custom-styles.css',
        overwrite: true,
        replacements: [{
            from: /['"]\/images\/([^\.]*)([^'"]*)['"]/g,
            to: '%%$1%%'
        }]
    }
};