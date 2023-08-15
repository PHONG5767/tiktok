import React from "react";
import styles from "./sidebar.module.scss";
import {
  NavMenu,
  UserContainer
} from './Atomics'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navMain}>
        <NavMenu />
      </div>
      <div className={styles.userContainer}>
        <UserContainer />
      </div>
    </div>
  );
}
export default Sidebar;
