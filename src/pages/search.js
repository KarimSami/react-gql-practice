import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState("");
  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={getLocations}>Search</button>
      {loading ? <p>Spinner</p> : null}
      {error ? <p>Error</p> : null}
      {data ? (
        <ul>
          {data.characters.results.map((d) => {
            return <li>{d.location.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};
