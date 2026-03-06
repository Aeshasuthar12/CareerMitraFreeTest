import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FreeTest from "./pages/FreeTest";
import FreeTestInstructionPage from "./pages/FreeTestInstructionPage";
import FreeTestQuestions from "./pages/FreeTestQuestions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/free-test" element={<FreeTest />} />
        <Route
          path="/free-test-instruction"
          element={<FreeTestInstructionPage />}
        />
        <Route path="/free-test/questions"
         element={<FreeTestQuestions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
