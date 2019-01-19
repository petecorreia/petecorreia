import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
	render() {
		return (
			<div
				style={{
					display: 'flex',
					marginBottom: rhythm(2.5),
				}}
			>
				<img
					src={profilePic}
					alt={`Pete Correia`}
					style={{
						marginRight: rhythm(1 / 2),
						marginBottom: 0,
						width: rhythm(2),
						height: rhythm(2),
					}}
				/>
				<p style={{ maxWidth: 310 }}>
					<a href="https://mobile.twitter.com/petecorreia">Pete Correia</a>.{' '}
					Making something very complex, very simple.
				</p>
			</div>
		)
	}
}

export default Bio
