import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";
import Container from "./components/Container";
import employees from "./employees.json";


class App extends React.Component {

  state = {
    employees: [],
    userInput: "",
    results: []
    };
  
  searchName = value => {

      this.findName(this.state.employees,0,value);

    };

    componentDidMount() {
      
      this.setState({ employees: employees });
      this.setState({ results: employees});

    }

    findName(names, index, letter) {
  
      var filteredNames = [];
      names.forEach(name => {
        if (name.name.startsWith(letter,0))
        {
          filteredNames.push(name);
          console.log(name);
        }  
      });
  
      this.setState({ results: filteredNames });
    }
  
    sortByName= () =>{
      console.log(this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1))
      //this.setState({ employees: });

    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const name = event.target.name;
      const value = event.target.value;
      // Updating the input's state
      this.setState({
        [name]: value
      });
      //console.log(name);
      //console.log(value);
      this.searchName(value);
    };

    render() {
      return (
        <Wrapper>
          <Header>Employee Header</Header>
          <Container>
            <button onClick={this.sortByName}>Name</button>
          <form className="search">
      <div className="form-group">
        <input
          value={this.state.userInput}
          // onChange={props.handleInputChange}
          name="userInput"
          type="text"
          className="form-control"
          placeholder="Search"
          id="employee"
          onChange={this.handleInputChange}
        />

      </div>
    </form>
      
        
        <SearchResults employees={this.state.results} />     
        </Container>
        </Wrapper>
      );
    }
  }
export default App;
