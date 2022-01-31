import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { healthCheck } from "../service";
import { setNetworkOffline, setNetworkOnline } from "../store/network";

export const NetworkStatusComponent = () => {
  const networkIsOnline = useSelector((state: any) => state.network.value);

  let healthCheckTimer: ReturnType<typeof setTimeout>;
  const interval = 10000;

  const dispatch = useDispatch();

  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = async () => {
    let error = false;
    try {
      const data = await healthCheck();
      if (!data) {
        error = true;
      } else if (data.length < 2) {
        error = true;
      } else if (data[1] !== "Online") {
        error = true;
      }
    } catch (e) {
      error = true;
    }

    error ? dispatch(setNetworkOffline()) : dispatch(setNetworkOnline());

    if (healthCheckTimer) clearTimeout(healthCheckTimer);

    healthCheckTimer = setTimeout(() => {
      checkStatus();
    }, interval);
  };

  return (
    <div className="text-end">
      {networkIsOnline ? (
        <span className="badge bg-success">Online</span>
      ) : (
        <span className="badge bg-danger">Offline</span>
      )}
    </div>
  );
};
