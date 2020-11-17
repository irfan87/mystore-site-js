module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
	},
	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 11,
	},
	rules: {
		'no-tabs': 0,
		'no-console': 0,
		'linebreak-style': 0,
		quotes: ['error', 'single'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-underscore-dangle': 0,
		'no-nested-ternary': 0,
		'import/prefer-default-export': 0,
	},
};
