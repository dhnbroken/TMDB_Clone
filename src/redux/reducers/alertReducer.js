import { ERROR, SUCCESS } from '../constants';

const initState = {
  msg: '',
  status: false, // false == fail >< true == success,
  isLoading: false,
};

const alertReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        msg: action.payload,
        status: true,
        isLoading: false,
      };
    case ERROR:
      return {
        ...state,
        msg: action.payload,
        status: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default alertReducer;
