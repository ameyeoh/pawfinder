import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: center;
`;

const Text = styled.div`
  color: #979797;
  font-family: 'Andika New Basic', sans-serif;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    color: #3f51b5;
  }
`;

const Pipe = styled.div`
  height: 30px;
  margin: auto 0;
  border-left: 1px solid;
  border-color: #979797; 
  margin-left: 20px;
  margin-right: 20px;
`;

const HeaderDetails = ({toggleModal}) => {
  return (
    <Container>
      <Text onClick={toggleModal}>POST A PHOTO</Text>
      <Pipe></Pipe>
      <Text>SIGN IN</Text>
    </Container>
  )
}

export default HeaderDetails;
