import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const Container = styled.div`
  // background-image: url(paws.png), url(paws.png);
  // background-image: url(pawprints.jpg);
  // background-color: #3f51b5;
  background-color: #f3f3f3;
  background-repeat: no-repeat;
  // background-position: top center;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Bar = styled.div`
  background-color: #3f51b5;
  width: 100vw;
  height: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 35px;
  font-family: 'Amaranth', sans-serif;
  // color: #3f51b5;
  // color: #d1d1d1;
  color: white;
  margin-top: 70px;
`;

const Details = styled.div`
  font-size: 20px;
  // font-family: 'Open Sans', sans-serif;
  font-family: 'Amaranth', sans-serif;
  // color: #3f51b5;
  // color: #d1d1d1;
  color: white;
  margin-top: 2px;
`;

const LandingPage = () => {
  return (
    <Container>
      <Bar>
        <Title>pawfinder</Title>
        <Details>Keeping your pets safe and healthy</Details>
        <Details>with help from a connected community</Details>
      </Bar>
      <Form>
      </Form>
    </Container>
  )
}

export default LandingPage;
