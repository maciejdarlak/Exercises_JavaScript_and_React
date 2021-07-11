export const contacts = (state = [], action) => { // The function that takes the current state and action
    switch (action.type) { // Checks what action it is
        case 'FETCH_CONTACTS_SUCCESS': // If it is a FETCH_CONTACTS_SUCCESS returns a new contact list 
          return [
            ...action.contacts
          ]
        default: // If else returns a unchanged state
          return state
      }
    }