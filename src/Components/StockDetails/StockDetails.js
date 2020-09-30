import React from 'react';

const StockDetails = (props) => {
	let data = props.data[props.index];
	return (
		<>
			<p>Company Name: {data.name}</p>
			<p>Abbreviation: {data.symbol}</p>
			<p>Last Listed Price: {data.lastPrice}</p>
			<p>Price Change: {data.change}</p>
			<p>Price High: {data.high}</p>
			<p>Price Low: {data.low}</p>
			<p>Price Open: {data.open}</p>
		</>
	);
};

export default StockDetails;
