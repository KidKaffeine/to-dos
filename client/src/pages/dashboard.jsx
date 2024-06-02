import styles from "../styles/pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faUmbrellaBeach,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.dashboardItem}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon
              icon={faHome}
              size="2x"
              color="yellow"
              className={styles.linkIcon}
            />
            Home
          </Link>
        </li>
        <li className={styles.dashboardItem}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon
              icon={faBriefcase}
              size="2x"
              color="yellow"
              className={styles.linkIcon}
            />
          </Link>
        </li>
        <li className={styles.dashboardItem}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon
              icon={faUmbrellaBeach}
              size="2x"
              color="yellow"
              className={styles.linkIcon}
            />
          </Link>
        </li>
        <li className={styles.dashboardItem}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon
              icon={faShuffle}
              size="2x"
              color="yellow"
              className={styles.linkIcon}
            />
          </Link>
        </li>
      </ul>
    </>
  );
}
