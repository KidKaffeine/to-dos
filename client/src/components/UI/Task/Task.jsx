import styles from "./Task.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTrash,
    faPenToSquare
} from "@fortawesome/free-solid-svg-icons";


export default function Task({ tasks }) {
    const date = tasks.date.substring(0, 10)
    return <>
        <li className={styles.taskItem}>
            <h3>Shit: </h3>
            <p > {tasks.task}</p>
            <h3>Date: </h3>
            <p> {date}</p>
            <div className={styles.test}>
                <button onClick={() => { alert("something") }}>
                    <FontAwesomeIcon icon={faTrash} size="1x" />
                </button>
                <button>
                    <FontAwesomeIcon icon={faPenToSquare} size="1x" />
                </button>
            </div>
        </li>
    </>
}