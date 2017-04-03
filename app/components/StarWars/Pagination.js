import React, { PropTypes } from 'react';
import Button from '../Button';
import Form from '../Form';

const Pagination = (props) => {
  const {
    isPreviousEnabled,
    onPreviousClick,
    onPreviousLabel,
    isNextEnabled,
    onNextClick,
    onNextLabel
  } = props;
  return (
    <Form>
      <div className="btn-group" role="group">
        <Button
          type="button"
          className={'btn-previous'}
          disabled={!isPreviousEnabled}
          onClick={onPreviousClick} >
          {onPreviousLabel}
        </Button>
        <Button
          type="button"
          className={'btn-next'}
          disabled={!isNextEnabled}
          onClick={onNextClick} >
          {onNextLabel}
        </Button>
      </div>
    </Form>
  );
};

Pagination.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousLabel: PropTypes.string,
  onNextLabel: PropTypes.string,
  isPreviousEnabled: PropTypes.bool,
  isNextEnabled: PropTypes.bool
};

Pagination.defaultProps = {
  onPreviousLabel: '< Previous',
  onNextLabel: 'Next >'
};

export default Pagination;
