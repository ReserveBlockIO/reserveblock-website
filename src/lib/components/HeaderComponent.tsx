import styled from "styled-components";

interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

const Header = styled.header`
  nav {
    box-shadow: 0px 3px 15px rgba(255, 255, 255, 0.15);
    /* border-bottom: 1px solid red; */
    background-color: #020a21 !important;
  }
`;

export const HeaderComponent = () => {
  const primaryNavItems: NavItem[] = [
    // {
    //   name: "Home",
    //   path: "/",
    // },
    {
      name: "Learn",
      path: "/#learn",
    },
    {
      name: "Nodes",
      path: "/#nodes",
    },
    {
      name: "Build",
      path: "/#build",
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

  const secondaryNavItems: NavItem[] = [
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
            ReserveBlock
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {primaryNavItems.map((n) => (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href={n.path}
                  >
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {secondaryNavItems.map((n) => (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={n.path}
                    >
                      <small>{n.name}</small>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Header>
  );
};
