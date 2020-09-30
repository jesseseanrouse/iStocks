import React from 'react';
import RenderStocks from './StocksRender/StocksRender';
import './style.css';

const Stocks = (props) => {
	const render = props.data.map((ele, index) => {
		return (
			<RenderStocks
				key={index}
				name={ele.name}
				price={ele.lastPrice}
                change={ele.change}
                index={index}
                value={props.index}
                setState={props.setState}
			/>
		);
	});
	return (
		<>
			<div className='stockRowTitle'>
				<p>Company</p>
				<p>Price</p>
				<p>Change</p>
			</div>
			{render}
		</>
	);
};

export default Stocks;
