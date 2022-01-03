export const reducerCharacter = (state, action) => {
  switch (action.type) {
    case "LIKE":
      return state.cartLikes.push(action.type);
    default:
      return state;
  }
};
