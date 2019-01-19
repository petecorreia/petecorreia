import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { Box } from 'rebass';

const primary = '#07c';

const theme = {
	fontSizes: [12, 14, 16, 24, 32, 48, 64],
	buttons: {
		primary: {
			color: '#fff',
			backgroundColor: primary,
		},
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
		font-family: "NeueHaasUnica", "Helvetica Neue", helvetica, arial, sans-serif;
	}
`;

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Box
			as="main"
			mx="auto"
			p={5}
			css={{
				maxWidth: '1440',
			}}
		>
			<GlobalStyle />
			{children}
		</Box>
	</ThemeProvider>
);

export default Layout;
