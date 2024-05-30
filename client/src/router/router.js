import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  import Root from "../pages/root";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
      </Route>
    )
  );
  
  export default router;