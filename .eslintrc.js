module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-typescript/base', 
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'no-plusplus': 'off',
		'no-console': 'off',
		'linebreak-style': 0,
		'import/prefer-default-export': 'off',
		'no-var-requires': 0,
		'space-infix-ops': ['error', { 'int32Hint': false }],
	},
};