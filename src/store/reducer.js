const initialState = {
  assetId: "Id",
  assetName: "Name",
  assetSerialNumber: "assetSerialNumber",
  problems: [{ index: 0, value: "Please select" }]
};

const reducer = (state = initialState, action) => {
  console.log("in reducer");
  console.log(action);
  if (action.type === "ID_UPDATED") {
    console.log("in reducer action id updated");
    console.log(action.value);

    return {
      ...state,
      assetId: action.value,
      assetName: action.assetName,
      assetSerialNumber: "assetSerialNumber"
    };
  } else if (action.type === "FORM_DATA_UPDATED") {
    console.log("in reducer action form data");
    console.log(action.assetName);

    return {
      ...state,
      assetName: action.assetName,
      problems: action.value
    };
  } else
    return {
      ...state,
      assetId: "Abhi",
      problems: [{ index: 0, value: "Please select" }]
    };
};

export default reducer;
