import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/use-characters";
import "./character-list.css";

export const CharacterList = () => {
  const { error, data, loading } = useCharacters();

  return loading ? (
    <p>loading</p>
  ) : (
    <div className="character-list">
      {data.characters.results.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`/${character.id}`}>
              <img src={character.image} />
              <h2>{character.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
