import { styled } from "styled-components";
import AppHeader from "../AppHeader";

const LayoutContainer = styled('div')`
  position: relative;
`
const Layout = (props) => {
  return (
    <div>
      <LayoutContainer>
        <AppHeader />
      </LayoutContainer>
      {props.children}
    </div>
  );
};

export default Layout;
