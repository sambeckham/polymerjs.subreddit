module.exports = {
    imageReferences: {
        src: 'resources/custom-styles.css',
        overwrite: true,
        replacements: [{
            from: /['"]\/images\/([^\.]*)([^'"]*)['"]/,
            to: '%%$1%%'
        }]
    }
};