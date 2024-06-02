import styles from "../styles/pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faUmbrellaBeach,
  faShuffle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useOutletContext } from "react-router-dom";
import ListItem from "../components/UI/ListIem/ListItem";
import List from "../components/UI/List/List";

export default function Dashboard() {
  const taskList = useOutletContext();
  return (
    <>
      {/* <List>
        {taskList.length &&
          taskList.map((task) => {
            console.log(task);
            return <ListItem key={task.id}> 
            <p>{task.category}</p>  
            </ListItem>
          })}
      </List> */}
      {/* <List className={"list"}>
        <ListItem className={"dashboardItem"}>
          <Link className={styles.dashboardLink} to={"/homeTasks"}>
            <FontAwesomeIcon icon={faHome} size="2x" color="yellow" />
          </Link>
          <p>A task</p>
          <FontAwesomeIcon icon={faStar} size="1x" />
        </ListItem>
        <ListItem className={"dashboardItem"}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon icon={faBriefcase} size="2x" color="yellow" />
          </Link>
          <p>A task</p>
          <FontAwesomeIcon icon={faStar} size="1x" />
        </ListItem>
        <ListItem className={"dashboardItem"}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon icon={faUmbrellaBeach} size="2x" color="yellow" />
          </Link>
          <p>A task</p>
          <FontAwesomeIcon icon={faStar} size="1x" />
        </ListItem>
        <ListItem className={"dashboardItem"}>
          <Link className={styles.dashboardLink}>
            <FontAwesomeIcon icon={faShuffle} size="2x" color="yellow" />
          </Link>
          <p>A task</p>
          <FontAwesomeIcon icon={faStar} size="1x" />
        </ListItem>
      </List> */}
    </>
  );
}
