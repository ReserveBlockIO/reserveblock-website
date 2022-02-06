import styled from "styled-components";
import { primaryNavItems, secondaryNavItems } from "../../data/menus";
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
`;

export const FooterComponent = () => {
  const links = [...primaryNavItems, ...secondaryNavItems];
  return (
    <Footer>
      <VisibilityTransition transitionType="fade">
        <div className="text-center py-5">
          <SocialLinks />
          <div className="mt-3">
            {links.map((link) => (
              <Link className="mx-2" href={link.path}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className="text-muted mt-3">&copy; 2022 ReserveBlock</div>
        </div>
      </VisibilityTransition>
    </Footer>
  );
};
