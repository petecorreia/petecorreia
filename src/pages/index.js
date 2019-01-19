import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { Flex, Box, Text } from 'rebass';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { formatReadingTime, greeting } from '../utils';

const BlogIndex = ({ data }) => {
	const siteTitle = get(data, 'site.siteMetadata.title');
	const posts = get(data, 'allMarkdownRemark.edges');

	return (
		<Layout title={siteTitle}>
			<SEO />
			<Flex>
				<Box width={1 / 2}>
					<Text as="p" m={0}>
						Hey there, I'm Pete.
					</Text>
					<Text as="p" m={0} mt={2}>
						{greeting()}
					</Text>
				</Box>
				<Box width={1 / 2}>Work</Box>
			</Flex>

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
