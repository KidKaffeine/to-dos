import styles from "./List.module.css";

export default function List({ children, className }) {
  return (
    <>
      <ul className={styles[className]}>{children}</ul>
    </>
  );
}
