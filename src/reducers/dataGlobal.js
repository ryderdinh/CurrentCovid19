const initState = {
  _global: {
    _confirmed: 0,
    _deaths: 0,
    _recovered: 0,
    _lastUpdate: "",
  },
};
export default function dataGlobal(state = initState, action) {
  switch (action.type) {
    case "SET_DATA_GLOBAL": {
      return {
        ...state,
        _global: {
          _confirmed: action.payload.confirmed.value,
          _deaths: action.payload.deaths.value,
          _recovered: action.payload.recovered.value,
          _lastUpdate: action.payload.lastUpdate,
        },
      };
    }
    default:
      return { ...state };
  }
}
