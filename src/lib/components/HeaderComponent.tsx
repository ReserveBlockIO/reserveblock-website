import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import styled from "styled-components";
import {
  primaryNavItems,
  secondaryNavItems,
  socialNavItems,
} from "../data/menus";
import { ThemeColors } from "../theme";
import { isMobile } from "../utils";
import { SocialLinks } from "./common/SocialLinks";
import { VisibilityTransition } from "./common/VisibilityTransition";

const Header = styled.header`
  nav {
    background-color: #000 !important;
  }
`;

const BrandContainer = styled.a`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 196px;
  height: 24px;
  background-image: url(/img/header-logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -9999px;
`;

const Cube = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;

  opacity: 0;
  transition: all 0.3s ease;
  width: 0;
  &.visible {
    opacity: 1;
    width: 36px;
  }
`;

const PresaleContainer = styled.div`
  transform: translateX(100%);
  opacity: 0;

  transition: all 0.3s ease-out;

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  background-color: ${ThemeColors.darker};
  padding: 4px;
  color: #fff;

  font-size: 18px;
  margin-top: 32px;
  position: absolute;
  top: 28px;
  right: 0px;
  padding: 0px 0 0px 16px;
  box-shadow: -2px 2px 5px rgba(255, 255, 255, 0.1);
  div {
    cursor: default;
  }
  .dismiss {
    cursor: pointer;
    color: #fff;
    opacity: 0.5;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  }

  button {
    &:hover {
      background-color: ${ThemeColors.dark};
      color: #fff;
    }
  }
`;

const NavItem = styled.li`
  a {
    letter-spacing: 2px;
    /* color: ${ThemeColors.bright} !important; */
  }
  &:hover {
    a {
      color: ${ThemeColors.bright} !important;
    }
  }
`;

const SubNavItem = styled(NavItem)`
  font-size: 14px;
  a {
    letter-spacing: 1px;
  }
`;
const SocialNavItem = styled.li`
  a {
    color: #fff;
  }
`;

export const HeaderComponent = () => {
  const [offset, setOffset] = useState(0);
  const [nodeSaleDismissed, setNodeSaleDismissed] = useState(false);
  const visibilityThreshold = 300;

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header>
      <Navbar
        fixed={"top"}
        expand="sm"
        bg="black"
        variant="dark"
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-black"
        collapseOnSelect
      >
        <div className="container-fluid">
          <span className="px-2"></span>
          <BrandContainer className="navbar-brand" href="/">
            <Cube
              src="/img/cube.gif"
              className={offset > visibilityThreshold ? "visible" : ""}
            />
            <span style={{ width: 4 }}></span>
            <Logo>ReserveBlock</Logo>
          </BrandContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav>
              {primaryNavItems.map((n) => (
                <NavItem className="nav-item">
                  <Nav.Link
                    className="nav-link active"
                    aria-current="page"
                    href={n.path}
                  >
                    {n.name}
                  </Nav.Link>
                </NavItem>
              ))}
              {isMobile()
                ? secondaryNavItems.map((n) => (
                    <NavItem className="nav-item">
                      <Nav.Link
                        className="nav-link active"
                        aria-current="page"
                        href={n.path}
                      >
                        {n.name}
                      </Nav.Link>
                    </NavItem>
                  ))
                : null}
            </Nav>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-none d-md-flex ">
              {socialNavItems.map((s) => (
                <SocialNavItem>
                  <a
                    href={s.url}
                    className="nav-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={s.icon}></FontAwesomeIcon>
                  </a>
                </SocialNavItem>
              ))}
              {secondaryNavItems.map((n) => (
                <SubNavItem className="nav-item">
                  <Nav.Link
                    className="nav-link active"
                    aria-current="page"
                    href={n.path}
                    target={n.openExternal ? "_blank" : "_self"}
                    rel="noreferrer"
                  >
                    {n.name}
                  </Nav.Link>
                </SubNavItem>
              ))}
            </ul>
            <div className="d-flex d-md-none">
              <div>
                {socialNavItems.map((s) => (
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                      icon={s.icon}
                      color="#fff"
                    ></FontAwesomeIcon>
                    <span className="px-2"></span>
                  </a>
                ))}
              </div>
            </div>
          </Navbar.Collapse>
        </div>
        <PresaleContainer
          className={
            !nodeSaleDismissed && !isMobile() && offset > visibilityThreshold
              ? "visible"
              : ""
          }
        >
          <div className="d-flex align-items-center justify-content-center">
            <div className="dismiss" onClick={() => setNodeSaleDismissed(true)}>
              <FontAwesomeIcon icon={faTimes} size="xs" />
            </div>
            <span className="px-1"></span>
            <div style={{ fontWeight: "bold" }}>Node Presale Feb 22</div>
            <span className="px-2"></span>
            <button className="btn btn-light text-uppercase">Activate</button>
          </div>
        </PresaleContainer>
        {/* </div> */}
      </Navbar>
    </Header>
  );
};
