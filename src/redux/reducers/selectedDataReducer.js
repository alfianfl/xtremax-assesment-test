const initialState = {
  data: null,
  selectedAttractionFromMenu: null
};

const selectedDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_DATA':
      return {
        ...state,
        data: action.data
      };
    case 'SELECT_DATA_FROM_MENU':
      return {
        ...state,
        selectedAttractionFromMenu: action.data
      };
    default:
      return state;
  }
};

export default selectedDataReducer;
