import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const StocksRender = (props) => {
    const handleClick = () => {
        props.setState(props.index)
    }
    return (
			<div className="stockRow">
				<p><Link to={'/Stocks/' + props.name} onClick={handleClick}>{props.name}</Link></p>
				<p>{props.price}</p>
				<p>{props.change}</p>
			</div>
		);
}

export default StocksRender