import React from 'react';
import axios from 'axios';

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
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;
