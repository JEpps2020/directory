import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import Container from "./components/Container";
import employees from "./employees.json";


class App extends React.Component {

  state = {
    employees: []
    };

    componentDidMount() {
        this.setState({ employees: employees });
    }
  
    render() {
      return (
        <Wrapper>
          <Header>Employee Header</Header>
          <Container>
        <SearchBox>
        </SearchBox> 
        
        <SearchResults employees={this.state.employees} />     
        </Container>
        </Wrapper>
      );
    }
  }
export default App;
