import React from 'react';
import Layout from '../layouts/index';

class NotFoundPage extends React.Component {
	render() {
		return (
			<Layout>
				<h1>Sidan finns inte! 🙈 </h1>
				<p>Du har precis kommit till en sida som inte existerar...</p>
			</Layout>
		);
	}
}

export default NotFoundPage;
