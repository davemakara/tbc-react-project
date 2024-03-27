import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./UI/Layout";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
