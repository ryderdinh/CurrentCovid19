//* IMPORT =============================================
import callApi from "../api/callApi";

//? CALL API============================================
export const getDataGlobal = () => {
  return async (dispatch) => {
    const result = await callApi("");
    dispatch(setDataGlobal(result));
  };
};

export const getDataCountry = (nameCountry) => {
  return async (dispatch) => {
    const result = await callApi(`countries/${nameCountry}`);
    console.log(result);
    dispatch(setDataCountrySearch(result));
  };
};
// export const getNameCountry = () => {
//   return async () => {
//     const result = await callApi("countries");
//     let rs = result.countries;
//     let arr = [];
//     rs.forEach((element) => {
//       arr.push(element.name);
//     });
//     console.log(JSON.stringify(arr));
//   };
// };

//TODO: TYPE AND PAYLOAD OF ACTION ================================
export const setDataGlobal = (payload) => ({
  type: "SET_DATA_GLOBAL",
  payload,
});

export const setDataCountrySearch = (payload) => ({
  type: "SET_DATA_COUNTRY_SEARCH",
  payload,
});
