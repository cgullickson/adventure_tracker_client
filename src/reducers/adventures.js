export default (state = [], action) => {
  switch(action.type) {
    case 'GET_ADVENTURES_SUCCESS':
      return action.adventures;

    case 'CREATE_ADVENTURE_SUCCESS':
      return state.concat(action.adventure);

    default:
      return state;
  }
}
