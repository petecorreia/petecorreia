import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import { rhythm } from '../utils/typography';

class Bio extends React.Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					marginBottom: rhythm(2.5),
				}}
			>
				<p style={{ maxWidth: 310 }}>
					<a href="https://mobile.twitter.com/petecorreia">Pete Correia</a>.{' '}
					Making something very complex, very simple.
				</p>
			</div>
		);
	}
}

export default Bio;
