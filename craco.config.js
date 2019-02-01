// schema: https://github.com/sharegate/craco/blob/master/packages/craco/README.md#installation

const { paths, when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = function ({ env, paths }) {
  return {

    // babel: {
    //   plugins: ["styled-components-named"],
    // },
    jest: {
      configure: (jestConfig, { env, paths, resolve, rootDir }) => {

        // node_modules except this list will be not transformed
        // const transformModulesList = [
        //   "react-native",
        //   "office-ui-fabric-react",
        //   "applicationinsights-js",
        // ]

        // jestConfig["transformIgnorePatterns"] = [
        //   "[/\\\\]node_modules[/\\\\](?!(" + transformModulesList.join('|') + ")[/\\\\]).+\\.(js|jsx|mjs|ts|tsx)$"
        // ];

        //jestConfig.setupFiles.push("<rootDir>/src/setupTests.js");

        jestConfig.setupTestFrameworkScriptFile = "<rootDir>/src/setupTests.js";

        //console.log(JSON.stringify(jestConfig, null, 4));

        //jestConfig.globals["ts-jest"]["tsConfig"] = jestConfig.globals["ts-jest"]["tsConfigFile"];
        //jestConfig.globals["ts-jest"]["tsConfigFile"] = undefined;
        return jestConfig;
      }
    }
  };
}