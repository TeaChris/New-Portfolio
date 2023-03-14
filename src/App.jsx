import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Shelf from "./pages/Shelf";
import Resume from "./pages/Resume";
import Footer from "./Components/Footer";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <BrowserRouter className="container mx-auto m-0 p-0 border-0 outline-none list-none n0-underline box-border">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shelf" element={<Shelf />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
