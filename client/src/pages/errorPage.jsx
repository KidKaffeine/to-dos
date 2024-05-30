import styles from "../styles/pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Container from "../components/UI/Container/Container";

export default function ErrorPage() {
  return (
    <>
      <Header title={"shit to do"} />
      <Container className={"errorContainer"}>
        <h2 className={styles.errorHeader}>
          Ops. Error 404 - shit not found.
        </h2>
        <FontAwesomeIcon icon={faPoo} color="yellow" size="4x" shake />
      </Container>
      <Link className={styles.errorLink} to={"/"}>
        Back to home
        <span className={styles.errorSpan}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </Link>
    </>
  );
}
