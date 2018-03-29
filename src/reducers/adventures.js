export default (state = [], action) => {
  switch (action.type) {
    case "GET_ADVENTURES_SUCCESS":
      return action.adventures;

    case "CREATE_ADVENTURE_SUCCESS":
      return [...state, action.adventure];

    case "UPDATE_ADVENTURE_SUCCESS":
      return [
        ...state.filter(adventure => adventure.id !== action.adventure.id),
        Object.assign({}, action.adventure)
      ];

    case "LIKE_ADVENTURE":
      return state.map(adventure => {
        if (adventure.id === action.adventure.id) {
          return action.adventure;
        } else {
          return adventure;
        }
      });

    default:
      return state;
  }
};
