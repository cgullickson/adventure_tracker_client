export const updateAdventureFormData = adventureFormData => {
  return {
    type: "UPDATED_DATA",
    adventureFormData
  };
};

export const resetAdventureForm = () => {
  return {
    type: "RESET_ADVENTURE_FORM"
  };
};
