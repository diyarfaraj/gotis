import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../layouts/index';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				json
			}
		}
	}
`;

const Blogg = (props) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img alt={alt} src={url} />;
			}
		}
	};

	const { title } = props.data.contentfulBlogPost.title;

	return (
		<Layout bodyClass="page-service">
			<SEO title={title} />
			<div className="strip strip-white strip-diagonal">
				<div className="container pt-4 pt-md-10">
					<div className="row justify-content-start">
						<div className="col-12 col-md-8">
							<div className="service service-single">
								<h1>{props.data.contentfulBlogPost.title}</h1>
								<p>{props.data.contentfulBlogPost.publishedDate}</p>
								{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Blogg;
