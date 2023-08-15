import styles from "./search.module.scss";
import { useContext } from "react";
import { inputContext } from "../../search";

export const SearchResult = ({ result }) => {
  const { setInput } = useContext(inputContext);
  return (
    <div className={styles.searchResult} onClick={(e) => setInput(result)}>
      {result}
    </div>
  );
};
