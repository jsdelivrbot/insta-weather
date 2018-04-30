import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.name;
		const tempCurrent = Math.floor(1.8 *((cityData.main.temp) - 273) + 32);
		const tempHigh = Math.floor(1.8 *((cityData.main.temp_max) - 273) + 32);
		const tempLow = Math.floor(1.8 *((cityData.main.temp_min) - 273) + 32);
		const wind = cityData.wind.speed;
		const icon = cityData.weather[0].icon;
		const conditions = (cityData.weather[0].description).toUpperCase();
		const iconSource = `http://openweathermap.org/img/w/${icon}.png`;

		return(
			<tr key={name}>
				<td className="mainTemp">
					<h3 className="cityName">{name}</h3>
					<h4 className="temp">{tempCurrent}<sup className="degree">º</sup></h4>
				</td>
				<td className="tempRange">
					<h5>{tempLow}º - {tempHigh}º</h5>
					<p className="labels">LOW  -  HIGH</p>
				</td>
				<td className="conditions">
					<div className="cContainer">
							<p>{conditions}</p>
							<img className="weatherIcon" src={iconSource} alt="" />
					</div>
					<p className="labels">CONDITIONS</p>
				</td>
				<td className="wind">
					<h5>{wind} mph</h5>
					<p className="labels">WIND</p>
				</td>
			</tr>

		);	
	}

	render(){
		return(
			<table className="table">
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);