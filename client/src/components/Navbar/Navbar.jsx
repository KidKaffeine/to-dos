import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import List from "../UI/List/List";
import ListItem from "../UI/ListIem/ListItem";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navBar}>
        <List className={"navList"}>
          <ListItem key="starIcon">
            <FontAwesomeIcon icon={faStar} size="2x" />
          </ListItem>
          <ListItem key="addIcon">
            <Link to="/addTask">
              <FontAwesomeIcon
                icon={faPlusCircle}
                size="2x"
                beatFade
                color="yellow"
              />
            </Link>
          </ListItem>
          <ListItem key="searchIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
          </ListItem>
        </List>
      </nav>
    </>
  );
}
