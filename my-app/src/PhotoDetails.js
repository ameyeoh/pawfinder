import React from 'react';
import styled from 'styled-components';
import IconMail from './Icon-Mail';

const Container = styled.div`
  width: 100%;
  height: 206px;
  padding: 0px 20px;
  overflow: hidden;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f4;
`;

const Name = styled.div`
  font-size: 25px;
  font-family: 'Andika New Basic', sans-serif;
  margin-top: 12px;
`;

const Title = styled.div`
  font-size: 23px;
  font-family: 'Andika New Basic', sans-serif;
`;

const Time = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
  font-style: italic;
`;

const Location = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
`;

const Description = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
`;

const Lost = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
  font-color: grey;
`;

const PhotoDetails = ({petName, lat, lon, city, time, contactNo, description}) => {
  // const displayName = petName === 'NA' ? <Lost>lost</Lost> : <Name>{petName.toUpperCase()}</Name>
  const selectName = () => {
    if (petName === 'NA') {
      return (<Lost>lost</Lost>);
    } else {
      return (<Name>{petName.toUpperCase()}</Name>);
    }
  }
  return (
    <Container>
      <Top>
        {selectName()}
        {/*<Name>{petName === 'NA' ? 'Missing' : petName}</Name>*/}
        <IconMail></IconMail>
      </Top>
      <Title>Last seen</Title>
      <Time>{time}</Time>
      <Location>{city}</Location>
      <Description>{description === 'NA' ? '' : description}</Description>
    </Container>
  )
}

export default PhotoDetails;
