import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../pages/root";
import ErrorPage from "../pages/errorPage";
import AddTask from "../pages/addTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="addTask" element={<AddTask/>}/>
    </Route>
  )
);

export default router;
