import React from 'react';
import styled from 'styled-components';
import IconMail from './Icon-Mail';

const Container = styled.div`
  width: 100%;
  height: 206px;
  padding: 0px 20px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #f1f1f4;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 25px;
  font-family: 'Andika New Basic', sans-serif;
  margin-top: 12px;
`;

const Time = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
  font-style: italic;
  color: #484848;
`;

const LocWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Location = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
  margin-left: 2px;
`;

const Description = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Lost = styled.div`
  font-size: 14px;
  font-family: Arial,sans-serif;
  color: white;
  height: 8px;
  background: #263588f7;
  padding: 12px 5px 3px 8px;
  border-radius: 55px;
  line-height: 2px;
  letter-spacing: 2.3px;
  margin-top: 10px;
`;

const Missing = styled.div`
  font-size: 14px;
  font-family: Arial,sans-serif;
  color: white;
  height: 8px;
  background: #0d5110;
  padding: 12px 5px 3px 8px;
  border-radius: 55px;
  line-height: 2px;
  letter-spacing: 2.3px;
  margin-top: 20px;
  margin-left: 9px;
`;

const PhotoDetails = ({petName, lat, lon, city, time, contactNo, description}) => {
  const selectName = () => {
    if (petName === 'NA') {
      return (<Lost>LOST</Lost>);
    } else {
      return (
        <NameWrapper>
          <Name>{petName.toUpperCase()}</Name>
          <Missing>MISSING</Missing>
        </NameWrapper>
      );
    }
  }
  return (
    <Container>
      <Wrapper>
        <Top>
          {selectName()}
          <IconMail></IconMail>
        </Top>
      </Wrapper>
      <Time>Last seen {time}</Time>
      <LocWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15pt" height="15pt" viewBox="0 0 15 15" version="1.1">
          <g id="surface1">
            <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(93.72549%,32.156863%,38.039216%)', fillOpacity: 1}} d="M 12.371094 4.949219 C 12.371094 9.175781 7.421875 14.84375 7.421875 14.84375 C 7.421875 14.84375 2.472656 9.269531 2.472656 4.949219 C 2.472656 2.214844 4.6875 0 7.421875 0 C 10.15625 0 12.371094 2.214844 12.371094 4.949219 Z M 12.371094 4.949219 " />
            <path style={{stroke: 'none', fillRule: 'nonzero', fill: 'rgb(93.333333%,93.72549%,93.333333%)', fillOpacity: 1}} d="M 10.679688 4.851562 C 10.679688 6.648438 9.222656 8.109375 7.421875 8.109375 C 5.621094 8.109375 4.164062 6.648438 4.164062 4.851562 C 4.164062 3.054688 5.621094 1.59375 7.421875 1.59375 C 9.222656 1.59375 10.679688 3.054688 10.679688 4.851562 Z M 10.679688 4.851562 " />
          </g>
        </svg>
        <Location>{city}</Location>
      </LocWrapper>
      <Description>Description: {description === 'NA' ? '' : description}</Description>
    </Container>
  )
}

export default PhotoDetails;
