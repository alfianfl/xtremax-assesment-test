
export const fetchMapData = () => {

};

export const fetchMapDataRequest = () => {
  return {
    type: "FETCH_MAP_DATA_REQUEST",
  };
};

export const fetchMapDataSuccess = (venue) => {
  return {
    type: "FETCH_MAP_DATA_SUCCESS",
    payload: venue,
  };
};
export const fetchMapDataFailure = (errMsg) => {
  return {
    type: "FETCH_MAP_DATA_FAILURE",
    payload: errMsg,
  };
};
