module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 11,
	},
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'no-console': 0,
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		'no-underscore-dangle': 0,
	},
};
