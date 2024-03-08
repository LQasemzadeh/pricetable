import { Routes, Route } from "react-router-dom";
import PriceTablePage from "./pages/PriceTable.page";


function App() {
  return (
    <div className="pt-4 min-h-screen bg-gray-900">
      <Routes>
        <Route path="/" element={<PriceTablePage />} />
      </Routes>
    </div>
  );
}

export default App;
