import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';


class SearchForm extends Component {
  state = {
    value: ''
  }

  handleValueChange = (e) => {
    this.setState({ 
      value: e.target.value
    });
    this.props.handleFilter(e.target.value);
  }

  render() {
    return(
      <Form inline>
        <FormGroup controlId="formInlineEmail">
          <FormControl 
          type="search" 
          placeholder="Enter a Meteor Name"
          value={this.state.value}
          onChange={this.handleValueChange}
          />
        </FormGroup>
        {' '}
        <Button type="submit">
          Search
        </Button>
      </Form>
    );
  }
};

export default SearchForm;