import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SortItem from '../sort-item/sort-item';
import { ActionCreator } from '../../store/action';
import { SortType } from '../../const';

function SortList({sortType, onSort}) {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = (payload) => {
    setIsOpened(false);
    onSort(payload);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => setIsOpened(!isOpened)}
      >
        {sortType.text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {
          Object.keys(SortType).map((item) => (
            <SortItem
              key={item}
              type={item}
              isActive={sortType === item}
              onClick={clickHandler}
            />
          ))
        }
      </ul>
    </form>
  );
}

SortList.propTypes = {
  onSort: PropTypes.func.isRequired,
  sortType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreator.sort(sortType));
  },
});

export {SortList};

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
