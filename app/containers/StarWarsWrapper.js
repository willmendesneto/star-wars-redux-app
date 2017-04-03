import React, { Component, PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Pagination from '../components/StarWars/Pagination';
import SearchBar from '../components/StarWars/SearchBar';
import StarWarsListItems from '../components/StarWars/StarWarsListItems';
import LoadingContent from '../components/Loader/LoadingContent';

class StarWarsWrapper extends Component {

  static propTypes = {
    next: PropTypes.string,
    previous: PropTypes.string,
    fetchPeople: PropTypes.func.isRequired,
    fetchPeopleByPaginationURL: PropTypes.func.isRequired,
    filterTable: PropTypes.func.isRequired,
    people: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  componentWillMount() {
    this.props.fetchPeople();
  }

  onNextClick() {
    this.props.fetchPeopleByPaginationURL(this.props.next);
  }

  onPreviousClick() {
    this.props.fetchPeopleByPaginationURL(this.props.previous);
  }

  handleFilterTextInput(filterText) {
    this.props.filterTable(filterText);
    this.setState({ filterText: filterText });
  }

  render() {
    const {
      people,
      next,
      previous
    } = this.props;

    if (!people.length) {
      return <LoadingContent />;
    }

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <SearchBar
            filterText={this.state.filterText}
            onFilter={this.handleFilterTextInput} />
          <StarWarsListItems
            filterText={this.state.filterText}
            people={people} />
          <Pagination
            onPreviousClick={this.onPreviousClick}
            isPreviousEnabled={!!previous}
            isNextEnabled={!!next}
            onNextClick={this.onNextClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    next: state.people.next,
    people: state.people.all,
    previous: state.people.previous
  };
};

export default connect(mapStateToProps, actions)(StarWarsWrapper);
