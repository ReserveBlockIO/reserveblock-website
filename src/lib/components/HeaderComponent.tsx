import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  primaryNavItems,
  secondaryNavItems,
  socialNavItems,
} from "../data/menus";
import { ThemeColors } from "../theme";
import { SocialLinks } from "./common/SocialLinks";

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
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
              {primaryNavItems.map((n) => (
                <NavItem className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={n.path}
                  >
                    {n.name}
                  </a>
                </NavItem>
              ))}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={n.path}
                    >
                      {n.name}
                    </a>
                  </SubNavItem>
                ))}
              </ul>
            </div>
          </div>
          <PresaleContainer
            className={
              !nodeSaleDismissed && offset > visibilityThreshold
                ? "visible"
                : ""
            }
          >
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="dismiss"
                onClick={() => setNodeSaleDismissed(true)}
              >
                <FontAwesomeIcon icon={faTimes} size="xs" />
              </div>
              <span className="px-1"></span>
              <div>Node Presale Feb 16</div>
              <span className="px-2"></span>
              <button className="btn btn-light text-uppercase">
                Notify me
              </button>
            </div>
          </PresaleContainer>
        </div>
      </nav>
    </Header>
  );
};
