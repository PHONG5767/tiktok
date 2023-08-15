import React, { useEffect, useState } from "react";
import styles from "../pokemonList.module.scss";
import { Pagination } from "antd";
import "./paginationHomepage.css"

const PokemonList = () => {
  const [currentPage, setCurrentPage] = useState(1); 
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=${(currentPage - 1) * 20}`) 
      .then((response) => response.json())
      .then((json) => {
        const updatedPokemonList = json.results.map((pokemon) => {
          return {
            pokemonName: pokemon.name,
            url: pokemon.url,
            id: pokemon.url.slice(0, -1).split("/").pop()
          };
        });
        setPokemonList(updatedPokemonList);
      });
  }, [currentPage]);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.pokemonContainer}>
        {pokemonList.map((pokemon, index) => (
          <div className={styles.pokemonList} key={index}>
              <img className={styles.img} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`} alt={pokemon.pokemonName} />
              <div>{pokemon.pokemonName}</div> 
          </div>
        ))}
      </div>
      <Pagination
        className={styles.pagination}
        current={currentPage} 
        total={1281} 
        pageSize={20} 
        onChange={(page) => setCurrentPage(page)} 
      />
    </div>
  );
};

export default PokemonList;
