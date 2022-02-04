import styled from "styled-components";
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
  const links = [
    {
      name: "Home",
      path: "/",
    },
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
