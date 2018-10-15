const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    // add a plugin
    config = injectBabelPlugin('styled-components-named', config)
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', {
        legacy: true,
        //decoratorsBeforeExport: false
    }], config)
    return config;
}