import React from 'react';
import styled from 'styled-components';
import S3FileUpload from 'react-s3';
import axios from 'axios';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationInput from './LocationInput';

const Container = styled.form`
    position: absolute;
    top: 47%;
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
  font-size: 25px;
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
      address: '',
      petName: undefined,
      url: '',
      lat: '',
      lon: '',
      city: '',
      time: 'less than 15 minutes ago',
      contactNo: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.getCity = this.getCity.bind(this);
    this.getConfig = this.getConfig.bind(this);
  }

  handleChange(e) {
    if (e.target.value === 'found') {
      this.setState({petName: 'NA'});
    }
    if (e.target.value === 'missing' || e.target.value === 'select pet status') {
      this.setState({petName: undefined});
    }
    this.setState({[e.target.name]: e.target.value});
  }

  handleAddress(address) {
    this.setState({ address });
  };

  getCity(addressComponents) {
    // maps length of address components (key) to the index of city (value)
    const selector = {
      4: 0,
      8: 2,
      9: 3
    }
    const cityIndex = selector[addressComponents.length] ? selector[addressComponents.length] : 0;
    return addressComponents[cityIndex].long_name;
  }

  handleSelect(address) {
    geocodeByAddress(address)
    .then(results => {
      const selectedCity = this.getCity(results[0].address_components);
      this.setState({city: selectedCity});
      return results;
    })
    .then(results => getLatLng(results[0]))
    .then(latLng => this.setState({lat: latLng.lat, lon: latLng.lng}))
    .catch(error => console.error('Error', error));
  };

  handleContact() {
    const value = this.state.contactNo;
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return (
      value.replace(phoneRegex, '($1) $2-$3')
    )
  }

  getConfig() {
    return ({
      bucketName: process.env.REACT_APP_AWS_BUCKETNAME,
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESSKEY
    });
  }

  handleUpload(e) {
    S3FileUpload.uploadFile(e.target.files[0], this.getConfig())
    .then((data) => {
      return data.location;
    })
    .then((location) => {
      this.setState({url: location});
    })
    .catch((err) => {
      alert(err);
    });
  }

  handleSubmit(e) {
    console.log('submitted clicked');
    axios.post('/api/dogs', {
      petname: this.state.petName,
      url: this.state.url,
      lat: this.state.lat,
      lon: this.state.lon,
      city: this.state.city,
      time: this.state.time,
      contactno: this.state.contactNo,
      description: this.state.description
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // todo: take to next page
    e.preventDefault();
  }

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <Title>Start Your Alert</Title>
        <Select id="petStatus" name="petStatus" onChange={this.handleChange} value={this.state.petStatus} required>
          <option value="select pet status">Select Pet Status</option>
          <option value="missing">missing</option>
          <option value="found">found</option>
        </Select>
        <Input type="text" id="pname" name="petName" placeholder="pet name" value={this.state.petName} onChange={this.handleChange} required/>
        <LocationInput handleAddress={this.handleAddress} handleSelect={this.handleSelect} value={this.state.address}/>

        <Input
          type="text"
          id="contact"
          name="contact"
          pattern="[(][0-9]{3}[)] [0-9]{3}[-][0-9]{4}"
          placeholder="contact no"
          value={this.handleContact()}
          maxLength="14"
          onChange={
            (event) => this.setState({contactNo: event.target.value})}
          required/>
        <Input type="text" id="description" name="description" placeholder="description" onChange={this.handleChange}/>
        <Title style={{marginTop: '50px'}}>Upload A Photo</Title>
        <Photo>
          <Upload type="file" id="upload" accept="image/png, image/jpeg, image/jpg" onChange={this.handleUpload}/>
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
