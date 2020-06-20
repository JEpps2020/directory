import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import Container from "./components/Container";
import employees from "./employees.json";


class App extends React.Component {

  state = {
    employees: [],
    nameSort: "DESC",
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
        var checkName = name.name; 
        var lowerName = checkName.toLowerCase();
        if (lowerName.startsWith(letter.toLowerCase(), 0)) {
          filteredNames.push(name);
          console.log(name);
        }
      });
      this.setState({ results: filteredNames });
    }
  
    sortByName = () => {
      let sortedEmployees = this.state.employees;
      sortedEmployees.sort();
      
      var sortOrder = this.state.nameSort;
      var items = this.state.employees;
  
      // sort by name
      items.sort(sortOrder === 'ASC' ? this.ascCompareFnc : this.descCompareFnc);
      console.log(items);
      if(sortOrder === 'ASC')
      {
        sortOrder = 'DESC';
      } else {
        sortOrder = 'ASC';
      }
      
      this.setState({
        employees: sortedEmployees,
        nameSort: sortOrder
      })
    }
  
    ascCompareFnc(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  }
  
  descCompareFnc(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }
    // names must be equal
    return 0;
  }
  
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
            {/* <button onClick={this.sortByName}>Name</button> */}
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
          style={{width: "30%", margin: "0 auto", marginLeft: "auto", marginRight: "auto"}}
        />

      </div>
    </form>

    <div>
      <div className="row">
      <div className="col"><button className="card-btn" style={{ visibility: "hidden" }}>Image</button></div>
            <div className="col"><button className="card-btn" onClick={this.sortByName}>Name</button></div>
      <div className="col"><button className="card-btn" onClick={this.handleFormSubmit}>Phone</button></div>
      <div className="col"><button className="card-btn" onClick={this.handleFormSubmit}>Email</button></div>
      <div className="col"><button className="card-btn" onClick={this.handleFormSubmit}>DOB</button></div>
        </div>
    </div>  
        
        <SearchResults employees={this.state.results} />     
        </Container>
        </Wrapper>
      );
    }
  }
export default App;
