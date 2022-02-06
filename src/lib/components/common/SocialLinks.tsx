import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { socialNavItems } from "../../data/menus";

interface Props {
  color?: string;
}

const Link = styled.a`
  transition: opacity 0.4s;
  &:hover {
    opacity: 0.8;
  }
`;

export const SocialLinks = (props: Props) => {
  return (
    <div>
      {socialNavItems.map((link) => (
        <Link href={link.url} className="mx-4" target="_blank">
          <FontAwesomeIcon
            icon={link.icon}
            color={props.color || "#fff"}
            size="lg"
          ></FontAwesomeIcon>
        </Link>
      ))}
    </div>
  );
};
