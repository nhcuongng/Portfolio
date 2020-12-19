
import { Footer, Header, Main } from '@Components/index';
import React from 'react';

import '../public/styles/index.scss';

class App extends React.PureComponent {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

export default App;