import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ThemeColors } from "../theme";

interface INavItem {
  name: string;
  path: string;
  children?: INavItem[];
}

const Header = styled.header`
  nav {
    background-color: #020a21 !important;
  }
`;

const Logo = styled.div`
  width: 196px;
  height: 24px;
  background-image: url(/img/header-logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -9999px;
`;

const PresaleContainer = styled.div`
  background-color: ${ThemeColors.dark};
  padding: 4px;
  color: #fff;

  font-size: 18px;
  margin-top: 32px;
  position: absolute;
  top: 28px;
  right: 0px;
  padding: 0px 0 0px 16px;
  box-shadow: -2px 2px 5px rgba(255, 255, 255, 0.1);
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

export const HeaderComponent = () => {
  const primaryNavItems: INavItem[] = [
    {
      name: "Learn",
      path: "/#learn",
    },
    {
      name: "Masternodes",
      path: "/#masternodes",
    },
    {
      name: "Wallet",
      path: "/#wallet",
    },
    {
      name: "Build",
      path: "/#build",
    },
    {
      name: "Network",
      path: "/#network",
    },
    {
      name: "Community",
      path: "/#community",
    },
    {
      name: "Press",
      path: "/#press",
    },
  ];

  const secondaryNavItems: INavItem[] = [
    {
      name: "Litepaper",
      path: "",
    },
    {
      name: "Support",
      path: "/#support",
    },
  ];

  return (
    <Header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <Logo>ReserveBlock</Logo>
          </a>
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
          <PresaleContainer>
            <div className="d-flex align-items-center justify-content-center">
              <div className="dismiss">
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
