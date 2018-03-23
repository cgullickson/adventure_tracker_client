
const initialState = {
  name: '',
  price: 0,
  img_url: '',
  length: 0
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.adventureFormData;

    case 'RESET_ADVENTURE_FORM':
      return initialState;
    
    default:
      return state;
  }
}
