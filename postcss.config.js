module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		process.env.NODE_ENV === 'production' &&
			require('@fullhuman/postcss-purgecss')({
				content: ['./public/*.html'],
				defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
			}),
		process.env.NODE_ENV === 'production' && require('cssnano')({
            preset: 'default',
        }),
	],
};
