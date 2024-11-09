import { useLoaderData, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";
import styles from "./Dashboard.module.css";
import Container from "../UI/Container/Container";
import Task from "../UI/Task/Task";

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
        <ul className={styles.dashboardList}>
          {tasks.map((task) => {
            return <Task tasks={task} key={task._id} />
          })}
        </ul>
      </Container>
    </>

  }

  return <>{dashboard}</>

}
