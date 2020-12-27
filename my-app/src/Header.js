import React from 'react';
import styled from 'styled-components';
import IconPaw from './Icon-paw';
import HeaderDetails from './HeaderDetails';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: hsla(0,0%,100%,.95);
  box-shadow: 0 12px 14px 0 rgba(73,73,73,.1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  font-size: 35px;
  font-family: 'Amaranth', sans-serif;
  color: #3f51b5;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <IconPaw />
        <Title>pawfinder</Title>
      </Wrapper>
      <HeaderDetails />
    </Container>
  )
}

export default Header;
