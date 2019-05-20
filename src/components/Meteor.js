import React from 'react';

const Meteor = (props) => {
  const {
    index,
    id,
    name,
    nametype,
    recclass,
    mass,
    fall,
    year,
    reclat,
    reclong
  } = props;

  return(
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{id}</td>
      <td>{nametype}</td>
      <td>{recclass}</td>
      <td>{mass}</td>
      <td>{fall}</td>
      <td>{year}</td>
      <td>{reclat}</td>
      <td>{reclong}</td>
    </tr>
  );
}

export default Meteor;