import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const StarWarsDetails = ({ person }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Name: { person.name }</li>
        <li className="list-group-item">Height: { person.height }</li>
        <li className="list-group-item">Mass: { person.mass }</li>
        <li className="list-group-item">Hair Color: { person.hair_color }</li>
        <li className="list-group-item">Skin Color: { person.skin_color }</li>
        <li className="list-group-item">Eye Color: { person.eye_color }</li>
        <li className="list-group-item">Birth Year: { person.birth_year }</li>
        <li className="list-group-item">Gender: { person.gender }</li>
        <li className="list-group-item">This character is on <b>{ person.films.length }</b> movie(s)</li>
        <li className="list-group-item">This character belongs to <b>{ person.species.length }</b> specie(s)</li>
        <li className="list-group-item">This character is pilot of <b>{ person.starships.length }</b> starship(s) and <b>{ person.vehicles.length }</b> vehicle(s)</li>
      </ul>
      <Link className="btn btn-primary" to={'/'}>Back to list</Link>
    </div>
  );
};

StarWarsDetails.propTypes = {
  person: PropTypes.object.isRequired,
};

export default StarWarsDetails;
