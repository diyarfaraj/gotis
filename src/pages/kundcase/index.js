import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const Testimonials = (props) => {
	const testimonials = props.data.allMarkdownRemark.edges;
	return (
		<Layout bodyClass="page-testimonials">
			<SEO title="Kundcase" />
			<div className="intro">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h1>Kundcase</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="container pb-6">
				<div className="row">
					{testimonials.map((edge) => (
						<div key={edge.node.frontmatter.path} className="col-12 col-md-6 mb-1">
							<div className="testimonial">
								<div className="testimonials-meta">
									<h2 className="testimonials-title">{edge.node.frontmatter.title}</h2>
									<p className="testimonials-name">{edge.node.frontmatter.name}</p>
									<p className="testimonials-jobtitle">{edge.node.frontmatter.jobtitle}</p>
									<p className="testimonials-url">
										<a target="_blank" href={edge.node.frontmatter.businessurl}>
											Nya hemsidan
										</a>
									</p>
								</div>
								<div
									className="testimonials-content"
									dangerouslySetInnerHTML={{ __html: edge.node.html }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export const query = graphql`
	query TestimonialsQuery {
		allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/kundcase/" } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					html
					frontmatter {
						title
						path
						name
						jobtitle
						businessurl
					}
				}
			}
		}
	}
`;

export default Testimonials;
