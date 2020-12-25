import React from 'react';
import styled from 'styled-components';

const StyledPhoto = styled.img`
  width: 220px;
  height: 206px;
  border: 1px solid #e6e6e6;
  border-radius: 12px 0px 0px 12px;
`;

const Photo = ({imgUrl}) => {
  return (
    <StyledPhoto src={imgUrl}></StyledPhoto>
  )
}

export default Photo;
