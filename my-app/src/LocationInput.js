import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import styled from 'styled-components';

const Input = styled.input`
  width: 445px;
  height 65px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    cursor: text;
  }
`;

const LocationInput = ({handleAddress, handleSelect, value}) => {
  return (
    <PlacesAutocomplete
      value={value}
      onChange={handleAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <Input
            {...getInputProps({
              placeholder: 'nearest address last seen',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion, i) => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer', padding: '12px 20px', fontSize: '16px', fontFamily: 'Open Sans', width: '405px', height: '45px' }
                : { backgroundColor: '#ffffff', cursor: 'pointer', padding: '12px 20px', fontSize: '16px', fontFamily: 'Open Sans', width: '405px', height: '45px' };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                  key={i}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationInput;
