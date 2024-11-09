import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../pages/layout";
import DefaultError from "../pages/error/defaultError";
import AddTask from "../pages/addTask";
import { handleAddTask } from "../actions/actions";
import AddTaskError from "../pages/error/addTaskError";
import Dashboard from "../components/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<DefaultError/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="addTask" element={<AddTask />} action={handleAddTask} errorElement={<AddTaskError/>} />
    </Route>
  )
);

export default router;
