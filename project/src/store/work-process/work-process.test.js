import {workProcess} from './work-process';
import {ActionType, setActiveOfferId} from '../action';
import {Cities, SortType} from '../../const';

describe('Work Process', () => {
  it('should return initial state by default', () => {
    const initialState = {
      cities: Object.values(Cities),
      city: Cities.PARIS.name,
      sortType: SortType.DEFAULT,
      activeOffer: null,
    };
    expect(workProcess(undefined, {})).toEqual(initialState);
  });

  it('should set city name by change city', () => {
    const state = {
      city: Cities.PARIS.name,
    };
    const changedCityName = 'Amsterdam';
    const changeCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: changedCityName,
    };
    const expectedAction = {
      city: changedCityName,
    };
    expect(workProcess(state, changeCityAction)).toEqual(expectedAction);
  });

  it('should set sort type by sort', () => {
    const state = {
      sortType: SortType.DEFAULT,
    };
    const sortType = {
      sortType: SortType.HIGH_TO_LOW,
    };
    const sortAction = {
      type: ActionType.SORT,
      payload: sortType,
    };
    const expectedAction = {
      sortType: sortType,
    };
    expect(workProcess(state, sortAction)).toEqual(expectedAction);
  });

  it('should set active offer type by set active offer id', () => {
    const state = {
      activeOffer: null,
    };
    const activeOffer = 1;

    const setActiveOfferIdAction = {
      type: ActionType.ACTIVE_OFFER_ID,
      payload: activeOffer
    };
    const expectedAction = {
      activeOffer: activeOffer,
    };
    expect(workProcess(state, setActiveOfferIdAction)).toEqual(expectedAction);
  });
});
