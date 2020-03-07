import React from 'react';
import { Link as AppLink, graphql } from 'gatsby';
import { Flex, Box, Text, Link } from 'rebass';
import styled from 'styled-components';
import Layout, { theme } from '../components/Layout';
import SEO from '../components/SEO';
import { formatReadingTime } from '../utils';

const HTML = ({ content, ...props }) => (
	<Box dangerouslySetInnerHTML={{ __html: content }} {...props} />
);

const Markdown = styled(HTML)`
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

const TableOfContents = styled(HTML)`
	ul {
		padding-left: 1em;
		margin: 0;
	}

	li {
		margin-bottom: ${theme.space[2]}px;
		line-height: 1.25;
		list-style-type: circle;
	}

	a {
		text-decoration: none;

		&:hover,
		&:focus {
			text-decoration: underline;
		}
	}
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.markdownRemark;
	const { next, previous } = pageContext;
	const nextPost = next || previous;
	return (
		<Layout location={location}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.spoiler}
				slug={post.fields.slug}
			/>

			<Flex
				as="article"
				px={[4, 5, 5, 6]}
				pt={[5, 5, 5, 6]}
				flexWrap="wrap"
				css={`
					position: relative;
				`}
			>
				<Text
					as="h1"
					width={1}
					m={0}
					mt={[0, 0, 3, 0]}
					lineHeight={1.2}
					letterSpacing="-0.03em"
				>
					{post.frontmatter.title}
				</Text>

				<Text as="p" width={1} mt={2} mb={[4, 4, 4, 5]} color="gray">
					{post.frontmatter.date} — {formatReadingTime(post.timeToRead)}
				</Text>

				<Box
					as="nav"
					width={1 / 3}
					pr={5}
					css={`
						display: none;

						@media screen and (min-width: ${theme.breakpoints[2]}) {
							display: block;
						}
					`}
				>
					<Text as="h2" mt={1} fontSize={3}>
						Sections
					</Text>

					<TableOfContents content={post.tableOfContents} />
				</Box>

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

					<Markdown content={post.html} />

					<Flex
						mt={5}
						justifyContent="space-between"
						flexDirection={['column', 'column', 'row']}
					>
						<Text as="p" m={0} mb={nextPost ? [30, 30, 0] : 0}>
							Thank you for reading.
						</Text>

						{nextPost && (
							<AppLink to={nextPost.fields.slug} rel="next">
								{nextPost.frontmatter.title}&nbsp;→
							</AppLink>
						)}
					</Flex>
				</Box>
			</Flex>
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
