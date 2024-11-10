import styles from "./Task.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTrash,
    faPenToSquare
} from "@fortawesome/free-solid-svg-icons";
import Container from "../Container/Container";
import Button from "../Button/Button"


export default function Task({ tasks }) {
    const date = tasks.date.substring(0, 10)
    return <>
        <li className={styles.taskItem}>
        <Button icon={<FontAwesomeIcon icon={faPenToSquare} size="1x" />} className={"editBtn"} />
        <Button icon={<FontAwesomeIcon icon={faTrash} size="1x" />} className={"deleteBtn"} />
            <Container className={styles.taskContainer}>
                <h3 className={styles.taskHeader}>Shit: </h3>
                <p className={styles.taskParagraph}> {tasks.task}</p>
            </Container>
            <Container className={styles.dateContainer}>
                <h3 className={styles.taskHeader}>Date: </h3>
                <p className={styles.taskParagraph}> {date}</p>
            </Container>
        </li>
    </>
}