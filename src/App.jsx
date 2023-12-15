import Navbar from "./components/Navbar";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllPost from "./pages/AllPost";
import PostDetails from "./pages/PostDetails";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allPost" element={<AllPost />} />
        <Route path="*" element={<NotFound />} />
        <Route path="allPost/:id" element={<PostDetails />} />
      </Routes>
    </>
  );
}

export default App;
