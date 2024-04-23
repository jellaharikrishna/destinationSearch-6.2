import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const value = searchInput.toLowerCase()
    const filteredPlaces = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(value),
    )
    return (
      <div className="destinationSearch-container">
        <h1>Destination Search</h1>
        <div className="search-box">
          <input
            className="search-input"
            placeholder="Search"
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="places-container">
          {filteredPlaces.map(eachPlace => (
            <DestinationItem placesDetails={eachPlace} key={eachPlace.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
