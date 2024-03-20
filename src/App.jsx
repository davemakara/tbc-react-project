import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./UI/Layout";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
