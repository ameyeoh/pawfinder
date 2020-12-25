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

// const Title = styled.div`
//   font-size: 23px;
//   font-family: 'Andika New Basic', sans-serif;
// `;

const Time = styled.div`
  font-size: 20px;
  font-family: 'Andika New Basic', sans-serif;
  font-style: italic;
  color: #484848;
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
      <Wrapper>
        <Top>
          {selectName()}
          {/*<Name>{petName === 'NA' ? 'Missing' : petName}</Name>*/}
          <IconMail></IconMail>
        </Top>
      </Wrapper>
      <Time>Last seen {time}</Time>
      <Location>{city}</Location>
      <Description>Description: {description === 'NA' ? '' : description}</Description>
    </Container>
  )
}

export default PhotoDetails;
