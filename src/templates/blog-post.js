import React from 'react';
import { Link as AppLink, graphql } from 'gatsby';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import Layout, { theme } from '../components/Layout';
import SEO from '../components/SEO';
import { formatReadingTime } from '../utils';

const Post = styled(Flex)`
	line-height: 1.375em;

	a {
		text-decoration: underline;
	}

	h2 {
		padding-top: ${theme.space[4]}px;
		padding-bottom: ${theme.space[3]}px;
		margin: 0;
		font-size: ${theme.fontSizes[4]}px;
		line-height: 1.11em;
		letter-spacing: -0.015em;
	}

	hr,
	blockquote,
	.gatsby-resp-image-wrapper,
	.gatsby-highlight {
		margin: ${theme.space[4]}px 0;
	}

	hr {
		opacity: 0.5;
	}

	blockquote {
		font-size: ${theme.fontSizes[3]}px;
		line-height: 1.375;
	}
`;
Post.defaultProps = {
	as: 'article',
};

const HTML = ({ content, ...props }) => (
	<Box dangerouslySetInnerHTML={{ __html: content }} {...props} />
);

const TableOfContents = ({ content, ...props }) => (
	<Box
		as="nav"
		{...props}
		css={`
			display: none;

			@media screen and (min-width: ${theme.breakpoints[2]}) {
				display: block;
			}
		`}
	>
		<Text
			as="h2"
			style={{ paddingTop: 0, fontSize: theme.fontSizes[3] + 'px' }}
		>
			Sections
		</Text>

		<HTML
			content={content}
			css={`
				ul {
					padding-left: 0;
					margin: 0;
				}

				li {
					list-style-type: circle
					list-style-position: inside;
				}

				a {
					text-decoration: none;

					&:hover,
					&:focus {
						text-decoration: underline;
					}
				}
			`}
		/>
	</Box>
);

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const { next } = pageContext;
	return (
		<Layout location={location}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.spoiler}
				slug={post.fields.slug}
			/>

			<Post as="article" px={[4, 5, 5, 6]} pt={[5, 5, 6, 6]} flexWrap="wrap">
				<Text as="h1" width={1} m={0} lineHeight={1.1} letterSpacing="-0.03em">
					{post.frontmatter.title}
				</Text>

				<Text as="p" width={1} mt={2} mb={5} color="gray">
					{post.frontmatter.date} — {formatReadingTime(post.timeToRead)}
				</Text>

				<TableOfContents content={post.tableOfContents} width={1 / 3} pr={5} />

				<Box
					width={[1, 1, 1, 2 / 3]}
					css={`
						max-width: 690px;
					`}
				>
					<Text
						as="p"
						mt={0}
						fontSize={3}
						lineHeight={1.375}
						letterSpacing="-0.01em"
					>
						{post.frontmatter.spoiler}
					</Text>

					<HTML content={post.html} />

					<Flex mt={5} justifyContent="space-between">
						<Text as="p" m={0}>
							Thank you for reading.
						</Text>

						{next && (
							<AppLink to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</AppLink>
						)}
					</Flex>
				</Box>
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
