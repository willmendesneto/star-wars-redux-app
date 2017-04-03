import React, { PropTypes } from 'react';
import StarWarsItem from './StarWarsItem';

const filterPersonByText = (name, filterTextLowerCase) => {
  return name.toLowerCase().indexOf(filterTextLowerCase) !== -1;
};

const StarWarsListItems = ({ people, filterText }) => {
  const filterTextLowerCase = filterText.toLowerCase();
  const filteredPeople = people
    .filter(p => filterPersonByText(p.name, filterTextLowerCase))
    .map((person, index) => <StarWarsItem key={index} person={person} />);

  return (
    <table className="table table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Planet Name</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        { filteredPeople }
      </tbody>
    </table>
  );
};

StarWarsListItems.propTypes = {
  people: PropTypes.array.isRequired,
  filterText: PropTypes.string
};

export default StarWarsListItems;
