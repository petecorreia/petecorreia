import React from 'react';
import { Link as AppLink } from 'gatsby';
import { Flex, Box, Text, Link } from 'rebass';

const Footer = () => (
	<Box as="footer" css={{ textAlign: 'center' }}>
		<Link
			as={AppLink}
			to="/"
			my={6}
			css={{
				display: 'block',
				marginLeft: '-0.1em',
				fontSize: '18vw',
				fontWeight: 'bold',
				letterSpacing: '-0.07em',
			}}
		>
			petecorreia
		</Link>

		<Flex
			mx="auto"
			justifyContent="flex-end"
			css={{ maxWidth: 1290, textAlign: 'left' }}
		>
			<Box p={4} width={1 / 2}>
				<Text>Making something very complex, very simple.</Text>
				<Text as="small" mt={2} css={{ display: 'block', color: '#666' }}>
					© {new Date().getFullYear()} Pete Correia
				</Text>
			</Box>
		</Flex>
	</Box>
);

export default Footer;
