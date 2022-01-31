import { NetworkStatusComponent } from "./NetworkStatusComponent";

export const HeaderComponent = () => {
  return (
    <header>
      <div className="container d-flex align-items-center justify-content-between">
        <h1>RBX</h1>
        <NetworkStatusComponent />
      </div>
    </header>
  );
};
