import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
// import Container from "./components/Container";
// import SearchForm from "./components/SearchForm";



class App extends Component {
  state = {
  friends:[]
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    
  }

  handleInputChange = event => {
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name!</h1>
          <SearchForm
           
          />
        </Container>
        
      </div>
    );
  }
}

export default App;



