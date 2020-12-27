import React from 'react';
import styled from 'styled-components';

const Pin = styled.svg`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const MapperPin = () => {
  return (
    <Pin xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28pt" height="28pt" viewBox="0 0 28 28" version="1.1">
      <g id="surface1">
        <path style={{stroke: '#302434', fillRule: 'nonzero', fill: 'rgb(239,82,97)', fillOpacity: 1}} d="M 23.089844 9.238281 C 23.089844 17.125 13.855469 27.707031 13.855469 27.707031 C 13.855469 27.707031 4.617188 17.300781 4.617188 9.238281 C 4.617188 4.136719 8.75 0 13.855469 0 C 18.957031 0 23.089844 4.136719 23.089844 9.238281 Z M 23.089844 9.238281 " />
        <path style={{stroke: '#302434', fillRule: 'nonzero', fill: 'rgb(93.333333%,93.72549%,93.333333%)', fillOpacity: 1}} d="M 19.9375 9.058594 C 19.9375 12.414062 17.214844 15.140625 13.855469 15.140625 C 10.492188 15.140625 7.769531 12.414062 7.769531 9.058594 C 7.769531 5.699219 10.492188 2.976562 13.855469 2.976562 C 17.214844 2.976562 19.9375 5.699219 19.9375 9.058594 Z M 19.9375 9.058594 " />
      </g>
    </Pin>
  )
}

export default MapperPin;
