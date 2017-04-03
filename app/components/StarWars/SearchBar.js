import React, { PropTypes, Component } from 'react';
import Form from '../Form';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.props.onFilter(e.target.value);
  }

  render() {
    const { filterText, placeholder } = this.props;
    return (
      <Form className="form-horizontal">
        <div className="form-group">
          <div className="col-lg-12">
            <input
              className="form-control"
              type="text"
              value={filterText}
              onChange={this.onChangeHandler}
              placeholder={placeholder} />
          </div>
        </div>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string,
  onFilter: PropTypes.func,
  placeholder: PropTypes.string
};

SearchBar.defaultProps = {
  placeholder: 'Filter people...'
};

export default SearchBar;
