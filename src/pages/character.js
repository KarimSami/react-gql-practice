import { useParams } from "react-router";
import { useCharacter } from "../hooks/use-character";
import "./character.css";

export const Character = () => {
  const param = useParams();
  const { data, error, loading } = useCharacter(param.id);

  return loading ? (
    <p>loading</p>
  ) : (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((ep) => {
            return (
              <div>
                {ep.name} - <b>{ep.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
