import { ADD_INQUIRY } from '../actions/inquiryActions';

const inquiryReducer = (state = {inquiries:[]},action) => {
  switch(action.type)
  {
    case ADD_INQUIRY:
      return {inquiries:action.payload};
    default:
      return state;
  }
};


export default inquiryReducer;
