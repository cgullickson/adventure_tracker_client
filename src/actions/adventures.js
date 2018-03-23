import { resetAdventureForm } from './adventureForm';
// ** Action Creators **
const setAdventures = adventures => {
  return {
    type: 'GET_ADVENTURES_SUCCESS',
    adventures
  }
}

const addAdventure = adventure => {
  return {
    type: 'CREATE_ADVENTURE_SUCCESS',
    adventure
  }
}

// ** Async Actions **
export const getAdventures = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/adventures`)
      .then(response => response.json())
      .then(adventures => dispatch(setAdventures(adventures)))
      .catch(error => console.log(error));
  }
}

export const createAdventure = adventure => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/adventures`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ adventure: adventure })
    })
      .then(response => response.json())
      .then(adventure => {
        dispatch(addAdventure(adventure))
        dispatch(resetAdventureForm())
      })
      .catch(error => console.log(error))
  }
}
