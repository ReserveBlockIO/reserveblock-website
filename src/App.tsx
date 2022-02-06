import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { FooterComponent } from "./lib/components/common/Footer";
import { HeaderComponent } from "./lib/components/HeaderComponent";
import { LoadingContainer } from "./lib/containers/LoadingContainer";
import { DisclaimerScreen } from "./lib/screens/DisclaimerScreen";
import { FaqScreen } from "./lib/screens/FaqScreen";
import { HalvingScheduleScreen } from "./lib/screens/HalvingScheduleScreen";
import { HomeScreen } from "./lib/screens/HomeScreen";
import { NodeSaleScreen } from "./lib/screens/NodeSaleScreen";
import { StatusScreen } from "./lib/screens/StatusScreen";

const Vingette = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  box-shadow: 0 0 200px rgba(0, 0, 0, 0.9) inset;
`;

function App() {
  const isLoading = useSelector((state: any) => state.loader.value);

  return (
    <div className="app">
      <HeaderComponent />
      <div style={{ height: 50 }}></div>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/faq" element={<FaqScreen />} />
        <Route path="/disclaimer" element={<DisclaimerScreen />} />
        <Route path="/halving-schedule" element={<HalvingScheduleScreen />} />
        <Route path="/nodes" element={<NodeSaleScreen />} />
        <Route path="/nodes/status/:id" element={<StatusScreen />} />
      </Routes>

      <FooterComponent />

      {isLoading ? (
        <LoadingContainer>
          <div className="spinner-border" role="status"></div>
        </LoadingContainer>
      ) : null}
      <Vingette />
    </div>
  );
}
export default App;
