import { Component } from 'preact';

import Reader from './Reader';

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Reader />
			</div>
		);
	}
}