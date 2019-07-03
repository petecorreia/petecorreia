module.exports = {
	siteMetadata: {
		title: 'Pete Correia',
		author: 'Pete Correia',
		description:
			'Co-founder, CTO at Appital — Making something very complex, very simple.',
		siteUrl: 'https://petecorreia.com',
		social: {
			twitter: '@petecorreia',
		},
	},
	pathPrefix: '/',
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 690,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					'gatsby-remark-autolink-headers',
					{
						resolve: 'gatsby-remark-prismjs',
						options: {
							inlineCodeMarker: '÷',
						},
					},
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants',
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges.map(edge => {
								const siteUrl = site.siteMetadata.siteUrl;
								const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at petecorreia.com. You can read it online by <a href="${siteUrl +
									edge.node.fields.slug}">clicking here</a>.)</div>
              `;

								let html = edge.node.html;
								html = html
									.replace(/href="\//g, `href="${siteUrl}/`)
									.replace(/src="\//g, `src="${siteUrl}/`)
									.replace(/"\/static\//g, `"${siteUrl}/static/`)
									.replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.frontmatter.spoiler,
									date: edge.node.fields.date,
									url: site.siteMetadata.siteUrl + edge.node.fields.slug,
									guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
									custom_elements: [{ 'content:encoded': html + postText }],
								});
							});
						},
						query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        spoiler
                      }
                    }
                  }
                }
              }
            `,
						output: '/rss.xml',
						title: "petecorreia's RSS Feed",
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `petecorreia`,
				short_name: `petecorreia`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffa7c4`,
				display: `minimal-ui`,
				icon: `src/assets/icon.png`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
	],
};
