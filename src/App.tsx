import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./lib/components/common/Footer";
import { HeaderComponent } from "./lib/components/HeaderComponent";
import { LoadingContainer } from "./lib/containers/LoadingContainer";
import { FaqScreen } from "./lib/screens/FaqScreen";
import { HalvingScheduleScreen } from "./lib/screens/HalvingScheduleScreen";
import { HomeScreen } from "./lib/screens/HomeScreen";
import { NodeSaleScreen } from "./lib/screens/NodeSaleScreen";
import { StatusScreen } from "./lib/screens/StatusScreen";

function App() {
  const isLoading = useSelector((state: any) => state.loader.value);

  return (
    <div className="app">
      <HeaderComponent />
      <div style={{ height: 50 }}></div>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/faq" element={<FaqScreen />} />
        <Route path="/halving-schedule" element={<HalvingScheduleScreen />} />
        <Route path="/nodes" element={<NodeSaleScreen />} />
        <Route path="/nodes/status/:id" element={<StatusScreen />} />
      </Routes>

      <Footer />

      {isLoading ? (
        <LoadingContainer>
          <div className="spinner-border" role="status"></div>
        </LoadingContainer>
      ) : null}
    </div>
  );
}
export default App;
