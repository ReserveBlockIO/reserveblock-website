import { SectionContent, SectionHeading3 } from "../../styles/styled";

export const SystemRequirementsComponent = () => {
  return (
    <>
      <SectionHeading3>Minimum System Requirements</SectionHeading3>
      <SectionContent>
        <p className="py-0">
          <strong>CPU:</strong> Pentium G Series or recommend i3 or Ryzen3 and
          Up.
          <br />
          Will work with lower processors like a Raspberry-Pi 
          <br />
          <strong>RAM:</strong> Recommend 4GB but can run with 2GB 
          <br />
          <strong>HDD:</strong> For Masternode min 50GB with room for growth.
          <br />
          For DataNode, having at least 500GB of free space is recommended and
          with room for growth. 
          <br />
          <strong>GPU:</strong> Not Needed 
          <br />
          <strong>Networking:</strong> Recommend a network speed of 25 mbps down
          if a client is a Masternode and if client is a Datanode recommend 25
          mbps down and 25 mbps up.
        </p>
      </SectionContent>
    </>
  );
};
