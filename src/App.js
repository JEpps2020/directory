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
    userInput: ""
    };

    searchName = () => {
      // // Filter this.state.friends for friends with an id not equal to the id being removed
      // const friends = this.state.friends.filter(friend => friend.id !== id);
      // // Set this.state.friends equal to the new friends array
      // this.setState({ friends });
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      // Updating the input's state
      this.setState({
        [name]: value
      });
    };

    componentDidMount() {
        this.setState({ employees: employees });
    }
  
    render() {
      return (
        <Wrapper>
          <Header>Employee Header</Header>
          <Container>
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
      
        
        <SearchResults employees={this.state.employees} />     
        </Container>
        </Wrapper>
      );
    }
  }
export default App;
