import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/UI/Container/Container";
import TaskContext from "../context/taskContext";

function Layout() {
  const tasks = TaskContext()

  return (
    <div>
      <Header title={"shit to do"} />
      <Container className={"mainContainer"}>
        <Outlet context={tasks}/>
        <Navbar />
      </Container>
    </div>
  );
}

export default Layout;
