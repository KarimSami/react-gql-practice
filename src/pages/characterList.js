import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./character-list.css";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export const CharacterList = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return loading ? (
    <p>loading</p>
  ) : (
    <div className="character-list">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
