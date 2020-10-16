const withPlugins = require('next-compose-plugins');
const withReactSVG = require('next-react-svg');

const path = require('path');

module.exports = withPlugins([
    withReactSVG({
        include: path.resolve(__dirname, "./public/images"),
        webpack(config, options) {
            return config;
        }
    })
])