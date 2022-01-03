import { createContext, useEffect, useReducer, useState } from "react";
import { reducerCharacter } from "../reducer/Reducer";
import axios from "axios";

const initialState = {
  cartLikes: [],
  likeCount: 0,
};

export const contextCharacter = createContext(initialState);

export const CharacterProvider = ({ children }) => {
  const [characterState, setCharacterState] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        const { results } = response.data;
        setCharacterState(results);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  const init = () => {
    return characterState || [];
  };

  const [characters, dispatch] = useReducer(reducerCharacter, [], init);

  const handleLikeCharacter = (payload) => {
    dispatch({ type: "LIKE", payload });
  };

  const handleDetailsCharacter = (payload) => {
    dispatch({ type: "DETAILS", payload });
  };

  return (
    <contextCharacter.Provider
      value={{
        characterState,
        handleLikeCharacter,
        handleDetailsCharacter,
        characters,
      }}
    >
      {children}
    </contextCharacter.Provider>
  );
};
