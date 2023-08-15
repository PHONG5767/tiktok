import styles from "./search.module.scss";
import { useContext } from "react";
import { inputContext } from "../../search";

const SearchBar = () => {
  const { input } = useContext(inputContext);
  const { setInput } = useContext(inputContext);
  const { setResults } = useContext(inputContext);
  const fetchData = (value) => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=1&limit=1281")
      .then((response) => response.json())
      .then((json) => {
        const filteredResults = json.results.filter(
          (pokemon) =>
            value &&
            pokemon &&
            pokemon.name &&
            pokemon.name.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filteredResults);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <form className={styles.formSearch}>
      <input
        className={styles.input}
        placeholder="Tìm kiếm"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className={styles.buttonSubmit}>
        <div>
          <svg
            width="24"
            data-e2e=""
            height="24"
            viewBox="0 0 48 48"
            fill="rgba(255, 255, 255, .9)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 10C15.3726 10 10 15.3726 10 22C10 28.6274 15.3726 34 22 34C28.6274 34 34 28.6274 34 22C34 15.3726 28.6274 10 22 10ZM6 22C6 13.1634 13.1634 6 22 6C30.8366 6 38 13.1634 38 22C38 25.6974 36.7458 29.1019 34.6397 31.8113L43.3809 40.5565C43.7712 40.947 43.7712 41.5801 43.3807 41.9705L41.9665 43.3847C41.5759 43.7753 40.9426 43.7752 40.5521 43.3846L31.8113 34.6397C29.1019 36.7458 25.6974 38 22 38C13.1634 38 6 30.8366 6 22Z"
            ></path>
          </svg>
        </div>
      </button>
    </form>
  );
};

export default SearchBar;
