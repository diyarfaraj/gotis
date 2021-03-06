const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
	siteMetadata: {
		title: 'GOT Interactive Solutions',
		description: 'GOT Interactive Solutions',
		contact: {
			phone: '+46 707 26 70 88',
			email: 'contact@gotis.se'
		},
		menuLinks: [
			{
				name: 'Tjänster',
				link: '/services'
			},
			{
				name: 'Blogg',
				link: '/blog'
			},
			{
				name: 'Om Oss',
				link: '/about'
			},
			{
				name: 'Kundcase',
				link: '/kundcase'
			},
			{
				name: 'Kontakt',
				link: '/contact'
			}
		]
	},

	plugins: [
		'gatsby-plugin-sass',
		'gatsby-transformer-json',
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',

		{
			resolve: 'gatsby-plugin-hubspot',
			options: {
				trackingCode: '6661655',
				respectDNT: true,
				productionOnly: true
			}
		},

		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'grzmi6mb32j1',
				accessToken: 'npP8Mz2LrEu5Rk0DuERwo0ElllPVuOla1VLsiClZOuU'
			}
		},

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/data`,
				name: 'data'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/images`,
				name: 'images'
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: guid ? guid : 'UA-145319342-3',
				// Puts tracking script in the head instead of the body
				head: true
			}
		},

		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images-contentful`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 375
						}
					},
					{
						resolve: `gatsby-plugin-sharp`,
						options: {
							useMozJpeg: false,
							stripMetadata: true,
							defaultQuality: 75,
							width: 375
						}
					}
				]
			}
		}
	]
};
