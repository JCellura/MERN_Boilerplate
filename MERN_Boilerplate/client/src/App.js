import React, {Component} from "react";
// import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from "./pages/Books";
import Blank from "./pages/Blank";
import Navbar from "./components/Nav";
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Wrapper>
            <Navbar

            />

            <Route
              exact path="/"
              component={Blank}
            />
            <Route
              path="/books"
              component={Books}
            />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
