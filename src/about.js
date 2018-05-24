import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const weatherApiKey = '96cab377f4e9e86faf925c67b101409e'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      city: 'London',
      description: ''
    }
  }

  componentDidMount () {
    this.grabWeather(this.state.city)
  }

  grabWeather (city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${weatherApiKey}&q=${city}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          description: json.weather[0].description
        })
      })
  }

  render () {
    return (
      <div>
        Weathere report for { this.state.city }
        <p>{ this.state.description }</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
