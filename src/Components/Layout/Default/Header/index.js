import styles from "./Header.module.scss";
import {
  Logo,
  IconRight,
  SearchBarModule
} from './HeaderChild'


function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
      <div className={styles.logo}>
        <Logo />
      </div>
        <div className={styles.search}>
          <SearchBarModule />
        </div>
        <div className={styles.iconRight}>
          <IconRight />
        </div>
      </div>
    </header>
  );
}
export default Header;
