import { Outlet, useLocation } from "react-router-dom";
import { NavContextProvider } from "../NavContext";
import NavBar from "./NavBar";

export default function MainLayout() {
  const { pathname } = useLocation();
  return (<>
    <NavContextProvider>
      <NavBar />
    </NavContextProvider>
    <Outlet key={pathname}/>
  </>);
};
