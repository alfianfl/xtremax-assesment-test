const initialState = {
  data: null,
  dataFromMenu: null
};

const selectedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATA':
      return {
        ...state,
        data: action.payload
      };
    case 'SELECT_DATA_FROM_MENU':
      return {
        ...state,
        dataFromMenu: action.payload
      };
    default:
      return state;
  }
};

export default selectedDataReducer;
