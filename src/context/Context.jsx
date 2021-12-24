import { createContext, useReducer } from "react";
import { reducerCharacter } from "../reducer/Reducer";

export const contextCharacter = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, dispatch] = useReducer(reducerCharacter);

  const handleLikeCharacter = (payload) => {
    dispatch({ type: "LIKE", payload });
  };

  return (
    <contextCharacter.Provider value={{ ...characters, handleLikeCharacter }}>
      {children}
    </contextCharacter.Provider>
  );
};
