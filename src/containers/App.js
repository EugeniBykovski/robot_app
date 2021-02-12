import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'

// Components:
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField, // subscribed to the update
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  } 
}

// * with react hooks:
/*
const App = ({ store }) =>{
    const [searchResults, setSearchResults] = useState([]);
    const text = useSelector(state => state.searchRobots.searchField)
    const robosUsers = useSelector(state => state.getRobotsReducer.users)
    const dispatch = useDispatch();
    const onSearchChange = (e) => {
      dispatch(setSearchField(e.target.value))
    };

    useEffect(() =>  {
      dispatch(requestRobots());
    }, [dispatch])

    useEffect(() => {
      let filteredRobots = robosUsers.filter(robots => {
        return(
          robots.name.toLowerCase().includes(text.toLowerCase())
        );
      });
      setSearchResults(filteredRobots);
    }, [text,robosUsers])

    const newRobot = searchResults;

    return(
      <div className="tc">
        <Scroll>
          <h1 className="f2">RoboFriends</h1>
          <SearchBox SearchChange={ onSearchChange }/>
        </Scroll>
        {
          text === "" ? <CardList robots={ robosUsers }/> : <CardList robots={ newRobot }/>
        }
      </div>
    );
}

export default App;
*/

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return isPending ?
    <h1>Loading...</h1> :
    (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox 
          searchChange={ onSearchChange } 
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={ filteredRobots } />
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}
// <button onClick={() => setCount(count + 1)}>Click Me</button>

export default connect(mapStateToProps, mapDispatchToProps)(App)



