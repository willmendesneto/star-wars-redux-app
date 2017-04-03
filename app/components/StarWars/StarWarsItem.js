import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const StarWarsItem = ({ person }) => {
  const { id, name, planet } = person;
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{planet.name}</td>
      <td><Link className="btn btn-primary" to={`/details/${id}`}>Show details</Link></td>
    </tr>
  );
};

StarWarsItem.propTypes = {
  person: PropTypes.object.isRequired
};

export default StarWarsItem;
