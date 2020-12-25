import React from 'react';
import styled from 'styled-components';
import Photo from './Photo';
import PhotoDetails from './PhotoDetails';

const Container = styled.div`
  width: 700px;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
  overflow-y: auto;
  ::-webkit-scrollbar {display:none;}
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const ViewList = ({dogs}) => {
  const items = dogs.map(({
    id, url, petname, lat, lon, city, time, contactNo, description
  }) => (
    <Card key={id}>
      <Photo imgUrl={url}/>
      <PhotoDetails
        petName={petname}
        lat={lat}
        lon={lon}
        city={city}
        time={time}
        contactNo={contactNo}
        description={description}
      />
    </Card>
  ));

  return (
    <Container className="right-container">
      {items}
    </Container>

  )
}

export default ViewList;
