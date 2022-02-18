import { useEffect, useState } from "react";
import { NodeInfo } from "../models";
import { getNodeInfo } from "../service";
import { SectionHeading1, SectionHeading4 } from "../styles/styled";
import { DetailCardComponent } from "./DetailCardComponent";

export const NodeInfoComponent = () => {
  const [nodeInfo, setNodeInfo] = useState<NodeInfo | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getNodeInfo().then((data) => {
      if (!data || !data.success) {
        setError(true);
        return;
      }

      setNodeInfo(data);
    });
  }, []);

  if (!nodeInfo || error) {
    return null;
  }

  return (
    <div className="d-flex justify-content-end">
      <div>
        <SectionHeading1>
          <div className="text-end">{nodeInfo.totalLabel}</div>
        </SectionHeading1>
        <SectionHeading4>Nodes in Network</SectionHeading4>
      </div>
      {/* <div className="d-flex justify-content-between">
        <div className="">
          <DetailCardComponent
            label="Carbon"
            value={nodeInfo.carbonLabel}
          ></DetailCardComponent>
        </div>
        <div className="">
          <DetailCardComponent
            label="Diamond"
            value={nodeInfo.diamondLabel}
          ></DetailCardComponent>
        </div>
        <div className="">
          <DetailCardComponent
            label="Total"
            value={nodeInfo.totalLabel}
          ></DetailCardComponent>
        </div>
      </div> */}
    </div>
  );
};
