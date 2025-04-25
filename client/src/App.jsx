import { Route, Routes } from "react-router-dom";
import SubmitFeedback from "./screens/SubmitFeedback";
import ViewFeedbacks from "./screens/ViewFeedbacks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SubmitFeedback />} />
        <Route path="/feedbacks" element={<ViewFeedbacks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
