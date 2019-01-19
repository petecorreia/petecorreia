import React from 'react';
import { Link as AppLink } from 'gatsby';
import { Flex, Box, Text } from 'rebass';

const Footer = () => (
	<Box as="footer" p={5} pb={4} css={{ textAlign: 'center' }}>
		<AppLink
			to="/"
			css={{
				marginLeft: '-0.1em',
				fontSize: '18vw',
				fontWeight: 'bold',
				letterSpacing: '-0.07em',
			}}
		>
			petecorreia
		</AppLink>

		<Flex mt={7} css={{ justifyContent: 'flex-end', textAlign: 'left' }}>
			<Box width={1 / 2}>
				<Text>Making something very complex, very simple.</Text>
				<Text as="small" mt={2} css={{ display: 'block', color: '#666' }}>
					© {new Date().getFullYear()} Pete Correia
				</Text>
			</Box>
		</Flex>
	</Box>
);

export default Footer;
