import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { formatReadingTime } from '../utils/helpers';

const BlogIndex = ({ data, location }) => {
	const siteTitle = get(data, 'site.siteMetadata.title');
	const siteDescription = get(data, 'site.siteMetadata.description');
	const posts = get(data, 'allMarkdownRemark.edges');

	return (
		<Layout location={location} title={siteTitle}>
			<SEO />
			<Bio />
			{posts.map(({ node }) => {
				const title = get(node, 'frontmatter.title') || node.fields.slug;
				return (
					<div key={node.fields.slug}>
						<h3>
							<Link to={node.fields.slug}>{title}</Link>
						</h3>
						<small>
							{node.frontmatter.date}
							{` • ${formatReadingTime(node.timeToRead)}`}
						</small>
						<p dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }} />
					</div>
				);
			})}
			<Footer />
		</Layout>
	);
};

export default BlogIndex;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					timeToRead
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						spoiler
					}
				}
			}
		}
	}
`;
