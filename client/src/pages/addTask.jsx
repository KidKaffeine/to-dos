import styles from "../styles/pages.module.css";
import Input from "../components/UI/Input/Input";
import Label from "../components/UI/Label/Label";
import { Form } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";

export default function AddTask() {
  let date = new Date().toLocaleDateString();

  return (
    <>
      <Container className={"formContainer"}>
        <Form method="post" className={styles.addTaskForm} action={"/addTask"}>
          <Label
            htmlFor="addTask"
            aria-label="add-task"
            title={"Enter your shit to do:"}
          />
          <Input
            type={"text"}
            name={"task"}
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
          <Button title={"Submit"} type={"submit"} className={"addTaskBtn"}/>
        </Form>
      </Container>
    </>
  );
}
