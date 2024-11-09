import { useLoaderData, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.module.css";
import Container from "../UI/Container/Container";

export default function Dashboard() {
  const tasks = useLoaderData()
  let dashboard = <>
    <Container className={"dashboardContainer"}>
      <h1 className={styles.dashboardHeader}>It seems you ain't got shit to do.</h1>
      <Link to={"/addTask"} className={styles.dashboardLink}>
        Add your first
        <span className={styles.dashboardIcon}> <FontAwesomeIcon icon={faPoo} color="yellow" size="1x" /> </span>.
      </Link>
    </Container>
  </>

  if (tasks.length) {
    dashboard = <>
      <Container className={"dashboardContainer"} >
        <h1 className={styles.dashboardHeader}>Tasks</h1>
        <ul>
          {tasks.map((task) => {
            return <li key={task._id}>
              <p>
                {task.task}
              </p>
            </li>
          })}
        </ul>
      </Container>
    </>

  }

  return <>{dashboard}</>

}
