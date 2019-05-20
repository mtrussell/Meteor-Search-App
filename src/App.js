import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import SearchForm from './components/SearchForm';
import Results from './components/Results';

class App extends Component {
  constructor() {
    super();
    this.state = {
      meteors: [],
      filteredMeteors: []
    }
  }

  componentDidMount() {
    fetch('https://data.nasa.gov/resource/gh4g-9sfh.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        meteors: data
      });
    });
  }

  

  handleFilter = (v) => {
    let updatedList = this.state.meteors;
    updatedList = updatedList.filter( meteor => {
      return meteor.name.toLowerCase().search(
        v.toLowerCase() 
      ) !== -1;
    });
    this.setState({meteors: updatedList});
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1>Meteors List</h1>
            <p>
              This is a list of NASA's recorded meteors
            </p>
            <SearchForm handleFilter={this.handleFilter} />
          </Container>
        </Jumbotron>
        <Results 
          meteors={this.state.meteors}
          filteredMeteors={this.state.filteredMeteors}
        />
      </div>
    );
  }
}

export default App;
