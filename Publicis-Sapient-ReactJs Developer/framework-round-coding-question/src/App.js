import React, { useState } from "react";
import "./style.css";

const useFetchData = (url, setLoading) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        const resData = await response.json();
        const promises = resData.results.map(async ({ name, url }) => {
          const pokemon = { name };
          const pokemonRes = await fetch(url);
          const pokemonDetails = await pokemonRes.json();
          pokemon.forms = pokemonDetails.forms.map((form) => form.name);
          pokemon.ability = pokemonDetails.abilities.map(
            (ability) => ability.ability.name
          );
          return pokemon;
        });
        const pokemons = await Promise.all(promises);

        setData((prevState) => prevState.concat(pokemons));
      } catch (error) {
        console.log("Error " + error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return [data, setData];
};

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useFetchData(
    "https://pokeapi.co/api/v2/pokemon/",
    setIsLoading
  );
  return (
    <div className="container">
      {isLoading && <div className="loader">Loading...</div>}
      {!isLoading &&
        data.map(({ name, forms, ability }) => (
          <div className="pokemon" key={name}>
            <p>Name: {name}</p>
            <div>
              <h3>Forms</h3>
              {forms.map((form) => (
                <p key={`${name}-${form}`}>{form}</p>
              ))}
            </div>
            <div>
              <h3>Ability</h3>
              {ability.map((ability) => (
                <p key={`${name}-${ability}`}>{ability}</p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
