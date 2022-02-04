import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

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
  const links = [
    { url: "", icon: faTwitter },
    { url: "", icon: faInstagram },
    { url: "", icon: faDiscord },
    { url: "", icon: faGithub },
  ];

  return (
    <div>
      {links.map((link) => (
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
