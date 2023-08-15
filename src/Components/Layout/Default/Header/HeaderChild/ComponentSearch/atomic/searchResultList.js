import { SearchResult } from "./searchResult";
import styles from "./search.module.scss";
import { inputContext } from "../../search";
import { useContext } from "react";

export const SearchResultsList = () => {
  const { results } = useContext(inputContext);
  return (
    <div className={styles.resultList}>
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
