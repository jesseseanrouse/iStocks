// imports react
import React, {useState, useEffect} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
//  imports css
import './App.css';
// imports from components
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Stocks from './Components/Stocks/Stocks';
import StocksData from './Components/StocksData/StocksData';
import Details from './Components/StockDetails/StockDetails';

function App() {
  const [index, setIndex] = useState('')
  const [data, setData] = useState(StocksData)
  

	return (
		<div className='App'>
			<nav>
				<Link to="/">Home </Link>
				<Link to='/Stocks'>Stocks </Link>
				<Link to='/About'>About</Link>
			</nav>
			<Switch>
        <Route exact path='/'>
          <Home />
        </Route>
				<Route path="/About">
          <About />
        </Route>
				<Route exact path="/Stocks">
          <Stocks data={data} index={index} setState={setIndex}/>
        </Route>
        <Route path='/Stocks/:name'>
          <Details data={data} index={index}/>
        </Route>
			</Switch>
		</div>
	);
}

export default App;
