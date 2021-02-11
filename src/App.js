import React, { Component } from 'react'

// Components:
import CardList from './CardList'
import SearchBox from './SearchBox'

// Robots Array:
import { robots } from './robots'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // State:
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox 
          searchChange={this.onSearchChange} 
        />
        <CardList robots={ filteredRobots } />
      </div>
    )
  }
}

export default App