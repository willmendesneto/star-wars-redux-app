import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const StarWarsDetails = ({ person }) => {
  const filmsLength = !!person.films ? person.films.length : 0;
  const speciesLength = !!person.species ? person.species.length : 0;
  const starshipsLength = !!person.starships ? person.starships.length : 0;
  const vehiclesLength = !!person.vehicles ? person.vehicles.length : 0;
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
        <li className="list-group-item">This character is on <b>{ filmsLength }</b> movie(s)</li>
        <li className="list-group-item">This character belongs to <b>{ speciesLength }</b> specie(s)</li>
        <li className="list-group-item">This character is pilot of <b>{ starshipsLength }</b> starship(s) and <b>{ vehiclesLength }</b> vehicle(s)</li>
      </ul>
      <Link className="btn btn-primary" to={'/'}>Back to list</Link>
    </div>
  );
};

StarWarsDetails.propTypes = {
  person: PropTypes.object.isRequired,
};

export default StarWarsDetails;
