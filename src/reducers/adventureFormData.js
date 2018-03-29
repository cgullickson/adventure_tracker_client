const initialState = {
  title: "",
  date: "",
  img_url: "",
  description: "",
  location: "",
  likes: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATED_DATA":
      return action.adventureFormData;

    case "RESET_ADVENTURE_FORM":
      return initialState;

    default:
      return state;
  }
};
