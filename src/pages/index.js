import React from 'react';
import { Link as AppLink, graphql } from 'gatsby';
import get from 'lodash/get';
import { Flex, Box, Text, Link } from 'rebass';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { formatReadingTime, getGreeting } from '../utils';

const Section = props => (
	<Flex as="section" mt={5} flexWrap="wrap" {...props} />
);

const ListTitle = ({ children }) => (
	<Box as="header" width={[1, 1 / 4, 1, 1 / 4]}>
		<Text as="h3" m={0} fontSize={2}>
			{children}
		</Text>
	</Box>
);

const List = ({ children, ...props }) => (
	<Box
		as="ul"
		m={0}
		p={0}
		mt={[2, 0, 2, 0]}
		width={[1, 3 / 4, 1, 3 / 4]}
		role="list"
	>
		{children}
	</Box>
);

const ListItem = ({ children, indented = false, ...props }) => (
	<Text
		as="li"
		role="listitem"
		css={{ listStyle: 'none' }}
		pl={indented ? 3 : 0}
		mt={2}
		{...props}
	>
		{children}
	</Text>
);

const Separator = () => (
	<Text as="span" color="lightgray">
		/
	</Text>
);

const greeting = getGreeting();

const BlogIndex = ({ data }) => {
	const siteTitle = get(data, 'site.siteMetadata.title');
	const posts = get(data, 'allMarkdownRemark.edges');

	return (
		<Layout title={siteTitle}>
			<SEO />
			<Flex
				px={[4, 5, 5, 6]}
				pt={[5, 5, 5, 6]}
				flexWrap="wrap"
				justifyContent="flex-end"
			>
				<Box
					as="header"
					pr={[0, 0, 5, 5]}
					mt={[0, 0, 3, 0]}
					width={[1, 1, 1 / 2, 1 / 2]}
				>
					<Text as="h1" m={0} fontSize={2} fontWeight="normal">
						Hey there, I'm Pete.
					</Text>
					<Text as="h2" m={0} mt={2} fontSize={2} fontWeight="normal">
						{greeting}
					</Text>
					<Text as="small" color="gray" mt={3} css={{ display: 'block' }}>
						Available from Aug 2019.
					</Text>
				</Box>
				<Box mt={[5, 5, 3, 0]} width={[1, 1, 1 / 2, 1 / 2]}>
					<Section mt={0}>
						<ListTitle>Work</ListTitle>
						<List>
							<ListItem mt={0}>
								<Link href="https://fath.om">Fathom London</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://commerzbank.com">Commerzbank</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://alixpartners.com">AlixPartners</Link>
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
								<Link href="https://www.seymourpowell.com">Seymourpowell</Link>
							</ListItem>
							<ListItem>
								<Link href="http://umbrellium.co.uk">Umbrellium</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://www.thingful.net">Thingful</Link>
							</ListItem>
							<ListItem indented>
								<Link href="https://youtube.com/watch?v=MjoumVT070A">
									Burble Paris <Separator /> Samsung
								</Link>
							</ListItem>
							<ListItem>
								<Link href="https://xively.com">
									Xively <Separator /> Google
								</Link>
							</ListItem>
							<ListItem>
								<Link href="https://www.telecom.pt/en-us">
									Portugal Telecom
								</Link>
							</ListItem>
							<ListItem>
								<Link color="gray" href="https://linkedin.com/in/petecorreia/">
									More →
								</Link>
							</ListItem>
						</List>
					</Section>

					<Section>
						<ListTitle>OSS</ListTitle>
						<List>
							<ListItem mt={0}>
								<Link href="https://react-circular-input.now.sh/">
									react-circular-input
								</Link>
							</ListItem>
							<ListItem>
								<Link href="https://tsx-docs.now.sh/">tsx-docs</Link>
							</ListItem>
							<ListItem>
								<Link href="https://github.com/petecorreia/analyze-cra-bundle">
									analyze-cra-bundle
								</Link>
							</ListItem>
						</List>
					</Section>

					<Section>
						<ListTitle>Writing</ListTitle>
						<List>
							{posts.map(({ node }, index) => {
								const title =
									get(node, 'frontmatter.title') || node.fields.slug;
								return (
									<ListItem key={node.fields.slug} mt={!index ? 0 : 3}>
										<AppLink to={node.fields.slug} css={{ lineHeight: 1.4 }}>
											{title}
										</AppLink>
										<Text
											as="small"
											color="gray"
											mt={1}
											css={{ display: 'block' }}
										>
											{node.frontmatter.date}
											{` — ${formatReadingTime(node.timeToRead)}`}
										</Text>
									</ListItem>
								);
							})}
						</List>
					</Section>

					<Section>
						<ListTitle>Stack</ListTitle>
						<List>
							<ListItem mt={0}>React</ListItem>
							<ListItem>Typescript</ListItem>
							<ListItem>Styled Components</ListItem>
							<ListItem>
								Dataviz <Separator /> D3
							</ListItem>
							<ListItem>GraphQL</ListItem>
							<ListItem>Design Systems</ListItem>
						</List>
					</Section>

					<Section>
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
					</Section>
				</Box>
			</Flex>
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
