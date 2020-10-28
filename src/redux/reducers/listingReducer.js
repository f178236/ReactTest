import { ADD_LISTING } from '../actions/listingActions';

const listingReducer = (state = {description:null},action) => {
  switch(action.type)
  {
    case ADD_LISTING:
      return {description:action.payload};
    default:
      return state;
  }
};

export default listingReducer;
