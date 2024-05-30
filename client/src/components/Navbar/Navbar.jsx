import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navBar}>
        <ul className={styles.navList}>
          <li key="starIcon">
            <FontAwesomeIcon
              icon={faStar}
              size="2x"
            />
          </li>
          <li key="addIcon">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="2x"
                beatFade
                color="yellow"
              />
          </li>
          <li key="searchIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2x"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
