import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 42%;
    left: 50%;
    width: 454px;
    height: 850px;
    max-height: 100vh;
    overflow-y: auto;
    background: #fff;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 12px;
    padding: 70px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
    transform: translateX(-50%) translateY(-50%);
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
  font-size: 35px;
  font-family: 'Amaranth', sans-serif;
  color: #3f51b5;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 445px;
  height 65px; 
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 445px;
  height 65px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    cursor: text;
  }
`;

const Photo = styled.div`
  width: 445px;
  height 65px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

const Upload = styled.input`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  ::-webkit-file-upload-button {
    width: 150px;
    height 45px;
    border: white;
    padding: 0.5em;
  };
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Submit = styled.button`
  width: 445px;
  height 65px;
  background-image: linear-gradient(to right, #3f51b5 0%, #4d5eb9 51%, #a1c4fd 100%);
  color: white;
  padding: 14px 20px;
  margin-top: 50px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const Link = styled.div`
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const DetailsText = styled.div`
  font-size: 17px;
  font-family: 'Open Sans', sans-serif;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petStatus: '',
      dog: {},
    };
  }

  render() {
    return (
      <Container>
        <Title>Start Your Alert</Title>
        <Select id="petStatus" name="petStatus">
          <option value="select pet status">Select Pet Status</option>
          <option value="missing">missing</option>
          <option value="found">found</option>
        </Select>
        <Input type="text" id="pname" name="petname" placeholder="pet name"/>
        <Input type="text" id="location" name="location" placeholder="nearest address last seen"/>
        <Input type="text" id="contact" name="contact" placeholder="contact no"/>
        <Input type="text" id="description" name="description" placeholder="description"/>
        <Title style={{marginTop: '50px'}}>Upload A Photo</Title>
        <Photo>
          <Upload type="file" id="upload"/>
        </Photo>
        <Submit type="submit" value="Submit">Submit</Submit>
        <Wrapper>
          <Details>
            <DetailsText style={{color: 'grey'}}>New to PawFinder?</DetailsText>
            <Link style={{color: '#3f51b5', marginLeft: '4px'}}>Sign up</Link>
          </Details>
          <Details>
            <DetailsText style={{color: 'grey'}}>Visit our</DetailsText>
            <Link style={{color: '#3f51b5', marginLeft: '4px'}}>homepage</Link>
          </Details>
        </Wrapper>
      </Container>
    )
  }
}

export default Form;
