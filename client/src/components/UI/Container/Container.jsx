import styles from "./Container.module.css";

export default function Container({ children, className }) {
  return <div className={styles[className]}>{children}</div>;
}
