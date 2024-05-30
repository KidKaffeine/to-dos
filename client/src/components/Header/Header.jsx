import styles from "./Header.module.css";
import Container from '../UI/Container/Container'

export default function Header({ title }) {
  return (
    <>
      <Container className={"headerContainer"}>
        <a href="/" className={styles.headerLink}>
          <h1 className={styles.appTitle}>{title}</h1>
        </a>
        <p className={styles.paragraphHeader}>
          (we apologise <em className={styles.paragraphEm}>sincerily</em> for
          the swearing)
        </p>
      </Container>
    </>
  );
}
