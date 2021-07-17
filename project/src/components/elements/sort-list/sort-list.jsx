import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SortItem from '../sort-item/sort-item';
import {sort} from '../../../store/action';
import { SortType } from '../../../const';
import {getSortType} from '../../../store/work-process/selectors';

function SortList() {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const clickHandler = (payload) => {
    setIsOpened(false);
    dispatch(sort(payload));
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


export default React.memo(SortList);
