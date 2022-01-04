const initialState = [
  {
    id: 0,
    name: "Eyo dohan",
    number: 1234567890,
    email: "eyodohan@gmail.com",
  },
  {
    id: 1,
    name: "Eyo Eyp dgn",
    number: 9087654321,
    email: "eyo@gmail.com.tr",
  },
];

const contactReducer = (state = initialState, action) => {
  if (action.type) {
    if (action.type === "addContact") {
      return (state = [...state, action.payload]);
    }
    if (action.type === "updateContact") {
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    }
    if (action.type === "deleteContact") {
      const deletedContact = state.filter(
        (contact) => contact.id !== action.payload
      );
      state = deletedContact;
      return state;
    }
    return state;
  }
};

export default contactReducer;
