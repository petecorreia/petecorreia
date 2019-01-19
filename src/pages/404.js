import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
	render() {
		return (
			<Layout location={this.props.location}>
				<h1>Not Found</h1>
				<h2>🤷‍♂️</h2>
			</Layout>
		);
	}
}

export default NotFoundPage;
