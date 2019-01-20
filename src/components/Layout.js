import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Box } from 'rebass';
import Footer from './Footer';

const theme = {
	breakpoints: ['550px', '764px', '1024px'],
	colors: {
		blue: '#000',
		gray: '#666',
		lightgray: '#ccc',
	},
};

const GlobalStyle = createGlobalStyle`
	${normalize()};

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		font-style: normal !important;
	}

	body {
		min-width: 320px;
		font-family: "NeueHaasUnica", "Helvetica Neue", helvetica, arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	a {
		color: inherit;
		text-decoration: none;

		&:focus,
		&:hover {
			text-decoration: underline;
		}
	}
`;

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Box as="main">
			<GlobalStyle />
			<Box
				mx="auto"
				css={{
					maxWidth: 1290,
				}}
			>
				{children}
			</Box>
			<Footer />
		</Box>
	</ThemeProvider>
);

export default Layout;
