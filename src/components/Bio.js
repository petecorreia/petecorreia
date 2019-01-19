import React from 'react';

class Bio extends React.Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
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
