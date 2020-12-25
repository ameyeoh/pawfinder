import React from 'react';
import axios from 'axios';
import Map from './Map';
import Header from './Header';
import ViewList from './ViewList';
import styled from 'styled-components';

const Content = styled.div`
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

class App extends React.Component {
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
    })
  }

  render() {
    return (
      <Content>
        <Top>
          <Header />
        </Top>
        <Bottom>
          <Map />
          <ViewList dogs={this.state.dogs}/>
        </Bottom>
      </Content>
    );
  }
}

export default App;
