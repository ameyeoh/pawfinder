import React from 'react';
import axios from 'axios';
import Mapper from './Mapper';
import Header from './Header';
import ViewList from './ViewList';
import styled from 'styled-components';

const HomePage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 70px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    axios.get('/api/dogs')
    .then((res) => {
      this.setState({ dogs: res.data });
    })
    .then(() => {
      console.log(this.state.dogs);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <HomePage>
        <Top>
          <Header />
        </Top>
        <Bottom>
          <Mapper dogs={this.state.dogs}/>
          <ViewList dogs={this.state.dogs}/>
        </Bottom>
      </HomePage>
    );
  }
}

export default Homepage;
