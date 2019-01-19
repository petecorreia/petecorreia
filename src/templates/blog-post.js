import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { formatReadingTime } from '../utils';

const BlogPostTemplate = ({ data, pageContext }) => {
	const post = data.markdownRemark;
	const siteTitle = get(data, 'site.siteMetadata.title');
	const { previous, next } = pageContext;
	return (
		<Layout title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.spoiler}
				slug={post.fields.slug}
			/>
			<h1>{post.frontmatter.title}</h1>
			<p>
				{post.frontmatter.date}
				{` • ${formatReadingTime(post.timeToRead)}`}
			</p>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />

			<h3>
				<Link to={'/'}>petecorreia</Link>
			</h3>
			<ul>
				<li>
					{previous && (
						<Link to={previous.fields.slug} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link to={next.fields.slug} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</ul>
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
