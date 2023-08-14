import { styled } from "styled-components";
import AppHeader from "../AppHeader";
import { useAppSelector } from "../../../containers/store";

const LayoutContainer = styled("div")`
  position: relative;
  ${props => props.isAuth && 'padding: 0 20px;'}
`;
const Layout = (props) => {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);

  return (
    <div style={{}}>
      <AppHeader />

      <LayoutContainer isAuth={isAuth}>{props.children}</LayoutContainer>
    </div>
  );
};

export default Layout;
