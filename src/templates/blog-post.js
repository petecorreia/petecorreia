import React from 'react';
import { Link as AppLink, graphql } from 'gatsby';
import get from 'lodash/get';
import { Flex, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { formatReadingTime } from '../utils';

const Post = styled(Box)`
	line-height: 1.375em;

	a {
		text-decoration: underline;
	}

	h2 {
		margin-top: 1.33333em;
		margin-bottom: 0.66667em;
		font-size: 2.25em;
		font-weight: normal;
		line-height: 1.11em;
		letter-spacing: -0.015em;
	}
`;
Post.defaultProps = {
	as: 'article',
};

const BlogPostTemplate = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	console.log('post: ', post);
	const siteTitle = get(data, 'site.siteMetadata.title');
	const { previous, next } = pageContext;
	return (
		<Layout title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.spoiler}
				slug={post.fields.slug}
			/>

			<Post as="article" px={[4, 5, 5, 6]} pt={[5, 5, 6, 6]}>
				<Text as="h1">{post.frontmatter.title}</Text>

				<p>
					{post.frontmatter.date}
					{` • ${formatReadingTime(post.timeToRead)}`}
				</p>

				<Flex>
					<Box width={1 / 3}>
						<div dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
					</Box>
					<Box width={2 / 3}>
						<Text
							as="p"
							css={`
								font-size: 1.5em;
								line-height: 1.23em;
								letter-spacing: -0.01em;
								margin-top: 2em;
								margin-bottom: 1em;
							`}
						>
							{post.frontmatter.spoiler}
						</Text>

						<div dangerouslySetInnerHTML={{ __html: post.html }} />
					</Box>
				</Flex>

				<h3>
					<AppLink to={'/'}>petecorreia</AppLink>
				</h3>
				<ul>
					<li>
						{previous && (
							<AppLink to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</AppLink>
						)}
					</li>
					<li>
						{next && (
							<AppLink to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</AppLink>
						)}
					</li>
				</ul>
			</Post>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			id
			html
			timeToRead
			tableOfContents
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				spoiler
			}
			fields {
				slug
			}
		}
	}
`;
