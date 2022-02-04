import { SectionContent, SectionHeading2 } from "../../styles/styled";

interface Props {
  title: string;
  image: string;
  details: string[];
}

export const NodeType = (props: Props) => {
  return (
    <SectionContent>
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <img src={props.image} alt={props.title} className="w-100" />
        </div>
        <div className="col">
          <SectionHeading2>{props.title}</SectionHeading2>
        </div>
      </div>
      <div className="pt-4"></div>
      <ul>
        {props.details.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
    </SectionContent>
  );
};
