import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  /* state = {
  gmapsLoaded: false,
	}

	initMap = () => {
		this.setState({
		gmapsLoaded: true,
	})
	}

	componentDidMount () {
	window.initMap = this.initMap
	const gmapScriptEl = document.createElement(`script`)
	gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAZkGgzuQvyQPjsBnvFIOdXroL4_M-KJvE&libraries=places&callback=initMap`
	document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
	} */

	render () {
	return (
		<PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
		  /* <div>
			{this.state.gmapsLoaded && (
			
			)}
		  </div> */
        )}
      </PlacesAutocomplete>
	  
		
	)
	}
	}
export { LocationSearchInput }; 



