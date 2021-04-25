const initState = {
  _country: {
    _confirmed: 0,
    _deaths: 0,
    _recovered: 0,
    _lastUpdate: "loading...",
  },
};

export default function dataCountrySearch(state = initState, action) {
  switch (action.type) {
    case "SET_DATA_COUNTRY_SEARCH":
      return {
        ...state,
        _country: {
          _confirmed: action.payload.confirmed.value,
          _deaths: action.payload.deaths.value,
          _recovered: action.payload.recovered.value,
          _lastUpdate: action.payload.lastUpdate,
        },
      };
    default:
      return { ...state };
  }
}
