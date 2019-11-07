import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Blogg = () => {
	const BloggData = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`);

	return (
		<Layout bodyClass="page-contact">
			<SEO title="Blogg" />

			<div className="intro intro-small">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1>GOTIS Bloggen</h1>
							<ol>
								{BloggData.allContentfulBlogPost.edges.map((edge) => {
									return (
										<li>
											<Link to={`/blogg/${edge.node.slug}`}>
												<h2>{edge.node.title}</h2>
												<p>{edge.node.publishedDate}</p>
											</Link>
										</li>
									);
								})}
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12" />
				</div>
			</div>
		</Layout>
	);
};

export default Blogg;
