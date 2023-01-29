import styled from "styled-components";
import {
  footerNavItems,
  primaryNavItems,
  secondaryNavItems,
} from "../../data/menus";
import { ThemeColors } from "../../theme";
import { SocialLinks } from "./SocialLinks";
import { VisibilityTransition } from "./VisibilityTransition";

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const Footer = styled.footer`
  background-color: ${ThemeColors.darker};
  border-top: 4px solid rgba(126, 239, 255, 0.2);

  .col {
    /* text-align: left; */
    h5 {
      color: rgba(255, 255, 255, 0.7);
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    div {
      font-size: 16px;
      line-height: 32px;
    }
  }
`;

export const FooterComponent = () => {
  const links = footerNavItems;
  return (
    <Footer>
      <VisibilityTransition transitionType="fade">
        <div className="container text-center pt-5 pb-4">
          <div className="row mb-3">
            {links.map((section) => (
              <div className="col col-6 col-md-3 pb-3">
                <h5>{section.heading}</h5>
                {section.items.map((link) => (
                  <div>
                    <Link
                      href={link.path}
                      target={link.openExternal ? "_blank" : "_self"}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <SocialLinks />

          <div className="text-muted mt-3">&copy; 2023 ReserveBlock</div>
        </div>
      </VisibilityTransition>
    </Footer>
  );
};
