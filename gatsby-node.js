const path = require('path');

// Create pages from markdown files
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		resolve(
			graphql(
				`
          query {
            tjanster: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/services/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            team: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/about/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }
            testimonials: allMarkdownRemark(
              filter: { fileAbsolutePath: { regex: "/kundcase/" } }
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  id
                  frontmatter {
                    path
                    title
                    date(formatString: "DD MMMM YYYY")
                  }
                  excerpt
                }
              }
            }

            blogg: allContentfulBlogPost {
              edges {
                node {
                  slug
                }
              }
            }
          }

          
        `
			).then((result) => {
				result.data.tjanster.edges.forEach(({ node }) => {
					const component = path.resolve('./src/templates/services.js');
					createPage({
						path: node.frontmatter.path,
						component,
						context: {
							id: node.id
						}
					});
				});
				result.data.team.edges.forEach(({ node }) => {
					const component = path.resolve('./src/templates/about.js');
					createPage({
						path: node.frontmatter.path,
						component,
						context: {
							id: node.id
						}
					});
				});
				result.data.testimonials.edges.forEach(({ node }) => {
					const component = path.resolve('./src/templates/testimonial.js');
					createPage({
						path: node.frontmatter.path,
						component,
						context: {
							id: node.id
						}
					});
				});

				result.data.blogg.edges.forEach((edge) => {
					const blogTemplate = path.resolve('./src/templates/blog.js');

					createPage({
						component: blogTemplate,
						path: `/blogg/${edge.node.slug}`,
						context: {
							slug: edge.node.slug
						}
					});
				});
				resolve();
			})
		);
	});
};
