import React from 'react';
import NavBar from './NavBar';

export class About extends React.Component{
	render() {
	console.log('start')
    console.log('New Test with NavBar')
    console.log(process.env.PUBLIC_URL)
    console.log('end')
		return(
			<div>
				<NavBar/>
				<h1> This is the About Page </h1>
				<h1> This is the About Page </h1>
				<h1> This is the About Page </h1>
			</div>
			)
	}
}