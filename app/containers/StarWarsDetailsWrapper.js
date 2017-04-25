import React, { Component, PropTypes } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import StarWarsDetails from '../components/StarWars/StarWarsDetails';
import LoadingContent from '../components/Loader/LoadingContent';

class StarWarsDetailsWrapper extends Component {

  static propTypes = {
    person: PropTypes.object,
    routeParams: PropTypes.object,
    fetchPersonDetails: PropTypes.func.isRequired
  }

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.fetchPersonDetails(this.props.routeParams.personId);
  }

  render() {
    if (!this.props.person) {
      return <LoadingContent />;
    }

    return (
      <div className="col-md-6 col-md-offset-3">
        <StarWarsDetails person={this.props.person} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    person: state.person
  };
};

export default connect(mapStateToProps, actions)(StarWarsDetailsWrapper);
