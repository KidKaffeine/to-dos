import styles from './ListItem.module.css'

export default function ListItem({ children, className }) {
  return (
    <>
      <li className={styles[className]}>{children}</li>
    </>
  );
}
