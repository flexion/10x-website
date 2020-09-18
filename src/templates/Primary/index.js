import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PrimaryNav from "components/PrimaryNav";
import "styles/index.scss";
import Logo from "components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { getMenuList } from "app/MenuModule";

const Primary = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuList({}));
  }, [dispatch]);
  const menus = useSelector((state) => state.menu.data);
  const primary = menus.find(({ key }) => key === "primary");
  const navItems = primary ? primary.items : [];
  return (
    <div className="App">
      <Header logo={<Logo />} nav={<PrimaryNav items={navItems} />} />
      {children}
      <Footer />
    </div>
  );
};

export default Primary;
