import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import employees from "./employees.json";


class App extends React.Component {

  state = {
    employees
    };

    render() {
      return (
        <Wrapper>
          <Header>Employee Header</Header>
          <SearchBox></SearchBox>
        </Wrapper>
      );
    }
  }
export default App;
