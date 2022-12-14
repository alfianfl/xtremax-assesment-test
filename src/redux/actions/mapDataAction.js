export const fetchMapData = () => {
  return async (dispatch) => {
    dispatch(fetchMapDataRequest());
    try {
      // get data from github server
      const res = await fetch('https://raw.githubusercontent.com/alfianfl/xtremax-assesment-test/master/data/mapData.json', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          headers: {
            'User-Agent': 'request'
          }
        }
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      dispatch(fetchMapDataSuccess(data));
    } catch (err) {
      dispatch(fetchMapDataFailure(err));
    }
  };
};

export const fetchMapDataRequest = () => {
  return {
    type: 'FETCH_MAP_DATA_REQUEST'
  };
};

export const fetchMapDataSuccess = (data) => {
  return {
    type: 'FETCH_MAP_DATA_SUCCESS',
    data
  };
};
export const fetchMapDataFailure = (errMsg) => {
  return {
    type: 'FETCH_MAP_DATA_FAILURE',
    data: errMsg
  };
};
