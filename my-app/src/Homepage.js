import React from 'react';
import axios from 'axios';
import Mapper from './Mapper';
import Header from './Header';
import ViewList from './ViewList';
import Form from './Form';
import styled from 'styled-components';

const HomePage = styled.div`
  width: 100%;
  height: 100%;
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
  opacity: ${(props) => (props.modalActive ? '0.5' : '1')};
  filter: ${(props) => (props.modalActive ? 'blur(1px)' : 'blur(0px)')};
  transition: opacity 0.45s;
`;

const Modal = styled.div`
  // width: 100%;
  // height: 100%;
  width: 454px;
  height: 850px;
  top: 20%;
  left: 40%;
  position: absolute;
`;

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      modal: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.exitModal = this.exitModal.bind(this);
  }

  toggleModal() {
    this.setState({modal: !this.state.modal})
  }

  exitModal() {
    if (this.state.modal) {
      this.setState({modal: false});
    }
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
    const displayModal = () => {
      if (this.state.modal) {
        return (
          <Modal className="modal">
            <Form className="modal-form"/>
          </Modal>
        );
      }};

    return (
      <HomePage className="homepage" >
        <Top className="header" onClick={this.exitModal}>
          <Header toggleModal={this.toggleModal} />
        </Top>
        <Bottom modalActive={this.state.modal} onClick={this.exitModal}>
          <Mapper dogs={this.state.dogs}/>
          <ViewList dogs={this.state.dogs}/>
        </Bottom>
        {displayModal()}
      </HomePage>
    );
  }
}

export default Homepage;
