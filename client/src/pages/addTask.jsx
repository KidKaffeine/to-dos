import styles from "../styles/pages.module.css";
import Input from "../components/UI/Input/Input";
import Label from "../components/UI/Label/Label";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons/faPoo";
import Button from "../components/UI/Button/Button";

export default function AddTask() {
  let date = new Date().toLocaleDateString();

  return (
    <>
      <Form method="post" className={styles.addTaskForm} action={"/addTask"}>
        <Label
          htmlFor="addTask"
          aria-label="add-task"
          title={"Enter your shit to do:"}
        />
        <Input
          type={"text"}
          name={"addTask"}
          id={"addTask"}
          className={"addTaskInput"}
        />
        <Label
          htmlFor="category"
          aria-label="category"
          title={"Category of the shit:"}
        />
        <select name="category" className={styles.taskCategory}>
          <option value="">Category</option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="random">Random</option>
          <option value="leisure">Leisure</option>
        </select>
        <Label
          htmlFor="date"
          aria-label="date"
          title={"Shit to be completed until:"}
        />
        <Input
          type={"date"}
          name={"date"}
          id={"date"}
          min={date}
          max={"31-12-2030"}
          className={"dateInput"}
        />
        <Button
          type={"submit"}
          className={"addTaskBtn"}
          title={"Submit your shit!"}
        />
        <FontAwesomeIcon icon={faPoo} color="yellow" size="2x" />
      </Form>
    </>
  );
}
