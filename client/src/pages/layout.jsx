import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/UI/Container/Container";

function Layout() {
  return (
    <div>
      <Header title={"shit to do"} />
        <Outlet />
      <Navbar />
    </div>
  );
}

export default Layout;
