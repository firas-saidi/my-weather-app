import { Component } from 'react';
import './App.css';

import Form from './components/Form';
import Weather from './components/Weather';
const API_Key='271cf625e2e190b21abfc4971790791e'

class App extends Component{
  state = {
    tempreature : "",
    city :"",
    country :"",
    humidity :"",
    description :"",
    error : "",
  }

  getweather = async (e)  => {
    e.preventDefault()
    const city=e.target.elements.city.value
    const country=e.target.elements.country.value
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_Key}`)
    const data = await api.json();
    if (city && country)
  {
    this.setState({
      tempreature : data.main.temp,
      city :data.name,
      country :data.sys.country,
      humidity :data.main.humidity,
      description :data.weather[0].description,
      error : " ",

    })
  }else {
    this.setState({
    tempreature : " ",
    city :" ",
    country :" ",
    humidity :" ",
    description :" ",
    error : "pls enter contry  ",
    })

  }
  
  }
  render() {
  return (
    
    <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
      <div className='row d-flex justify-content-center'>
      <div className="row card0"> 
      <div className="card1 col-lg-8 col-md-7">
                <div className='navbar navbar-light bg-light'>the.weather</div>
                <div className="text-center">
                    <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" alt=""/>
                </div>
                <div className="row px-3 mt-3 mb-3">
                    <h1 className="large-font mr-3">{this.state.tempreature}   </h1>
                    <div className="d-flex flex-column mr-3">
                        <h2 className="mt-3 mb-0">{this.state.city}</h2>
                        <small>10:36 - Tuesday, 22 Oct '19</small>
                    </div>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fa fa-sun-o mt-4" >.</h3>
                        <small>{this.state.description}</small>
                    </div>
          </div>
        <Form getweather={this.getweather}/>
        <Weather 
        tempreature ={this.state.tempreature}
        city ={this.state.city}
        country={this.state.country}
        humidity ={this.state.humidity}
        description ={this.state.description}
        error ={this.state.error}
      />
      </div>
      </div>
      </div>
    </div>
  );
}
}
export default App;