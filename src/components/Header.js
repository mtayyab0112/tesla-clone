import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Solar Panels</a>
        <a href="#">Solar Roof</a>
      </Menu>
      <RightMenu>
        <a href="#"> Shop </a>
        <a href="#"> Account</a>
        <CustomMenuIcon
          onClick={() => {
            setisOpenMenu(true);
          }}
        />
      </RightMenu>

      <BurgerNavMenu show={isOpenMenu}>
        <CloseWraper>
          <CustomClose
            onClick={() => {
              setisOpenMenu(false);
            }}
          />
        </CloseWraper>
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Solar Panels</a>
        </li>
        <li>
          <a href="#">Solar Roof</a>
        </li>
      </BurgerNavMenu>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    text-transform: capitalize;
    padding: 0 15px;
    flex-wrap: nowrap;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 500;
    text-transform: capitalize;
    margin-right: 10px;
    padding: 0 15px;
  }
`;

const CustomMenuIcon = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 100;
  background-color: white;
  padding: 25px 30px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  transition: transform 0.2s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 15px 0;
    a {
      font-weight: 500;
    }
  }
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
