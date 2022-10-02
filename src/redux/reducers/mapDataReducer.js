const initialState = {
  data: [],
  error: '',
  loading: false
};

const mapDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MAP_DATA_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_MAP_DATA_SUCCESS':
      return {
        loading: false,
        data: action.payload,
        error: ''
      };
    case 'FETCH_MAP_DATA_FAILURE':
      return {
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default mapDataReducer;
