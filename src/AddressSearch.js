import React, { useState } from 'react'
import PlacesAutocomplete,{
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
import Display from './Display';
function AddressSearch() {
    const [show,setShow] = useState(false)
    const [address,setAddress] = useState('')
    const [coordinates,setCoordinates] = useState({
        lat:null,
        lng:null
    })

const handleSelect = async value=>
{
    const result = await geocodeByAddress(value);
    const latlng = getLatLng(result[0]); 

    setAddress(address);
    setCoordinates(latlng);
    setShow(true);
}


    return (
        <div>
            <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
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
        )}
      </PlacesAutocomplete>
      {show?<Display latlng={coordinates} />:null}
        </div>
    )
}

export default AddressSearch
