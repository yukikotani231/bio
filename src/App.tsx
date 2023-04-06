import { Route, Routes } from "react-router-dom";
import { Default } from "./screens/Default";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Default />} />
      </Routes>
    </div>
  );
};

export default App;
