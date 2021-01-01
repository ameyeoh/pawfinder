import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
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
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  &:hover {
    border: 1px solid #3f51b5;
    transform: scale(1.03);
  };
`;

const HighlightCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border: 1px solid #3f51b5;
  transform: scale(1.03);
`;

const ViewList = ({dogs, pinId}) => {
  const itemsRef = useRef(new Array());
  const cards = dogs.map(({
    id, url, petname, lat, lon, city, time, contactNo, description
  }) => ( pinId === id ?
    (<HighlightCard key={id} ref={(element) => itemsRef.current.push(element)}>
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
    </HighlightCard>) :
      (<Card key={id} ref={(element) => itemsRef.current.push(element)}>
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
      </Card>)
  ));

  const handleScroll = pinIndex => {
    if (pinIndex) {
      console.log('items ref', itemsRef);
      itemsRef.current[pinIndex].scrollIntoView({ block: "center", behavior: "smooth" });
    } else {
      console.log('initial render');
    }
  };

  return (
    <Container className="right-container">
      {cards}
      {handleScroll(pinId)}
    </Container>

  )
}

export default ViewList;
