import React from 'react';
import { Link as AppLink, graphql } from 'gatsby';
import get from 'lodash/get';
import { Flex, Box, Text, Link } from 'rebass';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { formatReadingTime, greeting } from '../utils';

const ListTitle = ({ children }) => (
	<Box as="header" width={1 / 4}>
		<Text as="h3" m={0} fontSize={2}>
			{children}
		</Text>
	</Box>
);

const List = ({ children, ...props }) => (
	<Box as="ul" m={0} p={0} width={3 / 4} role="list">
		{children}
	</Box>
);

const ListItem = ({ children, indented = false, ...props }) => (
	<Text
		as="li"
		role="listitem"
		css={{ listStyle: 'none' }}
		pl={indented ? 4 : 0}
		mt={2}
		{...props}
	>
		{children}
	</Text>
);

const BlogIndex = ({ data }) => {
	const siteTitle = get(data, 'site.siteMetadata.title');
	const posts = get(data, 'allMarkdownRemark.edges');

	return (
		<Layout title={siteTitle}>
			<SEO />
			<Flex px={4} pt={6} pb={4}>
				<Box as="header" p={4} width={1 / 2}>
					<Text as="h1" m={0} fontSize={2} fontWeight="normal">
						Hey there, I'm Pete.
					</Text>
					<Text as="h2" m={0} mt={2} fontSize={2} fontWeight="normal">
						{greeting()}
					</Text>
				</Box>
				<Box p={4} width={1 / 2}>
					<Flex as="section">
						<ListTitle>Work</ListTitle>
						<List>
							<ListItem mt={0}>
								<Link href="https://fath.om">Fathom</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://commerzbank.com">Commerzbank</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://accessfintech.com">Access Fintech</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://aimia.com">Aimia Inc</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://gsma.com">GSMA</Link>
							</ListItem>
							<ListItem>
								<Link href="https://barclays.co.uk">Barclays</Link>
							</ListItem>
							<ListItem>
								<Link href="https://seymourpowell.com">Seymourpowell</Link>
							</ListItem>
							<ListItem>
								<Link href="http://umbrellium.co.uk">Umbrellium</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://www.thingful.net">Thingful</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://youtube.com/watch?v=MjoumVT070A">
									Burble Paris / Samsung
								</Link>
							</ListItem>
							<ListItem>
								<Link href="https://xively.com">Xively / Google</Link>
							</ListItem>
							<ListItem>
								<Link href="https://www.telecom.pt/en-us">
									Portugal Telecom
								</Link>
							</ListItem>
						</List>
					</Flex>

					<Flex as="section" mt={5}>
						<ListTitle>OSS</ListTitle>
						<List>
							<ListItem mt={0}>
								<Link href="https://react-circular-input.netlify.com/">
									react-circular-input
								</Link>
							</ListItem>
							<ListItem>
								<Link href="https://github.com/petecorreia/analyze-cra-bundle">
									analyze-cra-bundle
								</Link>
							</ListItem>
						</List>
					</Flex>

					<Flex as="section" mt={5}>
						<ListTitle>Writing</ListTitle>
						<List>
							{posts.map(({ node }, index) => {
								const title =
									get(node, 'frontmatter.title') || node.fields.slug;
								return (
									<ListItem key={node.fields.slug} mt={!index ? 0 : 3}>
										<AppLink to={node.fields.slug}>{title}</AppLink>
										<Text as="small" css={{ display: 'block' }} mt={2}>
											{node.frontmatter.date}
											{` — ${formatReadingTime(node.timeToRead)}`}
										</Text>
									</ListItem>
								);
							})}
						</List>
					</Flex>

					<Flex as="section" mt={5}>
						<ListTitle>Stack</ListTitle>
						<List>
							<ListItem mt={0}>React</ListItem>
							<ListItem>Typescript</ListItem>
							<ListItem>D3</ListItem>
							<ListItem>GraphQL</ListItem>
							<ListItem>Design Systems</ListItem>
						</List>
					</Flex>

					<Flex as="section" mt={5}>
						<ListTitle>Links</ListTitle>
						<List>
							<ListItem mt={0}>
								<Link href="https://twitter.com/petecorreia">Twitter</Link>
							</ListItem>
							<ListItem>
								<Link href="https://github.com/petecorreia">Github</Link>
							</ListItem>
							<ListItem>
								<Link href="https://linkedin.com/in/petecorreia/">
									LinkedIn
								</Link>
							</ListItem>
							<ListItem>
								<Link href="/rss.xml">RSS</Link>
							</ListItem>
						</List>
					</Flex>
				</Box>
			</Flex>

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
