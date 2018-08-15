import react from 'react';
import reactDom from 'react-dom';

const App = () =>  {
	return (
		<h1> i should be App.js </h1>
	);

}

export.default = App;

reactDom.render(<app/>, document.getElementById('app'));

// test without retrun and curly bracks

