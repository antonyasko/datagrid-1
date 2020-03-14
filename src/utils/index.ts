import { DataModel } from '../data/data-model';
import { StateModel } from '../reducer/types';
import { filterVisibility } from './visibility-utils';
import { filterAll, filterBool, filterEnum } from './filter-utils';
import { sort } from './sorting-utils';

const applyAllSettings = (state: StateModel, data?: DataModel[]): DataModel[] => {
  const {
    sortingColumns,
    currentBool,
    enumFilters,
    hiddenColumns,
    query,
    usersData,
  } = state;

  let resData = data || usersData;

  resData = filterBool(resData, currentBool);
  resData = filterEnum(resData, enumFilters);
  resData = filterAll(resData, query);
  resData = filterVisibility(resData, hiddenColumns);
  resData = sort(resData, sortingColumns);

  return resData;
};

export default applyAllSettings;
