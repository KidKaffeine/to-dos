import styles from "./Button.module.css";

export default function Button({ type, className, title }) {
  return (
    <button type={type} className={styles[className]}>
     {title}
    </button>
  );
}
