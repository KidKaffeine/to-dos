import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../pages/root";
import ErrorPage from "../pages/errorPage";
import AddTask from "../pages/addTask";
import { handleAddTask } from "../actions/actions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="addTask" element={<AddTask />} action={handleAddTask} />
    </Route>
  )
);

export default router;
