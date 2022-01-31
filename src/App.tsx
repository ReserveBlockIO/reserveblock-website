import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./lib/components/HeaderComponent";
import { LoadingContainer } from "./lib/containers/LoadingContainer";
import { HomeScreen } from "./lib/screens/HomeScreen";
import { StatusScreen } from "./lib/screens/StatusScreen";

function App() {
  const isLoading = useSelector((state: any) => state.loader.value);

  return (
    <div className="app">
      <HeaderComponent />
      <div className="container py-2">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="status/:id" element={<StatusScreen />} />
        </Routes>
      </div>
      {isLoading ? (
        <LoadingContainer>
          <div className="spinner-border" role="status"></div>
        </LoadingContainer>
      ) : null}
    </div>
  );
}
export default App;
