import React, { useEffect, useState } from 'react';
import './App.scss';
import OrderTable from './components/Table';
import axios from 'axios';


function App() {
	const [ state, setState ] = useState({
		data: []
	});

	const APIOrders = 'http://51.15.242.149:8585/orders?status=active';
	useEffect(() => {
		// get orders
		fetch(APIOrders).then((res) => res.json()).then(
			(result) => {
				setState((prevState) => {
					prevState.data = result;
					return { ...prevState };
				});
			},
			(error) => {
				console.log(error);
			}
    );
    
	}, []);
	return (
		<div className="App">
			<h1>BWD project is ready</h1>
			<OrderTable data={state.data} />
		</div>
	);
}

export default App;
