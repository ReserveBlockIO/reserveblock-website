import styled from "styled-components";
import { primaryNavItems, secondaryNavItems } from "../../data/menus";
import { SocialLinks } from "./SocialLinks";

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const Footer = () => {
  const links = [...primaryNavItems, ...secondaryNavItems];
  return (
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
  );
};
