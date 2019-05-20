import React from 'react';
import Meteor from './Meteor';
import Table from 'react-bootstrap/Table'

const Results = (props) => {
  
  return(
    <Table responsive>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>ID</th>
          <th>Type</th>
          <th>Class</th>
          <th>Mass</th>
          <th>Fall</th>
          <th>Year</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>

      <tbody>
        { props.meteors.map( (meteor, index) =>
          <Meteor
            index={ index }
            key={ meteor.id.toString() }
            id={ meteor.id }
            name={ meteor.name }
            nametype={ meteor.nametype }
            recclass={ meteor.recclass }
            mass={ meteor.mass }
            fall={ meteor.fall }
            year={ meteor.year }
            reclat={ meteor.reclat }
            reclong={ meteor.reclong }
            geolocation={ meteor.geolocation }
          />
        )}
      </tbody>
    </Table>
  );
}

export default Results;