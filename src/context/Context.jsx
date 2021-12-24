import { createContext, useEffect, useReducer, useState } from "react";
import { reducerCharacter } from "../reducer/Reducer";
import axios from "axios";

export const contextCharacter = createContext();

const initialState = {
  cartLikes: [],
  likeCount: 0,
};

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

  const [characters, dispatch] = useReducer(reducerCharacter, characterState);

  const handleLikeCharacter = (payload) => {
    dispatch({ type: "LIKE", payload });
  };

  return (
    <contextCharacter.Provider
      value={{ characterState, handleLikeCharacter, ...characters }}
    >
      {children}
    </contextCharacter.Provider>
  );
};
