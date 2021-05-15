const path = require('path');

module.exports = {
    paths: {
        // Chemin des fichiers sources
        source: path.resolve(__dirname, '../src/'),
        // Chemin des fichiers prod
        output: path.resolve(__dirname, '../dist/')
    },
    server: {
        host: 'localhost',
        port: 8000
    },
    limits: {
        // Taille des images en octets. En dessous, l'image sera définie en tant que DataURL (base64)
        images: 8192,
        // Taille des typographies en octets. En dessous, la typo sera définie en tant que DataURL (base64)
        fonts: 8192
    }
};
