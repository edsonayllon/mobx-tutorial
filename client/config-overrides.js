const rewireAliases = require('react-app-rewire-aliases');
//const { paths } = require('react-app-rewired');
//const path = require('path');
const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'react-native-svg': 'react-native-svg-web',
	})(config, env);
	config =  addDecoratorsLegacy()(config, env);
  return config;
}
