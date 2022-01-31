import { useEffect, useState } from "react";
import { NodeInfo } from "../models";
import { getNodeInfo } from "../service";
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
    <div className="my-3">
      <h3 className="text-center">Remaining Nodes</h3>
      <div className="d-flex justify-content-evenly justify-content-md-end">
        <div className="mx-2">
          <DetailCardComponent
            label="Carbon"
            value={nodeInfo.carbonLabel}
          ></DetailCardComponent>
        </div>
        <div className="mx-2">
          <DetailCardComponent
            label="Diamond"
            value={nodeInfo.diamondLabel}
          ></DetailCardComponent>
        </div>
        <div className="mx-2">
          <DetailCardComponent
            label="Total"
            value={nodeInfo.totalLabel}
          ></DetailCardComponent>
        </div>
      </div>
    </div>
  );
};
