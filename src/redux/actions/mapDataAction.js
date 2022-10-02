export const selectData= (data) => {
  return {
    type: "SELECT_DATA",
    data
  };
};

export const selectDataFromMenu = (data) => {
  return {
    type: "SELECT_DATA_FROM_MENU",
    dataFromMenu: data
  };
};

