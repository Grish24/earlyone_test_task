import React from "react";
import { LayoutWrapper } from "./styles";

type props = {
  children?: React.ReactNode;
};

function Layout({ children }: props) {
  // TODO: If need sidebar later
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default Layout;
